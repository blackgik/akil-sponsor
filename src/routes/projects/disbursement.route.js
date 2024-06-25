import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  disbursementCodeHandler,
  verifyCodeHandler
} from '../../controllers/projects/disbursement.controller.js';
import validators from '../../validators/index.js';
import { verifyCodeSchema } from '../../validators/projectSchema.js';

const disbursement_router = Router();

disbursement_router.post('/disbursement-code/:awardee_id', authentication, disbursementCodeHandler);
disbursement_router.patch(
  '/verify-code',
  validators(verifyCodeSchema),
  authentication,
  verifyCodeHandler
);

export default disbursement_router;
