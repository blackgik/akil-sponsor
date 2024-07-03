import appResponse from '../../../lib/appResponse.js';
import {
  createBeneficiaryFeedback,
  fetchAllFeedback,
  getSingleFeedback,
  markAsRead,
  removeFeedback
} from '../../services/settings/feedbackService.js';

export const createBeneficiaryFeedbackHandler = async (req, res) => {
  const { body, user } = req;
  const { beneficiary_id } = req.params;

  const response = await createBeneficiaryFeedback({ body, user, beneficiary_id });

  res.send(appResponse('created feedback for beneficiary successfully', response));
};

export const fetchAllFeedbacksHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchAllFeedback({ user, param: query });

  res.send(appResponse('fetched all feedbacks successfully', response));
};

export const getSingleFeedbackHandler = async (req, res) => {
  const { feedback_id } = req.params;

  const response = await getSingleFeedback({ feedback_id });

  res.send(appResponse('fetched a single feedback successfully', response));
};

export const markAsReadHandler = async (req, res) => {
  const { feedback_id } = req.params;

  const response = await markAsRead({ feedback_id });

  res.send(appResponse('feedback read succefully', response));
};

export const removeFeedbackHandler = async (req, res) => {
  const { feedback_id } = req.params;

  const response = await removeFeedback({ feedback_id });

  res.send(appResponse('removed notification', response));
};
