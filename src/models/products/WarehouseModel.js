import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const WarehouseSchema = new Schema(
  {
    warehouse_name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      index: true
    },
    warehouse_country: { type: String, trim: true },
    warehouse_state: { type: String, trim: true },
    warehouse_lga: { type: String, trim: true },
    warehouse_address: { type: String, trim: true },
    warehouse_description: { type: String, trim: true },
    warehouse_googlemaps_url: { type: String, trim: true },
    sponsor_id: {
      type: Schema.Types.ObjectId,
      ref: 'Organization',
      required: true
    },
    warehouse_overseer_id: {
      type: Schema.Types.ObjectId,
      ref: 'Organization_Beneficiary',
      required: true
    },
    wrhstatus: {
        type: String,
        trim: true,
        default: 'draft',
        index: true,
        enum: ['draft', 'available', 'full', 'closed']
      },
  },
  { timestamps: true }
);

export default model('Warehouse', WarehouseSchema);
