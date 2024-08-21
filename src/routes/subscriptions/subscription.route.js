import { Router } from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  deleteSubscriptionHandler,
  fetchSubscriptionsHistoryHandler,
  sendAgentSubEmailHandler,
  subscriptionStatisticsHandler,
  subscriptionThroughAgentHandler,
  subscriptionUpdatehandler,
  uploadReceiptHandler,
  validatePaymentHandler,
  viewSubscriptionHandler
} from '../../controllers/subscription/subcription.controller.js';
import validators from '../../validators/index.js';
import { validateReceiptpload, validateSubscriptionPackageSchema } from '../../validators/subscriptionSchema.js';
import { sendContactMailSchema } from '../../validators/sendContactMailSchema.js';

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
  '/send-agent-email',
  validators(sendContactMailSchema),
  authentication,
  sendAgentSubEmailHandler
);
subscriptionHistory.get('/validate-payment', authentication, validatePaymentHandler);
subscriptionHistory.get('/statistics', authentication, subscriptionStatisticsHandler);
subscriptionHistory.get('/view-subscription/:id', authentication, viewSubscriptionHandler);
subscriptionHistory.delete('/delete-subscription/:id', authentication, deleteSubscriptionHandler);

export default subscriptionHistory;
