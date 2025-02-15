import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchAllRequestsHandler,
  makeRequestedPaymentHandler,
  renewSponsorshipRequestHandler,
  sponsorRequestInfoHandler,
  updateRequestStatusHandler,
  uploadMoreHandler,
  validateRequestPaymentsHandler,
  viewSponsorRequestCountsHandler,
  viewSponsorRequestHandler
} from '../../controllers/beneficiaries/requestController.js';
import validators from '../../validators/index.js';
import {
  payRequessSchema,
  validatePaymentRequestSchema
} from '../../validators/beneficiariesSchema.js';

const request_router = Router();

request_router.get('/fetch-requests', authentication, fetchAllRequestsHandler);
request_router.get('/deshboard-info', authentication, sponsorRequestInfoHandler);
request_router.get('/view-request/:request_id', authentication, viewSponsorRequestHandler);
request_router.patch('/update-status', authentication, updateRequestStatusHandler);
// request_router.patch('/renew-request', authentication, renewSponsorshipRequestHandler);
request_router.patch('/upload-more/:request_id', authentication, uploadMoreHandler);
request_router.get('/request-count', authentication, viewSponsorRequestCountsHandler);
request_router.post(
  '/make-requested-payment',
  validators(payRequessSchema),
  authentication,
  makeRequestedPaymentHandler
);
request_router.get(
  '/validate-request-payments',
  validators(validatePaymentRequestSchema, 'query'),
  authentication,
  validateRequestPaymentsHandler
);

export default request_router;
