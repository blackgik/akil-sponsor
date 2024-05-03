import { Document, Model, Types } from 'mongoose'

export interface IAccount {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  phone: string,
  state: string,
  country: string,
  address: string,
  dob: Date,
  hash:string,
  hashedRt:string,
  email_verified: boolean,
  acctstatus: string,
  ownerId: string,
  otpHash: string;
  otp: string;
  roleId: string
}

export interface IAccountDocument extends IAccount, Document { }

export interface IAccountModel extends Model<IAccountDocument> {
  buildAccount(account: IAccount): IAccountDocument
  listAccounts(): Promise<IAccountDocument[]>
  getAccount(account_id: Types.ObjectId): Promise<IAccountDocument | null>
  updateAccount(account_id: Types.ObjectId, account: IAccount): Promise<IAccountDocument>
  deleteAccount(account_id: Types.ObjectId): Promise<IAccountDocument | null>
}
