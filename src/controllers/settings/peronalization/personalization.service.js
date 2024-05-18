import appResponse from '../../../../lib/appResponse.js';
import { buildPersonlaization } from '../../../services/settings/personalization.service.js';

export const buildpersonalizationHandler = async (req, res) => {
  const { body, user, query } = req;

  const response = await buildPersonlaization({ user, param: query, body });

  res.send(appResponse('Built successfully', response));
};
