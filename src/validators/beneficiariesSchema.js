import Joi from 'joi';

export const CreateBeneficiarySchema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  othername: Joi.string().optional(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  country: Joi.string().required(),
  gender: Joi.string().required(),
});

