import mongoose from 'mongoose';
import axios from 'axios';
import {
  BadRequestError,
  DuplicateError,
  ForbiddenError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import sponsorRequestsModel from '../../models/beneficiaries/sponsorshipRequestModel.js';
import { dateFilters } from '../../utils/timeFilters.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import env from '../../config/env.js';
import ProductCategoryModel from '../../models/products/ProductCategoryModel.js';
import { capitalizeWords } from '../../utils/general.js';
import personalizationModel from '../../models/settings/personalization.model.js';
import {
  approvedRequestEmail,
  deniedRequestEmail,
  paidRequestEmail,
  uploadMoreEmail
} from '../../config/mail.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';

export const fetchAllRequests = async ({ params, user }) => {
  let {
    page_no,
    no_of_requests,
    search,
    request_state,
    status,
    duration,
    from,
    to,
    todayTime,
    upload_more,
    recurring
  } = params;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 10;

  const { today, timeDiff } = dateFilters({ duration, from, to, todayTime });

  const filter = {
    sponsor_id: user._id,
    createdAt: { $gte: timeDiff, $lte: today }
  };

  if (search) {
    const searchRgx = new RegExp(`.*${search}.*`, 'i');
    filter['$or'] = [{ subject_request: searchRgx }, { description: searchRgx }];
  }

  if (request_state) {
    filter.request_state = request_state;
  }

  if (status) {
    filter.status = status;
  }

  if (upload_more) {
    filter.upload_more = upload_more;
  }

  // if (recurring) {
  //   filter.recurring.status = recurring;
  // }

  const skip = (page_no - 1) * no_of_requests;
  const limit = no_of_requests;

  const totalDocuments = await sponsorRequestsModel.countDocuments(filter);
  const totalPages = Math.ceil(totalDocuments / no_of_requests);

  let fetchedData = await sponsorRequestsModel
    .find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean()
    .populate('beneficiary_id')
    .populate('product_type');

  return {
    page_no,
    available_pages: totalPages,
    fetchedData
  };
};

export const viewSponsorRequest = async ({ request_id }) => {
  const request = await sponsorRequestsModel
    .findById(request_id)
    .populate('beneficiary_id')
    .populate('product_type');

  if (!request) throw new NotFoundError('Request not Found');

  return request;
};

export const approveRequests = async ({ body, user, status }) => {
  // Ensure the status is 'accepted'
  if (status !== 'accepted') {
    throw new BadRequestError('Only acceptance of requests is allowed');
  }

  // Determine the new request_state based on the status
  const requestStateUpdate = { request_state: 'accepted', status };

  // Merge the requestStateUpdate with the body to create the update payload
  const updatePayload = { ...requestStateUpdate };

  // Ensure request_ids is an array
  if (!Array.isArray(body.request_ids)) {
    throw new BadRequestError('request_ids should be an array');
  }

  const updatedRequests = [];
  const notifications = [];

  for (const request_id of body.request_ids) {
    // Update each request
    const request = await sponsorRequestsModel.findOneAndUpdate(
      { _id: request_id },
      { $set: updatePayload },
      { new: true, runValidators: true }
    );

    if (!request)
      throw new NotFoundError(
        `Sponsorship request not found or not in pending status for id ${request_id}`
      );

    updatedRequests.push(request);

    const benefi = await organizationBeneficiaryModel.findById(request.beneficiary_id);

    //create email profile here
    const creationData = {
      member_name: capitalizeWords(`${benefi.personal.member_name}`),
      sponsor_name: `${user.firstname} ${user.lastname}`,
      product_name: request.subject_request
    };
    const mailData = {
      sponsor_name: creationData.sponsor_name.toUpperCase(),
      email: benefi.contact.email,
      subject: `Great News! Your Sponsorship Request Has Been Approved`,
      type: 'html',
      html: approvedRequestEmail(creationData).html,
      text: approvedRequestEmail(creationData).text
    };
    const msg = await formattMailInfo(mailData, env);
    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError('server slip. request sent but email not sent');

    // Create notifications for each request
    notifications.push(
      {
        note: `your sponsorship request status has been accepted`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: request.beneficiary_id,
        organization_id: user._id
      },
      {
        note: `you have updated the request status of ${benefi.personal.member_name} to accepted`,
        type: 'update',
        who_is_reading: 'sponsor',
        member_id: request.beneficiary_id,
        organization_id: user._id
      }
    );
  }

  // Insert all notifications at once
  await notificationsModel.insertMany(notifications);

  return updatedRequests;
};

export const denyRequests = async ({ body, status, user }) => {
  // Ensure the status is 'denied'
  if (status !== 'denied') {
    throw new BadRequestError('Only denial of requests is allowed');
  }

  const updatedRequests = [];
  const notifications = [];

  for (let i = 0; i < body.request_ids.length; i++) {
    const request_id = body.request_ids[i];
    const denial_reason = body.denial_reason;

    // Ensure each request has a denial reason
    if (!denial_reason) {
      throw new BadRequestError(`Request id ${request_id} must have a denial reason`);
    }

    // Determine the new request_state based on the status
    const requestStateUpdate = {
      request_state: 'denied',
      status,
      denial_reason
    };

    // Update each request
    const request = await sponsorRequestsModel.findOneAndUpdate(
      { _id: request_id },
      { $set: requestStateUpdate },
      { new: true, runValidators: true }
    );

    if (!request)
      throw new NotFoundError(
        `Sponsorship request not found or not in pending status for id ${request_id}`
      );

    updatedRequests.push(request);

    const benefi = await organizationBeneficiaryModel.findById(request.beneficiary_id);

    //create email profile here
    const creationData = {
      member_name: capitalizeWords(`${benefi.personal.member_name}`),
      denial_reason: denial_reason,
      sponsor_name: `${user.firstname} ${user.lastname}`,
      product_name: request.subject_request
    };
    const mailData = {
      sponsor_name: creationData.sponsor_name.toUpperCase(),
      email: benefi.contact.email,
      subject: `Request Application Status Update`,
      type: 'html',
      html: deniedRequestEmail(creationData).html,
      text: deniedRequestEmail(creationData).text
    };
    const msg = await formattMailInfo(mailData, env);
    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError('server slip. request sent but email not sent');

    // Create notifications for each request
    notifications.push(
      {
        note: `your sponsorship request status has been denied with reason: ${denial_reason}`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: request.beneficiary_id,
        organization_id: user._id
      },
      {
        note: `you have updated the request status of ${benefi.personal.member_name} to denied with reason: ${denial_reason}`,
        type: 'update',
        who_is_reading: 'sponsor',
        member_id: request.beneficiary_id,
        organization_id: user._id
      }
    );
  }

  // Insert all notifications at once
  await notificationsModel.insertMany(notifications);

  return updatedRequests;
};

export const uploadMore = async ({ request_id, body, user }) => {
  // Update the request
  const request = await sponsorRequestsModel.findOneAndUpdate(
    {
      _id: request_id
    },
    { $set: body },
    { new: true, runValidators: true }
  );

  if (!request) throw new NotFoundError('Sponsorship request not found or not in pending status');

  const benefi = await organizationBeneficiaryModel.findById(request.beneficiary_id);

  //create email profile here
  const creationData = {
    member_name: capitalizeWords(`${benefi.personal.member_name}`)
  };
  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: benefi.contact.email,
    subject: `Request for Additional Documents to Support Your Sponsorship Application`,
    type: 'html',
    html: uploadMoreEmail(creationData).html,
    text: uploadMoreEmail(creationData).text
  };
  const msg = await formattMailInfo(mailData, env);
  const msgDelivered = await messageBird(msg);
  if (!msgDelivered) throw new InternalServerError('server slip. request sent but email not sent');

  // Create notifications
  const notifications = [
    {
      note: `your sponsor needs you to upload more documents for your ${request.subject_request} `,
      type: 'update',
      who_is_reading: 'beneficiary',
      member_id: request.beneficiary_id,
      organization_id: user._id
    },
    {
      note: `you have requested for ${benefi.personal.member_name} of to upload more documentss for his ${request.subject_request} request`,
      type: 'update',
      who_is_reading: 'sponsor',
      member_id: request.beneficiary_id,
      organization_id: user._id
    }
  ];
  await notificationsModel.insertMany(notifications);

  return { request };
};

