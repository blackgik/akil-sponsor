import Joi from 'joi';

export const sendContactMailSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  amount: Joi.number().required(),
  description: Joi.string().required()
});
