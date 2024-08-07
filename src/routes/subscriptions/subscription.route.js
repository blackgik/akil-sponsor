import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchSubscriptionsHistoryHandler,
  subscriptionStatisticsHandler,
  subscriptionThroughAgentHandler,
  subscriptionUpdatehandler,
  uploadReceiptHandler,
  validatePaymentHandler
} from '../../controllers/subscription/subcription.controller.js';
import validators from '../../validators/index.js';
import { validateReceiptpload, validateSubscriptionPackageSchema } from '../../validators/subscriptionSchema.js';

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
  subscriptionThroughAgentHandler
);
subscriptionHistory.post(
  '/upload-receipt',
  validators(validateReceiptpload),
  authentication,
  uploadReceiptHandler
);
subscriptionHistory.get('/validate-payment', authentication, validatePaymentHandler);
subscriptionHistory.get('/statistics', authentication, subscriptionStatisticsHandler);

export default subscriptionHistory;
