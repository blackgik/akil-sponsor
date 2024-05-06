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
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, required: true, unique: true },
  state: { type: String, required: false, lowercase: true },
  country: { type: String, required: true, lowercase: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  dob: { type: Date, required: false },
  email_verified: { type: Boolean, default: false },
  modules: Array,
  requested_modules: Array,
  total_number_of_members_chosen: { type: Number, default: 0 },
  total_number_of_members_created: { type: Number, default: 0 },
  otpHash: { type: String, required: false },
  acctstatus: { type: String, default: 'pending', enum: ['pending', 'active', 'suspended'] },
  kyc_status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'submitted', 'approved', 'declined']
  },
  kyc_docs: {
    bank_details: {
      bvn: { type: String, default: '', required: false },
      acct_number: { type: String, default: '', required: false },
      acct_name: { type: String, default: '', required: false },
      bank_name: { type: String, default: '', required: false },
      acct_type: { type: String, default: '', required: false },
      bank_code: { type: String, default: '', required: false },
      bvn_verified: { type: Boolean, default: false, required: false }
    },
    identitifications: {
      id_type: { type: String, default: '' },
      id_card: { key: String },
      utility_bill: { key: String }
    },
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
    required: true,
    default: false
  },
  psdAgreement:  { 
    type: Boolean,
    required: true,
    default: false
  },
  isPreferenceSet: { 
    type: Boolean, 
    default: false 
  },
  isPackageBuilt: { 
    type: Boolean, 
    default: false 
  },
  isProfileUpdated: { 
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
