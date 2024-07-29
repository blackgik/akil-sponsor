import appResponse from '../../../lib/appResponse.js';
import {
  fetchAllRequests,
  updateRequestStatus,
  viewSponsorRequest
} from '../../services/beneficiaries/requestService.js';

export const fetchAllRequestsHandler = async (req, res) => {
  const { query, user } = req;
  const params = query;
  console.log(user)

  const response = await fetchAllRequests({ params, user });

  res.send(appResponse('fetched all requests successfully', response));
};

export const viewSponsorRequestHandler = async (req, res) => {
  const { request_id } = req.params;

  const response = await viewSponsorRequest({ request_id });

  res.send(appResponse('viewing single request', response));
};

export const updateRequestStatusHandler = async (req, res) => {
  const { user, body } = req;

  console.log(body);
  const { request_id } = req.params;

  const response = await updateRequestStatus({ request_id, body, user });

  res.send(appResponse('request status changed', response));
};
