import appResponse from '../../../lib/appResponse.js';
import {
  createNewOccupation,
  fetchAllOccupations,
  fetchOccupation,
  getSingleOccupation,
  updateSingleOccupation
} from '../../services/occupations/occupationService.js';

export const createNewOccupationHandler = async (req, res) => {
  const { user, body } = req;

  const newOccupation = await createNewOccupation({ user, body });

  res.send(appResponse('created occupation successfully', newOccupation));
};

export const fetchOccupationHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchOccupation({ user, params });

  res.send(appResponse('fetched occupations successfully', fetchedData));
};
//================================================================================================

//------ commeon occupation handlers --------------------\\

export const getAllOccupationsHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllOccupations({ user, params });

  res.send(appResponse('fetched occupations successfully', fetchedData));
};

export const getSingleOccupationHandler = async (req, res) => {
  const { user, params } = req;
  const { occupation_id } = params;

  const occupation = await getSingleOccupation({ user, occupation_id });

  res.send(appResponse('fetched occupation successfully', occupation));
};

export const updateSingleOccupationHandler = async (req, res) => {
  const { user, params, body } = req;
  const { occupation_id} = params;

  const updated = await updateSingleOccupation({ occupation_id, body, user });

  res.send(appResponse('updated occupation successfully', updated));
};
