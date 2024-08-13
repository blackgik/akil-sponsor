import appResponse from '../../../lib/appResponse.js';
import {
  createDonor,
  dashboardStatistics,
  fetchBeneficiries,
  fetchDonationReceipt,
  makeDonationPayment,
  statGraph,
  verifyDonationPayment
} from '../../services/donor/donor.service.js';

export const createDonorHandler = async (req, res) => {
  const { body } = req;

  const response = await createDonor({ body });

  res.send(appResponse('Created Successfully', response));
};

export const dashboardStatisticsHandler = async (req, res) => {
  const { user } = req;

  const response = await dashboardStatistics({ user });

  res.send(appResponse('Fetched Successfully', response));
};

export const fetchBeneficiariesHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchBeneficiries({ user, param: query });

  res.send(appResponse('Fetched Successfully', response));
};

export const makeDonationPaymentHandler = async (req, res) => {
  const { user, body } = req;

  const response = await makeDonationPayment({ user, body });

  res.send(appResponse('Initiated Payment successfully', response));
};

export const verifyDonationPaymentHandler = async (req, res) => {
  const { query, user } = req;

  const { reference, trxref } = query;

  const response = await verifyDonationPayment({ reference, user });

  res.send(appResponse('Verified Payment successfully', response));
};

export const fetchDonationReceiptHandler = async (req, res) => {
  const { query, user } = req;

  const response = await fetchDonationReceipt({ param: query, user });

  res.send(appResponse('Fetched successfully', response));
};

export const statGraphHandler = async (req, res) => {
  const { user, query } = req;

  const { year } = query;

  const yearDate = new Date(`${year}-01-01`).getFullYear();

  const response = await statGraph({ user, year: yearDate });

  res.send(appResponse('Fetched successfully', response));
};
