import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  confirmDisbursementHandler,
  disbursementCodeHandler,
  makeRequestedPaymentHandler,
  validateRequestPaymentsHandler,
  verifyCodeHandler
} from '../../controllers/projects/disbursement.controller.js';
import validators from '../../validators/index.js';
import { verifyCodeSchema } from '../../validators/projectSchema.js';
import { payDisbursementSchema, validatePaymentRequestSchema } from '../../validators/beneficiariesSchema.js';

const disbursement_router = Router();

disbursement_router.post('/disbursement-code/:awardee_id', authentication, disbursementCodeHandler);
disbursement_router.patch(
  '/verify-code',
  validators(verifyCodeSchema),
  authentication,
  verifyCodeHandler
);
disbursement_router.patch(
  '/confirm-disbursement/:awardee_id',
  authentication,
  confirmDisbursementHandler
);
disbursement_router.post(
  '/make-requested-payment/:project_id',
  validators(payDisbursementSchema),
  authentication,
  makeRequestedPaymentHandler
);
disbursement_router.get(
  '/validate-request-payments',
  validators(validatePaymentRequestSchema, 'query'),
  authentication,
  validateRequestPaymentsHandler
);

export default disbursement_router;
