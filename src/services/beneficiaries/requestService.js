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

export const updateRequestStatus = async ({ request_id, body, user }) => {
  // Determine the new request_state based on the body.status
  let requestStateUpdate = {};
  if (body.status === 'accepted') {
    requestStateUpdate.request_state = 'accepted';
  } else if (body.status === 'denied') {
    requestStateUpdate.request_state = 'denied';
  }

  // Check if status is not provided and set upload_more accordingly
  if (!body.status) {
    body.upload_more = true;
    const request = await sponsorRequestsModel.findById(request_id);
    const benefi = await organizationBeneficiaryModel.findById(request.beneficiary_id);

    // Create notifications
    const notifications = [
      {
        note: `your sponsor needs you to upload more document for your ${request.subject_request} `,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: request.beneficiary_id,
        organization_id: user._id
      },
      {
        note: `you have requested for ${benefi.personal.member_name} of to upload more documents for his ${request.subject_request} request`,
        type: 'update',
        who_is_reading: 'sponsor',
        member_id: request.beneficiary_id,
        organization_id: user._id
      }
    ];

    await notificationsModel.insertMany(notifications);
  }

  // Merge the requestStateUpdate with the body to create the update payload
  const updatePayload = { ...body, ...requestStateUpdate };

  // Update the request
  const request = await sponsorRequestsModel.findOneAndUpdate(
    {
      _id: request_id,
      $or: [{ status: 'pending' }, { status: 'eligible' }]
    },
    { $set: updatePayload },
    { new: true, runValidators: true }
  );

  if (!request) throw new NotFoundError('Sponsorship request not found or not in pending status');

  const benefi = await organizationBeneficiaryModel.findById(request.beneficiary_id);

  if (body.status) {
    // Create notifications
    const notifications = [
      {
        note: `your sponsorship request status have been ${body.status}`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: request.beneficiary_id,
        organization_id: user._id
      },
      {
        note: `you have updated the request status of ${benefi.personal.member_name} to ${body.status}`,
        type: 'update',
        who_is_reading: 'sponsor',
        member_id: request.beneficiary_id,
        organization_id: user._id
      }
    ];

    await notificationsModel.insertMany(notifications);
  }
  return request;
};

export const renewSponsorshipRequest = async ({ request_id, user }) => {
  // Check for existing sponsorship requests
  const existingRequest = await sponsorRequestsModel.findOne({
    _id: request_id,
    status: 'paid'
  });
  if (!existingRequest)
    throw new NotFoundError(
      'Sponsorship request not found or This project hasn’t been completed, make payment before you can renew'
    );

  if (existingRequest.recurring.status === false) {
    throw new BadRequestError('This request doesn’t support renewal');
  }

  if (existingRequest.recurring.end_timeline < Date.now()) {
    existingRequest.recurring.status = false;
    await existingRequest.save();
    throw new ForbiddenError('Timeline for renewal has long passed');
  }

  existingRequest.status = 'accepted';
  existingRequest.request_state = 'renewed';
  existingRequest.recurring.count += 1;
  await existingRequest.save();

  const benefi = await organizationBeneficiaryModel.findById(existingRequest.beneficiary_id);

  // Create notifications
  const notifications = [
    {
      note: `Your  ${existingRequest.subject_request} sponsorship request has been renewed`,
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
  ];

  await notificationsModel.insertMany(notifications);
};

export const viewSponsorRequestCounts = async ({ user }) => {
  const totalRequest = await sponsorRequestsModel.countDocuments({
    sponsor_id: user._id,
    status: { $in: ['eligible', 'pending', 'accepted', 'denied'] }
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
  const totalSpentFunds = '0';

  return {
    totalRequest,
    pendingRequest,
    approvedRequests,
    deniedRequests,
    totalSpentFunds
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
      'Seams all requests have no amount attached. Please contact the beneficiaries'
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

    const benefic = await organizationBeneficiaryModel.findById(checkRequest.beneficiary_id);

    if (!benefic) continue;

    const receiptientData = {
      type: 'nuban',
      name: benefic.personal.member_name,
      account_number: checkRequest.acct_number,
      bank_code: checkRequest.bank_code,
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

    if (recipientask.status != 200) return;

    const recipient_code = recipientask.data.data.recipient_code;

    const refData = {
      amount: checkRequest.amount,
      reference: checkRequest._id,
      reason: checkRequest.subject_request,
      recipient: recipient_code
    };

    bulk.push(refData);
  }

  const refConfig = {
    headers: {
      Authorization: `Bearer ${env.paystack_secret_key}`,
      'Content-Type': 'application/json'
    }
  };

  const urlref = `${env.paystack_api_url}/transfer/bulk`;

  const bulkTransfer = await axios.post(urlref, refData, refConfig);

  if (bulkTransfer.status !== 2000) throw new BadRequestError('Bad Request Error');

  return {};
};
