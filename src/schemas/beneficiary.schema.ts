import { IBeneficiary, IBeneficiaryDocument, IBeneficiaryModel } from '../models/beneficiary.model';
import { Document, Model, Schema, Types, model } from 'mongoose'

const BeneficiarySchema = new Schema({
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
  status: { type: String, default: '' }
},{
  collection: 'sponsors',
  timestamps: true,
});

BeneficiarySchema.statics.buildBeneficiary=(beneficiary: IBeneficiary): IBeneficiaryDocument=>{
  return new Beneficiary(beneficiary)
}

BeneficiarySchema.statics.listBeneficiarys=async(): Promise<IBeneficiaryDocument[]>=>{
  return await Beneficiary.find();
}
BeneficiarySchema.statics.getBeneficiary=async(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument | null>=>{
  return await Beneficiary.findById(beneficiary_id)
}

BeneficiarySchema.statics.updateBeneficiary=async(beneficiary_id: Types.ObjectId, beneficiary: IBeneficiary): Promise<IBeneficiaryDocument | null>=>{
  return await Beneficiary.findByIdAndUpdate(beneficiary_id, beneficiary);
}

BeneficiarySchema.statics.deleteBeneficiary=async(beneficiary_id: Types.ObjectId): Promise<IBeneficiaryDocument| null>=>{
  return await Beneficiary.findByIdAndDelete(beneficiary_id);
}

const Beneficiary = model<IBeneficiaryDocument, IBeneficiaryModel>('beneficiaries',BeneficiarySchema);


export {
    Beneficiary
}

