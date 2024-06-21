import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import validators from '../../validators/index.js';
import { createProjectScheduleSchema } from '../../validators/projectSchema.js';
import {
  createProductScheduleHandler,
  generateScheduleNumberHandler
} from '../../controllers/projects/schedule.controller.js';

const scheduling_route = Router();

scheduling_route.post(
  '/create-schedule/:project_id',
  validators(createProjectScheduleSchema),
  authentication,
  createProductScheduleHandler
);
scheduling_route.get(
  '/generate-schedule-number/:project_id',
  authentication,
  generateScheduleNumberHandler
);

export default scheduling_route;
