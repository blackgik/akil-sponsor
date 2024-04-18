import mongoose from 'mongoose'

import RoleSchema from '../schemas/role.schema'
import RoleInterface from '../interfaces/role.interface'

import ConstantModel from '../constants/model.constant'

const RoleModel = mongoose.model<RoleInterface>(
  ConstantModel.CATEGORY_MODEL,
  RoleSchema,
)

export default RoleModel
