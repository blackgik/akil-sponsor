import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class RoleValidation {
  public createRole = Joi.object({
    role_name: Joi.string().max(30).required(),
    role_code: Joi.string().max(30).required(),
    role_slug: Joi.string().max(30).required(),
    role_description: Joi.string().max(100).required(),
  });

  public updateRole = Joi.object({
    role_name: Joi.string().max(30).required(),
    role_code: Joi.string().max(30).required(),
    role_slug: Joi.string().max(30).required(),
    role_description: Joi.string().max(100).required(),
  });
  
}

export default RoleValidation
