import router from 'express';
import Validate from '../validators/index.js';
import {
  validateForgotPasswordSchema,
  validateLoginOrganizationSchema,
  validateOrganizationPreferencesSchema,
  validateOrganizationPackageSchema,
  validateVerifyOnboardingEmailSchema,
  validateOnboardingOrganizationSchema,
  validateOrganizationBeneficiarySchema,
  validateResetPasswordSchema,
  validateForgotOtpSchema
} from '../validators/organizationSchema.js';
import {
  addModulesHandler,
  fetchBankCodeHandler,
  organizationPreferencesHandler,
  forgotPasswordHandler,
  organizationPackageHandler,
  organizationEmailVerifyHandler,
  onboardNewOrganizationHandler,
  onboardNewOrganizationBeneficiaryHandler,
  onboardingPaymentHandler,
  organizationLoginHandler,
  organizationBulkUploadBeneficiaryHandler,
  organizationProfileHandler,
  resetPasswordHandler,
  organizationResendOtpHandler,
  fetchPrerenceDataHandler,
  inviteBeneficiaryHandler,
  slugPersonalizationHandler,
  forgotOtpHandler
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
  organizationRoutes.get('/slug-personalization', slugPersonalizationHandler);
  organizationRoutes.get('/bank-codes/:bank_code', fetchBankCodeHandler);
  organizationRoutes.get('/fetch-preferences-data', fetchPrerenceDataHandler);
  organizationRoutes.post(
    '/organization-login',
    Validate(validateLoginOrganizationSchema),
    organizationLoginHandler
  );
  organizationRoutes.post(
    '/set-sponsor-preferences',
    Validate(validateOrganizationPreferencesSchema),
    authentication,
    organizationPreferencesHandler
  );
  organizationRoutes.post(
    '/build-sponsor-package',
    Validate(validateOrganizationPackageSchema),
    authentication,
    organizationPackageHandler
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
    '/resend-otp',
    Validate(validateForgotPasswordSchema),
    organizationResendOtpHandler
  );

  organizationRoutes.post('/invitation', authentication, inviteBeneficiaryHandler);

  organizationRoutes.post(
    '/forgot-password',
    Validate(validateForgotPasswordSchema),
    forgotPasswordHandler
  );

  organizationRoutes.post(
    '/verify-forgot-otp',
    Validate(validateForgotOtpSchema),
    forgotOtpHandler
  );
  organizationRoutes.post(
    '/reset-password',
    authentication,
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
