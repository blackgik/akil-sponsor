import appResponse from '../../../lib/appResponse.js';
import {
  createProject,
  deleteProject,
  fetchGenerateList,
  generateProjectList,
  saveGenerateList,
  updateProject
} from '../../services/projects/projects.service.js';
import { downloadExcel } from '../../utils/general.js';

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

export const projectDashboardHandler = async (req, res) => {
  const { query, user } = req;
  const params = query;

  const responses = await projectDashBoard({ user, params });

  if (params.download === 'on') {
    const worksheet = new Date().getTime() + (await codeGenerator(5));
    const worksheetHeaders = [
      { header: 'ProductName', key: 'project_name', width: 50 },
      { header: 'DateCreated', key: 'createdAt', width: 50 }
    ];

    let mainList = [];

    for (let response of responses) {
      mainList.push({
        project_name: response.project_name,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainList);

    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetched project dashboard data successfully', responses));
  }
};

export const viewProjectHandler = async (req, res) => {
  const { params, user } = req;
  const { project_id } = params;

  const response = await viewProject({ project_id, user });
  res.send(appResponse('Fetched Project successfully', response));
};