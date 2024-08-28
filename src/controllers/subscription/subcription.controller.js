import { BadRequestError } from '../../../lib/appErrors.js';
import appResponse from '../../../lib/appResponse.js';
import {
  deleteSubscription,
  fetchSubscriptionsHistory,
  sendAgentSubEmail,
  subscriptionStatistics,
  subscriptionThroughAgent,
  subscriptionUpdate,
  subscriptionVerification,
  uploadReceipt,
  viewSubscription
} from '../../services/subscription/subscription.service.js';
import { downloadExcel } from '../../utils/general.js';

export const fetchSubscriptionsHistoryHandler = async (req, res) => {
  const { query, user } = req;

  const responses = await fetchSubscriptionsHistory({ param: query, user });
  if (query.download === 'on') {
    const worksheet = 'subscription_payments';
    const worksheetHeaders = [
      { header: 'Sender ', key: 'sender', width: 50 },
      { header: 'Amount ', key: 'amount', width: 50 },
      { header: 'Ref_No ', key: 'ref_no', width: 50 },
      { header: 'Deposit_Method ', key: 'deposit_method', width: 50 },
      { header: 'Date ', key: 'date', width: 50 },
      { header: 'Status', key: 'status', width: 50 },
      { header: 'CreatedAt', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of responses) {
      mainlist.push({
        amount: response.amount,
        ref_no: response.ref_no,
        deposit_method: response.deposit_method,
        date: response.date,
        sender: response.sender,
        status: response.status,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('Fetch successfully', responses));
  }
};

export const subscriptionUpdatehandler = async (req, res) => {
  const { user, body, query } = req;

  const allowableshow_details = ['yes', 'no'];

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

export const subscriptionThroughAgentHandler = async (req, res) => {
  const { user, body } = req;

  const response = await subscriptionThroughAgent({ user, body });

  res.send(appResponse('Initiated payment through an agent successfully', response));
};

export const uploadReceiptHandler = async (req, res) => {
  const { user, body } = req;

  const response = await uploadReceipt({ user, body });

  res.send(appResponse('submitted subscription receipt successfully', response));
};

export const viewSubscriptionHandler = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const response = await viewSubscription({ user, id });

  res.send(appResponse('Fetched Successfully', response));
};

export const deleteSubscriptionHandler = async (req, res) => {
  const { user } = req;
  const { id } = req.params;

  const response = await deleteSubscription({ user, id });

  res.send(appResponse('Deleted Successfully', response));
};

export const sendAgentSubEmailHandler = async (req, res) => {
  const { user, body } = req;
  const response = await sendAgentSubEmail({ user, body });
  res.send(appResponse('Email sent successfully', response));
};
