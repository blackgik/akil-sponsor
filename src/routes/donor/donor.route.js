import { Router } from 'express';
import validators from '../../validators/index.js';
import { createDonorSchema, makeDonationSchema } from '../../validators/donor.schema.js';
import {
  createDonorHandler,
  dashboardStatisticsHandler,
  fetchBeneficiariesHandler,
  fetchDonationReceiptHandler,
  makeDonationPaymentHandler,
  statGraphHandler,
  verifyDonationPaymentHandler
} from '../../controllers/donor/donor.controller.js';
import { authentication } from '../../middlewares/authentication.js';

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
donorROute.get('/verify-donor-payment', authentication, verifyDonationPaymentHandler);
donorROute.get('/donor-receipts', authentication, fetchDonationReceiptHandler);
donorROute.get('/stat-graph', authentication, statGraphHandler);

export default donorROute;
