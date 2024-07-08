import { Router } from 'express';
import validators from '../../validators/index.js';
import { personalizationSchema } from '../../validators/organizationSchema.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  buildpersonalizationHandler,
  fetchInformationHandler
} from '../../controllers/settings/peronalization/personalization.service.js';
import { permissions } from '../../middlewares/permissions.js';

const personlizationRoute = Router();

personlizationRoute.post(
  '/build',
  validators(personalizationSchema),
  authentication,
  permissions({ authorize: 'settings', functions: 'personalisation', permission: 'create' }),
  buildpersonalizationHandler
);
personlizationRoute.get('/', fetchInformationHandler);
export default personlizationRoute;
