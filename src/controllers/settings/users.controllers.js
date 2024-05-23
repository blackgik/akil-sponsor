import appResponse from '../../../lib/appResponse.js';
import {
  checkIfBenficiary,
  craeteNewUser,
  editUser,
  fetchUser,
  fetchUsers,
  updateStatus
} from '../../services/settings/users.service.js';

export const createNewuserHandler = async (req, res) => {
  const { user, body } = req;

  const response = await craeteNewUser({ user, body });

  res.send(appResponse('Created successfully', response));
};

export const fetchUsersHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchUsers({ user, param: query });

  res.send(appResponse('Fetched successfully', response));
};

export const fetchUserHandler = async (req, res) => {
  const { user, params } = req;

  const { user_id } = params;

  const response = await fetchUser({ user_id, user });

  res.send(appResponse('Fetched successfully', response));
};

export const editUserHandler = async (req, res) => {
  const { user, body, params } = req;

  const { user_id } = params;

  const response = await editUser({ user_id, body, user });

  res.send(appResponse('Edited successfully', response));
};

export const updateStatusHandler = async (req, res) => {
  const { user, body, params } = req;

  const { user_id } = params;

  const response = await updateStatus({ user_id, body, user });

  res.send(appResponse('Edited successfully', response));
};

export const checkIfBenficiaryHandler = async (req, res) => {
  const { user, query } = req;

  const { email } = query;

  const response = await checkIfBenficiary({ user, email });

  res.send(appResponse('Fetched successfully', response));
};
