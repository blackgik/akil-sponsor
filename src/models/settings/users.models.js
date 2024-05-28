import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    avatar: { key: { type: String } },
    user_name: { type: String, required: true, lowercase: true },
    gender: { type: String, required: true, lowercase: true },
    email: { type: String, default: '' },
    phone: { type: String, required: true, lowercase: true },
    date_of_birth: { type: Date, required: true },
    role_id: { type: Schema.Types.ObjectId, required: true, ref: 'Role' },
    password: { type: String, required: true },
    is_beneficiary: { type: Boolean, default: false },
    acctstatus: {
      type: String,
      enum: ['active', 'suspended', 'pending', 'deleted'],
      default: 'active'
    },
    sponsor_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organizzation' }
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

export default model('User', UserSchema);
