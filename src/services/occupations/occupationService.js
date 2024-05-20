import env from '../../config/env.js';
import {
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import OccupationModel from '../../models/occupations/occupationModel.js';

export const createNewOccupation = async ({ user, body }) => {
  const occupationData = {
    ...body
  };
  const occupation = await OccupationModel.findOne({
    occupation_name: body.occupation_name
  });

  if (occupation) throw new DuplicateError('Duplicate occupation found');

  const created = await OccupationModel.create(occupationData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  return true;
};

export const fetchOccupation = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const filterData = { is_active: true };

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ occupation_name: searchRgx }];
  }

  const totalCount = await OccupationModel.countDocuments({
    ...filterData,
    is_active: true
  });

  const fetchData = await OccupationModel
    .find({ ...filterData, is_active: true })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(totalCount / no_of_requests)
    ? Math.ceil(totalCount / no_of_requests)
    : 1;

  return { page_no, available_pages, fetchData };
};


//------ common occupation handlers --------------------\\

export const fetchAllOccupations = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filterData = {is_active: true};

  if (query) {
    filterData['$or'] = [{ occupation_name: searchRgx }];
  }

  let fetchedData = [];

  const occupationCount = await OccupationModel.countDocuments({ ...filterData });
  let occupationData = await OccupationModel.find({ ...filterData });

  const count = occupationCount;

  let startIndex = (page_no - 1) * no_of_requests;
  let endIndex = page_no * no_of_requests;

  fetchedData = [...occupationData];
  fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  fetchedData = fetchedData.slice(startIndex, endIndex);

  const available_pages = Math.ceil(count / no_of_requests);

  fetchedData = fetchedData.reduce(function (result, current) {
    return result;
  }, {});

  return { page_no, available_pages, fetchedData };
};

export const getSingleOccupation = async ({ user, occupation_id }) => {
  let occupationInView;

  occupationInView = await OccupationModel.findById(occupation_id);

  if (!occupationInView) throw new NotFoundError('occupation  does not exist');

  return occupationInView;
};

export const updateSingleOccupation = async ({ occupation_id, body, user }) => {
  const updates = Object.keys(body);

  let occupationInView;

  occupationInView = await OccupationModel.findById(occupation_id);

  if (!occupationInView) throw new NotFoundError('occupation  does not exist');

  updates.forEach((update) => (occupationInView[update] = body[update]));

  await occupationInView.save();

  return true;
};
