import mongoose from 'mongoose'

import SponsorSchema from '../schemas/sponsor.schema'
import SponsorInterface from '../interfaces/sponsor.interface'

import ConstantModel from '../constants/model.constant'

const UserModel = mongoose.model<SponsorInterface>(
  ConstantModel.PARTNER_MODEL,
  SponsorSchema,
)

export default UserModel
