import Joi from 'joi';

export const createProjectSchema = Joi.object({
  project_name: Joi.string().required(),
  description: Joi.string().optional(),
  product_type: Joi.string().required(),
  product_items: Joi.array().items(Joi.string().required().min(1)).required(),
  quantity_per_person: Joi.number().required(),
  start_date: Joi.date().required(),
  end_date: Joi.date().required(),
  is_active: Joi.boolean().required()
});

export const projectDashboardQuery = Joi.object({
  page_no: Joi.string().optional().allow('', null),
  no_of_requests: Joi.string().optional().allow('', null),
  search: Joi.string().optional(),
  productName: Joi.string().optional(),
  productItem: Joi.string().optional(),
  dateCreated: Joi.string().optional(),
  project_status: Joi.string().optional(),
  project_state: Joi.string().optional(),
  duration: Joi.string().optional(),
  from: Joi.string().optional(),
  to: Joi.string().optional(),
  download: Joi.string().optional()
});
