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
  organizationPreferencesHandler,
  forgotPasswordHandler,
  whatsappApiDataHandler,
  sendEmailHandler,
  organizationPackageHandler,
  organizationEmailVerifyHandler,
  onboardNewOrganizationHandler,
  onboardNewOrganizationBeneficiaryHandler,
  onboardingPaymentHandler,
  onboardingPaymentInfoHandler,
  organizationLoginHandler,
  organizationBulkUploadBeneficiaryHandler,
  organizationProfileHandler,
  resetPasswordHandler,
  organizationResendOtpHandler,
  fetchPrerenceDataHandler,
  inviteBeneficiaryHandler,
  slugPersonalizationHandler,
  forgotOtpHandler,
  downloadReceiptHandler
} from '../controllers/authentication/authenticationController.js';
import { authentication, dbconnection } from '../middlewares/authentication.js';
import { upload } from '../../lib/multer.js';
import validators from '../validators/index.js';
import { sendContactMailSchema } from '../validators/sendContactMailSchema.js';
import { BuildPackageSchema } from '../validators/packageSchema.js';

const organizationRoutes = router.Router();

const organizationRoute = () => {
  organizationRoutes.post(
    '/onboard-organization',
    Validate(validateOnboardingOrganizationSchema),
    dbconnection,
    onboardNewOrganizationHandler
  );
  organizationRoutes.get('/slug-personalization', slugPersonalizationHandler);
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
  organizationRoutes.get('/get-whatsapp-api-data', authentication, whatsappApiDataHandler);
  organizationRoutes.post(
    '/bulk-upload-beneficiaries',
    authentication,
    upload.single('xls'),
    organizationBulkUploadBeneficiaryHandler
  );
  organizationRoutes.patch(
    '/make-onboarding-payments',
    authentication,
    Validate(BuildPackageSchema),
    onboardingPaymentHandler
  );
  organizationRoutes.get('/onboarding-payment-info', authentication, onboardingPaymentInfoHandler);
  organizationRoutes.get(
    '/download-payment-receipt/:reference',
    authentication,
    downloadReceiptHandler
  );
  organizationRoutes.post(
    '/contact-sponsor-through-mail',
    authentication,
    Validate(sendContactMailSchema),
    sendEmailHandler
  );

  return organizationRoutes;
};

export default organizationRoute;
