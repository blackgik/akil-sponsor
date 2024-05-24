import Joi from 'joi';

export const productNewSupplier = Joi.object({
    supplier_name: Joi.string().required(),
    supplier_surname: Joi.string().optional().allow('', null),
    supplier_phone: Joi.string().required(),
    supplier_country: Joi.string().optional().allow('', null),
    supplier_lga: Joi.string().optional().allow('', null),
    supplier_state: Joi.string().optional().allow('', null),
    supplier_product_category_id: Joi.string().required(),
    supplier_avatar: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
    supplier_business_name: Joi.string().optional().allow('', null),
    supplier_address: Joi.string().optional().allow('', null),
});

export const viewSingleSupplierSchema = Joi.object({
    supplier_id: Joi.string().required()
});

export const updateSupplierStatusSchema = Joi.object({
    acctstatus: Joi.string().required()
});
