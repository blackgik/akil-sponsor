import { Document, Model, Types } from 'mongoose'

export interface IBeneficiary {
  firstname: string,
  lastname: string,
  othername: string,
  avatar: string,
  email: string,
  phone: string,
  gender: string,
  country: string,
  suspension_date: Date,
  status: string
}

export interface IBeneficiaryDocument extends IBeneficiary, Document { }

export interface IBeneficiaryModel extends Model<IBeneficiaryDocument> {
  buildBeneficiary(Beneficiary: IBeneficiary): IBeneficiaryDocument
  listBeneficiarys(): Promise<IBeneficiaryDocument[]>
  getBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null>
  updateBeneficiary(Beneficiary_id: Types.ObjectId, Beneficiary: IBeneficiary): Promise<IBeneficiaryDocument>
  deleteBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null>
}
