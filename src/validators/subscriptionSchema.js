import Joi from 'joi';

export const validateSubscriptionPackageSchema = Joi.object({
  psdAgreement: Joi.boolean().optional(),
  total_number_of_beneficiaries_chosen: Joi.number().optional(),
  total_number_of_sms: Joi.number().optional(),
  data_collection_quantity: Joi.number().optional()
});

export const validateReceiptpload = Joi.object({
  receipt: Joi.string().required()
});
