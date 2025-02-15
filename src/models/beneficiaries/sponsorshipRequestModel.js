import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SponsorShipSchema = new Schema(
  {
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'Organization' },
    beneficiary_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization_Member' },
    status: {
      type: String,
      enum: ['pending', 'eligible', 'ineligible', 'accepted', 'denied', 'paid'],
      default: 'pending'
    },
    feedback_stats: { type: Boolean, default: false },
    request_state: {
      type: String,
      enum: ['pending', 'accepted', 'denied', 'completed', 'renewed'],
      default: 'pending'
    },
    subject_request: { type: String, default: '' },
    description: { type: String, default: '' },
    product_type: { type: Schema.Types.ObjectId, ref: 'ProductCategory' },
    amount: { type: Number },
    amount_in_words: { type: String },
    start_timeline: { type: Date },
    end_timeline: { type: Date },
    name: { type: String },
    bank_name: { type: String },
    bank_code: { type: String },
    acct_name: { type: String },
    acct_number: { type: String },
    recurring: {
      status: { type: Boolean, default: false },
      start_timeline: { type: Date },
      end_timeline: { type: Date },
      count: { type: Number, default: 0 }
    },
    urgency: { type: String },
    upload: [
      {
        file_type: { type: String },
        file: { type: String },
        uploadedAt: { type: String }
      }
    ],
    upload_more: { type: Boolean, default: false },
    upload_more_documents: [{ type: String }],
    upload_more_description: { type: String },
    denial_reason: { type: String }
  },
  { timestamps: true, versionKey: false }
);

export default model('Sponsor_Request', SponsorShipSchema);
