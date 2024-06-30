import { BadRequestError } from '../../../lib/appErrors.js';
import appResponse from '../../../lib/appResponse.js';
import {
  createProductSchedule,
  deleteSchedule,
  editSchedule,
  fetchAwardeesinSchedule,
  generateSchedule,
  listschedules,
  startSchedule,
  viewSchedule
} from '../../services/projects/scheduling.service.js';

export const createProductScheduleHandler = async (req, res) => {
  const { body, user, params, query } = req;

  const { project_id } = params;

  if (!project_id) throw new BadRequestError('Please provide a project id');

  const response = await createProductSchedule({ user, body, project_id, param: query });

  res.send(appResponse('Schedules succcessfully', response));
};

export const generateScheduleNumberHandler = async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) throw new BadRequestError('Please provide a project id');

  const { user } = req;

  const response = await generateSchedule({ user, project_id });

  res.send(appResponse('Generated succcessfully', response));
};

export const listScheduleHandler = async (req, res) => {
  const { user, query, params } = req;

  const { project_id } = params;

  const response = await listschedules({ user, param: query, project_id });

  res.send(appResponse('Fetched succcessfully', response));
};

export const startScheduleHandler = async (req, res) => {
  const { body, user, params } = req;

  const { project_id } = params;

  const response = await startSchedule({ body, user, project_id });

  res.send(appResponse('Started succcessfully', response));
};

export const viewScheduleHandler = async (req, res) => {
  const { user, params } = req;

  const { schedule_id } = params;

  const response = await viewSchedule({ schedule_id, user });

  res.send(appResponse('Fetched succcessfully', response));
};

export const fetchAwardeesinScheduleHandler = async (req, res) => {
  const { user, params, query } = req;

  const { schedule_id } = params;

  const response = await fetchAwardeesinSchedule({ schedule_id, param: query, user });

  res.send(appResponse('Fetched succcessfully', response));
};

export const editScheduleHandler = async (req, res) => {
  const { user, params, body } = req;

  const { schedule_id } = params;

  const response = await editSchedule({ schedule_id, user, body });

  res.send(appResponse('Edited succcessfully', response));
};

export const deleteScheduleHandler = async (req, res) => {
  const { user, params } = req;

  const { schedule_id } = params;

  const response = await deleteSchedule({ schedule_id, user });

  res.send(appResponse('Delete succcessfully', response));
};
