import appResponse from '../../../lib/appResponse.js';
import {
  fetchAllRequests,
  makeRequestedPayment,
  renewSponsorshipRequest,
  updateRequestStatus,
  validateRequestPayments,
  viewSponsorRequest,
  viewSponsorRequestCounts
} from '../../services/beneficiaries/requestService.js';

export const fetchAllRequestsHandler = async (req, res) => {
  const { query, user } = req;
  const params = query;

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

  const { request_id } = req.params;

  const response = await updateRequestStatus({ request_id, body, user });

  res.send(appResponse('request status changed', response));
};

export const renewSponsorshipRequestHandler = async (req, res) => {
  const { user } = req;

  const { request_id } = req.params;

  const response = await renewSponsorshipRequest({ request_id, user });

  res.send(appResponse('request status renewed', response));
};

export const viewSponsorRequestCountsHandler = async (req, res) => {
  const { user } = req;

  const response = await viewSponsorRequestCounts({ user });

  res.send(appResponse('request count listed successfully', response));
};

export const makeRequestedPaymentHandler = async (req, res) => {
  const { user, body } = req;

  const response = await makeRequestedPayment({ user, body });

  res.send(appResponse('Initiated gateway', response));
};

export const validateRequestPaymentsHandler = async (req, res) => {
  const { user, body } = req;

  const response = await validateRequestPayments({ user, body });

  res.send(appResponse('Initiated transfer successfully', response));
};
