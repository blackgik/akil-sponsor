import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const bulkBeneficiaryBatchUploadSchema = new Schema(
  {
    personal: {
      member_name: { type: String, required: true, trim: true, lowercase: true },
      gender: { type: String, required: true, trim: true, lowercase: true },
      marital_status: { type: String, required: true, trim: true, lowercase: true },
      nationality: { type: String, required: true, trim: true, lowercase: true },
      state_of_origin: { type: String, required: true, trim: true, lowercase: true },
      language: { type: String, required: true, trim: true, lowercase: true },
      lga: { type: String, required: true, trim: true, lowercase: true }
    },
    contact: {
      country_of_residence: { type: String, required: true, trim: true, lowercase: true },
      state: { type: String, required: true, trim: true, lowercase: true },
      phone: { type: String, required: true, trim: true },
      email: { type: String, required: true, trim: true, lowercase: true, index: true },
      city: { type: String, required: true, trim: true, lowercase: true },
      resident_address: { type: String, trim: true, lowercase: true }
    },
    documents: {
      agent: { type: Schema.Types.ObjectId, ref: 'Agent_Registry' }
    },
    organization_id: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Organization',
      index: true
    },
    bank_details: {
      bank: {
        bvn: { type: String, default: '', trim: true, lowercase: true },
        bank_name: { type: String, default: '', trim: true, lowercase: true },
        acct_name: { type: String, default: '', trim: true, lowercase: true },
        bank_code: String,
        acct_number: { type: String, default: '', trim: true, lowercase: true },
        metadata: { type: Schema.Types.Mixed, default: {} }
      }
    },
    batch_no: { type: String, required: true, trim: true, index: true },
    batch_no_id: { type: String, required: true, trim: true, index: true },
    status: {
      type: String,
      default: 'pending',
      trim: true,
      index: true,
      enum: ['pending', 'approved']
    },
    has_paid: { type: Boolean, required: true, trim: true, index: true },
    reg_fee: { type: Number, default: 0 },
    comment: { type: String }
  },
  { timestamps: true }
);

export default model('Bulk_Beneficiary_Data', bulkBeneficiaryBatchUploadSchema);
