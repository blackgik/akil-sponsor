import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    product_name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      index: true
    },
    product_quantity: { type: Number, default: 0 },
    product_value_amount: { type: Number, default: 0 },
    product_slug: { type: String, trim: true },
    product_unit: { type: String, trim: true },
    product_category_id: {
      type: Schema.Types.ObjectId,
      ref: 'ProductCategory',
      required: true
    },
    product_image: { type: String, trim: true },
    product_description: { type: String, trim: true },
    
    organization_id: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default model('Product', ProductSchema);
