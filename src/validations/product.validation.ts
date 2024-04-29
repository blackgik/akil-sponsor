import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class ProductValidation {
  public createNewProduct = Joi.object({
    product_name: Joi.string().max(30).required(),
    product_category_id: Joi.string().max(30).required(),
    product_partner_id: Joi.string().max(30).required(),
    product_price: Joi.string().email().required(),
    product_code: Joi.string().min(6).max(30).required(),
    product_description: Joi.string().max(100).optional(),
  });
  
  public createNewProductCategory = Joi.object({
    product_category_name: Joi.string().max(30).required(),
    category_description: Joi.string().max(100).optional(),
  })

}

export default ProductValidation
