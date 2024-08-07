import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const donorSchema = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: false, default: '' },
    title: { type: String, required: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    donation_amount: { type: Number, default: 0 },
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'Organisation', required: true }
  },
  { timestamps: true }
);

export default model('Donor', donorSchema);
