import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  updateBankDetails,
  updateOrganizationProfileSchema
} from '../../validators/organizationSchema.js';
import {
  addNewBankAccountHandler,
  updateOrganizationProfileHandler
} from '../../controllers/profile/profileController.js';
import validators from '../../validators/index.js';

const profileRooute = router.Router();

const profileRoot = () => {
  profileRooute.patch(
    '/update',
    Validate(updateOrganizationProfileSchema),
    authentication,
    updateOrganizationProfileHandler
  );

  profileRooute.patch(
    '/add-bank-account',
    validators(updateBankDetails),
    authentication,
    addNewBankAccountHandler
  );

  return profileRooute;
};

export default profileRoot;
