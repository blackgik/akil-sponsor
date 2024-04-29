const mongoose = require('mongoose')

const PaymentSchema = new mongoose.Schema({
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
    status: {
        type: String,
        required: true
    }
},
{
    collection: 'payments',
    timestamps: true,
  })
export default PaymentSchema