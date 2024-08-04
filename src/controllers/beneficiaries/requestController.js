import appResponse from '../../../lib/appResponse.js';
import {
  approveRequests,
  denyRequests,
  fetchAllRequests,
  makeRequestedPayment,
  renewSponsorshipRequests,
  sponsorRequestInfo,
  uploadMore,
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
  const { user, body, query } = req;

  const { status } = query;
  if (status == 'accepted') {
    const response = await approveRequests({ body, user, status });
    res.send(appResponse('request accepted', response));
  } else if (status == 'denied') {
    const response = await denyRequests({ body, status, user });
    res.send(appResponse('request denied', response));
  }
};

export const uploadMoreHandler = async (req, res) => {
  const { user, body } = req;

  const { request_id } = req.params;

  const response = await uploadMore({ request_id, body, user });

  res.send(appResponse('requested for upload more', response));
};

export const renewSponsorshipRequestHandler = async (req, res) => {
  const { user, body } = req;

  const response = await renewSponsorshipRequests({ body, user });

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
  const { user, query } = req;

  const body = query;

  const response = await validateRequestPayments({ user, body });

  res.send(appResponse('Initiated transfer successfully', response));
};

export const sponsorRequestInfoHandler = async (req, res) => {
  const { user } = req;

  const response = await sponsorRequestInfo({ user });

  res.send(appResponse('fetched dashboard info', response));
};
