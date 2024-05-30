import Joi from 'joi';

export const validateOnboardingOrganizationSchema = Joi.object({
  firstname: Joi.string().optional().allow('', null),
  lastname: Joi.string().optional().allow('', null),
  gender: Joi.string().optional().allow('', null),
  email: Joi.string().email().required(),
  address: Joi.string().optional().allow('', null),
  country: Joi.string().optional().allow('', null),
  state: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().required(),
  reg_fee: Joi.number().optional().allow(0, null),
  slug: Joi.string().required(),
  password: Joi.string().required(),
  tosAgreement: Joi.boolean().required(),
  pdsAgreement: Joi.boolean().required(),

  organization_reg_fee: Joi.number().optional().allow(0, null),
  payment_plan: Joi.string()
    .optional()
    .valid('basic', 'standard', 'premium', 'ultimate', 'third_party_api')
    .default('basic'),
  annual_plan: Joi.boolean().optional().default(false)
});

export const updateOrganizationProfileSchema = Joi.object({
  avatar: Joi.object({ key: Joi.string().optional().allow('', null) }).optional(),
  address: Joi.string().optional().allow('', null),
  phone: Joi.string().optional().allow('', null),
  slug: Joi.string().optional().allow('', null),
  reg_fee: Joi.number().optional(),

  email: Joi.string().optional().allow('', null),
  lastname: Joi.string().optional().allow('', null),
  firstname: Joi.string().optional().allow('', null),
  country: Joi.string().optional().allow('', null),
  state: Joi.string().optional().allow('', null),
  profession: Joi.string().optional().allow('', null),
  old_password: Joi.string().optional().allow('', null),
  password: Joi.string().optional().allow('', null)
});

export const validateLoginOrganizationSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().optional().allow('', null).min(6)
});

export const validateVerifyOnboardingEmailSchema = Joi.object({
  hash: Joi.string().required(),
  email: Joi.string().email().required(),
  code: Joi.string().min(6).required()
});

export const validateOrganizationPackageSchema = Joi.object({
  psdAgreement: Joi.boolean().required(),
  total_number_of_beneficiaries_chosen: Joi.number().required(),
  total_number_of_sms: Joi.number().required(),
  data_collection_quantity: Joi.number().required()
});

export const validateOrganizationBeneficiarySchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }),
  personal: Joi.object({
    dob: Joi.date().required().optional().allow('', null),
    gender: Joi.string().required().optional().allow('', null),
    member_name: Joi.string(),
    marital_status: Joi.string().optional().allow('', null),
    nationality: Joi.string().optional().allow('', null)
  }),
  contact: Joi.object({
    phone: Joi.string().required(),
    email: Joi.string().optional().allow('', null)
  })
});

export const validateOrganizationPreferencesSchema = Joi.object({
  preferences: Joi.object({
    occupations: Joi.array().items(Joi.string().optional().allow('', null)),
    categories: Joi.array().items(Joi.string().optional().allow('', null))
  })
});

export const validateBeneficiaryUpdateSchema = Joi.object({
  avatar: Joi.object({
    key: Joi.string().optional().allow('', null)
  }),
  personal: {
    member_name: Joi.string().optional().allow('', null),
    gender: Joi.string().optional().allow('', null),
    nationality: Joi.string().optional().allow('', null)
  },
  contact: {
    phone: Joi.string().optional().allow('', null),
    email: Joi.string().optional().allow('', null)
  }
});

export const validateResetPasswordSchema = Joi.object({
  password: Joi.string().min(3).max(15).required(),
  password_confirmation: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .label('Confirm password')
    .options({ messages: { 'any.only': '{{#label}} does not match' } })
});

export const validateForgotOtpSchema = Joi.object({
  code: Joi.string().required(),
  email: Joi.string().email().required(),
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

export const personalizationSchema = Joi.object({
  general_info: Joi.object({
    organization_name: Joi.string().required(),
    title: Joi.string().optional(),
    about_you: Joi.string().required(),
    about_organization: Joi.string().optional().allow('', null),
    goals: Joi.string(),
    url_name: Joi.string().optional().allow('', null),
    language: Joi.string().optional().allow('', null)
  }),
  brand_info: Joi.object({
    logo: Joi.string().optional().allow('', null),
    personal_image: Joi.string().optional().allow('', null),
    colors: Joi.object().optional().allow({})
  }),
  social_media: Joi.object({
    fb_url: Joi.string().optional().allow('', null),
    x_url: Joi.string().optional().allow('', null),
    linkedin_url: Joi.string().optional().allow('', null),
    youtube_url: Joi.string().optional().allow('', null),
    tiktok_url: Joi.string().optional().allow('', null),
    other_url: Joi.string().optional().allow('', null)
  })
});
