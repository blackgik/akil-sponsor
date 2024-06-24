import { BadRequestError } from '../../../lib/appErrors.js';
import appResponse from '../../../lib/appResponse.js';
import {
  createProductSchedule,
  generateSchedule,
  listschedules
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
  const { user, query } = req;

  const response = await listschedules({ user, param: query });

  res.send(appResponse('Fetched succcessfully', response));
};

export const startScheduleHandler = async (req, res) => {
  const { body, user } = req;

  const response = await startSchedule({});
};
