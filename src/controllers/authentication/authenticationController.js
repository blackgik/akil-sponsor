import appResponse from '../../../lib/appResponse.js';
import env from '../../config/env.js';
import {
  addModules,
  fetchBankCode,
  fetchPreferencesData,
  forgotPassword,
  loginOrganization,
  onboardNewOrganization,
  onboardNewOrganizationBeneficiary,
  onboardingPayment,
  resendOtp,
  resetPassword,
  uploadOrganizationBeneficiariesInBulk,
  verifyEmail
} from '../../services/authentication/authenticationService.js';
import { encryptData } from '../../utils/vault.js';

export const onboardNewOrganizationHandler = async (req, res) => {
  const { body, query, dbConnection } = req;
  const { start_trial } = query;

  const onboardedOrganization = await onboardNewOrganization({ body, dbConnection });

  res.send(appResponse('onboarded organization successfully, kindly check your emails to continue', onboardedOrganization));
};


export const organizationLoginHandler = async (req, res) => {
  const { body } = req;

  const loggedIn = await loginOrganization(body);

  res.send(appResponse('Logged in successfully', loggedIn));
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

export const resetPasswordHandler = async (req, res) => {
  const { email } = req.query;
  const { body } = req;

  const updatePassword = await resetPassword({ email, body });

  res.send(appResponse(`Reset Password was successful`, updatePassword));
};

export const onboardNewOrganizationBeneficiaryHandler = async (req, res) => {
  const { body, user } = req;

  const beneficiary = await onboardNewOrganizationBeneficiary({ body, user });

  res.send(appResponse('Created organization beneficiary successfully', beneficiary));
};

export const organizationProfileHandler = async (req, res) => {
  const { user } = req;

  const encryptedData = await encryptData({
    data2encrypt: { ...user.toJSON() },
    pubKey: env.public_key
  });

  res.send(appResponse('fetched organization profile successfully', encryptedData));
};

export const organizationBulkUploadBeneficiaryHandler = async (req, res) => {
  const file = req.file;
  const { user, body } = req;

  const uploaded = await uploadOrganizationBeneficiariesInBulk({ file, user, body });

  res.send(appResponse('uploaded organization beneficiaries successfully', uploaded));
};

export const fetchBankCodeHandler = async (req, res) => {
  const { bank_code } = req.params;
  const bankCodes = await fetchBankCode({ bank_code });
  res.send(appResponse('fetched bank code successfully', bankCodes));
};

export const onboardingPaymentHandler = async (req, res) => {
  const { user, body } = req;
  const { upgrade } = req.query;

  const gateway = await onboardingPayment({ user, upgrade, body });

  res.send(appResponse('Updated payment successfully', gateway));
};

export const addModulesHandler = async (req, res) => {
  const { user, body } = req;

  const gateway = await addModules({ user, body });

  res.send(appResponse('generated Gateway successfully', gateway));
};


