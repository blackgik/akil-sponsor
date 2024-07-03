import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const mediaSchema = new Schema(
  {
    file: {
      key: { type: String }
    },
    title: {
      type: String,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    status: {
      type: String,
      default: 'unpublished',
      enum: ['published', 'unpublished']
    },
    start_date: { type: Date },
    end_date: { type: Date },
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },

  { timestamps: true }
);

export default model('Media', mediaSchema);
