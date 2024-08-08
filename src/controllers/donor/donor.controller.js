import appResponse from '../../../lib/appResponse.js';
import {
  createDonor,
  dashboardStatistics,
  fetchBeneficiries
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
