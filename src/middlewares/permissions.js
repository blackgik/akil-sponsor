import { UnAuthorizedError } from '../../lib/appErrors.js';
import rolepermissionModel from '../models/settings/rolepermission.model.js';

export const permissions =
  ({ authorize, functions, permission }) =>
  async (req, res, next) => {
    const { user } = req;
    if (!user.user_info) {
      return next();
    }

    const role = await rolepermissionModel.findById(user.user_info.role_id._id);

    if (!role) throw new UnAuthorizedError('Role not found');

    const authorization = role.authorization[authorize];

    if (!authorization)
      throw new UnAuthorizedError('You do not have permission to access this role.');

    if (!authorization.is_active) throw new UnAuthorizedError('This role is not active');

    const userfunction = authorization.functions[functions];

    if (!userfunction) throw new UnAuthorizedError('You do not have permission for this function');

    if (!userfunction.is_active)
      throw new UnAuthorizedError('Function is not active for your role');

    if (!userfunction.permissions.includes(permission))
      throw new UnAuthorizedError('Permission not allowed on this role');

    return next();
  };
