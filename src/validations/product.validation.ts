import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class ProductValidation {
  public createProduct = Joi.object({
    product_category_id: Joi.string().max(30).required(),
    product_category: {
      category_name: Joi.string().max(30).required(),
      subscription_category: Joi.string().max(30).required(),
      subscription_sector: Joi.string().max(30).required(),
      category_description: Joi.string().max(100).optional(),
    },
    general_information: {
      product_name: Joi.string().max(30).required(),
      product_code: Joi.string().max(30).required(),
      product_slug: Joi.string().max(30).required(),
    },
    subscription_settings: {
      category_price: Joi.string().max(30).required(),
      frequency: Joi.string().max(30).required(),
      discount: Joi.string().max(30).required(),
      discount_code: Joi.string().max(30).required(),
      discount_start_date: Joi.string().max(30).required(),
      discount_end_date: Joi.string().max(30).required(),
      product_description: Joi.string().max(30).required(),
      enable_direct_debit: Joi.string().max(30).required(),
    }

  });

  public updateProduct = Joi.object({
    product_category_id: Joi.string().max(30).required(),
    product_category: {
      category_name: Joi.string().max(30).required(),
      subscription_category: Joi.string().max(30).required(),
      subscription_sector: Joi.string().max(30).required(),
      categorie_description: Joi.string().max(100).optional(),
    },
    general_information: {
      product_name: Joi.string().max(30).required(),
      product_code: Joi.string().max(30).required(),
      product_slug: Joi.string().max(30).required(),
      product_partner_id: Joi.string().max(30).required(),
      product_image: Joi.string().max(30).required(),
      is_active: Joi.string().max(30).required(),
    },
    subscription_settings: {
      category_price: Joi.string().max(30).required(),
      frequency: Joi.string().max(30).required(),
      discount: Joi.string().max(30).required(),
      discount_code: Joi.string().max(30).required(),
      discount_start_date: Joi.string().max(30).required(),
      discount_end_date: Joi.string().max(30).required(),
      product_description: Joi.string().max(30).required(),
      enable_direct_debit: Joi.string().max(30).required(),
    }

  });

  public createNewProductCategory = Joi.object({
    product_category_name: Joi.string().max(30).required(),
    category_description: Joi.string().max(100).optional(),
  })

}

export default ProductValidation
