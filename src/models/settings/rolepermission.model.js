import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const RolesPermissionSchema = new Schema(
  {
    role_name: { type: String, required: true, lowercase: true, trim: true },
    authorization: { type: Schema.Types.Mixed, required: true },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' }
  },
  { timestamps: true }
);

export default model('Role', RolesPermissionSchema);
