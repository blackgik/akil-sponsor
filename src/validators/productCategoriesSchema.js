import Joi from 'joi';

export const NewProductCategory = Joi.object({
  product_category_name: Joi.string().required(),
  product_category_slug: Joi.string().optional().allow('', null),
  product_category_description: Joi.string().optional().allow('', null),
});


export const viewSingleProductCategorySchema = Joi.object({
  product_category_id: Joi.string().required()
});
