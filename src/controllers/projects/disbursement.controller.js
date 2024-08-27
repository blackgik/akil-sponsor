import appResponse from '../../../lib/appResponse.js';
import {
  confirmDisbursement,
  disbursementCode,
  makeRequestedPayment,
  validateRequestPayments,
  verifyCode
} from '../../services/projects/disbursement.service.js';

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

export const confirmDisbursementHandler = async (req, res) => {
  const { user } = req;
  const { awardee_id } = req.params;

  const response = await confirmDisbursement({ user, awardee_id });

  res.send(appResponse('Confirmed successfully', response));
};

export const makeRequestedPaymentHandler = async (req, res) => {
  const { user, body } = req;
  const { project_id } = req.params;

  const response = await makeRequestedPayment({ user, body, project_id });

  res.send(appResponse('Initiated gateway', response));
};

export const validateRequestPaymentsHandler = async (req, res) => {
  const { user, query } = req;

  const body = query;

  const response = await validateRequestPayments({ user, body });

  res.send(appResponse('Initiated transfer successfully', response));
};
