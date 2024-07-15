import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import XLSX from 'xlsx';
import axios from 'axios';
import request from 'request';
import path from 'path';
import fs, { exists } from 'fs';
import Microinvoice from 'microinvoice';
import env from '../../config/env.js';
import organizationModel, { buildOrganizationSchema } from '../../models/organizationModel.js';
import ProductCategoryModel from '../../models/products/ProductCategoryModel.js';
import OccupationModel from '../../models/occupations/occupationModel.js';
import { initializePayment, verifyPayment } from '../../utils/payment.js';
import {
  forgotPasswordMail,
  paymentVerificationMail,
  verifyOnbordingMail,
  beneficiaryBulkUpload,
  onboardinMail,
  invitationMail,
  beneficaryOnboardinMail
} from '../../config/mail.js';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  InvalidError,
  NotFoundError
} from '../../../lib/appErrors.js';
import {
  buildOtpHash,
  codeGenerator,
  generateEnterpriseCredentials,
  verifyOTP
} from '../../utils/codeGenerator.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import beneficiaryBatchUploadModel from '../../models/beneficiaries/beneficiaryBatchUploadModel.js';
import { plans } from '../../config/modules.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import { encryptData } from '../../utils/vault.js';
import personalizationModel from '../../models/settings/personalization.model.js';

import paymentModel from '../../models/paymentModel.js';
import validator from 'validator';
import usersModels from '../../models/settings/users.models.js';
import { capitalizeWords } from '../../utils/general.js';

