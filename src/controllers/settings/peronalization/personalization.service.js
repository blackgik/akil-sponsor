import appResponse from '../../../../lib/appResponse.js';
import { buildPersonlaization, fetchInformation } from '../../../services/settings/personalization.service.js';

export const buildpersonalizationHandler = async (req, res) => {
  const { body, user, query } = req;

  const response = await buildPersonlaization({ user, param: query, body });

  res.send(appResponse('Built successfully', response));
};

export const fetchInformationHandler = async (req, res) => {
  const { params } = req;

  const response = await fetchInformation({ params });

  res.send(appResponse('Personalized screen details', response));
};
