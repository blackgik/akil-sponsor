import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const PaymentSchema = new Schema(
  {
    full_name : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    reference : {
        type: String,
        required: true,
        unique: true
    },
    trx : {
        type: String
    },
    operation : {
        type: String
    },
    status: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);


export default model('Payment', PaymentSchema);
