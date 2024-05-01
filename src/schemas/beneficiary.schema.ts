import { Document, Model, Types } from 'mongoose'

export interface IBeneficiary {
  sponsor_id: { type: Types.ObjectId, ref: 'sponsors' },
  firstname: { type: String, default: '' },
  lastname: { type: String, default: '' },
  othername: { type: String, default: '' },
  avatar: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  gender: { type: String, default: '' },
  country: { type: String, default: '' },
  suspension_date: { type: Date, default: '' }
  status: { type: String, default: '' }
}

export interface IBeneficiaryDocument extends IBeneficiary, Document { }

export interface IBeneficiaryModel extends Model<IBeneficiaryDocument> {
  buildBeneficiary(Beneficiary: IBeneficiary): IBeneficiaryDocument
  listBeneficiarys(): Promise<IBeneficiaryDocument[]>
  getBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null>
  updateBeneficiary(Beneficiary_id: Types.ObjectId, Beneficiary: IBeneficiary): Promise<IBeneficiaryDocument>
  deleteBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null>
}