export const onboardNewOrganization = async ({ body, dbConnection }) => {
  if (!body.tosAgreement) throw new BadRequestError(`Terms and conditions not met`);

  const checkIfOnboarded = await organizationModel.findOne({ email: body.email });
  if (checkIfOnboarded) throw new DuplicateError('Sponsor already exists');

  let { company_code, api_key_live, api_key_test } = await generateEnterpriseCredentials(
    body.firstname + '' + body.lastname
  );

  const otp = await codeGenerator(6, '1234567890');

  const otpHash = buildOtpHash(body.email, otp, env.otpKey, 15);

  const hashedPwd = await bcrypt.hash(body.password, 12);

  let organizationProfile = {
    ...body,
    company_code,
    password: hashedPwd,
    otpHash: otpHash,
    organization_reg_fee: plans.sponsor_onboarding_settings.organization_reg_fee,
    vault_access: {
      api_key_live,
      api_key_test
    },
    start_trial_ts: new Date(),
    end_trial_ts: new Date(new Date().getTime() + 1000 * 24 * 60 * 60 * 14)
  };

  if (body.psdAgreement) {
    organizationProfile.personalization_fee = plans.sponsor_onboarding_settings.personalization_fee;
  }

  const createOrganizationProfile = await organizationModel.create(organizationProfile);

  if (!createOrganizationProfile) throw new InternalServerError('Server is being maintained');

  //create email profile here
  const onboardingData = {
    name: createOrganizationProfile.firstname + ' ' + createOrganizationProfile.lastname,
    code: otp
  };

  const mailData = {
    email: createOrganizationProfile.email,
    subject: 'SPONSOR ONBOARDING',
    type: 'html',
    html: verifyOnbordingMail(onboardingData).html,
    text: verifyOnbordingMail(onboardingData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Sponsor was created without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully created a sponsors account`,
    type: 'creation',
    who_is_reading: 'sponsor',
    compliment_obj: { status: 'pending' },
    organization_id: createOrganizationProfile._id
  });

  return { code: otp, hash: otpHash, email: createOrganizationProfile.email };
};

export const resendOtp = async (body) => {
  //const hash = await argon.hash(dto.password);
  let checkIfNotVerified = await organizationModel.findOne({ email: body.email });
  let user;
  if (!checkIfNotVerified) {
    user = await usersModels.findOne({ email: body.email });
    if (!user) throw new BadRequestError('Account not found!');
  }

  // if (checkIfNotVerified.isApproved) throw new BadRequestError('Account already verified! Login!');

  const otp = await codeGenerator(6);

  const emailTouse = checkIfNotVerified ? checkIfNotVerified.email : user.email;

  const otpHash = buildOtpHash(emailTouse, otp, env.otpKey, 15);

  // checkIfNotVerified.otpHash = otpHash;
  // checkIfNotVerified.otp = otp;

  // await checkIfNotVerified.save();

  //create email profile here
  const nameToUse = checkIfNotVerified
    ? checkIfNotVerified.firstname + ' ' + checkIfNotVerified.lastname
    : user.user_name;

  const onboardingData = {
    name: nameToUse,
    code: otp
  };
  const mailData = {
    email: emailTouse,
    subject: 'SPONSOR ONBOARDING',
    type: 'html',
    html: verifyOnbordingMail(onboardingData).html,
    text: verifyOnbordingMail(onboardingData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError(
      500,
      'server slip. Sponsor was created without mail being sent',
      ''
    );

  return { code: otp, hash: otpHash, email: checkIfNotVerified.email };
};

export const verifyEmail = async (body) => {
  const { code, hash, email } = body;

  let checkAcct = await organizationModel.findOne({ email });
  let user;
  if (!checkAcct) {
    user = await usersModels.findOne({ email });
    if (!user) throw new BadRequestError('User not found');
  }

  const emailToUse = checkAcct ? checkAcct.email : user.email;

  const verifyOtp = verifyOTP(emailToUse, code, hash, env.otpKey);

  if (!verifyOtp) throw new BadRequestError('Invalid Input');

  if (checkAcct) {
    checkAcct.isApproved = true;
    checkAcct.acctstatus = 'active';

    await checkAcct.save();
  }

  const nameToUse = checkAcct
    ? (checkAcct.firstname + ' ' + checkAcct.lastname).toUpperCase()
    : user.user_name.toUpperCase();

  if (user) {
    user.acctstatus = 'active';

    await user.save();

    checkAcct = await organizationModel.findById(user.sponsor_id);
  }

  //create email profile here
  const onboardingData = {
    email: emailToUse,
    name_of_cooperation: nameToUse,
    company_code: checkAcct.company_code,
    name: nameToUse
  };

  const mailData = {
    email: emailToUse,
    subject: 'SPONSOR ONBOARDING',
    type: 'html',
    html: onboardinMail(onboardingData).html,
    text: onboardinMail(onboardingData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError(
      500,
      'server slip. Sponsor was created without mail being sent',
      ''
    );
  const admin = checkAcct.toJSON();
  admin.onboardingSetting = plans.sponsor_onboarding_settings;

  // const encrypedDataString = await encryptData({
  //   data2encrypt: { ...admin },
  //   pubKey: env.public_key
  // });

  const tokenEncryption = jwt.sign(
    {
      _id: checkAcct ? admin._id : user._id,
      email: emailToUse,
      user: admin,
      adminType: checkAcct ? 'sponsor' : 'user'
    },
    env.jwt_key
  );

  return { tokenEncryption };
};

export const loginOrganization = async (body, clienturl) => {
  const { email, password } = body;
  let checkOrg = await organizationModel.findOne({ email });

  let user;

  if (!checkOrg) {
    user = await usersModels.findOne({ email }).populate('role_id');

    if (!user) throw new InvalidError('Invalid Sponsor');
  }

  const acctstatus = checkOrg ? checkOrg.isApproved : user.acctstatus === 'active' ? true : false;

  if (!acctstatus) throw new BadRequestError('Account not verified');

  const passwordCrypt = checkOrg?.password || user?.password;

  const isMatch = await bcrypt.compare(password, passwordCrypt);

  if (!isMatch) throw new BadRequestError('Invalid Sponsor');

  const loginData = checkOrg ? checkOrg : await organizationModel.findById(user.sponsor_id);
  const admin = loginData.toJSON();
  admin.onboardingSetting = plans.sponsor_onboarding_settings;

  if (user) {
    admin.user_info = user;
  }

  if (loginData.is_first_time === true) {
    loginData.is_first_time = false;
    await loginData.save();
  }

  const allowdOrigin = [
    'akilaah-sponsor.vercel.app',
    'sponsor.akilaah.com',
    'http://localhost:4000',
    'http://localhost:4005',
    'http://localhost:3000',
    'http://localhost:3005'
  ];

  if (!allowdOrigin.includes(clienturl)) {
    const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
    const searchRgx = rgx(clienturl);

    const findPersonalization = await personalizationModel.findOne({
      'general_info.url_name': searchRgx
    });

    if (
      String(findPersonalization.sponsor_id) !== String(checkOrg ? checkOrg._id : user?.sponsor_id)
    )
      throw new BadRequestError('Invalid account user');
  }

  const tokenEncryption = jwt.sign(
    {
      _id: checkOrg ? checkOrg._id : user._id,
      email: checkOrg ? checkOrg.email : user.email,
      user: admin,
      adminType: checkOrg ? 'sponsor' : 'user'
    },
    env.jwt_key
  );

  return { tokenEncryption };
};

export const forgotPassword = async ({ body }) => {
  let checkOrg = await organizationModel.findOne({ email: body.email });
  let user;

  if (!checkOrg) {
    user = await usersModels.findOne({ email: body.email });
    if (!user) return {};
  }

  const newPassword = await codeGenerator(6);

  const hash = buildOtpHash(body.email, newPassword, env.otpKey, 15);

  // checkOrg.password = hash;

  // checkOrg.save();

  const onboardingData = {
    name: checkOrg ? checkOrg.firstname + ' ' + checkOrg.lastname : user.user_name,
    code: newPassword
  };

  const mailData = {
    email: body.email,
    subject: 'PASSWORD RESET REQUEST',
    type: 'html',
    html: forgotPasswordMail(onboardingData).html,
    text: forgotPasswordMail(onboardingData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);

  if (!msgDelivered) throw new InternalServerError('server slip. Reset Password code not sent');

  // return { email: checkBeneficiary.email };
  return { hash: hash, email: body.email };
};

export const resetPassword = async ({ body, user }) => {
  const { password } = body;

  if (user.user_info) {
    const userx = await usersModels.findOne({ email: user.user_info.email });

    if (!userx) throw new NotFoundError(`User not found`);
    userx.password = await bcrypt.hash(password, 12);

    await userx.save();

    return {};
  }

  const hashPassword = await bcrypt.hash(password, 12);

  user.password = hashPassword;

  await user.save();

  return {};
};

export const sendSponsorEmail = async ({ body, user }) => {
  const organizationExists = await organizationModel.findById(user._id);
  if (!organizationExists) {
    throw new BadRequestError("Sponsor doesn't exist!");
  }

  if (organizationExists.hasPaid || organizationExists.paymentstatus == 'paid') {
    throw new BadRequestError('Sponsor already paid!');
  }

  let amountToPay = 0;
  let supSmsFee = 0;
  let supBeneficiaryFee = 0;
  let personalizationFee = 0;
  let dataCollectionFee = 0;

  if (!organizationExists.hasPaid) {
    amountToPay += plans.sponsor_onboarding_settings.organization_reg_fee;
  }
  if (organizationExists.psdAgreement && !organizationExists.hasPaid_personalization_fee) {
    amountToPay += plans.sponsor_onboarding_settings.personalization_fee;
    personalizationFee = plans.sponsor_onboarding_settings.personalization_fee;
  }
  if (
    organizationExists.total_number_of_beneficiaries_chosen >
    plans.sponsor_onboarding_settings.max_users
  ) {
    supBeneficiaryFee =
      organizationExists.total_number_of_beneficiaries_chosen -
      plans.sponsor_onboarding_settings.max_users;
    amountToPay += supBeneficiaryFee;
  }
  if (organizationExists.total_number_of_sms > plans.sponsor_onboarding_settings.max_sms) {
    supSmsFee =
      (organizationExists.total_number_of_sms - plans.sponsor_onboarding_settings.max_sms) *
      plans.sponsor_onboarding_settings.sup_sms_fee;
    amountToPay += supSmsFee;
  }
  if (organizationExists.data_collection_quantity > 0) {
    dataCollectionFee =
      organizationExists.data_collection_quantity *
      plans.sponsor_onboarding_settings.data_collection_fee;
    amountToPay += dataCollectionFee;
  }
  organizationExists.paymentstatus = 'pending';
  organizationExists.hasPaid = false;
  await organizationExists.save();

  const onboardingData = {
    amountToPay: amountToPay,
    onboardingFee: organizationExists.organization_reg_fee,
    supSmsFee: supSmsFee,
    name: capitalizeWords(user.firstname),
    email: user.email,
    phone: user.phone,
    supBeneficiaryFee: supBeneficiaryFee,
    personalizationFee: personalizationFee,
    dataCollectionFee: dataCollectionFee,
    note: body.description
  };

  const mailData = {
    email: 'support@majfintech.com',
    subject: 'Onboarding Request',
    type: 'html',
    html: paymentVerificationMail(onboardingData).html,
    text: paymentVerificationMail(onboardingData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);

  if (!msgDelivered)
    throw new InternalServerError('server slip. Payment verification mail not sent');

  return true;
};

export const verifyForgotOtp = async ({ body }) => {
  const { code, hash, email } = body;

  let checkOrg = await organizationModel.findOne({ email: email });

  let user;

  if (!checkOrg) {
    user = await usersModels.findOne({ email });

    if (!user) throw new NotFoundError('User not found');

    checkOrg = await organizationModel.findById(user.sponsor_id);
  }

  const verifyOtp = verifyOTP(email, code, hash, env.otpKey);

  if (!verifyOtp) throw new InvalidError('Wrong otp code');

  const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');

  const hashPassword = await bcrypt.hash(generatePassword, 12);

  checkOrg.password = hashPassword;

  let userData = checkOrg.toJSON();
  if (user) {
    userData = { ...checkOrg.toJSON(), user_info: user };
  }

  // await checkOrg.save();

  const tokenEncryption = jwt.sign(
    { _id: checkOrg._id, email: checkOrg.email, user: userData },
    env.jwt_key
  );

  return { tokenEncryption };
};

export const findOrganizationById = async (id) => {
  const admin = await organizationModel.findById(id);
  if (admin) return admin;

  return false;
};

export const findUserById = async (id) => {
  const user = await usersModels.findById(id).populate('role_id');

  if (!user) return false;

  return user;
};

export const onboardNewOrganizationBeneficiary = async ({ body, user }) => {
  // return {user}
  // check if user info exists on the user if ot then a sponsor but when true it is a user
  // check organization count
  if (user.total_number_of_beneficiaries_created >= user.total_number_of_beneficiaries_chosen)
    throw new BadRequestError(
      `Chosen beneficiaries count cannot be greater than ${user.total_number_of_beneficiaries_chosen}`
    );
  // check if user is already here
  const filter = { organization_id: user._id };

  if (body.contact.email) {
    filter['contact.email'] = body.contact.email;

    const checkMember = await organizationBeneficiaryModel.findOne({
      ...filter
    });

    if (checkMember) throw new BadRequestError('Beneficiary already exists');
  }

  if (body.contact.phone) {
    filter['contact.phone'] = body.contact.phone;

    delete filter['contact.email'];

    const checkMember = await organizationBeneficiaryModel.findOne({
      ...filter
    });

    if (checkMember) throw new BadRequestError('Beneficiary already exists');
  }

  const checkMember = await organizationBeneficiaryModel.findOne({
    ...filter
  });

  if (checkMember) throw new BadRequestError('Beneficiary already exists');
  const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');
  const beneficiaryUniqueId = `${user.firstname.substring(0, 3).toUpperCase()}${await codeGenerator(
    7,
    'ABCDEFGHIJKLMN1234567890'
  )}`;

  const data = {
    organization_id: user._id,
    password: await bcrypt.hash(generatePassword, 12),
    member_unique_id: beneficiaryUniqueId,
    ...body
  };

  const createBeneficiary = await organizationBeneficiaryModel.create(data);

  if (!createBeneficiary) throw new InternalServerError('server slip. Please try again in bit');

  if (user.user_info) {
    const sponsorAcct = await organizationModel.findById(user.user_info.sponsor_id);
    if (sponsorAcct) {
      sponsorAcct.total_number_of_beneficiaries_created += 1;
      await sponsorAcct.save();
    } else {
      throw new Error('Sponsor account not found');
    }
  } else {
    user.total_number_of_beneficiaries_created += 1;
    await user.save();
  }

  // if (validator.isEmail(body.contact.email)) {
  //   // send beneficiary login credentials
  //   const onboardingData = {
  //     email: createBeneficiary.contact.email,
  //     name_of_cooperation: user.firstname,
  //     name: createBeneficiary.personal.member_name,
  //     password: generatePassword,
  //     company_code: user.company_code
  //   };
  //   const mailData = {
  //     email: createBeneficiary.contact.email,
  //     subject: 'BENEFICIARY ONBOARDING',
  //     type: 'html',
  //     html: beneficaryOnboardinMail(onboardingData).html,
  //     text: beneficaryOnboardinMail(onboardingData).text
  //   };
  //   const msg = await formattMailInfo(mailData, env);

  //   const msgDelivered = await messageBird(msg);
  //   if (!msgDelivered)
  //     throw new InternalServerError('server slip. Beneficiary was created without mail being sent');
  // }

  // create notification
  await notificationsModel.create({
    note: `You have successfully onboarded ${body.personal.member_name} as a new beneficary`,
    type: 'creation',
    who_is_reading: 'sponsor',
    compliment_obj: { status: 'pending' },
    organization_id: user._id
  });

  return true;
};

export const setOrganizationPreferences = async ({ body, user }) => {
  user.preferences = body.preferences;
  user.isPreferenceSet = true;
  await user.save();

  return true;
};

export const setOrganizationPackageData = async ({ body, user }) => {
  const organizationExists = await organizationModel.findById(user._id);
  if (!organizationExists) {
    throw new BadRequestError("Sponsor doesn't exist!");
  }

  if (organizationExists.hasPaid) {
    throw new BadRequestError('Package already paid!');
  }

  let amountToPay = 0;
  let supSmsFee = 0;
  let supBeneficiaryFee = 0;
  let personalizationFee = 0;
  let dataCollectionFee = 0;

  if (!organizationExists.hasPaid) {
    amountToPay += plans.sponsor_onboarding_settings.organization_reg_fee;
    organizationExists.organization_reg_fee =
      plans.sponsor_onboarding_settings.organization_reg_fee;
  }
  if (body.psdAgreement && !organizationExists.hasPaid_personalization_fee) {
    amountToPay += plans.sponsor_onboarding_settings.personalization_fee;
    personalizationFee = plans.sponsor_onboarding_settings.personalization_fee;
    organizationExists.psdAgreement = true;
    organizationExists.personalization_fee = plans.sponsor_onboarding_settings.personalization_fee;
  }
  organizationExists.total_number_of_beneficiaries_chosen =
    body.total_number_of_beneficiaries_chosen;
  if (body.total_number_of_beneficiaries_chosen > plans.sponsor_onboarding_settings.max_users) {
    supBeneficiaryFee =
      body.total_number_of_beneficiaries_chosen - plans.sponsor_onboarding_settings.max_users;
    amountToPay += supBeneficiaryFee;
  }
  organizationExists.total_number_of_sms = body.total_number_of_sms;
  if (body.total_number_of_sms > plans.sponsor_onboarding_settings.max_sms) {
    supSmsFee =
      (body.total_number_of_sms - plans.sponsor_onboarding_settings.max_sms) *
      plans.sponsor_onboarding_settings.sup_sms_fee;
    amountToPay += supSmsFee;
  }
  if (body.data_collection_quantity > 0) {
    organizationExists.data_collection_quantity = body.data_collection_quantity;
    dataCollectionFee =
      body.data_collection_quantity * plans.sponsor_onboarding_settings.data_collection_fee;
    amountToPay += dataCollectionFee;
  }
  organizationExists.isPackageBuilt = true;
  organizationExists.paymentstatus = 'undefined';
  organizationExists.hasPaid = false;

  await organizationExists.save();

  return {
    organization_reg_fee: plans.sponsor_onboarding_settings.organization_reg_fee,
    beneficiaries: {
      total_number_of_beneficiaries_chosen: body.total_number_of_beneficiaries_chosen,
      sup_beneficiary_fee: supBeneficiaryFee
    },
    sms: {
      total_number_of_sms: body.total_number_of_sms,
      sup_sms_fee: supSmsFee
    },
    personalization: {
      psdAgreement: body.psdAgreement,
      personalization_fee: personalizationFee
    },
    data_collection: {
      data_collection_quantity: body.data_collection_quantity,
      data_collection_fee: dataCollectionFee
    },
    total_amount: amountToPay
  };
};

export const uploadOrganizationBeneficiariesInBulk = async ({ user, file, body }) => {
  if (!body.batch_no) throw new BadRequestError('Please this upload requires a batch number');

  const workbook = XLSX.readFile(file.path);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const header = [
    'first_name',
    'last_name',
    'gender',
    'marital_status',
    'nationality',
    'state_of_origin',
    'language',
    'lga',
    'country_of_residence',
    'state_of_residence',
    'resident_address',
    'city_of_residence',
    'phone',
    'email',
    'bank_name',
    'acct_name',
    'bank_code',
    'acct_number',
    'has_paid'
  ];

  let result = XLSX.utils.sheet_to_json(worksheet, {
    header,
    raw: true
  });

  result = result.slice(1);

  let batchList = [];
  const errorLogs = [];

  for (let beneficiary of result) {
    beneficiary.name = beneficiary.first_name + ' ' + beneficiary.last_name;
    let comment;

    const filter = { organization_id: user._id, $or: [] };

    if (beneficiary.email) {
      filter['$or'].push({ 'contact.email': beneficiary.email });
    }

    if (beneficiary.phone) {
      filter['$or'].push({ 'contact.phone': beneficiary.phone });
    }

    // Check if beneficiary already exists with either email or phone number
    const beneficiaryExists = await organizationBeneficiaryModel.findOne({
      ...filter
    });
    if (beneficiaryExists) {
      errorLogs.push({
        comment: `${beneficiary.name} is already part of this organization`,
        code: 422,
        batch_no: body.batch_no
      });
      continue;
    }

    // Check if batch already exists with either email or phone number
    const batchExist = await beneficiaryBatchUploadModel.findOne({
      ...filter
    });
    if (batchExist) {
      errorLogs.push({
        comment: `${beneficiary.name} was already uploaded with batch ${batchExist.batch_no}`,
        code: 422,
        batch_no: batchExist.batch_no,
        id: batchExist._id
      });
      continue;
    }

    const batchListData = {
      personal: {
        member_name: beneficiary.name,
        gender: beneficiary.gender,
        marital_status: beneficiary.marital_status,
        nationality: beneficiary.nationality,
        state_of_origin: beneficiary.state_of_origin,
        language: beneficiary.language,
        lga: beneficiary.lga
      },
      contact: {
        country_of_residence: beneficiary.country_of_residence,
        state: beneficiary.state_of_residence,
        phone: String(beneficiary.phone),
        email: beneficiary.email,
        city: beneficiary.city_of_residence,
        resident_address: beneficiary.resident_address
      },
      bank_details: {
        bank: {
          bank_name: beneficiary?.bank_name || '',
          acct_name: beneficiary?.acct_name || '',
          bank_code: beneficiary?.bank_code || '',
          acct_number: beneficiary?.acct_number || ''
        }
      },
      organization_id: user._id,
      batch_no: body.batch_no,
      batch_no_id: `${body.batch_no}-${await codeGenerator(6, 'ABCDEFGHIJ1234567890')}`,
      has_paid: beneficiary.has_paid?.toLowerCase() === 'yes',
      reg_fee: user.reg_fee,
      comment: 'available'
    };

    batchList.push(batchListData);
  }

  const count = batchList.length + user.total_number_of_beneficiaries_created;
  const amountLeft =
    user.total_number_of_beneficiaries_chosen - user.total_number_of_beneficiaries_created;
  if (count > user.total_number_of_beneficiaries_chosen) {
    throw new Error(`Beneficiaries in Sponsor left to be created is ${amountLeft} beneficiaries`);
  }

  const createBatchList = await beneficiaryBatchUploadModel.insertMany(batchList);
  if (!createBatchList) throw new InternalServerError('Server slip, Please try again later');

  // Get current date
  const currentDate = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const formattedDate = `${currentDate.getDate()} ${
    monthNames[currentDate.getMonth()]
  } ${currentDate.getFullYear()}`;

  // Create email profile here
  const bulkUpload = {
    email: user.email,
    name_of_cooperation: user.firstname,
    number_uploaded: batchList.length,
    date: formattedDate
  };
  const mailData = {
    email: bulkUpload.email,
    subject: 'CONFIRMATION OF BULK BENEFICIARY UPLOAD',
    type: 'html',
    html: beneficiaryBulkUpload(bulkUpload).html,
    text: beneficiaryBulkUpload(bulkUpload).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('Server slip. Bulk Upload was made without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully bulk uploaded ${batchList.length} beneficiaries`,
    type: 'bulk_upload',
    who_is_reading: 'sponsor',
    compliment_obj: { status: 'pending' },
    organization_id: user._id
  });

  return { errorLogs, createBatchList };
};