export const renewSponsorshipRequests = async ({ body, user }) => {
  const updatedRequests = [];
  const notifications = [];

  for (const request_id of body.request_ids) {
    // Check for existing sponsorship requests
    const existingRequest = await sponsorRequestsModel.findOne({
      _id: request_id,
      status: 'paid'
    });

    if (!existingRequest) {
      throw new NotFoundError(
        'Sponsorship request not found or This project hasn’t been completed, make payment before you can renew'
      );
    }

    if (existingRequest.feedback_stats !== true) {
      throw new BadRequestError('you have not given feedback for your first payment');
    }

    if (existingRequest.recurring.status === false) {
      throw new BadRequestError('This request doesn’t support renewal');
    }

    if (existingRequest.recurring.end_timeline < Date.now()) {
      existingRequest.recurring.status = false;
      await existingRequest.save();
      throw new BadRequestError('Timeline for renewal has long passed');
    }

    existingRequest.status = 'accepted';
    existingRequest.request_state = 'renewed';
    existingRequest.recurring.count += 1;
    await existingRequest.save();

    const benefi = await organizationBeneficiaryModel.findById(existingRequest.beneficiary_id);

    // Create notifications
    notifications.push(
      {
        note: `Your ${existingRequest.subject_request} sponsorship request has been renewed`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: existingRequest.beneficiary_id,
        organization_id: user._id
      },
      {
        note: `You have renewed the ${existingRequest.subject_request} request of ${benefi.personal.member_name}`,
        type: 'update',
        who_is_reading: 'sponsor',
        member_id: existingRequest.beneficiary_id,
        organization_id: user._id
      }
    );

    updatedRequests.push(existingRequest);
  }

  // Insert all notifications at once
  await notificationsModel.insertMany(notifications);

  return updatedRequests;
};

