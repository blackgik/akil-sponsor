import { Document, Model, Types } from 'mongoose'

export interface IUser {
  firstname: string,
  lastname: string,
  avatar: string,
  email: string,
  phone: string,
  gender: string,
  password: string,
  state: string,
  country: string,
  city: string,
  address: string,
  dob: Date,
  hash:string,
  hashedRt:string,
  email_verified: boolean,
  acctstatus: string,
  otpHash: string;
  roleId: string
}

export interface IUserDocument extends IUser, Document { }

export interface IUserModel extends Model<IUserDocument> {
  buildUser(user: IUser): IUserDocument
  listUsers(): Promise<IUserDocument[]>
  getUser(user_id: Types.ObjectId): Promise<IUserDocument | null>
  updateUser(user_id: Types.ObjectId, user: IUser): Promise<IUserDocument>
  deleteUser(user_id: Types.ObjectId): Promise<IUserDocument | null>
}
