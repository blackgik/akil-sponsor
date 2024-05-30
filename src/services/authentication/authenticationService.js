import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import XLSX from 'xlsx';
import axios from 'axios';
import env from '../../config/env.js';
import organizationModel, { buildOrganizationSchema } from '../../models/organizationModel.js';
import ProductCategoryModel from '../../models/products/ProductCategoryModel.js';
import OccupationModel from '../../models/occupations/occupationModel.js';
import {
  forgotPasswordMail,
  paymentVerificationMail,
  verifyOnbordingMail,
  beneficiaryBulkUpload,
  onboardinMail,
  invitationMail
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

  return { code: otp, hash: otpHash, email: createOrganizationProfile.email };
};

export const resendOtp = async (body) => {
  //const hash = await argon.hash(dto.password);
  const checkIfNotVerified = await organizationModel.findOne({ email: body.email });

  if (!checkIfNotVerified) throw new BadRequestError('Account not found!');

  // if (checkIfNotVerified.isApproved) throw new BadRequestError('Account already verified! Login!');

  const otp = await codeGenerator(6);

  const otpHash = buildOtpHash(checkIfNotVerified.email, otp, env.otpKey, 15);

  // checkIfNotVerified.otpHash = otpHash;
  // checkIfNotVerified.otp = otp;

  // await checkIfNotVerified.save();

  //create email profile here
  const onboardingData = {
    name: checkIfNotVerified.firstname + ' ' + checkIfNotVerified.lastname,
    code: otp
  };
  const mailData = {
    email: checkIfNotVerified.email,
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
      'server slip. Organization was created without mail being sent',
      ''
    );

  return { code: otp, hash: otpHash, email: checkIfNotVerified.email };
};

export const verifyEmail = async (body) => {
  const { code, hash, email } = body;

  const checkAcct = await organizationModel.findOne({ email: email });

  if (!checkAcct) throw new BadRequestError('User not found');

  const verifyOtp = verifyOTP(checkAcct.email, code, hash, env.otpKey);

  if (!verifyOtp) throw new BadRequestError('Invalid Input');

  checkAcct.isApproved = true;
  checkAcct.acctstatus = 'active';

  await checkAcct.save();

  //create email profile here
  const onboardingData = {
    email: checkAcct.email,
    company_code: checkAcct.company_code,
    name_of_cooperation: checkAcct.firstname + ' ' + checkAcct.lastname
  };

  const mailData = {
    email: checkAcct.email,
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
      'server slip. Organization was created without mail being sent',
      ''
    );
  const admin = checkAcct.toJSON();
  admin.onboardingSetting = plans.sponsor_onboarding_settings;
  const encrypedDataString = await encryptData({
    data2encrypt: { ...admin },
    pubKey: env.public_key
  });

  const tokenEncryption = jwt.sign(
    { _id: admin._id, email: admin.email, user: checkAcct },
    env.jwt_key
  );

  return { encrypedDataString, tokenEncryption };
};

export const loginOrganization = async (body) => {
  const { email, password } = body;
  const checkOrg = await organizationModel.findOne({ email });

  if (!checkOrg) throw new BadRequestError('Invalid Sponsor');

  if (!checkOrg.isApproved) throw new BadRequestError('Account not verified');

  const isMatch = await bcrypt.compare(password, checkOrg.password);

  if (!isMatch) throw new BadRequestError('Invalid Sponsor');

  const admin = checkOrg.toJSON();
  admin.onboardingSetting = plans.sponsor_onboarding_settings;
  const is_first_time = checkOrg.is_first_time;

  if (checkOrg.is_first_time === true) {
    checkOrg.is_first_time = false;

    await checkOrg.save();
  }

  const encrypedDataString = await encryptData({
    data2encrypt: { ...admin, is_first_time },
    pubKey: env.public_key
  });

  const tokenEncryption = jwt.sign(
    { _id: admin._id, email: admin.email, user: admin },
    env.jwt_key
  );

  return { encrypedDataString, tokenEncryption };
};

