import Joi from 'joi';

export const newWarehouse = Joi.object({
  warehouse_name: Joi.string().required(),
  warehouse_country: Joi.string().required(),
  warehouse_state: Joi.string().required(),
  warehouse_lga: Joi.string().required(),
  warehouse_address: Joi.string().required(),
  warehouse_overseer_id: Joi.string().required(),
  warehouse_googlemaps_url: Joi.string().optional().allow('', null),
  warehouse_description: Joi.string().optional().allow('', null),
  warehouse_overseer_id: Joi.string().required()
});

export const viewSingleWarehouseSchema = Joi.object({
  warehouse_id: Joi.string().required()
});
