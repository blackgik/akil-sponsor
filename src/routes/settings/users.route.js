import express from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  checkIfBenficiaryHandler,
  createNewuserHandler,
  deleteUserHandler,
  downloadExcelHandler,
  editUserHandler,
  fetchUserHandler,
  fetchUsersHandler,
  updateStatusHandler
} from '../../controllers/settings/users.controllers.js';
import validators from '../../validators/index.js';
import { createNewUserSchema, editNewUserSchema } from '../../validators/users.schema.js';
import { permissions } from '../../middlewares/permissions.js';

const userRoute = express.Router();

userRoute.post(
  '/create-user',
  validators(createNewUserSchema),
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'create' }),
  createNewuserHandler
);
userRoute.get(
  '/fetch-users',
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'view' }),
  fetchUsersHandler
);
userRoute.get(
  '/fetch-user/:user_id',
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'view' }),
  fetchUserHandler
);
userRoute.patch(
  '/edit-users/:user_id',
  validators(editNewUserSchema),
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'edit' }),
  editUserHandler
);
userRoute.patch(
  '/update-status/:user_id',
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'edit' }),
  updateStatusHandler
);
userRoute.get(
  '/check-if-beneficiary',
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'view' }),
  checkIfBenficiaryHandler
);
userRoute.delete(
  '/delete-user/:user_id',
  authentication,
  permissions({ authorize: 'settings', functions: 'users', permission: 'delete' }),
  deleteUserHandler
);
userRoute.get('/download-xcel', downloadExcelHandler)


export default userRoute;
