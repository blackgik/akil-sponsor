import Joi from 'joi';

export const organizationNewProduction = Joi.object({
  product_name: Joi.string().required(),
  product_id: Joi.string().required(),
  product_quantity: Joi.number().required(),
  product_slug: Joi.string().optional().allow('', null),
  product_unit: Joi.string().required(),
  product_category_id: Joi.string().required(),
  product_description: Joi.string().optional().allow('', null),
});


export const viewSingleProductSchema = Joi.object({
  product_id: Joi.string().required()
});
