import Joi from 'joi';

export const createProjectSchema = Joi.object({
  project_name: Joi.string().required(),
  description: Joi.string().min(20).max(300).optional().allow('', null),
  product_type: Joi.string().required(),
  product_items: Joi.array().items(Joi.string().required().min(1)).required(),
  quantity_per_person: Joi.number().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  is_active: Joi.boolean().required()
});

export const createProjectScheduleSchema = Joi.object({
  batch_number: Joi.string().required(),
  description: Joi.string().optional().allow('', null),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  delivery_address: Joi.string().required(),
  landmark: Joi.string().required(),
  userid: Joi.string().required(),
  phone: Joi.string().required(),
  selection: Joi.array().items(Joi.string().required())
});

export const updateProjectSchema = Joi.object({
  description: Joi.string().min(20).max(300).optional().allow('', null),
  quantity_per_person: Joi.number().optional().allow('', null),
  start_date: Joi.date().optional().allow('', null),
  end_date: Joi.date().optional().allow('', null),
  is_active: Joi.boolean().optional().allow('', null)
});

export const verifyCodeSchema = Joi.object({
  otp: Joi.string().required(),
  hash: Joi.string().required(),
  awardee: Joi.string().required(),
  contact: Joi.string().required()
});
