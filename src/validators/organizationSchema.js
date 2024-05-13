import Joi from 'joi';

export const validateOnboardingOrganizationSchema = Joi.object({
  language: Joi.string().optional().allow('', null),
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
  name_of_cooperation: Joi.string().optional().allow('', null),
  email: Joi.string().email().required(),
  address: Joi.string().optional().allow('', null),
  admin_name: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().allow('', null),
  website: Joi.string().optional().allow('', null),
  modules: Joi.array().items(Joi.string().optional().allow('', null)),
  total_number_of_beneficiarys_chosen: Joi.number().required(),
  reg_fee: Joi.number().optional().allow(0, null),
  slug: Joi.string().required(),
  bank_details: Joi.object({
    bvn: Joi.string().optional().allow('', null),
    bank_name: Joi.string().required(),
    acct_no: Joi.string().required(),
    acct_name: Joi.string().required(),
    bank_code: Joi.string().required()
  }).required(),
  credit_balance: Joi.number().optional().allow(0, null),
  deduction_uploads: Joi.number().optional().allow(0, null),
  agent_referral_code: Joi.string().optional().allow('', null),
  tosAgreement: Joi.boolean().required(),
  organization_reg_fee: Joi.number().required(),
  payment_plan: Joi.string()
    .required()
    .valid('basic', 'standard', 'premium', 'ultimate', 'third_party_api'),
  annual_plan: Joi.boolean().required()
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
    bank_name: Joi.string().required(),
    acct_no: Joi.string().required(),
    acct_name: Joi.string().required(),
    bank_code: Joi.string().required()
  }).optional()
});

export const validateLoginOrganizationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().optional().allow('', null).min(6)
});

export const validateOrganizationMemberSchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }),
  institution: Joi.string().required(),
  personal: Joi.object({
    beneficiary_name: Joi.string().required(),
    gender: Joi.string().required(),
    marital_status: Joi.string().required(),
    nationality: Joi.string().required(),
    language: Joi.string().required(),
    state_of_origin: Joi.string().required(),
    lga: Joi.string().required()
  }),
  contact: Joi.object({
    country_of_residence: Joi.string().required(),
    state: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    city: Joi.string().required(),
    resident_address: Joi.string().required()
  }),
  documents: Joi.object({
    id_card: Joi.string().optional().allow('', null),
    id_number: Joi.string().optional().allow('', null),
    issued_date: Joi.date().optional(),
    expiry_date: Joi.date().optional(),
    nin: Joi.string().optional().allow('', null),
    highest_level_education: Joi.string().optional().allow('', null),
    agent: Joi.string().optional().allow('', null)
  }),
  employment_info: Joi.object({
    place_of_employment: Joi.string().optional().allow('', null),
    country_of_employment: Joi.string().optional().allow('', null),
    state_of_employment: Joi.string().optional().allow('', null),
    employment_address: Joi.string().optional().allow('', null),
    city: Joi.string().optional().allow('', null),
    employment_status: Joi.string().optional().allow('', null),
    start_date: Joi.date().optional(),
    department: Joi.string().optional().allow('', null),
    monthly_net_salary: Joi.string().optional().allow('', null),
    position: Joi.string().optional().allow('', null)
  }),
  next_of_kin: Joi.array()
    .items(
      Joi.object({
        relationship: Joi.string().optional().allow('', null),
        gender: Joi.string().optional().allow('', null),
        phone: Joi.string().optional().allow('', null),
        name: Joi.string().optional().allow('', null),
        email: Joi.string().optional().allow('', null),
        address: Joi.string().optional().allow('', null)
      })
    )
    .optional(),
  bank_details: Joi.object({
    bank: Joi.object({
      bvn: Joi.string().optional().allow('', null),
      bank_name: Joi.string().optional().allow('', null),
      acct_name: Joi.string().optional().allow('', null),
      acct_number: Joi.string().optional().allow('', null),
      bank_code: Joi.string().optional().allow('', null)
    }).optional(),
    card: Joi.object({
      card_name: Joi.string().optional().allow('', null),
      card_number: Joi.string().optional().allow('', null),
      date: Joi.string().optional().allow('', null)
    })
  }).optional()
});

export const validateMemberUpdateSchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }).optional(),
  institution: Joi.string().optional().allow('', null),
  personal: Joi.object({
    beneficiary_name: Joi.string().optional().allow('', null),
    gender: Joi.string().optional().allow('', null),
    marital_status: Joi.string().optional().allow('', null),
    language: Joi.string().optional().allow('', null),
    nationality: Joi.string().optional().allow('', null),
    state_of_origin: Joi.string().optional().allow('', null),
    lga: Joi.string().optional().allow('', null)
  }),
  contact: Joi.object({
    country_of_residence: Joi.string().optional().allow('', null),
    state: Joi.string().optional().allow('', null),
    phone: Joi.string().optional().allow('', null),
    email: Joi.string().optional().allow('', null),
    city: Joi.string().optional().allow('', null),
    resident_address: Joi.string().optional().allow('', null)
  }),
  documents: Joi.object({
    id_card: Joi.string().optional().allow('', null),
    id_number: Joi.string().optional().allow('', null),
    issued_date: Joi.date().optional(),
    expiry_date: Joi.date().optional(),
    nin: Joi.string().optional().allow('', null),
    highest_level_education: Joi.string().optional().allow('', null),
    agent: Joi.string().optional().allow('', null)
  }),
  employment_info: Joi.object({
    place_of_employment: Joi.string().optional().allow('', null),
    country_of_employment: Joi.string().optional().allow('', null),
    state_of_employment: Joi.string().optional().allow('', null),
    employment_address: Joi.string().optional().allow('', null),
    city: Joi.string().optional().allow('', null),
    employment_status: Joi.string().optional().allow('', null),
    start_date: Joi.date().optional(),
    department: Joi.string().optional().allow('', null),
    monthly_net_salary: Joi.string().optional().allow('', null),
    position: Joi.string().optional().allow('', null)
  }),
  next_of_kin: Joi.array()
    .items(
      Joi.object({
        relationship: Joi.string().optional().allow('', null),
        gender: Joi.string().optional().allow('', null),
        phone: Joi.string().optional().allow('', null),
        name: Joi.string().optional().allow('', null),
        email: Joi.string().optional().allow('', null),
        address: Joi.string().optional().allow('', null)
      })
    )
    .optional(),
  bank_details: Joi.object({
    bank: Joi.object({
      bank_name: Joi.string().optional().allow('', null),
      bank_code: Joi.string().optional().allow('', null),
      acct_name: Joi.string().optional().allow('', null),
      acct_number: Joi.string().optional().allow('', null)
    }).optional(),
    card: Joi.object({
      card_name: Joi.string().optional().allow('', null),
      card_number: Joi.string().optional().allow('', null),
      date: Joi.string().optional().allow('', null)
    }).optional()
  }).optional()
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
