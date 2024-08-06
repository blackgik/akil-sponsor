import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchSubscriptionsHistoryHandler,
  subcriptionThroughAgentHandler,
  subscriptionStatisticsHandler,
  subscriptionUpdatehandler,
  validatePaymentHandler
} from '../../controllers/subscription/subcription.controller.js';
import validators from '../../validators/index.js';
import { validateSubscriptionPackageSchema } from '../../validators/subscriptionSchema.js';

const subscriptionHistory = Router();

subscriptionHistory.get('/fetch-subscriptions', authentication, fetchSubscriptionsHistoryHandler);
subscriptionHistory.post(
  '/update-subscription',
  validators(validateSubscriptionPackageSchema),
  authentication,
  subscriptionUpdatehandler
);
subscriptionHistory.post(
  '/update-subscription-agent',
  validators(validateSubscriptionPackageSchema),
  authentication,
  subcriptionThroughAgentHandler
);
subscriptionHistory.get('/validate-payment', authentication, validatePaymentHandler);
subscriptionHistory.get('/statistics', authentication, subscriptionStatisticsHandler);

export default subscriptionHistory;
