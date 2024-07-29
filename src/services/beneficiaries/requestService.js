import mongoose from 'mongoose';
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
    recuring
  } = params;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 10;

  const { today, timeDiff } = dateFilters({ duration, from, to, todayTime });
  const filter = {
    // sponsor_id: mongoose.Types.ObjectId(user._id),
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

  // if (recuring) {
  //   filter.recuring.status = recuring;
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
    .lean();

  return {
    page_no,
    available_pages: totalPages,
    fetchedData
  };
};

export const viewSponsorRequest = async ({ request_id }) => {
  const request = await sponsorRequestsModel.findById(request_id);

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
      status: { $in: ['eligible', 'pending'] }
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

  if (existingRequest.recuring.status === false) {
    throw new BadRequestError('This request doesn’t support renewal');
  }

  if (existingRequest.recuring.end_timeline < Date.now()) {
    existingRequest.recuring.status = false;
    await existingRequest.save();
    throw new ForbiddenError('Timeline for renewal has long passed');
  }

  existingRequest.status = 'accepted';
  existingRequest.request_state = 'renewed';
  existingRequest.recuring.count += 1;
  await existingRequest.save();

  const benefi = await organizationBeneficiaryModel.findById(existingRequest.beneficiary_id);

  // Create notifications
  const notifications = [
    {
      note: `Your  ${existingRequest.subject_request} sponsorship request has been renewed`,
      type: 'update',
      who_is_reading: 'beneficiary',
      member_id: existingRequest.beneficiary_id,
      organization_id: user.organization_id
    },
    {
      note: `You have renewed the ${existingRequest.subject_request} request of ${benefi.personal.member_name}`,
      type: 'update',
      who_is_reading: 'sponsor',
      member_id: existingRequest.beneficiary_id,
      organization_id: user.organization_id
    }
  ];

  await notificationsModel.insertMany(notifications);
};
