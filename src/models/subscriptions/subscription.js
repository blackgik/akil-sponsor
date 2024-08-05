import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SubscriptionHistorySchema = new Schema(
  {
    sender: { type: String, required: true },
    amount: { type: Number, required: true },
    deposit_method: { type: String, required: true },
    date: { type: Date, required: true },
    ref_no: { type: String, required: true },
    status: { type: String, enum: ['pending', 'paid'], default: 'pending' },
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'Organization' },
    metadata: { type: Schema.Types.Mixed }
  },
  { timestamps: true }
);

export default model('Subsction_History', SubscriptionHistorySchema);
