import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import XLSX from 'xlsx';
import axios from 'axios';
import env from '../../config/env.js';
import organizationModel, { buildOrganizationSchema } from '../../models/organizationModel.js';
import { forgotPasswordMail, beneficiaryBulkUpload, onboardinMail } from '../../config/mail.js';
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
import { finance } from '../../config/general.js';
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const accessTokenPrivateKey = fs.readFileSync(path.join(__dirname, '../../keys', 'accessTokenPrivateKey.key'), 'utf8')
const accessTokenPublicKey = fs.readFileSync(path.join(__dirname, '../../keys', 'accessTokenPublicKey.key.pub'), 'utf8')

export const onboardNewOrganization = async ({ body, dbConnection }) => {
  if (!body.tosAgreement) throw new BadRequestError(`Terms and conditions not met`);

  const checkIfOnboarded = await organizationModel.findOne({ email: body.email });
  if (checkIfOnboarded) throw new DuplicateError('Organization already exists');

  let { company_code, password, api_key_live, api_key_test } = await generateEnterpriseCredentials(
    body.name_of_cooperation
  );

  const HashedPassword = await bcrypt.hash(password, 12);

  const allowableIncreaseModules = ['basic', 'standard', 'premium', 'ultimate'];

  if (!body.reg_fee )
    throw new BadRequestError(`Beneficiary registration fee is required`);

  let organizationProfile = {
    ...body,
    company_code,
    password: HashedPassword,
    vault_access: {
      api_key_live,
      api_key_test
    },
    start_trial_ts: new Date(),
    end_trial_ts: new Date(new Date().getTime() + 1000 * 24 * 60 * 60 * 14)
  };


    const createOrganizationProfile = await organizationModel.create(organizationProfile);

    if (!createOrganizationProfile) throw new InternalServerError('Server is being maintained');

    //create email profile here
    const onboardingData = {
      email: createOrganizationProfile.email,
      name_of_cooperation: createOrganizationProfile.name_of_cooperation,
      password,
      company_code
    };
    const mailData = {
      email: createOrganizationProfile.email,
      subject: 'MAJFINTECH ONBOARDING',
      type: 'html',
      html: onboardinMail(onboardingData).html,
      text: onboardinMail(onboardingData).text
    };
    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError(
        'server slip. Organization was created without mail being sent'
      );


    if (env.node_env === 'production') {
      const createSecData = await dbConnection.model('Organization', buildOrganizationSchema);

      const secondDbData = {
        ...createOrganizationProfile.toJSON()
      };

      await createSecData.create(secondDbData);
    }
    return { profileData: createOrganizationProfile };
};

export const loginOrganization = async (body) => {
  const { email, password } = body;
  const checkOrg = await organizationModel.findOne({ email });

  if (!checkOrg) throw new InvalidError('Invalid organization');

  const isMatch = await bcrypt.compare(password, checkOrg.password);

  if (!isMatch) throw new InvalidError('Invalid organization');

  const admin = checkOrg.toJSON();
  const is_first_time = checkOrg.is_first_time;

  if (checkOrg.is_first_time === true) {
    checkOrg.is_first_time = false;

    await checkOrg.save();
  }

  const encrypedDataString = await encryptData({
    data2encrypt: { ...admin, is_first_time },
    pubKey: accessTokenPublicKey
  });

  const tokenEncryption = jwt.sign({ _id: admin._id, email: admin.email }, env.jwt_key);

  return { encrypedDataString, tokenEncryption };
};