export const forgotPassword = async ({ body }) => {
  const checkOrg = await organizationModel.findOne({ email: body.email });
  if (!checkOrg) {
    return {};
  }

  const newPassword = await codeGenerator(6);

  const hash = buildOtpHash(body.email, newPassword, env.otpKey, 15);

  checkOrg.password = hash;

  checkOrg.save();

  const onboardingData = {
    name: checkOrg.firstname + ' ' + checkOrg.lastname,
    code: newPassword
  };

  const mailData = {
    email: checkOrg.email,
    subject: 'PASSWORD RESET REQUEST',
    type: 'html',
    html: forgotPasswordMail(onboardingData).html,
    text: forgotPasswordMail(onboardingData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);

  if (!msgDelivered) throw new InternalServerError('server slip. Reset Password code not sent');

  // return { email: checkBeneficiary.email };
  return { hash: hash, email: checkOrg.email };
};

export const resetPassword = async ({ body, user }) => {
  const { password } = body;
  const email = user.email;

  const checkOrg = await organizationModel.findOne({ email });
  if (!checkOrg) throw new NotFoundError('Sponsor not found');

  const hashPassword = await bcrypt.hash(password, 12);

  checkOrg.password = hashPassword;

  await checkOrg.save();

  return true;
};


export const sendSponsorEmail = async ({ body, user }) => {

  const onboardingData = {
    name: user.firstname + ' ' + user.lastname,
    data: body
  };

  const mailData = {
    email: 'ask@akilaah.com',
    subject: 'Payment Verification',
    type: 'html',
    html: paymentVerificationMail(onboardingData).html,
    text: paymentVerificationMail(onboardingData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);

  if (!msgDelivered) throw new InternalServerError('server slip. Payment verification mail not sent');

  return true;
};

export const verifyForgotOtp = async ({body}) => {

  const { code, hash, email } = body;

  const checkOrg = await organizationModel.findOne({ email: email });
  if (!checkOrg) throw new NotFoundError('Sponsor not found');

  const verifyOtp = verifyOTP(email, code, hash, env.otpKey);

  if (!verifyOtp) throw new InvalidError('Wrong otp code');

  const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');

  const hashPassword = await bcrypt.hash(generatePassword, 12);

  checkOrg.password = hashPassword;

  // await checkOrg.save();

  const tokenEncryption = jwt.sign(
    { _id: checkOrg._id, email: checkOrg.email, user: checkOrg },
    env.jwt_key
  );

  return { tokenEncryption };
};

export const findOrganizationById = async (id) => {
  const admin = await organizationModel.findById(id);
  if (admin) return admin;

  return false;
};

export const onboardNewOrganizationBeneficiary = async ({ body, user }) => {
  // check organization count
  if (user.total_number_of_beneficiaries_created >= user.total_number_of_beneficiaries_chosen)
    throw new BadRequestError(
      `Chosen beneficiaries count cannot be greater than ${user.total_number_of_beneficiaries_chosen}`
    );
  // check if user is already here
  const filter = { organization_id: user._id };

  if (body.email) {
    filter['contact.email'] = body.email;

    const checkMember = await organizationBeneficiaryModel.findOne({
      ...filter
    });

    if (checkMember) throw new BadRequestError('Beneficiary already exists');
  }

  if (body.phone) {
    filter['contact.phone'] = body.phone;

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
  const beneficiaryUniqueId = `${user.name_of_cooperation
    .substring(0, 3)
    .toUpperCase()}${await codeGenerator(7, 'ABCDEFGHIJKLMN1234567890')}`;

  const data = {
    organization_id: user._id,
    password: await bcrypt.hash(generatePassword, 12),
    beneficiary_unique_id: beneficiaryUniqueId,
    ...body
  };

  const createBeneficiary = await organizationBeneficiaryModel.create(data);

  if (!createBeneficiary) throw new InternalServerError('server slip. Please try again in bit');

  user.total_number_of_beneficiaries_created += 1;

  await user.save();

  if (validator.isEmail(body.contact.email)) {
    // send beneficiary login credentials
    const onboardingData = {
      email: createBeneficiary.contact.email,
      name_of_cooperation: user.name_of_cooperation,
      password: generatePassword,
      company_code: user.company_code
    };
    const mailData = {
      email: createBeneficiary.contact.email,
      subject: 'BENEFICIARY ONBOARDING',
      type: 'html',
      html: onboardinMail(onboardingData).html,
      text: onboardinMail(onboardingData).text
    };
    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError('server slip. Beneficiary was created without mail being sent');
  }

  // create notification for beneficiary
  await notificationsModel.create({
    note: `You have been successfully onboarded to  ${user.name_of_cooperation}`,
    who_is_reading: 'beneficiary',
    compliment_obj: { status: 'pending' },
    organization_id: user._id,
    beneficiary_id: createBeneficiary._id
  });

  return true;
};

export const setOrganizationPreferences = async ({ body, user }) => {
  const organizationExists = await organizationModel.findById(user._id);
  if (!organizationExists) {
    throw new BadRequestError("Organization doesn't exist!");
  }

  organizationExists.preferences = body.preferences;
  organizationExists.isPreferenceSet = true;
  await organizationExists.save();

  return true;
};

export const setOrganizationPackageData = async ({ body, user }) => {
  const organizationExists = await organizationModel.findById(user._id);
  if (!organizationExists) {
    throw new BadRequestError("Organization doesn't exist!");
  }

  if (organizationExists.hasPaid || isPackageBuilt) {
    throw new BadRequestError("Package already paid!");
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
  if (body.total_number_of_beneficiaries_chosen > plans.sponsor_onboarding_settings.max_users) {
    organizationExists.total_number_of_beneficiaries_chosen =
      body.total_number_of_beneficiaries_chosen;
    supBeneficiaryFee =
      body.total_number_of_beneficiaries_chosen - plans.sponsor_onboarding_settings.max_users;
    amountToPay += supBeneficiaryFee;
  }
  if (body.total_number_of_sms > plans.sponsor_onboarding_settings.max_sms) {
    organizationExists.total_number_of_sms = body.total_number_of_sms;
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
  organizationExists.paymentstatus ='pending';

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
    'name',
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

  for (let member of result) {
    let comment;
    // check if email address is already available
    const memberExists = await organizationBeneficiaryModel.findOne({
      'contact.email': member.email,
      organization_id: user._id
    });

    comment = memberExists ? 'Member is already part of this organization' : 'available';

    const batchExist = await beneficiaryBatchUploadModel.findOne({
      'contact.email': member.email,
      organization_id: user._id
    });

    if (batchExist) {
      comment = `User was already uploaded with batch ${batchExist.batch_no}`;
    }

    const batchListData = {
      personal: {
        member_name: member.name,
        gender: member.gender,
        marital_status: member.marital_status,
        nationality: member.nationality,
        state_of_origin: member.state_of_origin,
        language: member.language,
        lga: member.lga
      },
      contact: {
        country_of_residence: member.country_of_residence,
        state: member.state_of_residence,
        phone: String(member.phone),
        email: member.email,
        city: member.city_of_residence,
        resident_address: member.resident_address
      },
      bank_details: {
        bank: {
          bank_name: member?.bank_name || '',
          acct_name: member?.acct_name || '',
          bank_code: member?.bank_code || '',
          acct_number: member?.acct_number || ''
        }
      },
      organization_id: user._id,
      batch_no: body.batch_no,
      batch_no_id: `${body.batch_no}-${await codeGenerator(6, 'ABCDEFGHIJ1234567890')}`,
      has_paid: member?.has_paid?.toLowerCase === 'yes' ? true : false,
      reg_fee: user.reg_fee,
      comment
    };

    batchList.push(batchListData);
  }

  const count = batchList.length + user.total_number_of_members_created;
  const amountLeft = user.total_number_of_members_chosen - user.total_number_of_members_created;
  if (count > user.total_number_of_members_chosen)
    throw new Error(`Members in Organization left to be created is ${amountLeft} members`);

  const createBatchList = await beneficiaryBatchUploadModel.insertMany(batchList);

  // Get current date
  const currentDate = new Date();

  // Define month names
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

  // Format date as "day, month, year"
  const formattedDate = `${currentDate.getDate()}, ${
    monthNames[currentDate.getMonth()]
  }, ${currentDate.getFullYear()}`;

  //create email profile here
  const bulkUpload = {
    email: user.email,
    name_of_cooperation: user.name_of_cooperation,
    number_uploaded: batchList.length,
    date: formattedDate
  };
  const mailData = {
    email: user.email,
    subject: 'CONFIRMATION OF BULK MEMBER UPLOAD',
    type: 'html',
    html: memberBulkUpload(bulkUpload).html,
    text: memberBulkUpload(bulkUpload).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Bulk Upload was made without mail being sent');

  if (!createBatchList) throw new InternalServerError('server slip, Please try again later');

  return true;
};


export const fetchBankCode = async ({ bank_code }) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.flutterwave_secret_key}`
    }
  };

  const bnkcodeurl = `${env.flutterwave_api_key}/banks/${bank_code}`;

  const response = await axios.get(bnkcodeurl, config);

  return { codes: response.data.data };
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
  if (paystackAmount >= 2000) paystackAmount = 4000;

  amountToPay = (amountToPay + paystackAmount) * 100;

  const data = {
    amount: amountToPay,
    email: user.email,
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_org}/onboarding/success-payment`
        : `${env.prod_base_url_org}/onboarding/success-payment`,
    metadata: {
      userId: user._id,
      package: body,
      amountToPay,
      on_trial: false,
      hasPaid: true,
      acctstatus: 'active'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const gateway = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${env.paystack_secret_key}`,
      'Content-Type': 'application/json'
    }
  });

  return { gateway: gateway.data.data.authorization_url };
};

export const onboardingPaymentInfo = async ({ user, params }) => {
  let { trxref, reference } = params;
  // check if user is already here
  const checkPayment = await paymentModel.findOne({
    $or: [{ reference: reference }, { trxref: trxref }]
  });
  if (checkPayment) return {checkPayment};
  const url = `${env.paystack_api_url}/transaction/verify/` + encodeURIComponent(reference);

  const result = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${env.paystack_secret_key}`,
      'Content-Type': 'application/json'
    }
  });

  const response = JSON.parse(result);
  const { amount, status } = response.data;
  const { email } = response.data.customer;
  const full_name = response.data.metadata.full_name;
  const operation = 'onboarding';
  const newPayment = { full_name, email, amount, reference, trxref, operation, status };
  const payment = Payment.create(newPayment);

  const checkIfOnboarded = await organizationModel.findOne({ email: email });
  checkIfOnboarded.hasPaid = true;
  checkIfOnboarded.hasPaid_personalization_fee = true;
  checkIfOnboarded.paymentstatus ='paid'
  await checkIfOnboarded.save();

  return { payment };
};

export const addModules = async ({ user, body }) => {
  if (user.acctstatus !== 'active') throw new BadRequestError('Your account is not active');

  if (body?.modules && body?.modules.length > 0) {
    body.modules = [...new Set([...body.modules, ...user.modules])];
  } else {
    body.modules = [...user.modules];
  }
  const bodyLength = body.modules.length;
  const existing = user.modules.length;
  const diff = bodyLength - existing;

  if (diff < 1) throw new BadRequestError('Add modules to proceed');

  const base_pay = 5 * diff;
  let total_pay = base_pay * user.total_number_of_beneficiaries_chosen;

  // check if its a yearly contribution.
  if (user.annual_plan) {
    const nowTime = new Date().getTime() / (1000 * 60 * 60 * 24 * 30);
    const endTime = new Date(user.end_trial_ts).getTime() / (1000 * 60 * 60 * 24 * 30);

    total_pay = endTime - nowTime > 1 ? (endTime - nowTime) * total_pay : total_pay;
  }

  total_pay = Math.ceil(total_pay);

  // if (body.amount !== total_pay) throw new BadRequestError(`Amount must be equal to ${total_pay}`);

  const charges = 0.02 * total_pay;
  total_pay = total_pay + charges;

  const data = {
    amount: Number(total_pay) * 100,
    email: user.email,
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_org}/login`
        : `${env.prod_base_url_org}/login`,
    metadata: {
      userId: user._id,
      modules: body.modules,
      diff,
      type: 'add_modules'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const gateway = await axios.post(url, data, {
    headers: {
      Authorization: `Bearer ${env.paystack_secret_key}`,
      'Content-Type': 'application/json'
    }
  });

  return { gateway: gateway.data.data.authorization_url };
};

export const inviteBeneficiary = async ({ beneficiary_ids = [], user }) => {
  let beneficiaries = [];

  if (beneficiary_ids.length > 0) {
    for (const id of beneficiary_ids) {
      const beneficiary = await organizationBeneficiaryModel.findById(id);
      if (!beneficiary) throw new NotFoundError(`Beneficiary with ID ${id} not found!`);
      beneficiaries.push(beneficiary);
    }
  } else {
    beneficiaries = await organizationBeneficiaryModel.find({});
    if (beneficiaries.length === 0) throw new NotFoundError('No beneficiaries found!');
  }

  for (const beneficiary of beneficiaries) {
    const invitationData = {
      firstname: beneficiary.firstname,
      lastname: beneficiary.lastname,
      email: beneficiary.email,
      sponsor: user.name_of_cooperation,
      company_code: user.company_code
    };

    const mailData = {
      email: beneficiary.email,
      subject: 'MAJFINTECH ONBOARDING',
      type: 'html',
      html: invitationMail(invitationData).html,
      text: invitationMail(invitationData).text
    };

    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);

    if (!msgDelivered) throw new InternalServerError('Server error. Invitation email not sent');
  }

  return { success: true };
};

export const slugPersonalization = async ({ slug }) => {
  const organization = await organizationModel.findOne({ slug }).select({ _id: 1 });

  if (!organization) throw new BadRequestError('Organization not found');

  const personalization = await personalizationModel
    .findOne({ sponsor_id: organization._id })
    .select({ brand_info: 1 });

  if (!personalization) throw new BadRequestError('Personalization not found');

  if (personalization.has_paid === false)
    throw new BadRequestError('Your Personalization is not paid, Login through the normal route.');

  return personalization;
};
