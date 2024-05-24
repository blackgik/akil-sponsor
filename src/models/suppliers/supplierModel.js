import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const SupplierSchema = new Schema(
  {
    supplier_name: {type: String, required: false, trim: true, lowercase: true},
    supplier_surname: {type: String, required: false, trim: true, lowercase: true},
    supplier_phone: { type: String, required: false, trim: true, lowercase: true },
    supplier_country: { type: String, required: false, trim: true, lowercase: true },
    supplier_lga: { type: String, required: false, trim: true, lowercase: true },
    supplier_state: { type: String, required: false, trim: true, lowercase: true },
    supplier_product_category_id: {
      type: Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true
    },
    supplier_avatar: { key: { type: String, default: '' } },
    supplier_business_name: { type: String, required: false, trim: true, lowercase: true },
    supplier_address: { type: String, required: false, trim: true, lowercase: true },
    acctstatus: {
      type: String,
      trim: true,
      default: 'pending',
      index: true,
      enum: ['pending', 'active', 'suspended']
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default model('Supplier', SupplierSchema);
