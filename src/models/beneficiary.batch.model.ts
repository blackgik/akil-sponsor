import { Document, Model, Types } from 'mongoose'

export interface IBeneficiaryBatch {
    firstname: string,
    lastname: string,
    othername: string,
    sponsor_id: Types.ObjectId,
    avatar: string,
    email: string,
    phone: string,
    gender: string,
    country: string,
    suspension_date: Date,
    status: string,
    batch_no: string,
    batch_no_id: string,
}

export interface IBeneficiaryBatchDocument extends IBeneficiaryBatch, Document { }

export interface IBeneficiaryBatchModel extends Model<IBeneficiaryBatchDocument> {
    buildBeneficiary(Beneficiary: IBeneficiaryBatch): IBeneficiaryBatchDocument
    listBeneficiarys(): Promise<IBeneficiaryBatchDocument[]>
    getBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryBatchDocument | null>
    updateBeneficiary(Beneficiary_id: Types.ObjectId, Beneficiary: IBeneficiaryBatch): Promise<IBeneficiaryBatchDocument>
    deleteBeneficiary(Beneficiary_id: Types.ObjectId): Promise<IBeneficiaryBatchDocument | null>
}