export const forgotPassword = async ({ body }) => {
  const checkOrg = await organizationModel.findOne({ email: body.email });
  if (!checkOrg) throw new NotFoundError('Organization not found');

  const newPassword = await codeGenerator(6, '1234567890');

  const hash = buildOtpHash(body.email, newPassword, env.otpKey, 15);

  checkOrg.password = hash;

  checkOrg.save();

  const onboardingData = {
    name: checkOrg.name_of_cooperation,
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

export const resetPassword = async ({ body, email }) => {
  const { code, hash, password } = body;

  const checkOrg = await organizationModel.findOne({ email });
  if (!checkOrg) throw new NotFoundError('Organization not found');

  const verifyOtp = verifyOTP(email, code, hash, env.otpKey);
  if (!verifyOtp) throw new InvalidError('Wrong otp code');

  const hashPassword = await bcrypt.hash(password, 12);

  checkOrg.password = hashPassword;

  await checkOrg.save();

  return true;
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
  const checkBeneficiary = await organizationBeneficiaryModel.findOne({
    $or: [{ email: body.email }, { phone: body.phone }],
    organization_id: user._id
  });

  if (checkBeneficiary) throw new BadRequestError('Beneficiary already exists');

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

  // send beneficiary login credentials
  const onboardingData = {
    email: createBeneficiary.email,
    name_of_cooperation: user.name_of_cooperation,
    password: generatePassword,
    company_code: user.company_code
  };
  const mailData = {
    email: createBeneficiary.email,
    subject: 'BENEFICIARY ONBOARDING',
    type: 'html',
    html: onboardinMail(onboardingData).html,
    text: onboardinMail(onboardingData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Beneficiary was created without mail being sent');

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

export const uploadOrganizationBeneficiariesInBulk = async ({ user, file, body }) => {
  if (!body.batch_no) throw new BadRequestError('Please this upload requires a batch number');

  const workbook = XLSX.readFile(file.path);
  const worksheet = workbook.Sheets[workbook.SheetNames[0]];
  const header = [
    'firstname',
    'lastname',
    'othername',
    'phone',
    'email',
    'address',
    'gender',
    'country',
  ];

  let result = XLSX.utils.sheet_to_json(worksheet, {
    header,
    raw: true
  });

  result = result.slice(1);

  let batchList = [];

  for (let beneficiary of result) {
    let comment;
    // check if email address is already available
    const beneficiaryExists = await organizationBeneficiaryModel.findOne({
      email: beneficiary.email,
      organization_id: user._id
    });

    comment = beneficiaryExists ? 'Beneficiary is already part of this organization' : 'available';

    const batchExist = await beneficiaryBatchUploadModel.findOne({
      email: beneficiary.email,
      organization_id: user._id
    });

    if (batchExist) {
      comment = `User was already uploaded with batch ${batchExist.batch_no}`;
    }

    const batchListData = {
      firstname: beneficiary.firstname,
      lastname: beneficiary.lastname,
      othername: beneficiary.othername,
      phone:beneficiary.phone,
      email: beneficiary.email,
      address: beneficiary.address,
      gender: beneficiary.gender,
      country: beneficiary.country,
      acctstatus: 'pending',
      organization_id: user._id,
      batch_no: body.batch_no,
      batch_no_id: `${body.batch_no}-${await codeGenerator(6, 'ABCDEFGHIJ1234567890')}`,
      has_paid: beneficiary?.has_paid?.toLowerCase === 'yes' ? true : false,
      reg_fee: user.reg_fee
    };

    batchList.push(batchListData);
  }

  const count = batchList.length + user.total_number_of_beneficiaries_created;
  const amountLeft = user.total_number_of_beneficiaries_chosen - user.total_number_of_beneficiaries_created;
  if (count > user.total_number_of_beneficiaries_chosen)
    throw new Error(`Beneficiaries in Organization left to be created is ${amountLeft} beneficiaries`);

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
  const formattedDate = `${currentDate.getDate()}, ${monthNames[currentDate.getMonth()]
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
    subject: 'CONFIRMATION OF BULK BENEFICIARY UPLOAD',
    type: 'html',
    html: beneficiaryBulkUpload(bulkUpload).html,
    text: beneficiaryBulkUpload(bulkUpload).text
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

export const onboardingPayment = async ({ user, upgrade, body }) => {
  const packageTimeLapse =
    user.start_trial_ts.getTime() / (1000 * 60 * 60 * 24) -
    user.end_trial_ts.getTime() / (1000 * 60 * 60 * 24);
  if (packageTimeLapse > 20) {
    body.start_trial_ts = user.start_trial_ts;
    body.end_trial_ts = user.end_trial_ts;
  } else {
    body.start_trial_ts = new Date();
    body.end_trial_ts =
      body?.annual_plan === true
        ? new Date(new Date().getTime() + 1000 * 24 * 60 * 60 * 365)
        : new Date(new Date().getTime() + 1000 * 24 * 60 * 60 * 30);
  }

  if (upgrade === 'on') {
    const paymentPackage = plans[body.payment_plan];
    let amountToPay = paymentPackage.base_pay;

    if (user.total_number_of_beneficiaries_created > paymentPackage.max_users)
      throw new BadRequestError(
        'You cannot downgrade your package, your total beneficiaries has exceed the maximum'
      );

    if (body.total_number_of_beneficiaries_chosen > paymentPackage.max_users)
      throw new BadRequestError(
        `your package has a maximum of ${paymentPackage.max_users} beneficiaries. you cannot exceed it`
      );

    if (body?.modules?.length > 0) {
      body.modules = [...new Set([...body.modules, ...user.modules])];
    } else {
      body.modules = [...user.modules];
    }

    body?.modules.forEach((element) => {
      if (!paymentPackage.modules.includes(element)) {
        amountToPay = amountToPay + 5;
      }
    });

    let amount = body.total_number_of_beneficiaries_chosen
      ? body.total_number_of_beneficiaries_chosen * amountToPay
      : user.total_number_of_beneficiaries_chosen * amountToPay;

    if (body.annual_plan === true) {
      // I need to check how many months left in their previous plan then calculate the total
      const startTime = new Date().getTime() / (1000 * 60 * 60 * 24 * 30);
      const endTimes = user.end_trial_ts.getTime() / (1000 * 60 * 60 * 24 * 30);

      const timeElapsed =
        Math.floor(endTimes - startTime) > 1 ? Math.floor(endTimes - startTime) : 1;

      amount = amount * (user.on_trial ? 12 : timeElapsed);
    }

    if (amount !== body.organization_reg_fee)
      throw new BadRequestError(`Amount for selected Models will be ${amount}`);

    let paystackAmount = 0.02 * amount;
    if (paystackAmount >= 2000) paystackAmount = 4000;

    amount = amount + paystackAmount;

    const data = {
      amount: amount * 100,
      email: user.email,
      callback_url:
        env.node_env === 'development'
          ? `${env.dev_base_url_beneficiary}/${user.slug}/dashboard`
          : `${env.prod_base_url_beneficiary}/${user.slug}/dashboard`,
      metadata: {
        userId: user._id,
        modules: body.modules,
        annual_plan: body?.annual_plan || false,
        total_number_of_beneficiaries_chosen:
          body.total_number_of_beneficiaries_chosen || user.total_number_of_beneficiaries_chosen * amountToPay,
        payment_plan: body.payment_plan,
        start_trial_ts: body.start_trial_ts,
        end_trial_ts: body.end_trial_ts,
        amount,
        type: 'plan_upgrade',
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
  } else {
    if (user.organization_reg_fee < 25) throw new BadRequestError('Upgrade your plan');

    let paystackAmount = 0.02 * user.organization_reg_fee;
    paystackAmount = paystackAmount >= 2000 ? 4000 : paystackAmount;

    const data = {
      email: user.email,
      amount: (user.organization_reg_fee + paystackAmount) * 100,
      metadata: {
        userId: user._id,
        type: 'onboardingpayment_update'
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
  }
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
