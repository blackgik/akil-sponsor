import Joi from 'joi';

export const createNewOccupation = Joi.object({
  occupation_name: Joi.string().required(),
  occupation_slug: Joi.string().optional().allow('', null),
  occupation_description: Joi.string().optional().allow('', null),
});


export const viewSingleOccupationSchema = Joi.object({
  occupation_id: Joi.string().required()
});
