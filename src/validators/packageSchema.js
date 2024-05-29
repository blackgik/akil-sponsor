import Joi from 'joi';

export const BuildPackageSchema = Joi.object({
    organization_reg_fee: Joi.number().required(),
    beneficiaries: Joi.object({
        total_number_of_beneficiaries_chosen: Joi.number().min(1000).required(),
        sup_beneficiary_fee: Joi.number().min(0).optional(),
    }),
    sms: Joi.object({
        total_number_of_sms: Joi.number().min(1000).required(),
        sup_sms_fee: Joi.number().min(0).optional(),
    }),
    personalization: Joi.object({
        psdAgreement: Joi.boolean().required(),
        personalization_fee: Joi.number().min(0).optional(),
    }),
    data_collection: Joi.object({
        data_collection_quantity: Joi.number().min(0).optional(),
        data_collection_fee: Joi.number().min(0).optional(),
    }),
    total_amount: Joi.number().required(),
});
