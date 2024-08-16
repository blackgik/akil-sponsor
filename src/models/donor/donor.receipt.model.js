import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const DonorReceiptSchema = new Schema(
  {
    paymentType: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentmethod: { type: String, required: true },
    transactionId: { type: String, required: true },
    reference: { type: String },
    receipt: { type: String},
    status: { type: String, default: 'pending' },
    donor: { type: Schema.Types.ObjectId, required: true, ref: 'User' }
  },
  { timestamps: true }
);

export default model('Donor-Receipt', DonorReceiptSchema);
