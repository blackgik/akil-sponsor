import appResponse from '../../../lib/appResponse.js';
import {
  addNewBankAccount,
  dashboardStatistics,
  sponsorsGraph,
  updateOrganizationProfile
} from '../../services/profile/profileService.js';

export const updateOrganizationProfileHandler = async (req, res) => {
  const { body, user } = req;

  const updated = await updateOrganizationProfile({ user, body });

  res.send(appResponse('updated profile successfully', updated));
};

export const addNewBankAccountHandler = async (req, res) => {
  const { user, body } = req;

  const response = await addNewBankAccount({ user, body });

  res.send(appResponse('uploaded banks and awaiting approval', response));
};

export const dashboardStatisticsHandler = async (req, res) => {
  const { user } = req;

  const response = await dashboardStatistics({ user });

  res.send(appResponse('Fetched succfully', response));
};

export const sponsorGraphHandler = async (req, res) => {
  const { user } = req;

  const { year } = req.query;

  const response = await sponsorsGraph({ user, year });

  res.send(appResponse('Fetched succfully', response));
};
