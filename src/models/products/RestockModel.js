import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RestockSchema = new Schema(
  {

    restock_quantity: { type: Number, default: 0 },
    restock_value_amount: { type: Number, default: 0 },
    restock_unit: { type: String, trim: true },
    restock_start_date: { type: String, trim: true },
    product_id: {
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    supplier_id: {
        type: Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
      },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default model('Restock', RestockSchema);
