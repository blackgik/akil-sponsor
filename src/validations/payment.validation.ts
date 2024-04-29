import Joi from 'joi'
import ConstantRegex from '../constants/regex.constant'

class PaymentValidation {
  public createPayment = Joi.object({
    email: Joi.string().max(150).required(),
    full_name: Joi.string().max(150).required(),
    amount: Joi.number().required(),
  });

  public updatePayment = Joi.object({
    
  });
  
}

export default PaymentValidation
