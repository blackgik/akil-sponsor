import { BadRequestError } from '../../../lib/appErrors.js';
import appResponse from '../../../lib/appResponse.js';
import {
  createProductSchedule,
  fetchScheduledList,
  generateSchedule
} from '../../services/projects/scheduling.service.js';

export const createProductScheduleHandler = async (req, res) => {
  const { body, user, params, query } = req;

  const { project_id } = params;

  console.log({ project_id });

  if (!project_id) throw new BadRequestError('Please provide a project id');

  const response = await createProductSchedule({ user, body, project_id, param: query });

  res.send(appResponse('Schedules succcessfully', response));
};

export const generateScheduleNumberHandler = async (req, res) => {
  const { project_id } = req.params;

  if (!project_id) throw new BadRequestError('Please provide a project id');

  const { user } = req;

  const response = await generateSchedule({ user, project_id });

  res.send(appResponse('Generateds succcessfully', response));
};

export const fetchfetchScheduledListHandler = async (req, res) => {
  const { query, user, params } = req;

  const { project_id } = params;

  const response = await fetchScheduledList({ param: query, user, project_id });

  res.send(appResponse('Fetched Scheduled list successfully', response));
};