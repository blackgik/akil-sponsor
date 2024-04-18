import mongoose from 'mongoose'
import ConstantNumber from '../constants/number.constant'

const RoleSchema = new mongoose.Schema(
  {
    role_name: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.USERNAME_MIN_LENGTH,
      max: ConstantNumber.USERNAME_MAX_LENGTH,
    },
    role_slug: {
      type: String,
      required: true,
      min: ConstantNumber.USERNAME_MIN_LENGTH,
      max: ConstantNumber.USERNAME_MAX_LENGTH,
    },
    role_description: {
      type: String,
      required: true,
      min: ConstantNumber.ADDRESS_MIN_LENGTH,
      max: ConstantNumber.ADDRESS_MAX_LENGTH,
    },
    is_active:{
        type: Boolean,
        required: true,
        default: true
    }
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export default RoleSchema
