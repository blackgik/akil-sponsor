import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const feedbackSchema = new Schema(
  {
    title: {
      type: String,
      trim: true
    },
    content: {
      type: String,
      trim: true
    },
    is_read: { type: Boolean, default: false },
    beneficiary_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization_Member' },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },

  { timestamps: true }
);

export default model('Feedback', feedbackSchema);
