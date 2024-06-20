import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const AwardeesSchema = new Schema(
  {
    beneficiary_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization_Member' },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number },
    phone: { type: String, required: true },
    occupation: { type: String, required: true },
    state: { type: String, required: true },
    lga: { type: String, required: true },
    ward: { type: String, required: true },
    status: {
      type: String,
      default: 'selected',
      enum: ['selected', 'awarded', 'confirmed', 'scheduled', 'disbursed']
    },
    beneficiary_status: { type: String, required: true },
    project_id: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
    batch_code: { type: String, default: '' },
    batch_id: { type: Schema.Types.ObjectId, ref: 'Project_schedule' },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },
  { timestamps: true }
);

export default model('Project_Awardee', AwardeesSchema);
