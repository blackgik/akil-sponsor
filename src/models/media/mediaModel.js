import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const mediaSchema = new Schema(
  {
    file: {
      key: { type: String }
    },
    video_url: {
      type: String,
      default: '',
      trim: true
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
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', default: '' },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },

  { timestamps: true }
);

export default model('Media', mediaSchema);
