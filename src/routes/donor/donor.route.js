import { Router } from 'express';
import validators from '../../validators/index.js';
import { createDonorSchema } from '../../validators/donor.schema.js';
import { createDonorHandler } from '../../controllers/donor/donor.controller.js';

const donorROute = Router();

donorROute.post('/create-donor', validators(createDonorSchema), createDonorHandler);

export default donorROute;
