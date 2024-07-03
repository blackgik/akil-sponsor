import router from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
    createBeneficiaryFeedbackHandler,
  fetchAllFeedbacksHandler,
  getSingleFeedbackHandler,
  markAsReadHandler,
  removeFeedbackHandler
} from '../../controllers/settings/feedbackController.js';

const feedbackRoutes = router.Router();

const feedbackRoots = () => {
  feedbackRoutes.post('/make-feedback/:beneficiary_id', authentication, createBeneficiaryFeedbackHandler);
  feedbackRoutes.get('/get-all-feedback', authentication, fetchAllFeedbacksHandler);
  feedbackRoutes.get('/single-feedback/:feedback_id', authentication, getSingleFeedbackHandler);
  feedbackRoutes.patch('/mark-read/:feedback_id', authentication, markAsReadHandler);
  feedbackRoutes.delete('/remove/:feedback_id', authentication, removeFeedbackHandler);

  return feedbackRoutes;
};

export default feedbackRoots;
