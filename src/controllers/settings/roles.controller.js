import appResponse from '../../../lib/appResponse.js';
import { createRoles, editrole, fetchRoles } from '../../services/settings/roles.service.js';

export const createRolesHandler = async (req, res) => {
  const { user, body } = req;

  const response = await createRoles({ user, body });

  res.send(appResponse('Created Successfully', response));
};

export const fetchRolesHandler = async (req, res) => {
  const { user } = req;

  const response = await fetchRoles({ user });

  res.send(appResponse('Fetched Successfully', response));
};

export const editroleHandler = async (req, res) => {
  const { user, body, params } = req;

  const { role_id } = params;

  const response = await editrole({ user, body,role_id });

  res.send(appResponse('Edited Successfully', response));
};
