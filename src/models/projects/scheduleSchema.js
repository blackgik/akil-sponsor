import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const projectScheduleSchema = new Schema(
  {
    batch_number: { type: String, default: '', trim: true },
    description: { type: String, default: '', trim: true },
    start_date: { type: Date },
    end_date: { type: Date },
    delivery_address: { type: String, default: '', trim: true },
    landmark: { type: String, default: '', trim: true },
    userid: { type: Schema.Types.ObjectId, ref: 'Organization_Member', required: true },
    phone: { type: String, default: '', trim: true },
    status: {
      type: String,
      default: 'pending',
      trim: true,
      enum: ['pending', 'scheduled', 'in-progress', 'completed']
    },
    metadata: { type: Schema.Types.Mixed, default: {} },
    project: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },
  { timestamps: true }
);

export default model('Project_schedule', projectScheduleSchema);
