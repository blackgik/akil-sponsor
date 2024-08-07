import Joi from 'joi';

export const createDonorSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  title: Joi.string().required(),
  comment: Joi.string().optional().allow(''),
  donation_amount: Joi.number().required(),
  sponsor_code: Joi.string().required()
});
