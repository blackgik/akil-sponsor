import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const OccupationSchema = new Schema(
  {
    occupation_name: {
      type: String,
      trim: true,
      lowercase: true,
      required: true,
      index: true
    },
    occupation_slug: { type: String, trim: true },
    occupation_description: { type: String, trim: true },
    is_active: { type: Boolean, required: false, default: false},
  },
  { timestamps: true }
);

export default model('Occupation', OccupationSchema);
