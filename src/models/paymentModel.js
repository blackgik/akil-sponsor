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
    phone: {
        type: String
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
    trxid : {
        type: String
    },
    trxref : {
        type: String
    },
    trxfee: {
        type: Number
    },
    operation : {
        type: String
    },
    metadata: Array,
    channel : {
        type: String
    },
    currency : {
        type: String
    },
    paid_at: {
        type: Date
    },
    status: {
        type: String,
        required: true
    }
  },
  { timestamps: true }
);


export default model('Payment', PaymentSchema);
