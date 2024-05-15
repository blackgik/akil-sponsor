import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const notificationSchema = new Schema(
  {
    title: { type: String, default: '' },
    type: {
      type: String,
      default: 'organization',
      enum: ['organization', 'sponsor','single', 'KYC', 'bulk-upload']
    },
    note: { type: String, default: '' },
    is_read: { type: Boolean, default: false },
    link: { type: String, default: '' },
    compliment_obj: { type: Schema.Types.Mixed, default: {} },
    who_is_reading: { type: String, enum: ['member', 'organization','beneficiary', 'agent', 'sponsor'] },
    organization_id: { type: Schema.Types.ObjectId, ref: 'Organization' },
    member_id: { type: Schema.Types.ObjectId, ref: 'Organization_Member' },
    agent_id: { type: Schema.Types.ObjectId, ref: 'Agent_Registry' }
  },
  { timestamps: true }
);

export default model('Notifications', notificationSchema);
