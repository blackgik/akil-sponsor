import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  updateBankDetails,
  updateOrganizationProfileSchema
} from '../../validators/organizationSchema.js';
import {
  addNewBankAccountHandler,
  profilesDashbaord1Handler,
  profilesDashbaordHandler,
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

  profileRooute.get('/dashboard', authentication, profilesDashbaordHandler);
  profileRooute.get('/dashboard-1', authentication, profilesDashbaord1Handler);
  profileRooute.patch(
    '/add-bank-account',
    validators(updateBankDetails),
    authentication,
    addNewBankAccountHandler
  );
  return profileRooute;
};

export default profileRoot;
