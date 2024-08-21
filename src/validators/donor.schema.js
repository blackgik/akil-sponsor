import Joi from 'joi';

export const createDonorSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  title: Joi.string().required(),
  comment: Joi.string().optional().allow(''),
  sponsor_code: Joi.string().required()
});

export const makeDonationSchema = Joi.object({
  amount: Joi.number().required()
});

export const sendEmailSchema = Joi.object({
  email: Joi.string().required(),
  description: Joi.string().required(),
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  amount: Joi.number().required(),
  phone: Joi.string().required()
});
