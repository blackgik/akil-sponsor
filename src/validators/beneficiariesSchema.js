import Joi from 'joi';

export const CreateAgentSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  state: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  dob: Joi.date().required(),
  commission_type: Joi.string().required(),
  commission_amount: Joi.number().required()
});

