import axios from 'axios';
import bcrypt from 'bcrypt';
import PDFDocument from 'pdfkit';
import fs from 'fs';
import mongoose from 'mongoose';
import base64String from 'base64-stream';
import env from '../../config/env.js';
import beneficiaryBatchUploadModel from '../../models/beneficiaries/beneficiaryBatchUploadModel.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import {
  declinedAcountMail,
  beneficiaryApprovedStatusOrgUpdate,
  beneficiaryApprovedStatusUpdate,
  onboardinMail
} from '../../config/mail.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';
import notificationsModel from '../../models/settings/notificationsModel.js';

const { Base64Encode } = base64String;

export const fileFormatter = async (files) => {
  const bucket = [];

  for (let file of files) {
    bucket.push({
      key: file.key,
      fieldName: file.fieldname,
      originalname: file.originalname
    });
  }
  return bucket;
};

export const verifyEmail = async (body) => {
  const { code, hash, email } = body;

  const checkAcct = await organizationBeneficiaryModel.findOne({ email: email });

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
    subject: 'MAJFINTECH ONBOARDING',
    type: 'html',
    html: onboardinMail(onboardingData).html,
    text: onboardinMail(onboardingData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError(
      500,
      'server slip. Beneficiary was created without mail being sent',
      ''
    );
  const admin = checkAcct.toJSON();
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

export const fetchBeneficiariesByStatus = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status, has_paid, beneficiary_id } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterData = { organization_id: user._id };

  const query = typeof search !== 'undefined' ? search.trim() : false;

  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ firstname: searchRgx }, { lastname: searchRgx }];
  }

  if (status) {
    filterData.acctstatus = status;
  }

  if (has_paid === true) {
    filterData.has_paid_reg = true;
  }

  if (has_paid === false) {
    filterData.has_paid_reg = false;
  }

  if (beneficiary_id) {
    filterData._id = { $nin: [mongoose.Types.ObjectId(beneficiary_id)] };
  }

  const beneficiaryCount = await organizationBeneficiaryModel.countDocuments({ ...filterData });
  const fetchedResults = await organizationBeneficiaryModel
    .find({ ...filterData })
    .select({
      avatar: 1,
      'personal.member_name': 1,
      'contact.email': 1,
      'contact.country_of_residence': 1,
      'personal.gender': 1,
      has_paid_reg: 1,
      'contact.phone': 1,
      createdAt: 1,
      acctstatus: 1
    })
    .populate({
      path: 'organization_id',
      model: 'Organization',
      select: { name_of_cooperation: 1, company_code: 1 }
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(beneficiaryCount / no_of_requests);

  return { page_no, available_pages, fetchedResults };
};

export const updateBeneficiaryStatus = async ({ user, status, beneficiary_id, note }) => {
  const beneficiary = await organizationBeneficiaryModel.findById(beneficiary_id);
  if (!beneficiary) throw new NotFoundError('Beneficiary not found in Organization Directory');

  if (beneficiary.acctstatus === 'pending' && status === 'active') {
    if (beneficiary?.has_paid_reg === false)
      throw new BadRequestError('beneficiary has not paid registration fees yet.');
  }

  if (beneficiary.acctstatus === 'pending' && beneficiary.has_paid_reg && status === 'declined') {
    status = 'suspended';
    beneficiary.note = note;
  }

  if (beneficiary.acctstatus === 'pending' && !beneficiary.has_paid_reg && status === 'declined') {
    const ddData = await directDebitUploadsModel.find({
      beneficiary_id: beneficiary._id,
      organization_id: user._id
    });

    for (let eachData of ddData) {
      await eachData.remove();
    }
    await beneficiary.remove();

    // create notification for beneficiary
    await notificationsModel.create({
      note: `You are ${status} on ${user.firstname}`,
      who_is_reading: 'beneficiary',
      compliment_obj: { status: `${status}` },
      organization_id: user._id,
      beneficiary_id: beneficiary._id
    });

    return {};
  }

  if (beneficiary.acctstatus === 'suspended' && !beneficiary.has_paid_reg) {
    status = 'pending';
  }

  beneficiary.acctstatus = status;
  beneficiary.note = note ? note : '';

  await beneficiary.save();

  // create notification for beneficiary
  await notificationsModel.create({
    note: `You are ${status} on ${user.firstname}`,
    who_is_reading: 'beneficiary',
    compliment_obj: { status: `${status}` },
    organization_id: user._id,
    beneficiary_id: beneficiary._id
  });

  //create orgnization email profile here
  const orgnizationOnboardingData = {
    name_of_cooperation: user.firstname,
    organization_code: user.company_code,
    beneficiary_name: beneficiary.personal.member_name,
    beneficiary_id: beneficiary._id,
    name_of_agent: 'no agent',
    email: beneficiary.contact.email,
    date: beneficiary.createdAt,
    status: status
  };
  const orgMailData = {
    email: user.email,
    subject: `${user.firstname.toUpperCase()} ACCOUNT UPDATE`,
    type: 'html',
    html: beneficiaryApprovedStatusOrgUpdate(orgnizationOnboardingData).html,
    text: beneficiaryApprovedStatusOrgUpdate(orgnizationOnboardingData).text
  };

  const msg1 = await formattMailInfo(orgMailData, env);

  const msgDelivered1 = await messageBird(msg1);

  if (!msgDelivered1)
    throw new InternalServerError(
      'server slip. Beneficiary account status was changed without mail being sent to organization'
    );

  //create beneficiary email profile here
  const onboardingData = {
    name_of_cooperation: user.firstname,
    organization_code: user.company_code,
    beneficiary_name: beneficiary.personal.member_name,
    beneficiary_id: beneficiary._id,
    name_of_agent: 'no agent',
    email: beneficiary.contact.email,
    date: beneficiary.createdAt,
    status: status
  };
  const mailData = {
    email: beneficiary.contact.email,
    subject: `${user.firstname.toUpperCase()} ACCOUNT UPDATE`,
    type: 'html',
    html:
      status === 'active' || status === 'pending'
        ? beneficiaryApprovedStatusUpdate(onboardingData).html
        : declinedAcountMail(onboardingData).html,
    text:
      status === 'active'
        ? beneficiaryApprovedStatusUpdate(onboardingData).text
        : declinedAcountMail(onboardingData).text
  };

  const msg2 = await formattMailInfo(mailData, env);

  const msgDelivered2 = await messageBird(msg2);

  if (!msgDelivered2)
    throw new InternalServerError(
      'server slip. Beneficiary account status was changed without mail being sent to beneficiary'
    );
  return {};
};

export const viewBeneficiaryProfile = async ({ beneficiary_id }) => {
  const beneficiary = await organizationBeneficiaryModel.findById(beneficiary_id).populate({
    path: 'organization_id',
    model: 'Organization'
  });
  if (!beneficiary) throw new NotFoundError('Beneficiary not found in Organization Directory');
  const data = beneficiary.toJSON();

  return data;
};

export const editBeneficiaryProfile = async ({ user, beneficiary_id, body }) => {
  const beneficiary = await organizationBeneficiaryModel.findById(beneficiary_id);
  if (!beneficiary) throw new NotFoundError('Beneficiary not found in Organization Directory');

  const updates = Object.keys(body);

  updates.forEach((update) => {
    beneficiary[update] = body[update];
  });

  await beneficiary.save();

  // create notification for beneficiary
  await notificationsModel.create({
    note: `Your profile was updated on  ${user.name_of_cooperation}`,
    who_is_reading: 'beneficiary',
    organization_id: user._id,
    beneficiary_id: beneficiary._id
  });

  return true;
};

export const viewBeneficiariesDashboardStats = async ({ user }) => {
  const beneficiaryCount = await organizationBeneficiaryModel.countDocuments({
    organization_id: user._id
  });
  const activeBeneficiaries = await organizationBeneficiaryModel.countDocuments({
    organization_id: user._id,
    acctstatus: 'active'
  });
  const pendingBeneficiaries = await organizationBeneficiaryModel.countDocuments({
    organization_id: user._id,
    acctstatus: 'pending'
  });

  const suspendedBeneficiaries = await organizationBeneficiaryModel.countDocuments({
    organization_id: user._id,
    acctstatus: 'suspended'
  });

  const onlinePaymentsQuery = await organizationBeneficiaryModel.aggregate([
    {
      $match: { organization_id: user._id, payment_path: 'online', has_paid_reg: true }
    },
    {
      $group: {
        _id: null,
        totalAmount: {
          $sum: '$reg_fee'
        }
      }
    }
  ]);

  const offlinePaymentsQuery = await organizationBeneficiaryModel.aggregate([
    {
      $match: { organization_id: user._id, payment_path: 'offline', has_paid_reg: true }
    },
    {
      $group: {
        _id: null,
        totalAmount: {
          $sum: '$reg_fee'
        }
      }
    }
  ]);

  const onlinePayment = onlinePaymentsQuery[0]?.totalAmount || 0;
  const offlinePayment = offlinePaymentsQuery[0]?.totalAmount || 0;

  return {
    beneficiaryCount,
    activeBeneficiaries,
    pendingBeneficiaries,
    suspendedBeneficiaries,
    onlinePayment,
    offlinePayment,
    totalpaid: onlinePayment + offlinePayment
  };
};

export const viewBeneficiariesUploadedList = async ({ user, params }) => {
  let { page_no, no_of_requests, search, batch_no } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterObj = { organization_id: user._id };

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterObj['$or'] = [{ firstname: searchRgx }, { lastname: searchRgx }, { email: searchRgx }];
  }

  if (batch_no) {
    filterObj.batch_no = batch_no;
  }

  const beneficiaryCount = await beneficiaryBatchUploadModel.count({ ...filterObj });
  const fetched_data = await beneficiaryBatchUploadModel
    .find({ ...filterObj })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(beneficiaryCount / no_of_requests);

  return { available_pages, page_no, beneficiaryCount, fetched_data };
};

