import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const organizationBeneficiarySchema = new Schema(
  {
    firstname: { type: String, required: true, trim: true, lowercase: true },
    lastname: { type: String, required: true, trim: true, lowercase: true },
    othername: { type: String, default: '' },
    avatar: {
      key: { type: String }
    },
    phone: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true, lowercase: true },
    address: { type: String, default: '', trim: true, lowercase: true },
    gender: { type: String, required: true, trim: true, lowercase: true },
    country: { type: String, required: true, trim: true, lowercase: true },
    suspension_date: { type: Date, default: '' },
    acctstatus: {
      type: String,
      enum: ['pending', 'active', 'declined', 'suspended'],
      default: 'pending',
      index: true
    },
    otpCode: { type: String, default: '' },
    otpHash: { type: String, default: '' },
    isApproved: { type: Boolean, default: false },
    has_paid_reg: { type: Boolean, default: false },
    password: { type: String, required: true },
    acct_expiry: { type: Date },
    reg_fee: { type: Number, default: 0 },
    organization_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Organization',
      index: true
    }
  },
  { timestamps: true }
);

organizationBeneficiarySchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

export default model('Organization_Beneficiary', organizationBeneficiarySchema);
