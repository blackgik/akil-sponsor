import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class OccupationValidation {
  public createOccupation = Joi.object({
    occupation_name: Joi.string().max(30).required(),
    occupation_code: Joi.string().max(30).required(),
    occupation_slug: Joi.string().max(30).required(),
    occupation_description: Joi.string().max(100).required(),
  });

  public updateOccupation = Joi.object({
    occupation_name: Joi.string().max(30).required(),
    occupation_code: Joi.string().max(30).required(),
    occupation_slug: Joi.string().max(30).required(),
    occupation_description: Joi.string().max(100).required(),
  });
  
}

export default OccupationValidation
