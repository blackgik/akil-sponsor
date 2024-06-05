import { Router } from 'express';
import validators from '../../validators/index.js';
import { personalizationSchema } from '../../validators/organizationSchema.js';
import { authentication } from '../../middlewares/authentication.js';
import { buildpersonalizationHandler } from '../../controllers/settings/peronalization/personalization.service.js';
import { permissions } from '../../middlewares/permissions.js';

const personlizationRoute = Router();

personlizationRoute.post(
  '/build',
  validators(personalizationSchema),
  authentication,
  permissions({ authorize: 'settings', functions: 'personalisation', permission: 'create' }),
  buildpersonalizationHandler
);
export default personlizationRoute;
