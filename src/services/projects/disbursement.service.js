import { BadRequestError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import { batchDeliveryCompletedEmail } from '../../config/mail.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import scheduleModel from '../../models/projects/scheduleModel.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import { buildOtpHash, codeGenerator, verifyOTP } from '../../utils/codeGenerator.js';
import { capitalizeWords } from '../../utils/general.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';

export const disbursementCode = async ({ awardee_id, user }) => {
  const awardee = await awardeesModel.findById(awardee_id).populate('beneficiary_id');

  if (!awardee) throw new NotFoundError('Awardee Not found');

  awardee.status = 'in-progress';

  const code = await codeGenerator(6);

  const contact = awardee.beneficiary_id.contact.email
    ? awardee.beneficiary_id.contact.email
    : awardee.beneficiary_id.contact.phone;

  const hash = buildOtpHash(contact, code, env.otpKey, 15);

  awardee.hash = hash;

  await awardee.save();

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
  console.log({ awardee_id });
  const awardee = await awardeesModel.findOne({ _id: awardee_id, status: 'allocated' });
  if (!awardee) throw new NotFoundError('No allocated beneficiaries found');
  const beneficiary = await organizationBeneficiaryModel.findById(awardee.beneficiary_id);
  const project = await ProjectModel.findById(awardee.project_id);
  const schedule = await scheduleModel.findOne({ project: awardee.project_id });

  if (awardee) awardee.status = 'disbursed';

  await awardee.save();

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(beneficiary.personal.member_name),
    project_name: capitalizeWords(project.project_name),
    batch_delivery_number: schedule.batch_number,
    email: beneficiary.contact.email
  };

  const mailData = {
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

  // create notification
  await notificationsModel.create({
    note: `You have successfully disbursed ${project.project_name} project to ${beneficiary.personal.member_name} `,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });
  return { awardee };
};
