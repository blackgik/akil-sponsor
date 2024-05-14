import appResponse from '../../../lib/appResponse.js';
import {
  addNewBankAccount,
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
