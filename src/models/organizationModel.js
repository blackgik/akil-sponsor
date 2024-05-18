import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const buildOrganizationSchema = new Schema(
  {
    avatar: { key: { type: String, default: '' } },
    language: { type: String, default: 'english' },
    name_of_cooperation: { type: String, lowercase: true, trim: true, index: true },

    email: { type: String, required: true, trim: true, lowercase: true, index: true },
    firstname: { type: String, required: false, trim: true, lowercase: true },
    lastname: { type: String, required: false, trim: true, lowercase: true },
    gender: { type: String, required: false, trim: true, lowercase: true, default: 'M' },
    password: { type: String },
    company_code: { type: String, trim: true },
    address: { type: String,  lowercase: true, trim: true },
    admin_name: { type: String, trim: true, lowercase: true},

    profession: { type: String, trim: true, lowercase: true, default: '' },
    country: { type: String, required: false, trim: true, lowercase: true },
    state: { type: String, required: false, trim: true, lowercase: true },
    phone: { type: String, trim: true, required: true },
    website: { type: String, trim: true, lowercase: true, default: '' },
    modules: Array,
    requested_modules: Array,
    moduleType: { type: String, trim: true, lowercase: true, default: 'sponsor' },
    total_number_of_beneficiaries_chosen: { type: Number, default: 0 },
    total_number_of_beneficiaries_created: { type: Number, default: 0 },
    isApproved: { type: Boolean, default: false },
    organization_reg_fee: { type: Number, default: 0 },
    reg_fee_total: { type: Number, default: 0 },
    paystack_subacct: { type: Schema.Types.Mixed, default: {} },
    on_trial: { type: Boolean, default: true },
    hasPaid: { type: Boolean, default: false },
    tosAgreement: { type: Boolean },
    reg_fee: { type: Number, default: 0 },
    slug: { type: String, default: '', lowercase: true },
    date_of_incooperation: { type: Date, deafault: '2000-10-01' },
    bank_details: {
      bank_name: String,
      acct_no: String,
      acct_name: String,
      bank_code: String,
      bvn: { type: String, default: '' }
    },
    other_bank_details: [
      {
        bank_name: { type: String },
        acct_no: { type: String },
        acct_name: { type: String },
        bank_code: { type: String },
        kyc: { type: Schema.Types.Mixed },
        approval: {
          type: String,
          enum: ['pending', 'approved', 'suspended', 'declined']
        },
        metadata: { type: Schema.Types.Mixed }
      }
    ],
    psdAgreement: {
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
    chat_enabled: {
      type: Boolean,
      default: true
    },
    acctstatus: {
      type: String,
      trim: true,
      default: 'pending',
      index: true,
      enum: ['pending', 'active', 'suspended']
    },
    vault_access: {
      api_key_live: { type: String, index: true, default: '' },
      api_key_test: { type: String, index: true, default: '' },
      webhook_live: { type: String, index: true, default: '' },
      webhook_test: { type: String, index: true, default: '' }
    },
    agent_commissions: {
      commission_type: {
        type: String,
        index: true,
        default: 'percentage',
        enum: ['flat', 'percentage']
      },
      commission_amount: {
        type: Number,
        default: 50
      }
    },
    credit_balance: { type: Number, index: true, default: 5 },
    deduction_uploads: { type: Number, default: 5, index: true },
    acct_mode: { type: String, index: true, default: 'live', enum: ['live', 'test'] },
    payment_plan: { type: String, default: '' },
    start_trial_ts: { type: Date },
    end_trial_ts: { type: Date },
    is_first_time: { type: Boolean, default: true },
    annual_plan: { type: Boolean, default: false }
  },
  { timestamps: true }
);

buildOrganizationSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.paystack_subacct;
  delete userObject?.vault_access;

  return userObject;
};

export default model('Organization', buildOrganizationSchema);