export const fetchPreferencesData = async () => {
  const categories = await ProductCategoryModel.find({ is_active: true });
  const occupations = await OccupationModel.find({ is_active: true });

  return { categories: categories, occupations: occupations };
};

export const onboardingPayment = async ({ user, body }) => {
  let amountToPay = body.total_amount;

  if (plans.sponsor_onboarding_settings.organization_reg_fee !== body.organization_reg_fee)
    throw new BadRequestError(`Amount for selected Models will be ${amount}`);

  let paystackAmount = 0.02 * amountToPay;
  if (paystackAmount >= 2000) paystackAmount = 2000;

  amountToPay = (amountToPay + paystackAmount) * 100;

  const data = {
    amount: amountToPay,
    email: user.email,
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_org}/home`
        : `${env.prod_base_url_org}/home`,
    metadata: {
      full_name: user.firstname + ' ' + user.lastname,
      phone: user.phone,
      userId: user._id,
      package: body,
      amountToPay,
      on_trial: false,
      paystackFee: paystackAmount,
      hasPaid: true,
      acctstatus: 'active',
      type: 'sponsor-onboarding'
    }
  };

  return new Promise(async (resolve, reject) => {
    try {
      initializePayment(data, (error, body) => {
        if (error) {
          reject(new BadRequestError(error.message));
        }
        const response = JSON.parse(body);
        return resolve({ gateway: response.data.authorization_url });
      });
    } catch (error) {
      return reject(new BadRequestError(error.message));
    }
  });
};

export const onboardingPaymentInfo = async ({ user, params }) => {
  let { trxref, reference } = params;
  // check if user is already here
  const checkPayment = await paymentModel.findOne({
    $or: [{ reference: reference }, { trxref: trxref }]
  });

  if (checkPayment) return { checkPayment };

  return new Promise(async (resolve, reject) => {
    try {
      verifyPayment(reference, async (error, body) => {
        if (error) {
          reject(new BadRequestError(error.message));
        }
        const response = JSON.parse(body);
        const { status } = response.data ? response.data : response;
        if (status == 'success' && response.data.metadata?.full_name) {
          const { email } = response.data.customer;
          const full_name = response.data.metadata.full_name;
          const phone = response.data.metadata.phone;
          const trxid = response.data.id;
          const paid_at = response.data.paid_at;
          const trxfee = response.data.metadata.paystackFee;
          const channel = response.data.channel;
          const currency = response.data.currency;
          const metadata = response.data.metadata;
          const amount = parseInt(response.data.amount) / 100;
          const operation = 'onboarding';
          let newPayment = {
            full_name,
            email,
            phone,
            amount,
            reference,
            trxid,
            trxref,
            trxfee,
            operation,
            metadata,
            channel,
            currency,
            paid_at,
            status
          };
          const payment = paymentModel.create(newPayment);

          const checkIfOnboarded = await organizationModel.findOne({ email: email });
          if (checkIfOnboarded) {
            checkIfOnboarded.hasPaid = true;
            if (metadata.package.personalization.psdAgreement) {
              checkIfOnboarded.hasPaid_personalization_fee = true;
            }

            checkIfOnboarded.paymentstatus = 'paid';
            await checkIfOnboarded.save();
          }
          return resolve(payment);
        }
        return reject(new BadRequestError(response.message));
      });
    } catch (error) {
      return reject(new BadRequestError(error.message));
    }
  });
};

export const whatsappApiData = async ({ user, params }) => {
  const organizationExists = await organizationModel.findById(user._id);
  if (!organizationExists) {
    throw new BadRequestError("Sponsor doesn't exist!");
  }

  if (organizationExists.hasPaid || organizationExists.paymentstatus == 'paid') {
    throw new BadRequestError('Sponsor already paid!');
  }

  organizationExists.paymentstatus = 'pending';
  organizationExists.hasPaid = false;
  await organizationExists.save();

  return {
    whatsapUrl: `https://wa.me/+2347070701163?text=Hello%2C%20please%20can%20I%20make%20enquiry%20about%20subscription%20payment%3F`
  };
};

