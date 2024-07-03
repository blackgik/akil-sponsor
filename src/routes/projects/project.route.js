import { Router } from 'express';
import validators from '../../validators/index.js';
import { createProjectSchema, updateProjectSchema } from '../../validators/projectSchema.js';
import {
  closeProjectHandler,
  createProjectsHandler,
  deleteAwardeeHandler,
  deleteProjectHandler,
  fetchBeneficiariesHandler,
  fetchGenerateListHandler,
  fetchProjectHandler,
  generateProjectListHandler,
  getProjectItemHandler,
  projectDashboardStatsHandler,
  saveGenerateListHandler,
  updateProjectHandler,
  viewProjectHandler
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
project_route.get('/project-dashboard-stats', authentication, projectDashboardStatsHandler);
project_route.get('/fetch-project', authentication, fetchProjectHandler);
project_route.get('/view-project/:project_id', authentication, viewProjectHandler);
project_route.get('/get-project-item/:product_id', authentication, getProjectItemHandler);
project_route.patch('/close-project/:project_id', authentication, closeProjectHandler);
project_route.post('/delete-awardees/', authentication, deleteAwardeeHandler);
project_route.get('/fetch-beneficiaries/:project_id', authentication, fetchBeneficiariesHandler);

export default project_route;
