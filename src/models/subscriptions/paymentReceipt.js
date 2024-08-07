import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SubscriptionPaymentReceiptSchema = new Schema(
  {
    receipt: { type: String, required: true },
    subscription_id: { type: Schema.Types.ObjectId, ref: 'Subsction_History' },
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'Organization' }
  },
  { timestamps: true }
);

export default model('payment_receipt', SubscriptionPaymentReceiptSchema);
