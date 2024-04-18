import mongoose from 'mongoose'

import SponsorSchema from '../schemas/sponsor.schema'
import SponsorInterface from '../interfaces/sponsor.interface'

import ConstantModel from '../constants/model.constant'

const SponsorModel = mongoose.model<SponsorInterface>(
  ConstantModel.SPONSOR_MODEL,
  SponsorSchema,
)

export default SponsorModel
