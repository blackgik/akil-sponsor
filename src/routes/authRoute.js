import router from 'express';
import Validate from '../validators/index.js';
import {
  validateForgotPasswordSchema,
  validateLoginOrganizationSchema,
  validateVerifyOnboardingEmailSchema,
  validateOnboardingOrganizationSchema,
  validateOrganizationBeneficiarySchema,
  validateResetPasswordSchema
} from '../validators/organizationSchema.js';
import {
  addModulesHandler,
  fetchBankCodeHandler,
  forgotPasswordHandler,
  organizationEmailVerifyHandler,
  onboardNewOrganizationHandler,
  onboardNewOrganizationBeneficiaryHandler,
  onboardingPaymentHandler,
  organizationLoginHandler,
  organizationBulkUploadBeneficiaryHandler,
  organizationProfileHandler,
  resetPasswordHandler
} from '../controllers/authentication/authenticationController.js';
import { authentication, dbconnection } from '../middlewares/authentication.js';
import { upload } from '../../lib/multer.js';
import validators from '../validators/index.js';

const organizationRoutes = router.Router();

const organizationRoute = () => {
  organizationRoutes.post(
    '/onboard-organization',
    Validate(validateOnboardingOrganizationSchema),
    dbconnection,
    onboardNewOrganizationHandler
  );
  organizationRoutes.get('/bank-codes/:bank_code', fetchBankCodeHandler);
  organizationRoutes.post(
    '/organization-login',
    Validate(validateLoginOrganizationSchema),
    organizationLoginHandler
  );
  organizationRoutes.post(
    '/onboard-organization-beneficiary',
    Validate(validateOrganizationBeneficiarySchema),
    authentication,
    onboardNewOrganizationBeneficiaryHandler
  );
  organizationRoutes.post(
    '/verify-onboarding-email',
    Validate(validateVerifyOnboardingEmailSchema),
    organizationEmailVerifyHandler
  );
  
  organizationRoutes.post(
    '/forgot-password',
    Validate(validateForgotPasswordSchema),
    forgotPasswordHandler
  );
  organizationRoutes.patch(
    '/reset-password',
    Validate(validateResetPasswordSchema),
    resetPasswordHandler
  );
  organizationRoutes.get('/profile', authentication, organizationProfileHandler);
  organizationRoutes.post(
    '/bulk-upload-beneficiaries',
    authentication,
    upload.single('xls'),
    organizationBulkUploadBeneficiaryHandler
  );
  organizationRoutes.patch('/make-onboarding-payments', authentication, onboardingPaymentHandler);
  organizationRoutes.patch('/add-modules', authentication, addModulesHandler);
 

  return organizationRoutes;
};

export default organizationRoute;
