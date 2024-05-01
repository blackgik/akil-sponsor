import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class ProjectValidation {
  public createProject = Joi.object({
    project_business_name: Joi.string().max(150).required(),
    project_admin_name: Joi.string().max(150).required(),
    project_slug: Joi.string().max(150).required(),
    project_sector: Joi.string().max(150).required(),
    project_phone: Joi.string().min(10).max(15).required(),
    project_address: Joi.string().max(100).required(),
    project_email: Joi.string().email().required(),
    tosAgreement: Joi.boolean(),
    password: Joi.string().min(6).max(150).required(),
  })

  public updateProject = Joi.object({
    project_business_name: Joi.string().max(150).required(),
    project_admin_name: Joi.string().max(150).required(),
    project_slug: Joi.string().max(150).required(),
    project_sector: Joi.string().max(150).required(),
    project_phone: Joi.string().min(10).max(15).required(),
    project_address: Joi.string().max(100).required(),
    project_email: Joi.string().email().required(),
  })

  public login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(150).required(),
  })

  public updateEmail = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(150).required(),
  })

  public updatePassword = Joi.object({
    oldPassword: Joi.string().min(6).max(150).required(),
    newPassword: Joi.string().min(6).max(150).required(),
    confirmPassword: Joi.string().min(6).max(150).required(),
  })

  public validateEmail(email: string): boolean {
    return ConstantRegex.EMAIL.test(email)
  }

  public validatePassword(password: string): boolean {
    return ConstantRegex.PASSWORD.test(password)
  }

  public validatePhone(phone: string): boolean {
    return ConstantRegex.PHONE.test(phone)
  }

  public validateAddress(address: string): boolean {
    return ConstantRegex.ADDRESS.test(address)
  }
}

export default ProjectValidation