export const downloadReceipt = async ({ user, reference }) => {
  let receipt;

  receipt = await paymentModel.findOne({ reference: reference });

  if (fs.existsSync(`files/${receipt.reference}.pdf`)) {
    fs.unlink(`files/${receipt.reference}.pdf`, (err) => {
      if (err) console.log(err.message);
    });
  }

  if (!receipt) throw new BadRequestError('Payment reference not found');

  let receiptData = receipt.metadata[0];
  let totalAmount = receipt.amount;

  let parts = Array();
  if (parseInt(receiptData.package.organization_reg_fee) > 0) {
    parts.push([
      {
        value: 'Registration fee'
      },
      {
        value: 1
      },
      {
        value: receiptData.package.organization_reg_fee,
        price: true
      }
    ]);
  }

  if (parseInt(receiptData.package.beneficiaries.sup_beneficiary_fee) > 0) {
    parts.push([
      {
        value: 'Additional Beneficiaries fee'
      },
      {
        value:
          receiptData.package.beneficiaries.total_number_of_beneficiaries_chosen -
          plans.sponsor_onboarding_settings.max_users
      },
      {
        value: receiptData.package.beneficiaries.sup_beneficiary_fee,
        price: true
      }
    ]);
  }

  if (parseInt(receiptData.package.sms.sup_sms_fee) > 0) {
    parts.push([
      {
        value: 'Additional SMS fee'
      },
      {
        value:
          receiptData.package.sms.total_number_of_sms - plans.sponsor_onboarding_settings.max_sms
      },
      {
        value: receiptData.package.sms.sup_sms_fee,
        price: true
      }
    ]);
  }

  if (parseInt(receiptData.package.personalization.personalization_fee) > 0) {
    parts.push([
      {
        value: 'Personalization fee'
      },
      {
        value: 1
      },
      {
        value: receiptData.package.personalization.personalization_fee,
        price: true
      }
    ]);
  }

  if (parseInt(receiptData.package.data_collection.data_collection_fee) > 0) {
    parts.push([
      {
        value: 'Data collection fee'
      },
      {
        value: receiptData.package.data_collection.data_collection_quantity
      },
      {
        value: receiptData.package.data_collection.data_collection_fee,
        price: true
      }
    ]);
  }

  parts.push([
    {
      value: 'Transaction fee'
    },
    {
      value: 1
    },
    {
      value: receipt.trxfee,
      price: true
    }
  ]);
  // Create the new invoice
  let myInvoice = new Microinvoice({
    style: {
      header: {
        image: {
          path: `./src/utils/akilaahlogo.png`,
          width: 100,
          height: 36
        }
      }
    },
    data: {
      invoice: {
        name: 'Invoice',

        header: [
          {
            label: 'Invoice Number',
            value: receipt.trxid
          },
          {
            label: 'Status',
            value: 'Paid'
          },
          {
            label: 'Date',
            value: new Date(receipt.paid_at)
              .toISOString()
              .replace(/T/, ' ') // replace T with a space
              .replace(/\..+/, '')
          }
        ],

        currency: 'NGN',

        customer: [
          {
            label: 'Bill To',
            value: [
              receipt.full_name,
              'Akilaah Client',
              receipt.email,
              receipt.phone,
              '',
              'Nigeria'
            ]
          }
        ],

        seller: [
          {
            label: 'Bill From',
            value: [
              'Akilaah',
              '+234 0707 01163',
              'NICON Plaza (5th Floor) Left wing, Mohammadu Buhari Way',
              'Central Business District Abuja, Nigeria',
              'support@majfintech.com'
            ]
          }
        ],

        legal: [
          {
            value: 'Thanks for your purchase!',
            weight: 'bold',
            color: 'primary'
          },
          {
            value:
              'Once again, welcome to AKILAAH! We look forward to achieving great things together',
            weight: 'bold',
            color: 'secondary'
          }
        ],

        details: {
          header: [
            {
              value: 'Description'
            },
            {
              value: 'Quantity'
            },
            {
              value: 'Subtotal'
            }
          ],

          parts: parts,

          total: [
            {
              label: 'Total',
              value: totalAmount,
              price: true
            }
          ]
        }
      }
    }
  });

  // Render invoice as PDF

  // Render invoice as PDF
  if (fs.existsSync(`files/${receipt.reference}.pdf`)) {
    return `files/${receipt.reference}.pdf`;
  } else {
    let response = await myInvoice.generate(`files/${receipt.reference}.pdf`);
    if (response) {
      return `files/${receipt.reference}.pdf`;
    }
    throw new BadRequestError('Unable to download receipt');
  }
};

