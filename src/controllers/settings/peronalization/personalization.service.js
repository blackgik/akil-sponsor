import appResponse from '../../../../lib/appResponse.js';
import {
  buildPersonlaization,
  fetchInformation,
  fetchUserInformation
} from '../../../services/settings/personalization.service.js';

export const buildpersonalizationHandler = async (req, res) => {
  const { body, user, query } = req;

  const response = await buildPersonlaization({ user, param: query, body });

  res.send(appResponse('Built successfully', response));
};

export const fetchInformationHandler = async (req, res) => {
  const { query } = req;

  const response = await fetchInformation({ param: query });

  res.send(appResponse('Personalized screen details', response));
};

export const fetchUserInformationHandler = async (req, res) => {
  const { user } = req;

  const response = await fetchUserInformation({ user });

  res.send(appResponse('Personalized screen details', response));
};
