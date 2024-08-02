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
    request_id: { type: Schema.Types.ObjectId, ref: 'Sponsor_Request' },
    project_id: { type: Schema.Types.ObjectId, ref: 'Project' },
    is_read: { type: Boolean, default: false },
    beneficiary_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization_Member' },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },

  { timestamps: true }
);

export default model('Feedback', feedbackSchema);