export const inviteBeneficiary = async ({ beneficiary_ids = [], user }) => {
  try {
    for (const beneficiary_id of beneficiary_ids) {
      const beneficiary = await organizationBeneficiaryModel.findById(beneficiary_id);
      if (!beneficiary) continue;
      if (['invite', 'active', 'declined', 'suspended'].includes(beneficiary.acctstatus)) {
        throw new DuplicateError('already invited');
      }

      // Generate a new password
      const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');

      // Hash the new password
      const hashedPassword = await bcrypt.hash(generatePassword, 12);

      // Update the beneficiary's password in the database with the hashed password
      const updatedUser = await organizationBeneficiaryModel.findByIdAndUpdate(beneficiary_id, {
        password: hashedPassword
      });

      const invitationData = {
        name: capitalizeWords(beneficiary.personal.member_name),
        email: beneficiary.contact.email,
        name_of_cooperation: capitalizeWords(`${user.firstname} ${user.lastname}`),
        company_code: user.company_code,
        password: generatePassword
      };

      if (beneficiary.contact.email) {
        const mailData = {
          email: beneficiary.contact.email,
          subject: 'Welcome to AKILAAH - Your Login Details',
          type: 'html',
          html: invitationMail(invitationData).html,
          text: invitationMail(invitationData).text
        };

        const msg = await formattMailInfo(mailData, env);

        const msgDelivered = await messageBird(msg);

        if (!msgDelivered) {
          throw new InternalServerError('Server error. Invitation email not sent');
        }
        // Update acctstatus to 'invite' after sending the invitation
      } else {
        const smsUrl = env.termii_api_url + '/api/sms/send';
        const smsData = {
          to: beneficiary.contact.phone,
          from: env.termii_sender_id,
          sms: `Hi there, you have invited by ${invitationData.name_of_cooperation}\n use COMPANY CODE ${invitationData.company_code} and PASSWORD ${generatePassword} to login into https://beneficiary.akilaah.com`,
          type: 'plain',
          api_key: env.termii_api_secret,
          channel: 'generic'
        };

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        await axios.post(smsUrl, smsData, config);
      }

      // Update acctstatus to 'invite' after sending the invitation
      await organizationBeneficiaryModel.findByIdAndUpdate(beneficiary_id, {
        acctstatus: 'invite'
      });
    }

    return { success: true };
  } catch (error) {
    console.error('Error in inviteBeneficiary:', error.message);
    throw new InternalServerError(error.message);
  }
};

export const slugPersonalization = async ({ slug }) => {
  const organization = await organizationModel.findOne({ slug }).select({ _id: 1 });

  if (!organization) throw new BadRequestError('Sponsor not found');

  const personalization = await personalizationModel
    .findOne({ sponsor_id: organization._id })
    .select({ brand_info: 1 });

  if (!personalization) throw new BadRequestError('Personalization not found');

  if (personalization.has_paid === false)
    throw new BadRequestError('Your Personalization is not paid, Login through the normal route.');

  return personalization;
};
