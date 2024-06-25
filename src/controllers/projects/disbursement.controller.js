import appResponse from '../../../lib/appResponse.js';
import { disbursementCode, verifyCode } from '../../services/projects/disbursement.service.js';

export const disbursementCodeHandler = async (req, res) => {
  const { params, user } = req;

  const { awardee_id } = params;

  const response = await disbursementCode({ awardee_id, user });

  res.send(appResponse('Sent Disbursement code successfully', response));
};

export const verifyCodeHandler = async (req, res) => {
  const { body, user } = req;

  const response = await verifyCode({ body, user });

  res.send(appResponse('Verified successfully', response));
};
