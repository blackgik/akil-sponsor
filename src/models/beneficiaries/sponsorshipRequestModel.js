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
    product_type: { type: String, default: 'Finance' },
    amount: { type: Number },
    amount_in_words: { type: String },
    start_timeline: { type: Date },
    end_timeline: { type: Date },
    name: { type: String },
    bank_name: { type: String },
    acct_name: { type: String },
    acct_number: { type: String },
    recuring: {
      status: { type: Boolean, default: false },
      start_timeline: { type: Date },
      end_timeline: { type: Date },
      count:{ type: Number}
    },
    urgency: { type: String },
    upload: [
      {
        file_type: { type: String },
        file: { type: String }
      }
    ],
    upload_more: { type: Boolean, default: false }
  },
  { timestamps: true, versionKey: false }
);

export default model('Sponsor_Request', SponsorShipSchema);