export const viewSponsorRequestCounts = async ({ user }) => {
  const totalRequest = await sponsorRequestsModel.countDocuments({
    sponsor_id: user._id,
    status: { $in: ['eligible', 'pending', 'accepted', 'denied', 'paid'] }
  });
  const pendingRequest = await sponsorRequestsModel.countDocuments({
    sponsor_id: user._id,
    status: { $in: ['eligible', 'pending'] }
  });
  const approvedRequests = await sponsorRequestsModel.countDocuments({
    sponsor_id: user._id,
    status: 'accepted'
  });
  const deniedRequests = await sponsorRequestsModel.countDocuments({
    sponsor_id: user._id,
    status: 'denied'
  });

  const totalPaid = await sponsorRequestsModel.find({
    sponsor_id: user._id,
    status: 'paid'
  });

  const totalAmountPaid = totalPaid.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  return {
    totalRequest,
    pendingRequest,
    deniedRequests,
    approvedRequests,
    totalPaid: totalPaid.length,
    totalSpentFunds: totalAmountPaid
  };
};

export const makeRequestedPayment = async ({ user, body }) => {
  let amount = 0;
  const requests = [];

  for (const request of body.requests) {
    const checkRequest = await sponsorRequestsModel.findById(request);

    if (!checkRequest) continue;

    if (!checkRequest.amount) continue;

    if (checkRequest.status === 'paid') continue;

    // check the member
    const benefic = await organizationBeneficiaryModel.findById(checkRequest.beneficiary_id);

    if (!benefic) continue;

    requests.push(request);

    amount += checkRequest.amount;
  }

  if (!amount)
    throw new BadRequestError(
      'Seems all requests have no amount attached. Please contact the beneficiaries'
    );

  if (!requests.length) throw new BadRequestError('You have all members as invalid');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + env.paystack_secret_key
    }
  };

  const paymentata = {
    email: user.email,
    amount: amount * 100,
    callback_url: `${env.dev_base_url_org}/projects/sponsorship`,
    channels: ['bank'],
    metadata: {
      requests: requests,
      type: 'request_transfers'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const response = await axios.post(url, paymentata, config);

  if (response.status !== 200) throw new BadRequestError('Could not initialize transaction');

  return response.data.data.authorization_url;
};

export const validateRequestPayments = async ({ user, body }) => {
  try {
    const { reference } = body;

    // validate the reference and get the metadata
    const url = `${env.paystack_api_url}/transaction/verify/${reference}`;

    const config = {
      headers: {
        Authorization: `Bearer ${env.paystack_secret_key}`
      }
    };

    const response = await axios.get(url, config);

    const paymentdata = response.data.data;
    const metadata = response.data.data.metadata;

    const bulkreceiptientData = [];

    // initate transfers on account
    for (const request of metadata.requests) {
      const checkRequest = await sponsorRequestsModel.findById(request);

      if (!checkRequest) continue;

      if (!checkRequest.amount) continue;

      checkRequest.status = 'paid';

      checkRequest.request_state = 'completed';

      await checkRequest.save();

      const benefic = await organizationBeneficiaryModel.findById(checkRequest.beneficiary_id);

      if (!benefic) continue;
      // Create notifications for each request
      const notifications = [];

      notifications.push(
        {
          note: `your sponsorship request to ${user.firstname} ${user.lastname} has been paid`,
          type: 'update',
          who_is_reading: 'beneficiary',
          member_id: checkRequest.beneficiary_id,
          organization_id: user._id
        },
        {
          note: `you have paid the sponsorship request for ${benefic.personal.member_name}`,
          type: 'update',
          who_is_reading: 'sponsor',
          member_id: checkRequest.beneficiary_id,
          organization_id: user._id
        }
      );

      // Insert all notifications at once
      const notifiii = await notificationsModel.insertMany(notifications);
      if (!notifiii) throw new NotFoundError('problem');

      //create email profile here
      const creationData = {
        member_name: capitalizeWords(`${benefic.personal.member_name}`),
        sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
        product_name: checkRequest.subject_request
      };
      const mailData = {
        sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
        email: benefic.contact.email,
        subject: `Payment Confirmation for Your Request`,
        type: 'html',
        html: paidRequestEmail(creationData).html,
        text: paidRequestEmail(creationData).text
      };
      const msg = await formattMailInfo(mailData, env);
      const msgDelivered = await messageBird(msg);
      if (!msgDelivered)
        throw new InternalServerError('server slip. request sent but email not sent');

      const receiptientData = {
        type: 'nuban',
        name: benefic.personal.member_name,
        account_number: '0151712510',
        bank_code: checkRequest?.bank_code || '058',
        currency: 'NGN'
      };

      const configRecipient = {
        headers: {
          Authorization: `Bearer ${env.paystack_secret_key}`,
          'Content-Type': 'application/json'
        }
      };

      const url = `${env.paystack_api_url}/transferrecipient`;

      const recipientask = await axios.post(url, receiptientData, configRecipient);

      console.log({ status: recipientask.status });

      if (recipientask.status !== 201) continue;

      const recipient_code = recipientask.data.data.recipient_code;

      const refData = {
        amount: checkRequest.amount,
        reference: checkRequest._id,
        reason: checkRequest.subject_request,
        recipient: recipient_code
      };

      bulkreceiptientData.push(refData);
    }

    const refConfig = {
      headers: {
        Authorization: `Bearer ${env.paystack_secret_key}`,
        'Content-Type': 'application/json'
      }
    };

    const transferData = {
      currency: 'NGN',
      source: 'balance',
      transfers: bulkreceiptientData
    };

    console.log(transferData);

    const urlref = `${env.paystack_api_url}/transfer/bulk`;

    const bulkTransfer = await axios.post(urlref, transferData, refConfig);

    console.log({ status: bulkTransfer.status });

    // if (bulkTransfer.status !== 2000) throw new BadRequestError('Bad Request Error');

    return bulkTransfer.data.data;
  } catch (err) {
    console.error(err);
  }
};

export const sponsorRequestInfo = async ({ user }) => {
  const requests = await sponsorRequestsModel
    .find({ sponsor_id: user._id, status: 'paid' })
    .populate({ path: 'product_type', select: 'product_category_name' })
    .exec();

  const financeRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'finance'
  );
  const totalFinanceAmount = financeRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const foodRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'food'
  );
  const totalFoodAmount = foodRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const healthRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'health'
  );
  const totalHealthAmount = healthRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const educationRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'education'
  );
  const totalEducationAmount = educationRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const housingRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'housing'
  );
  const totalHousingAmount = housingRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const transportationRequests = requests.filter(
    (request) => request.product_type.product_category_name === 'transportation'
  );
  const totalTransportationAmount = transportationRequests.reduce((accumulator, request) => {
    return accumulator + (request.amount || 0);
  }, 0);

  const totalCount =
    totalFinanceAmount +
    totalFoodAmount +
    totalHealthAmount +
    totalEducationAmount +
    totalHousingAmount +
    totalTransportationAmount;

  const groupedPaidRequests = await sponsorRequestsModel.aggregate([
    {
      $match: {
        sponsor_id: mongoose.Types.ObjectId(user._id),
        status: 'paid'
      }
    },
    {
      $group: {
        _id: {
          year: { $year: '$createdAt' },
          month: { $month: '$createdAt' }
        },
        count: { $sum: 1 },
        totalAmount: { $sum: '$amount' }
      }
    },
    {
      $sort: { '_id.year': 1, '_id.month': 1 }
    },
    {
      $group: {
        _id: null,
        monthlyData: { $push: { month: '$_id', count: '$count', totalAmount: '$totalAmount' } },
        overallTotalAmount: { $sum: '$totalAmount' }
      }
    }
  ]);

  const result = groupedPaidRequests.map((info) => {
    const { monthlyData, overallTotalAmount } = info;
    // Assuming you only have one month in the monthlyData
    const monthData = monthlyData[0];
    const { year, month } = monthData.month;
    const totalMonthAmount = monthData.totalAmount;

    return {
      year,
      month,
      totalMonthAmount,
      totalYearAmount: overallTotalAmount
    };
  });

  return {
    finance: Math.floor((totalFinanceAmount / totalCount) * 1000) / 10,
    food: Math.floor((totalFoodAmount / totalCount) * 1000) / 10,
    health: Math.floor((totalHealthAmount / totalCount) * 1000) / 10,
    education: Math.floor((totalEducationAmount / totalCount) * 1000) / 10,
    housing: Math.floor((totalHousingAmount / totalCount) * 1000) / 10,
    transportation: Math.floor((totalTransportationAmount / totalCount) * 1000) / 10,
    totalCount,
    graphInfo: result
  };
};
