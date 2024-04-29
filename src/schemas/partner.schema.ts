import { Schema, model, Types} from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IPartner,IPartnerDocument, IPartnerModel } from '../models/partner.model';

const PartnerSchema = new Schema({
  partner_business_name: {
    type: String,
    required: true,
    unique: true,
    min: ConstantNumber.USERNAME_MIN_LENGTH,
    max: ConstantNumber.USERNAME_MAX_LENGTH,
  },
  partner_admin_name: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  partner_slug: {
    type: String,
    required: true,
    min: ConstantNumber.NAME_MIN_LENGTH,
    max: ConstantNumber.NAME_MAX_LENGTH,
  },
  partner_code: { 
    type: String, 
    trim: true, 
    required: true, 
    index: true 
  },
  partner_avatar: { 
    key: { 
      type: String, 
      default: '' 
    } 
  },
  partner_email: {
    type: String,
    required: true,
    unique: true,
    max: ConstantNumber.EMAIL_MAX_LENGTH,
  },
  password: {
    type: String,
    required: true,
    min: ConstantNumber.PASSWORD_MIN_LENGTH,
  },
  partner_phone: {
    type: String,
    required: true,
    unique: true,
    min: ConstantNumber.PHONE_MIN_LENGTH,
    max: ConstantNumber.PHONE_MAX_LENGTH,
  },
  partner_website: {
    type: String,
    required: false,
    unique: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MIN_LENGTH,
  },
  partner_address: {
    type: String,
    required: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MAX_LENGTH,
  },
  partner_sector: { 
    type: String, 
    default: '', 
    lowercase: true,
    min: ConstantNumber.ADDRESS_MIN_LENGTH,
    max: ConstantNumber.ADDRESS_MAX_LENGTH,
  },
  partner_language: { 
    type: String, 
    default: 'english' 
  },
  partner_location: {
    latitude: { type: String, default: '' },
    longitude: { type: String, default: '' }
  },
  on_trial: { 
    type: Boolean, 
    default: true 
  },
  hasPaid: { 
    type: Boolean, 
    default: false 
  },
  tosAgreement: { 
    type: Boolean,
    default: false
  },
  isApproved: { 
    type: Boolean, 
    default: false 
  },
  acctstatus: {
    type: String,
    trim: true,
    default: 'pending',
    index: true,
    enum: ['pending', 'active', 'suspended']
  },
  start_trial_ts: { type: Date },
  end_trial_ts: { type: Date },

},{
  collection: 'partners',
  timestamps: true,
});

PartnerSchema.statics.buildPartner=(partner: IPartner): IPartnerDocument=>{
    return new Partner(partner)
}

PartnerSchema.statics.listPartners=async(): Promise<IPartnerDocument[]>=>{
    return await Partner.find();
}
PartnerSchema.statics.getPartner=async(partner_id: Types.ObjectId): Promise<IPartnerDocument | null>=>{
    return await Partner.findById(partner_id)
}

PartnerSchema.statics.updatePartner=async(partner_id: Types.ObjectId, partner: IPartner): Promise<IPartnerDocument | null>=>{
    return await Partner.findByIdAndUpdate(partner_id, partner);
}

PartnerSchema.statics.deletePartner=async(partner_id: Types.ObjectId): Promise<IPartnerDocument| null>=>{
    return await Partner.findByIdAndDelete(partner_id);
}

const Partner = model<IPartnerDocument, IPartnerModel>('partners',PartnerSchema);


export {
    Partner
}
