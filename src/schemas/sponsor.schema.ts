import mongoose from 'mongoose'
import ConstantNumber from '../constants/number.constant'

const SponsorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.USERNAME_MIN_LENGTH,
      max: ConstantNumber.USERNAME_MAX_LENGTH,
    },
    firtsname: {
      type: String,
      required: true,
      min: ConstantNumber.NAME_MIN_LENGTH,
      max: ConstantNumber.NAME_MAX_LENGTH,
    },
    lastname: {
      type: String,
      required: true,
      min: ConstantNumber.NAME_MIN_LENGTH,
      max: ConstantNumber.NAME_MAX_LENGTH,
    },
    sponsor_code: { 
      type: String, 
      trim: true, 
      required: true, 
      index: true 
    },
    avatar: { 
      key: { 
        type: String, 
        default: '' 
      } 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: ConstantNumber.EMAIL_MAX_LENGTH,
    },
    password: {
      type: String,
      required: true,
      min: ConstantNumber.PASSWORD_MIN_LENGTH,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      min: ConstantNumber.PHONE_MIN_LENGTH,
      max: ConstantNumber.PHONE_MAX_LENGTH,
    },
    address: {
      type: String,
      required: true,
      min: ConstantNumber.ADDRESS_MIN_LENGTH,
      max: ConstantNumber.ADDRESS_MAX_LENGTH,
    },
    slug: { 
      type: String, 
      default: '', 
      lowercase: true,
      min: ConstantNumber.ADDRESS_MIN_LENGTH,
      max: ConstantNumber.ADDRESS_MAX_LENGTH,
    },
    language: { 
      type: String, 
      default: 'english' 
    },
    on_trial: { 
      type: Boolean, 
      default: true 
    },
    hasPaid: { 
      type: Boolean, 
      default: false 
    },
    tosAgreement: { 
      type: Boolean,
      default: false
    },
    isApproved: { 
      type: Boolean, 
      default: false 
    },
    acctstatus: {
      type: String,
      trim: true,
      default: 'pending',
      index: true,
      enum: ['pending', 'active', 'suspended']
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
)

export default SponsorSchema
