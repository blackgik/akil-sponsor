import { Schema, model, Types} from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { ISponsor,ISponsorDocument, ISponsorModel } from '../models/sponsor.model';

const SponsorSchema = new Schema({
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
  password: { type: String, required: true },
  state: { type: String, required: true, lowercase: true },
  country: { type: String, required: true, lowercase: true },
  city: { type: String, required: true , lowercase: true},
  address: { type: String, required: true },
  dob: { type: Date, required: true },
  email_verified: { type: Boolean, default: false },
  acctstatus: { type: String, default: 'pending', enum: ['pending', 'active', 'suspended'] },
  kyc_status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'submitted', 'approved', 'declined']
  },
  kyc_docs: {
    bank_details: {
      bvn: { type: String, default: '' },
      acct_number: { type: String, default: '' },
      acct_name: { type: String, default: '' },
      bank_name: { type: String, default: '' },
      acct_type: { type: String, default: '' },
      bank_code: { type: String, default: '' },
      bvn_verified: { type: Boolean, default: false }
    },
    identitifications: {
      id_type: { type: String, default: '' },
      id_card: { key: String },
      utility_bill: { key: String }
    },
    customer_code: String //gotten from paystack.com or in the future any platform we support.
  },
  language: { 
    type: String, 
    default: 'english' 
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
  start_trial_ts: { type: Date },
  end_trial_ts: { type: Date },

},{
  collection: 'sponsors',
  timestamps: true,
});

SponsorSchema.statics.buildSponsor=(sponsor: ISponsor): ISponsorDocument=>{
    return new Sponsor(sponsor)
}

SponsorSchema.statics.listSponsors=async(): Promise<ISponsorDocument[]>=>{
    return await Sponsor.find();
}
SponsorSchema.statics.getSponsor=async(sponsor_id: Types.ObjectId): Promise<ISponsorDocument | null>=>{
    return await Sponsor.findById(sponsor_id)
}

SponsorSchema.statics.updateSponsor=async(sponsor_id: Types.ObjectId, sponsor: ISponsor): Promise<ISponsorDocument | null>=>{
    return await Sponsor.findByIdAndUpdate(sponsor_id, sponsor);
}

SponsorSchema.statics.deleteSponsor=async(sponsor_id: Types.ObjectId): Promise<ISponsorDocument| null>=>{
    return await Sponsor.findByIdAndDelete(sponsor_id);
}

const Sponsor = model<ISponsorDocument, ISponsorModel>('sponsors',SponsorSchema);


export {
    Sponsor
}
