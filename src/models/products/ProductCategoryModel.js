import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ProductSchema = new Schema(
  {
    product_category_name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      index: true
    },
    product_category_slug: { type: String, trim: true },
    product_category_description: { type: String, trim: true },
    is_active: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default model('ProductCategory', ProductSchema);
