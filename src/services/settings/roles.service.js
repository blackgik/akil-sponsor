import { DuplicateError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';

export const createRoles = async ({ user, body }) => {
  try {
    const checkRoles = await rolepermissionModel.findOne({
      sponsor_id: user._id,
      role_name: body.role_name
    });

    if (checkRoles)
      throw new DuplicateError('Role already exists. Update if you wish to make changes.');

    const data = {
      ...body,
      sponsor_id: user._id
    };

    await rolepermissionModel.create(data);

    return {};
  } catch (err) {
    throw new InternalServerError(err.message || 'Could not create role. Server error occurred');
  }
};

export const fetchRoles = async ({ user }) => {
  const roles = await rolepermissionModel.find({ sponsor_id: user._id });

  return roles;
};

export const editrole = async ({ user, body, role_id }) => {
  const updates = Object.keys(body);

  const role = await rolepermissionModel.findById(role_id);

  if (!role) throw new NotFoundError('Role not found');

  updates.forEach((update) => (role[update] = body[update]));

  await role.save();

  return role;
};

export const viewrole = async ({ role_id }) => {
  const role = await rolepermissionModel.findById(role_id);

  if (!role) throw new NotFoundError('Role not found');

  return role;
};
