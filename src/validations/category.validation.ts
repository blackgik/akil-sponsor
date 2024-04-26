import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class CategoryValidation {
  public createNewCategory = Joi.object({
    username: Joi.string().max(30).required(),
    firstname: Joi.string().max(30).required(),
    lastname: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().max(100).required(),
  })

}

export default CategoryValidation
