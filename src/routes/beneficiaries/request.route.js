import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchAllRequestsHandler,
  updateRequestStatusHandler,
  viewSponsorRequestHandler
} from '../../controllers/beneficiaries/requestController.js';

const request_router = Router();

request_router.get('/fetch-requests', authentication, fetchAllRequestsHandler);
request_router.get('/view-request/:request_id', authentication, viewSponsorRequestHandler);
request_router.patch('/update-status/:request_id', authentication, updateRequestStatusHandler);

export default request_router;
