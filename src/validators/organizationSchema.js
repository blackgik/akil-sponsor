import Joi from 'joi';

export const validateOnboardingOrganizationSchema = Joi.object({
  language: Joi.string().optional().allow('', null),
  name_of_cooperation: Joi.string().optional().allow('', null),
  firstname: Joi.string().optional().allow('', null),
  lastname: Joi.string().optional().allow('', null),
  email: Joi.string().email().required(),
  address: Joi.string().optional().allow('', null),
  admin_name: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().required(),
  website: Joi.string().optional().allow('', null),
  modules: Joi.array().items(Joi.string().optional().allow('', null)),
  total_number_of_beneficiaries_chosen: Joi.number().optional().default(0),
  reg_fee: Joi.number().optional().allow(0, null),
  slug: Joi.string().required(),
  bank_details: Joi.object({
    bvn: Joi.string().optional().allow('', null),
    bank_name: Joi.string().optional().allow('', null),
    acct_no: Joi.string().optional().allow('', null),
    acct_name: Joi.string().optional().allow('', null),
    bank_code: Joi.string().optional().allow('', null)
  }).optional(),
  credit_balance: Joi.number().optional().allow(0, null),
  deduction_uploads: Joi.number().optional().allow(0, null),
  agent_referral_code: Joi.string().optional().allow('', null),
  tosAgreement: Joi.boolean().required(),
  pdsAgreement: Joi.boolean().required(),
  organization_reg_fee: Joi.number().optional().allow(0, null),
  payment_plan: Joi.string()
    .optional()
    .valid('basic', 'standard', 'premium', 'ultimate', 'third_party_api').default('basic'),
  annual_plan: Joi.boolean().optional().default(false)
});

export const updateOrganizationProfileSchema = Joi.object({
  language: Joi.string().optional().allow('', null),
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
  name_of_cooperation: Joi.string().optional().allow('', null),
  address: Joi.string().optional().allow('', null),
  admin_name: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().allow('', null),
  website: Joi.string().optional().allow('', null),
  slug: Joi.string().optional().allow('', null),
  organization_reg_fee: Joi.number().optional().allow(0, null),
  reg_fee: Joi.number().optional(),
  bank_details: Joi.object({
    bvn: Joi.string().optional().allow('', null),
    bank_name: Joi.string().optional().allow('', null),
    acct_no: Joi.string().optional().allow('', null),
    acct_name: Joi.string().optional().allow('', null),
    bank_code: Joi.string().optional().allow('', null)
  }).optional(),
});

export const validateLoginOrganizationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().optional().allow('', null).min(6)
});

export const validateOrganizationBeneficiarySchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  othername: Joi.string().optional().allow('', null),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.string().optional().allow('', null),
  gender: Joi.string().required(),
  country: Joi.string().optional().allow('', null),
});

export const validateBeneficiaryUpdateSchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }),
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  othername: Joi.string().optional().allow('', null),
  phone: Joi.string().required(),
  email: Joi.string().required(),
  address: Joi.string().optional().allow('', null),
  gender: Joi.string().required(),
  country: Joi.string().optional().allow('', null),
});

export const validateResetPasswordSchema = Joi.object({
  code: Joi.string().required(),
  hash: Joi.string().required()
});

export const validateForgotPasswordSchema = Joi.object({
  email: Joi.string().email().required()
});

export const beneficiaryIdSchema = Joi.object({
  beneficiary_id: Joi.string().required()
});

export const updateBankDetails = Joi.array().items(
  Joi.object({
    bank_name: Joi.string().required(),
    acct_no: Joi.string().required(),
    acct_name: Joi.string().required(),
    bank_code: Joi.string().required(),
    kyc: Joi.object({
      id_type: Joi.string().required(),
      id_avatar: Joi.object({ key: Joi.string().required() }),
      utility_avatar: Joi.object({ key: Joi.string().required() }),
      cac_avatar: Joi.object({ key: Joi.string().required() })
    })
  })
);

export const AccountRecoveryboxSchema = Joi.object({
  company_name: Joi.string().required().lowercase().trim(),
  acct_email: Joi.string().required().lowercase().trim(),
  company_address: Joi.string().required().lowercase().trim(),
  company_code: Joi.string().required().trim(),
  acct_phone: Joi.string().required().trim(),
  alternative_email: Joi.string().required().lowercase().trim(),
  date_of_incooperation: Joi.date().required(),
  account_creation_month: Joi.date().required()
});
