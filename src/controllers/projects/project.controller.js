import appResponse from '../../../lib/appResponse.js';
import {
  createProject,
  deleteProject,
  fetchGenerateList,
  generateProjectList,
  saveGenerateList,
  updateProject
} from '../../services/projects/projects.service.js';

export const createProjectsHandler = async (req, res) => {
  const { body, user } = req;

  const response = await createProject({ body, user });

  res.send(appResponse('Created successfully', response));
};

export const generateProjectListHandler = async (req, res) => {
  const { user, query, params, body } = req;
  const { project_id } = params;

  const response = await generateProjectList({ user, param: query, project_id, body });

  res.send(appResponse('Generated successfully', response));
};

export const saveGenerateListHandler = async (req, res) => {
  const { user, query, params, body } = req;
  const { project_id } = params;

  const response = await saveGenerateList({ user, param: query, project_id, body });

  res.send(appResponse('Saved successfully', response));
};

export const fetchGenerateListHandler = async (req, res) => {
  const { query, user, params } = req;

  const { project_id } = params;

  const response = await fetchGenerateList({ param: query, user, project_id });

  res.send(appResponse('Fetched successfully', response));
};

export const updateProjectHandler = async (req, res) => {
  const { user, body, params } = req;

  const { project_id } = params;

  const response = await updateProject({ user, body, project_id });

  res.send(appResponse('Updated successfully', response));
};

export const deleteProjectHandler = async () => {
  const { project_id } = params;

  const response = await deleteProject({ project_id });

  res.send(appResponse('Deleted successfully', response));
};
