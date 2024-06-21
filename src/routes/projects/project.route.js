import { Router } from 'express';
import validators from '../../validators/index.js';
import { createProjectSchema, projectDashboardQuery } from '../../validators/projectSchema.js';
import {
  createProjectsHandler,
  projectDashboardHandler
} from '../../controllers/projects/project.controller.js';
import { authentication } from '../../middlewares/authentication.js';

const project_route = Router();

project_route.post(
  '/create-project',
  validators(createProjectSchema),
  authentication,
  createProjectsHandler
);

project_route.get(
  '/project-dashboard',
  validators(projectDashboardQuery, 'query'),
  authentication,
  projectDashboardHandler
);
export default project_route;
