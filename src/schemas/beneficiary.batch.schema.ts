import { IBeneficiaryBatch, IBeneficiaryBatchDocument, IBeneficiaryBatchModel } from '../models/beneficiary.batch.model';
import { Document, Model, Schema, Types, model } from 'mongoose'

const BeneficiaryBatchSchema = new Schema({
    sponsor_id: { type: Types.ObjectId, required: true, ref: 'sponsors' },
    firstname: { type: String, default: '' },
    lastname: { type: String, default: '' },
    othername: { type: String, default: '' },
    avatar: { type: String, default: '' },
    email: { type: String, default: '', unique: true },
    phone: { type: String, default: '', unique: true },
    gender: { type: String, default: '' },
    country: { type: String, default: '' },
    suspension_date: { type: Date, default: '' },
    status: { type: String, default: '' },
    batch_no: { type: String, required: true, trim: true, index: true },
    batch_no_id: { type: String, required: true, trim: true, index: true },
}, {
    collection: 'beneficiary_batches',
    timestamps: true,
});

BeneficiaryBatchSchema.statics.buildBeneficiary = (beneficiary: IBeneficiaryBatch): IBeneficiaryBatchDocument => {
    return new BeneficiaryBatch(beneficiary)
}

BeneficiaryBatchSchema.statics.listBeneficiarys = async (): Promise<IBeneficiaryBatchDocument[]> => {
    return await BeneficiaryBatch.find();
}
BeneficiaryBatchSchema.statics.getBeneficiary = async (beneficiary_id: Types.ObjectId): Promise<IBeneficiaryBatchDocument | null> => {
    return await BeneficiaryBatch.findById(beneficiary_id)
}

BeneficiaryBatchSchema.statics.updateBeneficiary = async (beneficiary_id: Types.ObjectId, beneficiary: IBeneficiaryBatch): Promise<IBeneficiaryBatchDocument | null> => {
    return await BeneficiaryBatch.findByIdAndUpdate(beneficiary_id, beneficiary);
}

BeneficiaryBatchSchema.statics.deleteBeneficiary = async (beneficiary_id: Types.ObjectId): Promise<IBeneficiaryBatchDocument | null> => {
    return await BeneficiaryBatch.findByIdAndDelete(beneficiary_id);
}

const BeneficiaryBatch = model<IBeneficiaryBatchDocument, IBeneficiaryBatchModel>('beneficiary_batches', BeneficiaryBatchSchema);


export {
    BeneficiaryBatch
}

