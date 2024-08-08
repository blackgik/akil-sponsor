import { Router } from 'express';
import validators from '../../validators/index.js';
import { createDonorSchema } from '../../validators/donor.schema.js';
import {
  createDonorHandler,
  dashboardStatisticsHandler,
  fetchBeneficiariesHandler
} from '../../controllers/donor/donor.controller.js';
import { authentication } from '../../middlewares/authentication.js';

const donorROute = Router();

donorROute.post('/create-donor', validators(createDonorSchema), createDonorHandler);
donorROute.get('/statistics', authentication, dashboardStatisticsHandler);
donorROute.get('/fetch-beneficiaries', authentication, fetchBeneficiariesHandler);

export default donorROute;
