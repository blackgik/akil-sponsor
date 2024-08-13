import Joi from 'joi';

export const CreateBeneficiarySchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  othername: Joi.string().optional(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  country: Joi.string().required(),
  gender: Joi.string().required()
});

export const UpdateBeneficiarySchema = Joi.object({
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
  firstname: Joi.string().optional().allow('', null),
  lastname: Joi.string().optional().allow('', null),
  othername: Joi.string().optional().allow('', null),
  email: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().allow('', null),
  country: Joi.string().optional().allow('', null),
  gender: Joi.string().optional().allow('', null)
});

export const payRequessSchema = Joi.object({
  beneficiary_ids: Joi.array().items(Joi.string()).required()
});

export const validatePaymentRequestSchema = Joi.object({
  reference: Joi.string().required()
});
