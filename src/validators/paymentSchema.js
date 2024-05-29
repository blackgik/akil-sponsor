import Joi from 'joi';

export const CreatePaymentSchema = Joi.object({
    full_name: Joi.string().required(),
    email: Joi.string().required(),
    amount: Joi.string().required(),
    reference: Joi.string().required(),
    status: Joi.string().required(),
});