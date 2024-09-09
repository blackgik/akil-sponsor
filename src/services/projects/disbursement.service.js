import axios from 'axios';
import { BadRequestError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import {
  batchDeliveryCompletedEmail,
  disbursementBeneficiariesEmail,
  paidProjectRequestEmail,
  paidRequestEmail
} from '../../config/mail.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import scheduleModel from '../../models/projects/scheduleModel.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import { buildOtpHash, codeGenerator, verifyOTP } from '../../utils/codeGenerator.js';
import { capitalizeWords } from '../../utils/general.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird, sendsms } from '../../utils/msgBird.js';
import ProductModel from '../../models/products/ProductModel.js';

export const disbursementCode = async ({ awardee_id, user }) => {
  const awardee = await awardeesModel
    .findById(awardee_id)
    .populate('beneficiary_id')
    .populate('project_id')
    .populate('batch_id');

  if (!awardee) throw new NotFoundError('Awardee Not found');

  awardee.status = 'in-progress';

  const code = await codeGenerator(6);

  const contact = awardee.beneficiary_id.contact.email
    ? awardee.beneficiary_id.contact.email
    : awardee.beneficiary_id.contact.phone;

  const hash = buildOtpHash(contact, code, env.otpKey, 15);

  awardee.hash = hash;

  const contactEmail = awardee.beneficiary_id.contact.email;
  const contactPhone = awardee.beneficiary_id.contact.phone;
  // console.log(contactEmail);
  // console.log(contactPhone);
  await awardee.save();

  if (contactEmail) {
    //create email profile here
    const emailData = {
      beneficiary_name: capitalizeWords(awardee.name),
      project_name: capitalizeWords(awardee.project_id.project_name),
      start_date: awardee.batch_id.start_date,
      end_date: awardee.batch_id.end_date,
      location: awardee.batch_id.delivery_address,
      code: code
    };
    const mailData = {
      sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
      email: contactEmail,
      subject: `Your ${emailData.project_name} Package is Ready for Collection`,
      type: 'html',
      html: disbursementBeneficiariesEmail(emailData).html,
      text: disbursementBeneficiariesEmail(emailData).text
    };

    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError(
        'server slip. project delivery created without mail being sent'
      );
  }
  if (contactPhone) {
    //create sms profile here
    const smsData = {
      phone: contactPhone,
      sms: `come to ${awardee.batch_id.delivery_address}, and collect your ${capitalizeWords(
        awardee.project_id.project_name
      )} starting from ${awardee.batch_id.start_date} to ${
        awardee.batch_id.end_date
      }. come with a means of identification.`
    };

    const sms = await sendsms(smsData);
    if (!sms)
      throw new BadRequestError('server slip. project delivery created without sms being sent');
  }

  return { code, contact, hash, awardee: awardee_id };
};

export const verifyCode = async ({ body, user }) => {
  const awardee = await awardeesModel
    .findById(body.awardee)
    .populate('beneficiary_id')
    .populate({
      path: 'batch_id',
      populate: { path: 'project', populate: { path: 'product_type' } }
    });

  if (!awardee) throw new NotFoundError('Awardee Not found');

  const verifyHash = verifyOTP(body.contact, body.otp, body.hash, env.otpKey);

  if (body.hash !== awardee.hash) throw new BadRequestError('Invalid OTP sent');

  if (!verifyHash) throw new BadRequestError('Invalid OTP sent');

  awardee.hash = '';

  await awardee.save();

  return awardee;
};

export const confirmDisbursement = async ({ user, awardee_id }) => {
  const awardee = await awardeesModel.findById(awardee_id);
  if (!awardee) throw new NotFoundError('No allocated beneficiaries found');
  const beneficiary = await organizationBeneficiaryModel.findById(awardee.beneficiary_id);
  const project = await ProjectModel.findById(awardee.project_id);
  const schedule = await scheduleModel.findOne({ project: awardee.project_id });

  if (awardee) awardee.status = 'disbursed';

  await awardee.save();

  // update the products here
  const products = project.product_items;

  for (const productid of products) {
    const product = await ProductModel.findById(productid._id);
    if (!product) continue;

    product.product_quantity -= project.quantity_per_person;

    if (product.product_quantity < 0) product.product_quantity = 0;

    await product.save();

    // Able to select the warehouse to remove from.
  }

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(beneficiary.personal.member_name),
    project_name: capitalizeWords(project.project_name),
    batch_delivery_number: schedule.batch_number,
    email: beneficiary.contact.email
  };

  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: emailData.email,
    subject: `Batch Delivery Completed - ${emailData.project_name}`,
    type: 'html',
    html: batchDeliveryCompletedEmail(emailData).html,
    text: batchDeliveryCompletedEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project was created without mail being sent');
  if (beneficiary.contact.phone) {
    const smsData = {
      phone: beneficiary.contact.phone,
      sms: `your ${capitalizeWords(
        project.project_name
      )} project has been successfully disbursed to you.`
    };

    const sms = await sendsms(smsData);
    if (!sms)
      throw new BadRequestError('server slip. project delivery disbursed without sms being sent');
  }
  // create notification
  await notificationsModel.create({
    note: `You have successfully disbursed ${project.project_name} project to ${beneficiary.personal.member_name} `,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  // create notification
  await notificationsModel.create({
    note: `You have successfully received ${project.project_name} project `,
    type: 'update',
    who_is_reading: 'beneficiary',
    organization_id: user._id,
    member_id: awardee.beneficiary_id
  });
  return { awardee };
};

export const makeRequestedPayment = async ({ user, body, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');
  const awardee = await awardeesModel.findOne({ project_id });
  let amount =
    Number(project.quantity_per_person) * Number(project.product_items[0].product_value_amount);
  const requests = [];
  const errorLog = [];
  for (const beneficiary_id of body.beneficiary_ids) {
    const checkAzza = await organizationBeneficiaryModel.findOne({
      _id: beneficiary_id,
      'bank_details.bank.acct_number': { $exists: true, $ne: '' },
      'bank_details.bank.bank_name': { $exists: true, $ne: '' }
    });
    if (!checkAzza) {
      errorLog.push({
        id: beneficiary_id,
        message: 'This user does not have bank details'
      });
      continue;
    }

    requests.push(beneficiary_id);
  }
  if (!requests.length) throw new BadRequestError('You have all members as invalid');

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + env.paystack_secret_key
    }
  };

  const paymentata = {
    email: user.email,
    amount: amount * 100,
    callback_url: `${env.dev_base_url_org}/projects/disbursements/${project_id}/${awardee.batch_id}`,
    channels: ['bank'],
    metadata: {
      requests: requests,
      type: 'request_transfers'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const response = await axios.post(url, paymentata, config);

  if (response.status !== 200) throw new BadRequestError('Could not initialize transaction');

  return { paymentDets: response.data.data.authorization_url, errorLogs: errorLog };
};

export const validateRequestPayments = async ({ user, body }) => {
  try {
    const { reference } = body;

    // validate the reference and get the metadata
    const url = `${env.paystack_api_url}/transaction/verify/${reference}`;

    const config = {
      headers: {
        Authorization: `Bearer ${env.paystack_secret_key}`
      }
    };

    const response = await axios.get(url, config);

    const paymentdata = response.data.data;
    const metadata = response.data.data.metadata;
    console.log('metadata', metadata);
    const bulkreceiptientData = [];

    // initate transfers on account
    for (const request of metadata.requests) {
      const checkRequest = await awardeesModel.findOne({ beneficiary_id: request });

      if (!checkRequest) continue;

      // if (!checkRequest.amount) continue;

      checkRequest.status = 'disbursed';

      await checkRequest.save();

      const benefic = await organizationBeneficiaryModel.findById(request);
      // const project = await ProjectModel.findOne({ _id: checkRequest.project_id });
      if (!benefic) continue;
      const projectInfo = await ProjectModel.findOne({ _id: checkRequest.project_id });
      // Create notifications for each request
      const notifications = [];

      notifications.push(
        {
          note: `your ${projectInfo.project_name} project has been paid to your bank account`,
          type: 'payment',
          who_is_reading: 'beneficiary',
          member_id: request,
          organization_id: user._id
        },
        {
          note: `you have paid the ${projectInfo.project_name} project to ${benefic.personal.member_name} bank account`,
          type: 'payment',
          who_is_reading: 'sponsor',
          member_id: request,
          organization_id: user._id
        }
      );

      // Insert all notifications at once
      const notifiii = await notificationsModel.insertMany(notifications);
      if (!notifiii) throw new NotFoundError('problem');
      //create email profile here
      const creationData = {
        member_name: capitalizeWords(`${benefic.personal.member_name}`),
        sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
        product_name: capitalizeWords(projectInfo.project_name)
      };
      const mailData = {
        sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
        email: benefic.contact.email,
        subject: `Payment Confirmation for ${capitalizeWords(projectInfo.project_name)}`,
        type: 'html',
        html: paidProjectRequestEmail(creationData).html,
        text: paidProjectRequestEmail(creationData).text
      };
      const msg = await formattMailInfo(mailData, env);
      const msgDelivered = await messageBird(msg);
      if (!msgDelivered)
        throw new InternalServerError('server slip. request sent but email not sent');

      if (benefic.contact.phone) {
        const smsData = {
          phone: benefic.contact.phone,
          sms: `Your ${capitalizeWords(
            projectInfo.project_name
          )} project has been successfully disbursed to you. Do not forget to drop a feedback.`
        };

        const sms = await sendsms(smsData);
        if (!sms)
          throw new BadRequestError('server slip. project delivery created without sms being sent');
      }
      const receiptientData = {
        type: 'nuban',
        name: benefic.personal.member_name,
        account_number: '0151712510',
        bank_code: checkRequest?.bank_code || '058',
        currency: 'NGN'
      };

      const configRecipient = {
        headers: {
          Authorization: `Bearer ${env.paystack_secret_key}`,
          'Content-Type': 'application/json'
        }
      };

      const url = `${env.paystack_api_url}/transferrecipient`;

      const recipientask = await axios.post(url, receiptientData, configRecipient);

      // console.log({ status: recipientask.status });

      if (recipientask.status !== 201) continue;

      const recipient_code = recipientask.data.data.recipient_code;

      const refData = {
        amount: checkRequest.amount,
        reference: checkRequest._id,
        reason: checkRequest.subject_request,
        recipient: recipient_code
      };

      bulkreceiptientData.push(refData);
    }

    const refConfig = {
      headers: {
        Authorization: `Bearer ${env.paystack_secret_key}`,
        'Content-Type': 'application/json'
      }
    };

    const transferData = {
      currency: 'NGN',
      source: 'balance',
      transfers: bulkreceiptientData
    };

    // console.log(transferData);

    const urlref = `${env.paystack_api_url}/transfer/bulk`;

    const bulkTransfer = await axios.post(urlref, transferData, refConfig);

    // console.log({ status: bulkTransfer.status });

    // if (bulkTransfer.status !== 2000) throw new BadRequestError('Bad Request Error');

    return bulkTransfer.data.data;
  } catch (err) {
    console.log('err', err);
  }
};
