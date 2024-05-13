import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bulkBeneficiaryBatchUploadSchema = new Schema(
  {
    firstname: { type: String, required: true, trim: true, lowercase: true },
    lastname: { type: String, required: true, trim: true, lowercase: true },
    othername: { type: String, default: '' },
    phone: { type: String, default: '', trim: true },
    email: { type: String, default: '', trim: true, lowercase: true },
    address: { type: String, default: '', trim: true, lowercase: true },
    gender: { type: String, required: true, trim: true, lowercase: true },
    country: { type: String, required: true, trim: true, lowercase: true },
    acctstatus: {
      type: String,
      enum: ['pending', 'active', 'declined', 'suspended'],
      default: 'pending',
      index: true
    },
    has_paid_reg: { type: Boolean, default: false },
    reg_fee: { type: Number, default: 0 },
    organization_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Organization',
      index: true
    },
    batch_no: { type: String, required: true, trim: true, index: true },
    batch_no_id: { type: String, required: true, trim: true, index: true },
    
  },
  { timestamps: true }
);

export default model('Bulk_Beneficiary_Data', bulkBeneficiaryBatchUploadSchema);
