import mongoose from 'mongoose';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import sponsorRequestsModel from '../../models/beneficiaries/sponsorshipRequestModel.js';
import { dateFilters } from '../../utils/timeFilters.js';

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

export const updateRequestStatus = async ({ request_id, body }) => {
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
  return request;
};

export const renewSponsorshipRequest = async ({ request_id, user }) => {
  // Check for existing sponsorship requests
  const existingRequest = await sponsorRequestsModel.findById(request_id);
  if (!existingRequest) throw new NotFoundError('Sponsorship request not found');
  if (existingRequest.status !== 'paid') {
    throw new BadRequestError(
      'this project hasnt been completed, make payment before you can renew'
    );
  }
  if (existingRequest.recuring.status === false) {
    throw new BadRequestError('this request doesnt support renewal');
  }

  if (
    existingRequest.recuring.status === true &&
    existingRequest.recuring.end_timeline < new Date()
  ) {
    // recuring.status to false
    existingRequest.recuring.status = false;
    await existingRequest.save();
  }

  // Create notifications
  const notifications = [
    {
      note: 'You have successfully sent out a sponsorship request',
      type: 'update',
      who_is_reading: 'beneficiary',
      member_id: user._id,
      organization_id: user.organization_id
    },
    {
      note: `${user.personal.member_name} has successfully sent out a sponsorship request to you`,
      type: 'update',
      who_is_reading: 'sponsor',
      member_id: user._id,
      organization_id: user.organization_id
    }
  ];

};
