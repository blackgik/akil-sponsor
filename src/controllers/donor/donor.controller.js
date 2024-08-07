import appResponse from '../../../lib/appResponse.js';
import { createDonor } from '../../services/donor/donor.service.js';

export const createDonorHandler = async (req, res) => {
  const { body } = req;

  const response = await createDonor({ body });

  res.send(appResponse('Created Successfully', response));
};
