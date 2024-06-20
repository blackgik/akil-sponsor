import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectSchema = new Schema(
  {
    project_name: { type: String, default: '', lowercase: true, trim: true },
    description: { type: String, default: '', trim: true },
    product_type: { type: Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
    product_items: [{ type: Schema.Types.ObjectId, ref: 'Product', required: true }],
    quantity_per_person: { type: Number, default: 0 },
    start_date: { type: Date },
    end_date: { type: Date },
    is_active: { type: Boolean, default: true },
    project_state: {
      type: String,
      default: 'pending',
      enum: ['pending', 'in-progress', 'completed', 'cancelled']
    },
    project_status: {
      type: String,
      default: 'created',
      enum: ['created', 'awarded', 'scheduled', 'disbursed', 'completed', 'ended']
    },
    sponsor_id: { type: Schema.Types.ObjectId, ref: 'Organization', required: true }
  },

  { timestamps: true }
);

export default model('Project', projectSchema);
