import { Router } from 'express';
import validators from '../../validators/index.js';
import { createProjectSchema, updateProjectSchema } from '../../validators/projectSchema.js';
import {
  createProjectsHandler,
  deleteProjectHandler,
  fetchGenerateListHandler,
  generateProjectListHandler,
  saveGenerateListHandler,
  updateProjectHandler
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
project_route.get('/fetch-generated-list/:project_id', authentication, fetchGenerateListHandler);
project_route.patch('/save-generated_list/:project_id', authentication, saveGenerateListHandler);
project_route.patch(
  '/update-project/:project_id',
  validators(updateProjectSchema),
  authentication,
  updateProjectHandler
);
project_route.delete('/delete-project/:project_id', authentication, deleteProjectHandler);

export default project_route;
