import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import validators from '../../validators/index.js';
import { createProjectScheduleSchema } from '../../validators/projectSchema.js';
import {
  createProductScheduleHandler,
  deleteScheduleHandler,
  editScheduleHandler,
  fetchAwardeesinScheduleHandler,
  generateScheduleNumberHandler,
  listScheduleHandler,
  startScheduleHandler,
  viewScheduleHandler
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
scheduling_route.get('/list-schedule', authentication, listScheduleHandler);
scheduling_route.patch('/start-schedules/:project_id', authentication, startScheduleHandler);
scheduling_route.get('/view-schedule/:schedule_id', authentication, viewScheduleHandler);
scheduling_route.get(
  '/fetch-awardees/:schedule_id',
  authentication,
  fetchAwardeesinScheduleHandler
);
scheduling_route.patch('/edit-schedule/:schedule_id', authentication, editScheduleHandler);
scheduling_route.delete('/delete-schedule/:schedule_id', authentication, deleteScheduleHandler);

export default scheduling_route;
