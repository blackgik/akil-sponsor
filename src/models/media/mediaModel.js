import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const mediaSchema = new Schema(
  {
    file: {
      key: { type: String }
    },
    file_name: {
      type: String,
      default: '',
      trim: true
    },
    file_size: {
      type: String,
      default: '',
      trim: true
    },
    file_ext: {
      type: String,
      default: '',
      trim: true
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
    is_viewed: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: 'unpublished',
      enum: ['published', 'unpublished']
    },
    start_date: { type: Date },
    end_date: { type: Date },
    project_id: { type: Schema.Types.ObjectId, ref: 'Project' },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },

  { timestamps: true }
);

export default model('Media', mediaSchema);
