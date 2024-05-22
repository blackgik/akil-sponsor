import express from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  checkIfBenficiaryHandler,
  createNewuserHandler,
  editUserHandler,
  fetchUserHandler,
  fetchUsersHandler,
  updateStatusHandler
} from '../../controllers/settings/users.controllers.js';
import validators from '../../validators/index.js';
import { createNewUserSchema, editNewUserSchema } from '../../validators/users.schema.js';

const userRoute = express.Router();

userRoute.post(
  '/create-user',
  validators(createNewUserSchema),
  authentication,
  createNewuserHandler
);
userRoute.get('/fetch-users', authentication, fetchUsersHandler);
userRoute.get('/fetch-user/:user_id', authentication, fetchUserHandler);
userRoute.patch(
  '/edit-users/:user_id',
  validators(editNewUserSchema),
  authentication,
  editUserHandler
);
userRoute.patch('/update-status/:user_id', authentication, updateStatusHandler);
userRoute.get('/check-if-beneficiary', authentication, checkIfBenficiaryHandler);

export default userRoute;
