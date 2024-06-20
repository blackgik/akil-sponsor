import { Router } from 'express';
import validators from '../../validators/index.js';
import { createProjectSchema } from '../../validators/projectSchema.js';
import { createProjectsHandler } from '../../controllers/projects/project.controller.js';

const project_route = Router();

project_route.post('/create-project', validators(createProjectSchema), createProjectsHandler);

export default project_route;
