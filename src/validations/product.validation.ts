import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class ProductValidation {
  public createProduct = Joi.object({
    product_category_id: Joi.string().max(100).required(),
    product_name: Joi.string().max(30).required(),
    product_unit: Joi.string().max(30).required(),
    product_slug: Joi.string().max(30).optional(),
    product_quantity: Joi.number().required(),
    product_sponsor_id: Joi.string().max(100).required(),
    product_description: Joi.string().max(100).optional(),
  });

  public updateProduct = Joi.object({
    product_category_id: Joi.string().max(100).required(),
    product_name: Joi.string().max(30).required(),
    product_unit: Joi.string().max(30).required(),
    product_slug: Joi.string().max(30).optional(),
    product_quantity: Joi.number().required(),
    product_sponsor_id: Joi.string().max(100).required(),
    product_description: Joi.string().max(100).optional(),
  });

  public createNewProductCategory = Joi.object({
    product_category_name: Joi.string().max(30).required(),
    product_category_slug: Joi.string().max(30).required(),
    product_category_description: Joi.string().max(100).optional(),
  })

}

export default ProductValidation
