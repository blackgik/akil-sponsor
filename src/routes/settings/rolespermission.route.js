import express from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  createRolesHandler,
  editroleHandler,
  fetchRolesHandler,
  viewroleHandler
} from '../../controllers/settings/roles.controller.js';
import validators from '../../validators/index.js';
import { rolesCretionSchema } from '../../validators/roles.schema.js';
import { permissions } from '../../middlewares/permissions.js';

const rolesRouteRoute = express.Router();

rolesRouteRoute.post(
  '/create-role',
  validators(rolesCretionSchema),
  authentication,
  permissions({ authorize: 'settings', functions: 'roles_permission', permission: 'create' }),
  createRolesHandler
);
rolesRouteRoute.get(
  '/fetch-roles',
  authentication,
  permissions({ authorize: 'settings', functions: 'roles_permission', permission: 'view' }),
  fetchRolesHandler
);
rolesRouteRoute.patch(
  '/edit-role/:role_id',
  authentication,
  permissions({ authorize: 'settings', functions: 'roles_permission', permission: 'edit' }),
  editroleHandler
);
rolesRouteRoute.get(
  '/view-role/:role_id',
  authentication,
  permissions({ authorize: 'settings', functions: 'roles_permission', permission: 'view' }),
  viewroleHandler
);

export default rolesRouteRoute;
