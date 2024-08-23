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
import { downloadExcel } from '../../utils/general.js';

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

  const responses = await listschedules({ user, param: query, project_id });
  if (query.download === 'on') {
    const worksheet = 'scheduled_list';
    const worksheetHeaders = [
      { header: 'Batch Number', key: 'batch_number', width: 50 },
      { header: 'Description', key: 'description', width: 50 },
      { header: 'Start_Date', key: 'start_date', width: 50 },
      { header: 'End_Date', key: 'end_date', width: 50 },
      { header: 'Delivery_Address ', key: 'delivery_address', width: 50 },
      { header: 'Landmark', key: 'landmark', width: 50 },
      { header: 'Phone', key: 'phone', width: 50 },
      { header: 'Status', key: 'status', width: 50 },
      { header: 'CreatedAt', key: 'createdAt', width: 50 }

    ];

    let mainlist = [];

    for (let response of responses) {
      mainlist.push({
        batch_number: response.batch_number,
        description: response.description,
        start_date: response.start_date,
        end_date: response.end_date,
        delivery_address: response.delivery_address,
        landmark: response.landmark,
        phone: response.phone,
        status: response.status,
        createdAt: response.createdAt,
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetched succcessfully', responses));
  }
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
