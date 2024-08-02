import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchAllRequestsHandler,
  renewSponsorshipRequestHandler,
  updateRequestStatusHandler,
  uploadMoreHandler,
  viewSponsorRequestCountsHandler,
  viewSponsorRequestHandler
} from '../../controllers/beneficiaries/requestController.js';

const request_router = Router();

request_router.get('/fetch-requests', authentication, fetchAllRequestsHandler);
request_router.get('/view-request/:request_id', authentication, viewSponsorRequestHandler);
request_router.patch('/update-status/:request_id', authentication, updateRequestStatusHandler);
request_router.patch('/renew-request', authentication, renewSponsorshipRequestHandler);
request_router.patch('/upload-more/:request_id', authentication, uploadMoreHandler);
request_router.get('/request-count', authentication, viewSponsorRequestCountsHandler);

export default request_router;
