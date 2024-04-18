import mongoose from 'mongoose'
import ConstantNumber from '../constants/number.constant'

const CategorySchema = new mongoose.Schema(
  {
    category_name: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.USERNAME_MIN_LENGTH,
      max: ConstantNumber.USERNAME_MAX_LENGTH,
    },
    category_slug: {
      type: String,
      required: true,
      min: ConstantNumber.NAME_MIN_LENGTH,
      max: ConstantNumber.NAME_MAX_LENGTH,
    },
    category_description: {
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

export default CategorySchema
