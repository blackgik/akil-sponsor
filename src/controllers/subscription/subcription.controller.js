import { BadRequestError } from '../../../lib/appErrors.js';
import appResponse from '../../../lib/appResponse.js';
import {
  fetchSubscriptionsHistory,
  subscriptionStatistics,
  subscriptionUpdate,
  subscriptionVerification
} from '../../services/subscription/subscription.service.js';

export const fetchSubscriptionsHistoryHandler = async (req, res) => {
  const { query, user } = req;

  const response = await fetchSubscriptionsHistory({ param: query, user });

  res.send(appResponse('Fetch successfully', response));
};

export const subscriptionUpdatehandler = async (req, res) => {
  const { user, body, query } = req;

  const allowableshow_details = ['yes', 'no'];

  console.log(query);
  if (
    !query.show_details ||
    (query.show_details && !allowableshow_details.includes(query.show_details))
  )
    throw new BadRequestError('Show Details must be Yes or No');

  const response = await subscriptionUpdate({ user, body, param: query });

  res.send(appResponse('Initiated successfully', response));
};

export const validatePaymentHandler = async (req, res) => {
  const { query, user } = req;

  const { reference, trxref } = query;

  const response = await subscriptionVerification({ user, reference });

  res.send(appResponse('Verified Successfully', response));
};

export const subscriptionStatisticsHandler = async (req, res) => {
  const { user } = req;

  const response = await subscriptionStatistics({ user });

  res.send(appResponse('Fetched Successfully', response));
};
