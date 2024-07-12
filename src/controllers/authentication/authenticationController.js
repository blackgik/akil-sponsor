import appResponse from '../../../lib/appResponse.js';
import env from '../../config/env.js';
import {
  fetchPreferencesData,
  forgotPassword,
  setOrganizationPackageData,
  setOrganizationPreferences,
  onboardingPaymentInfo,
  inviteBeneficiary,
  whatsappApiData,
  loginOrganization,
  onboardNewOrganization,
  sendSponsorEmail,
  onboardNewOrganizationBeneficiary,
  onboardingPayment,
  resendOtp,
  resetPassword,
  slugPersonalization,
  uploadOrganizationBeneficiariesInBulk,
  verifyEmail,
  verifyForgotOtp,
  downloadReceipt
} from '../../services/authentication/authenticationService.js';
import { encryptData } from '../../utils/vault.js';

export const onboardNewOrganizationHandler = async (req, res) => {
  const { body, query, dbConnection } = req;
  const { start_trial } = query;

  const onboardedOrganization = await onboardNewOrganization({ body, dbConnection });

  res.send(
    appResponse(
      'onboarded organization successfully, kindly check your emails to continue',
      onboardedOrganization
    )
  );
};

export const organizationLoginHandler = async (req, res) => {
  const { body } = req;

  let clienturl = String(req.get('origin'));

  clienturl = clienturl.replace(/https:\/\//g, '');

  const loggedIn = await loginOrganization(body, clienturl);

  res.send(appResponse('Logged in successfully', loggedIn));
};

export const organizationPreferencesHandler = async (req, res) => {
  const { body, user } = req;

  const pref = await setOrganizationPreferences({ body, user });

  res.send(appResponse('Preferences saved!', pref));
};

export const organizationPackageHandler = async (req, res) => {
  const { body, user } = req;

  const packageData = await setOrganizationPackageData({ body, user });

  res.send(appResponse('Package saved!', packageData));
};

export const inviteBeneficiaryHandler = async (req, res) => {
  const { user } = req;
  const { beneficiary_ids } = req.body;

  const invitation = await inviteBeneficiary({ beneficiary_ids, user });

  res.send(appResponse('Invitation sent succefully', invitation));
};

export const fetchPrerenceDataHandler = async (req, res) => {
  const preferencesData = await fetchPreferencesData();

  res.send(appResponse('Preferences data fetched successfully', preferencesData));
};

export const organizationEmailVerifyHandler = async (req, res) => {
  const { body } = req;

  const userData = await verifyEmail(body);

  res.send(appResponse('Email verified successfully', userData));
};

export const organizationResendOtpHandler = async (req, res) => {
  const { body } = req;

  const userData = await resendOtp(body);

  res.send(appResponse('Otp sent successfully', userData));
};

export const forgotPasswordHandler = async (req, res) => {
  const { body } = req;

  const updatePassword = await forgotPassword({ body });

  res.send(appResponse(`Reset Details successfully`, updatePassword));
};

export const forgotOtpHandler = async (req, res) => {
  const { body } = req;

  const updatePassword = await verifyForgotOtp({ body });

  res.send(appResponse(`Reset Details verified successfully`, updatePassword));
};

export const resetPasswordHandler = async (req, res) => {
  const { body, user } = req;

  const updatePassword = await resetPassword({ body, user });

  res.send(appResponse(`Reset Password was successful`, updatePassword));
};

export const onboardNewOrganizationBeneficiaryHandler = async (req, res) => {
  const { body, user } = req;

  const beneficiary = await onboardNewOrganizationBeneficiary({ body, user });

  res.send(appResponse('Created organization beneficiary successfully', beneficiary));
};

export const organizationProfileHandler = async (req, res) => {
  const { user } = req;

  res.send(appResponse('fetched organization profile successfully', user));
};

export const organizationBulkUploadBeneficiaryHandler = async (req, res) => {
  const file = req.file;
  const { user, body } = req;

  const uploaded = await uploadOrganizationBeneficiariesInBulk({ file, user, body });

  res.send(appResponse('uploaded organization beneficiaries successfully', uploaded));
};

export const downloadReceiptHandler = async (req, res) => {
  const { user, params } = req;
  const { reference } = params;

  const product = await downloadReceipt({ user, reference });
  res.download(product);
};

export const onboardingPaymentHandler = async (req, res) => {
  const { user, body } = req;

  const gateway = await onboardingPayment({ user, body });

  res.send(appResponse('Updated payment successfully', gateway));
};

export const onboardingPaymentInfoHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const gateway = await onboardingPaymentInfo({ user, params });

  res.send(appResponse('Updated payment successfully', gateway));
};

export const whatsappApiDataHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const whatsappData = await whatsappApiData({ user, params });

  res.send(appResponse('WHatsapp Api data fetched successfully', whatsappData));
};

export const sendEmailHandler = async (req, res) => {
  const { user, body } = req;

  const data = await sendSponsorEmail({ user, body });

  res.send(appResponse('Mail sent successfully', data));
};

export const slugPersonalizationHandler = async (req, res) => {
  const { query } = req;

  const { slug } = query;

  const response = await slugPersonalization({ slug });

  res.send(appResponse('fetched organization profile successfully', response));
};
