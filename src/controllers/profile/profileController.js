import appResponse from '../../../lib/appResponse.js';
import {
  addNewBankAccount,
  profilesDash1baord,
  profilesDashbaord,
  updateOrganizationProfile
} from '../../services/profile/profileService.js';

export const updateOrganizationProfileHandler = async (req, res) => {
  const { body, user } = req;

  const updated = await updateOrganizationProfile({ user, body });

  res.send(appResponse('updated profile successfully', updated));
};

export const profilesDashbaordHandler = async (req, res) => {
  const { user } = req;

  const response = await profilesDashbaord({ user });

  res.send(appResponse('Fetched Dashboard successfully', response));
};

export const profilesDashbaord1Handler = async (req, res) => {
  const { user } = req;

  const response = await profilesDash1baord({ user });

  res.send(appResponse('Fetched Dashboard successfully', response));
};

export const addNewBankAccountHandler = async (req, res) => {
  const { user, body } = req;

  const response = await addNewBankAccount({ user, body });

  res.send(appResponse('uploaded banks and awaiting approval', response));
};
