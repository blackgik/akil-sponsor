import { Router } from 'express';
import validators from '../../validators/index.js';
import { personalizationSchema } from '../../validators/organizationSchema.js';
import { authentication } from '../../middlewares/authentication.js';
import { buildpersonalizationHandler } from '../../controllers/settings/peronalization/personalization.service.js';

const personlizationRoute = Router();

personlizationRoute.post(
  '/build',
  validators(personalizationSchema),
  authentication,
  buildpersonalizationHandler
);
export default personlizationRoute;
