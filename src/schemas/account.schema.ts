import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IAccount, IAccountDocument, IAccountModel } from '../models/account.model';

const AccountSchema = new Schema({
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
  otpHash:{ type: String, required: false },
  otp:{ type: String, required: false },
  hashedRt:{ type: String, required: false },
  dob: { type: Date, required: false },
  email_verified: { type: Boolean, default: false },
  acctstatus: { type: String, default: 'pending', enum: ['pending', 'active', 'suspended'] },
  roleId: {
    type: Types.ObjectId,
    required: false
  },
  ownerId: {
    type: Types.ObjectId,
    required: false
  }
}, {
  collection: 'accounts',
  timestamps: true,
});

AccountSchema.statics.buildAccount = (account: IAccount): IAccountDocument => {
  return new Account(account)
}

AccountSchema.statics.listAccounts = async (): Promise<IAccountDocument[]> => {
  return await Account.find();
}
AccountSchema.statics.getAccount = async (account_id: Types.ObjectId): Promise<IAccountDocument | null> => {
  return await Account.findById(account_id)
}

AccountSchema.statics.updateAccount = async (account_id: Types.ObjectId, account: IAccount): Promise<IAccountDocument | null> => {
  return await Account.findByIdAndUpdate(account_id, account);
}

AccountSchema.statics.deleteAccount = async (account_id: Types.ObjectId): Promise<IAccountDocument | null> => {
  return await Account.findByIdAndDelete(account_id);
}

const Account = model<IAccountDocument, IAccountModel>('accounts', AccountSchema);


export {
  Account
}
