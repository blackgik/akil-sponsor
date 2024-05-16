import express from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
    checkIfBenficiaryHandler,
  createNewuserHandler,
  editUserHandler,
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
userRoute.patch(
  '/edit-users/:user_id',
  validators(editNewUserSchema),
  authentication,
  editUserHandler
);
userRoute.patch('/update-status/:user_id', authentication, updateStatusHandler);
userRoute.get('/check-if-beneficiary', authentication, checkIfBenficiaryHandler);

export default userRoute;
