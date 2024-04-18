import mongoose from 'mongoose'

import PartnerSchema from '../schemas/partner.schema'
import PartnerInterface from '../interfaces/partner.interface'

import ConstantModel from '../constants/model.constant'

const PartnerModel = mongoose.model<PartnerInterface>(
  ConstantModel.PARTNER_MODEL,
  PartnerSchema,
)

export default PartnerModel
