import { NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import { buildOtpHash, codeGenerator, verifyOTP } from '../../utils/codeGenerator.js';

export const disbursementCode = async ({ awardee_id, user }) => {
  const awardee = await awardeesModel.findById(awardee_id).populate('beneficiary_id');

  if (!awardee) throw new NotFoundError('Awardee Not found');

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
  const awardee = await awardeesModel.findById(body.awardee).populate('beneficiary_id');

  if (!awardee) throw new NotFoundError('Awardee Not found');

  const verifyHash = verifyOTP(body.contact, body.otp, body.hash, env.otpKey);

  if (body.hash !== awardee.hash) throw new BadRequestError('Invalid OTP sent');

  if (!verifyHash) throw new BadRequestError('Invalid OTP sent');

  awardee.hash = '';

  await awardee.save();

  return awardee;
};
