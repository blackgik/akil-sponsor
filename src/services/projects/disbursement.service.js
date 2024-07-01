import { BadRequestError, NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import scheduleModel from '../../models/projects/scheduleModel.js';
import { buildOtpHash, codeGenerator, verifyOTP } from '../../utils/codeGenerator.js';

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
  const awardee = await awardeesModel.findById(awardee_id);

  if (!awardee) throw new NotFoundError('No allocated beneficiaries found');

  if(awardee)

  awardee.status = 'disbursed';

  await awardee.save();

  return {};
};
