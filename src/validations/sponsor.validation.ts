import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class SponsorValidation {
  public createSponsor = Joi.object({
    firstname: Joi.string().max(30).required(),
    lastname: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().max(100).required(),
    state: Joi.string().max(30).required(),
    country: Joi.string().max(30).required()
  })

  public updateSponsor = Joi.object({
    firstname: Joi.string().max(30).required(),
    lastname: Joi.string().max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phone: Joi.string().min(10).max(15).required(),
    address: Joi.string().max(100).required(),
    state: Joi.string().max(30).required(),
    country: Joi.string().max(30).required()
  })

  public login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
  })

  public updatePassword = Joi.object({
    oldPassword: Joi.string().min(6).max(30).required(),
    newPassword: Joi.string().min(6).max(30).required(),
    confirmPassword: Joi.string().min(6).max(30).required(),
  })
}

export default SponsorValidation
