import { Router } from 'express';
import validators from '../../validators/index.js';
import { createProjectSchema } from '../../validators/projectSchema.js';
import {
  createProjectsHandler,
  generateProjectListHandler
} from '../../controllers/projects/project.controller.js';
import { authentication } from '../../middlewares/authentication.js';

const project_route = Router();

project_route.post(
  '/create-project',
  validators(createProjectSchema),
  authentication,
  createProjectsHandler
);
project_route.post('/generate-list/:project_id', authentication, generateProjectListHandler);
export default project_route;