export const updateBeneficiaryBatchListStatus = async ({ beneficiary_batch_id, body, user }) => {
  try {
    let beneficiaries;

    if (body.approval_type === 'all') {
      if (!body.batch_no) throw new BadRequestError('Batch number must be provided');

      beneficiaries = await beneficiaryBatchUploadModel.find({
        organization_id: user._id,
        batch_no: body.batch_no
      });

      // Check for existing beneficiaries by email or phone
      const existingBeneficiaries = await organizationBeneficiaryModel.find({
        organization_id: user._id,
        $or: [
          { 'contact.email': { $in: beneficiaries.map((b) => b.contact.email) } },
          { 'contact.phone': { $in: beneficiaries.map((b) => b.contact.phone) } }
        ]
      });

      if (existingBeneficiaries.length > 0) {
        throw new BadRequestError(
          'One or more beneficiaries already exist with the provided email or phone number.'
        );
      }

      for (let beneficiary of beneficiaries) {
        if (body.status === 'declined') {
          await beneficiary.remove();
        } else if (body.status === 'approved') {
          beneficiary.status = body.status;
          await beneficiary.save();

          const password = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');
          const beneficiaryUniqueId = `${user.firstname
            .substring(0, 3)
            .toUpperCase()}${await codeGenerator(7, 'ABCDEFGHIJKLMN1234567890')}`;

          const beneficiaryObject = {
            ...beneficiary.toJSON(),
            organization_id: user._id,
            acctstatus: beneficiary.has_paid ? 'active' : 'pending',
            password: await bcrypt.hash(password, 12),
            beneficiary_unique_id: beneficiaryUniqueId,
            has_paid_reg: beneficiary.has_paid,
            acct_expiry: user.end_trial_ts
          };

          const activeBeneficiary = await organizationBeneficiaryModel.create(beneficiaryObject);

          if (activeBeneficiary) {
            // Email constructor
            const onboardingData = {
              email: beneficiary.contact.email,
              name: beneficiary.personal.member_name,
              name_of_cooperation: user.firstname,
              password: password,
              company_code: user.company_code
            };

            const mailData = {
              email: onboardingData.email,
              subject: 'MAJFINTECH ONBOARDING',
              type: 'html',
              html: onboardinMail(onboardingData).html,
              text: onboardinMail(onboardingData).text
            };

            const msg = await formattMailInfo(mailData, env);
            const msgDelivered = await messageBird(msg);

            if (!msgDelivered) {
              throw new InternalServerError(
                'Server slip. Beneficiary was created without mail being sent'
              );
            }

            user.total_number_of_beneficiaries_created += 1;
          } else {
            throw new BadRequestError('Beneficiary already exists');
          }

          // Create notification for beneficiary
          await notificationsModel.create({
            note: `You are ${body.status} on ${user.firstname}`,
            who_is_reading: 'beneficiary',
            compliment_obj: { status: body.status },
            organization_id: user._id,
            beneficiary_id: beneficiary._id
          });
        }
      }
    } else {
      beneficiaries = await beneficiaryBatchUploadModel.findById(beneficiary_batch_id);
      if (!beneficiaries) throw new NotFoundError('Beneficiary not found');

      if (beneficiaries.comment.trim() === 'Beneficiary is already part of this organization') {
        throw new DuplicateError('Beneficiary is already part of this organization');
      }

      if (body.status === 'declined') {
        await beneficiaries.remove();
      } else if (body.status === 'approved') {
        beneficiaries.status = body.status;
        await beneficiaries.save();

        const checkBeneficiary = await organizationBeneficiaryModel.findOne({
          $or: [
            { 'contact.email': beneficiaries.contact.email },
            { 'contact.phone': beneficiaries.contact.phone }
          ],
          organization_id: user._id
        });

        if (!checkBeneficiary) {
          // Build Beneficiary Object
          const password = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');
          const beneficiaryUniqueId = `${user.firstname
            .substring(0, 3)
            .toUpperCase()}${await codeGenerator(7, 'ABCDEFGHIJKLMN1234567890')}`;

          const beneficiaryObject = {
            ...beneficiaries.toJSON(),
            organization_id: user._id,
            acctstatus: 'pending',
            password: await bcrypt.hash(password, 12),
            beneficiary_unique_id: beneficiaryUniqueId,
            has_paid_reg: false
          };

          // const activeBeneficiary = await organizationBeneficiaryModel.create(beneficiaryObject);

          // if (!activeBeneficiary) {
          //   throw new InternalServerError(
          //     'Server slipped, beneficiary was approved but could not be transferred to active beneficiaries'
          //   );
          // }

          // Email constructor
          const onboardingData = {
            email: beneficiaries.contact.email,
            name: beneficiaries.personal.member_name,
            name_of_cooperation: user.firstname,
            password: password,
            company_code: user.company_code
          };
        
          const mailData = {
            email: beneficiaries.contact.email,
            subject: 'MAJFINTECH ONBOARDING',
            type: 'html',
            html: onboardinMail(onboardingData).html,
            text: onboardinMail(onboardingData).text
          };

          const msg = await formattMailInfo(mailData, env);
          const msgDelivered = await messageBird(msg);

          if (!msgDelivered) {
            throw new InternalServerError(
              'Server slip. Beneficiary was created without mail being sent'
            );
          }

          user.total_number_of_beneficiaries_created += 1;

          // Create notification for beneficiary
          await notificationsModel.create({
            note: `You are ${body.status} on ${user.firstname}`,
            who_is_reading: 'beneficiary',
            compliment_obj: { status: body.status },
            organization_id: user._id
            // beneficiary_id: activeBeneficiary._id
          });
        } else {
          throw new BadRequestError(
            'Beneficiary already exists with the provided email or phone number.'
          );
        }
      }
    }

    await user.save();

    return true;
  } catch (err) {
    console.error(err);
    throw new InternalServerError(err.message || 'Server slipped. Please try again');
  }
};

