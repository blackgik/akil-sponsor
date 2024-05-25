import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const organizationBeneficiarySchema = new Schema({
  avatar: {
    key: { type: String }
  },
  institution: {
    type: Schema.Types.ObjectId,
    ref: 'Organization_institution',
    index: true
  },
  personal: {
    member_name: { type: String, required: false, trim: true, lowercase: true },
    dob: { type: Date, default: '2000-10-01' },
    gender: { type: String, required: false, trim: true, lowercase: true },
    marital_status: { type: String, required: false, trim: true, lowercase: true },
    nationality: { type: String, required: false, trim: true, lowercase: true },
    state_of_origin: { type: String, required: false, trim: true, lowercase: true },
    language: { type: String, required: false, trim: true, lowercase: true },
    lga: { type: String, required: false, trim: true, lowercase: true }
  },
  contact: {
    country_of_residence: { type: String, required: false, trim: true, lowercase: true },
    state: { type: String, required: false, trim: true, lowercase: true },
    phone: { type: String, required: false, trim: true },
    email: { type: String, required: false, trim: true, lowercase: true, index: true },
    city: { type: String, required: false, trim: true, lowercase: true },
    resident_address: { type: String, trim: true, lowercase: true }
  },
  documents: {
    id_image: { type: String, default: '' },
    id_card: { type: String, default: '', trim: true, lowercase: true },
    id_number: { type: String, default: '', trim: true },
    issued_date: { type: Date },
    expiry_date: { type: Date },
    nin: { type: String, default: '', trim: true },
    highest_level_education: { type: String, default: '', trim: true, lowercase: true },
    agent: { type: Schema.Types.ObjectId, ref: 'Agent' }
  },
  employment_info: {
    place_of_employment: { type: String, default: '', trim: true, lowercase: true },
    state_of_employment: { type: String, default: '', trim: true, lowercase: true },
    country_of_employment: { type: String, default: '', trim: true, lowercase: true },
    employment_address: { type: String, default: '', trim: true, lowercase: true },
    city: { type: String, default: '', trim: true, lowercase: true },
    employment_status: { type: String, default: '', trim: true, lowercase: true },
    start_date: { type: Date },
    department: { type: String, default: '', trim: true, lowercase: true },
    monthly_net_salary: { type: String, default: '', trim: true, lowercase: true },
    position: { type: String, default: '', trim: true, lowercase: true }
  },
  next_of_kin: [
    {
      relationship: { type: String, default: '', trim: true, lowercase: true },
      gender: { type: String, default: '', trim: true, lowercase: true },
      name: { type: String, default: '', trim: true, lowercase: true },
      phone: { type: String, default: '', trim: true },
      email: { type: String, default: '', trim: true, lowercase: true },
      address: { type: String, default: '', trim: true, lowercase: true }
    }
  ],
  bank_details: {
    bank: {
      bvn: { type: String, default: '', trim: true, lowercase: true },
      bank_name: { type: String, default: '', trim: true, lowercase: true },
      acct_name: { type: String, default: '', trim: true, lowercase: true },
      bank_code: String,
      acct_number: { type: String, default: '', trim: true, lowercase: true },
      metadata: { type: Schema.Types.Mixed, default: {} }
    },
    card: {
      card_name: { type: String, default: '', trim: true, lowercase: true },
      card_number: { type: String, default: '', trim: true, lowercase: true },
      date: { type: String, default: '', trim: true }
    }
  },
  paystack_subacct: { type: Schema.Types.Mixed, default: {} },
  acctstatus: {
    type: String,
    enum: ['pending', 'active', 'declined', 'suspended'],
    default: 'pending',
    index: true
  },
  kyc_status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'submitted', 'verified', 'declined']
  },
  metadata: { type: Schema.Types.Mixed },
  otpCode: { type: String, default: '' },
  isVerified: { type: Boolean, default: false },
  note: { type: String, default: '', trim: true },
  has_paid_reg: { type: Boolean, default: false },
  password: { type: String, required: false },
  payment_path: { type: String, enum: ['online', 'offline'], default: 'offline', trim: true },
  member_unique_id: { type: String, trim: true, index: true },
  acct_expiry: { type: Date },
  reg_fee: { type: Number, default: 0 },
  organization_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Organization',
    index: true
  },
},
  { timestamps: true }
);

organizationBeneficiarySchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;

  return userObject;
};

export default model('Organization_Beneficiary', organizationBeneficiarySchema);
