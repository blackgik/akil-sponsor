import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IUser, IUserDocument, IUserModel } from '../models/user.model';

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  lastname: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  avatar: { key: { type: String, default: '' } },
  email: { type: String, required: true, lowercase: true },
  phone: { type: String, required: true },
  gender: { type: String, default: '', lowercase: true },
  password: { type: String, required: false },
  state: { type: String, required: false, lowercase: true },
  country: { type: String, required: false, lowercase: true },
  city: { type: String, required: false, lowercase: true },
  address: { type: String, required: false },
  hash:{ type: String, required: false },
  hashedRt:{ type: String, required: false },
  dob: { type: Date, required: false },
  email_verified: { type: Boolean, default: false },
  acctstatus: { type: String, default: 'pending', enum: ['pending', 'active', 'suspended'] },
  roleId: {
    type: Types.ObjectId,
    required: false
  }
}, {
  collection: 'users',
  timestamps: true,
});

UserSchema.statics.buildUser = (user: IUser): IUserDocument => {
  return new User(user)
}

UserSchema.statics.listUsers = async (): Promise<IUserDocument[]> => {
  return await User.find();
}
UserSchema.statics.getUser = async (user_id: Types.ObjectId): Promise<IUserDocument | null> => {
  return await User.findById(user_id)
}

UserSchema.statics.updateUser = async (user_id: Types.ObjectId, user: IUser): Promise<IUserDocument | null> => {
  return await User.findByIdAndUpdate(user_id, user);
}

UserSchema.statics.deleteUser = async (user_id: Types.ObjectId): Promise<IUserDocument | null> => {
  return await User.findByIdAndDelete(user_id);
}

const User = model<IUserDocument, IUserModel>('users', UserSchema);


export {
  User
}