export const getBankList = async () => {
  const url = `${env.paystack_api_url}/bank`;
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${env.paystack_secret_key}`
    }
  };
  const banks = await axios.get(url, config);

  return { banks: banks.data.data };
};

export const pdfBuilder = async ({ body, res }, fn) => {
  const doc = new PDFDocument({ size: 'A4' });

  let finalString = '';

  // const stream = doc.pipe(new Base64Encode());

  const outputFilePath = 'output.pdf';
  const stream = doc.pipe(fs.createWriteStream(outputFilePath));

  doc.rect(30, 30, 550, 390).fillAndStroke('#002366', '#002366');
  doc.image('files/akilaahLogo.png', 350, 90, { fit: [130, 130] });

  const name = body.name;
  const email = body.email;
  const phone1 = body.phone1;
  const phone2 = body.phone2;

  doc.font('fonts/Montserrat-Bold.ttf').fontSize(18).fillColor('#CB6015').text(name, 75, 170);
  doc.font('fonts/Montserrat-Regular.ttf').fontSize(12).fillColor('#ffffff').text(email, 75, 240);
  doc.font('fonts/Montserrat-Regular.ttf').fontSize(12).fillColor('#ffffff').text(phone1, 75, 260);
  doc
    .font('fonts/Montserrat-Regular.ttf')
    .fontSize(12)
    .fillColor('#ffffff')
    .text(`, ${phone2}`, 180, 260);

  doc.end();

  // stream.on('data', (chunk) => {
  //   finalString += chunk;
  // });

  stream.on('finish', async () => {
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=output.pdf');

    // Send the PDF to the client
    const pdfStream = fs.createReadStream(outputFilePath);
    pdfStream.pipe(res);
    // fn(finalString);
  });
};

export const importUserGuideCreation = async (data, user) => {
  const checkBeneficiary = await organizationBeneficiaryModel.findOne({
    $or: [{ email: data.email }, { phone: data.phone }]
  });

  if (checkBeneficiary) {
    return checkBeneficiary;
  }

  const generatePassword = await codeGenerator(9, 'ABCDEFGHI&*$%#1234567890');

  const createData = {
    firstname: data.firstname,
    lastname: data.lastname,
    gender: data.gender,
    country: data.country,
    phone: data.phone,
    email: data.email,
    ficiary_unique_id: `${data.name.substring(0, 3).toUpperCase()}${await codeGenerator(
      7,
      'ABCDEFGHIJKLMN1234567890'
    )}`,
    password: await bcrypt.hash(generatePassword, 12),
    organization_id: user._id
  };

  // check if beneficiarieship has exceeded Limit

  if (
    Number(user.total_number_of_beneficiaries_created) + 1 >
    user.total_number_of_beneficiaries_chosen
  )
    throw new BadRequestError('Total number of beneficiaries have exceeded Limit');

  const createBeneficiary = await organizationBeneficiaryModel.create(createData);

  if (!createBeneficiary) throw new InternalServerError('Could not create beneficiary');

  // email constructor
  const onboardingData = {
    email: createData.email,
    name_of_cooperation: user.firstname,
    password: generatePassword,
    company_code: user.company_code
  };

  const mailData = {
    email: createData.email,
    subject: 'AKIILAAH ONBOARDING',
    type: 'html',
    html: onboardinMail(onboardingData).html,
    text: onboardinMail(onboardingData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Beneficiary was created without mail being sent');

  return createBeneficiary;
};
