import appResponse from '../../../lib/appResponse.js';
import { createProject } from '../../services/projects/projects.service.js';

export const createProjectsHandler = async (req, res) => {
  const { body, user, query } = req;

  const response = await createProject({ body, user });

  res.send(appResponse('Created successfully', response));
};
