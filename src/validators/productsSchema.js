import Joi from 'joi';

export const createNewProduct = Joi.object({
  product_name: Joi.string().required(),
  product_image: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
  product_quantity: Joi.number().optional(),
  product_value_amount: Joi.number().required(),
  product_slug: Joi.string().optional().allow('', null),
  product_unit: Joi.string().required(),
  product_category_id: Joi.string().required(),
  product_description: Joi.string().optional().allow('', null),
  warehouses: Joi.array().items(Joi.string().allow('', null))
});

export const restockProduct = Joi.object({
  product_id: Joi.string().required(),
  restock_start_date: Joi.date().required(),
  restock_quantity: Joi.number().required(),
  restock_unit: Joi.string().required(),
  restock_value_amount: Joi.number().required(),
  warehouses: Joi.array()
    .items(
      Joi.object({
        warehouse: Joi.string().required(),
        quantity: Joi.number().required()
      })
    )
    .required(),
  supplier_id: Joi.string().required(),
  rtkstatus: Joi.string().required()
});

export const viewSingleProductSchema = Joi.object({
  product_id: Joi.string().required()
});

export const updateProductImageSchema = Joi.object({
  product_image: Joi.object({ key: Joi.string().optional().allow('', null) }).optional()
});

export const updateRestockSchema = Joi.object({
  rtkstatus: Joi.string().required()
});
