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

const rolesRouteRoute = express.Router();

rolesRouteRoute.post(
  '/create-role',
  validators(rolesCretionSchema),
  authentication,
  createRolesHandler
);
rolesRouteRoute.get('/fetch-roles', authentication, fetchRolesHandler);
rolesRouteRoute.patch('/edit-role/:role_id', authentication, editroleHandler);
rolesRouteRoute.get('/view-role/:role_id', authentication, viewroleHandler);

export default rolesRouteRoute;
