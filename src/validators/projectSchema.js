import Joi from 'joi';

export const createProjectSchema = Joi.object({
  project_name: Joi.string().required(),
  description: Joi.string().optional(),
  product_type: Joi.string().required(),
  product_items: Joi.array().items(Joi.string().required().min(1)).required(),
  quantity_per_person: Joi.number().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  is_active: Joi.boolean().required(),
});
