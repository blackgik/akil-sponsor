import { Router } from 'express';
import validators from '../../validators/index.js';
import { createDonorSchema, makeDonationSchema, sendEmailSchema } from '../../validators/donor.schema.js';
import {
  createDonorHandler,
  dashboardStatisticsHandler,
  donateThroughAgentHandler,
  fetchBeneficiariesHandler,
  fetchDonationReceiptHandler,
  makeDonationPaymentHandler,
  sendDonorEmailHandler,
  sendEmailtoAgentHandler,
  statGraphHandler,
  verifyDonationPaymentHandler
} from '../../controllers/donor/donor.controller.js';
import { authentication } from '../../middlewares/authentication.js';
import { sendContactMailSchema } from '../../validators/sendContactMailSchema.js';

const donorROute = Router();

donorROute.post('/create-donor', validators(createDonorSchema), createDonorHandler);
donorROute.get('/statistics', authentication, dashboardStatisticsHandler);
donorROute.get('/fetch-beneficiaries', authentication, fetchBeneficiariesHandler);
donorROute.post(
  '/make-donation-payment',
  validators(makeDonationSchema),
  authentication,
  makeDonationPaymentHandler
);
donorROute.post(
  '/donation-through-agent',
  validators(makeDonationSchema),
  authentication,
  donateThroughAgentHandler
);
donorROute.post(
  '/contact-agent-for-donation',
  validators(sendEmailSchema),
  authentication,
  sendEmailtoAgentHandler
);
donorROute.get('/verify-donor-payment', authentication, verifyDonationPaymentHandler);
donorROute.get('/donor-receipts', authentication, fetchDonationReceiptHandler);
donorROute.get('/stat-graph', authentication, statGraphHandler);
donorROute.get(
  '/send-donation-email',
  validators(sendContactMailSchema),
  authentication,
  sendDonorEmailHandler
);

export default donorROute;
