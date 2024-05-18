import Joi from 'joi';

export const createNewUserSchema = Joi.object({
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }),
  user_name: Joi.string().required(),
  gender: Joi.string().required(),
  email: Joi.string().email().optional().allow('', null),
  phone: Joi.string().required(),
  date_of_birth: Joi.date().required(),
  role_id: Joi.string().required(),
  password: Joi.string().required(),
  is_beneficiary: Joi.boolean().required()
});

export const editNewUserSchema = Joi.object({
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }),
  user_name: Joi.string().optional().allow('', null),
  gender: Joi.string().optional().allow('', null),
  email: Joi.string().email().optional().allow('', null),
  phone: Joi.string().optional().allow('', null),
  date_of_birth: Joi.date().optional().allow('', null),
  role_id: Joi.string().optional().allow('', null)
});
