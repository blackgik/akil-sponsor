import Joi from 'joi';

export const organizationNewContributionProduction = Joi.object({
  general_info: Joi.object({
    product_name: Joi.string().required(),
    product_id: Joi.string().required(),
    product_description: Joi.string().optional().allow('', null),
    is_base_product: Joi.boolean().optional().allow('true', 'false'),
    base_product: Joi.string().optional().allow('', null),
    minimum_amount: Joi.number().required(),
    maximum_amount: Joi.number().required(),
    frequency: Joi.string().required().valid('daily', 'monthly', 'weekly', 'quarterly'),
    service_charge_type: Joi.string().required(),
    service_charge: Joi.number().required(),
    bank_choice: Joi.string().required()
  }).required(),
  product_settings: Joi.object({
    interest_type: Joi.string().optional().allow('', null),
    interest_rate: Joi.number().optional().allow('', null, 0),
    withdrawal_limit: Joi.number().optional().allow(0, null),
    withdrawal_charge: Joi.number().optional().allow(0, null),
    provision_period: Joi.number().optional().allow(0, null).default(0)
  }).required(),
  additional_settings: Joi.object({
    product_id: Joi.string().required(),
    analytic_axis: Joi.string().optional().allow('', null),
    product_account: Joi.string().optional().allow('', null),
    interest_account: Joi.string().optional().allow('', null),
    account_dec: Joi.string().optional().allow('', null),
    accounting_fees: Joi.number().optional().allow(0, null),
    accounting_validation_account: Joi.string().optional().allow('', null),
    migration_cost: Joi.number().optional().allow(0, null),
    interest_posting_period: Joi.string().optional().allow('', null),
    card_code: Joi.string().optional().allow('', null),
    note: Joi.boolean().optional().allow('true', 'false'),
    card: Joi.boolean().optional().allow('true', 'false')
  }).required()
});

export const organizationNewOrganizationLoanProductSchema = Joi.object({
  general_info: Joi.object({
    product_name: Joi.string().required(),
    product_id: Joi.string().required(),
    product_description: Joi.string().optional().allow('', null),
    is_base_product: Joi.boolean().optional().allow('true', 'false'),
    base_product: Joi.string().optional().allow('', null),
    minimum_amount: Joi.number().required(),
    maximum_amount: Joi.number().required(),
    frequency: Joi.string().required().valid('daily', 'monthly', 'weekly', 'quarterly'),
    service_charge_type: Joi.string().required(),
    service_charge: Joi.number().required(),
    bank_choice: Joi.string().required()
  }).required(),
  product_settings: Joi.object({
    minimum_duration: Joi.number().required(),
    maximum_duration: Joi.number().required(),
    loan_interest_type: Joi.string().required().valid('simple', 'compound'),
    loan_interest_rate: Joi.number().required(),
    fees: Joi.number().optional().allow('', null),
    referral: Joi.boolean().required(),
    interest_deduction: Joi.boolean().required(),
    is_early_repayment_discount: Joi.boolean(),
    early_repayment_discount: Joi.number().optional().default(0),
    probation_period: Joi.number().optional().default(0),
    default_penalty_application: Joi.boolean().required(),
    no_of_days_before_default: Joi.number().optional(),
    default_penalty_charge: Joi.number().optional(),
    eligibilty_criteria: Joi.string()
      .required()
      .valid('basic-contribution', 'total-deposits', 'monthly-salary', 'N/A'),
    maximum_eligibilty_criteria: Joi.number().optional().allow(null)
    // amortization: Joi.string().required().valid('equal-principal-payments', 'equal-installments')
  }).required(),
  additional_settings: Joi.object({
    product_id: Joi.string().required(),
    analytic_axis: Joi.string().optional().allow(null, ''),
    product_account: Joi.string().optional().allow(null, ''),
    interest_account: Joi.string().optional().allow(null, ''),
    account_dec: Joi.string().optional().allow(null, ''),
    accounting_fees: Joi.number().optional().default(0),
    accounting_validation_account: Joi.string().optional().allow(null, ''),
    migration_cost: Joi.number().optional().default(0),
    interest_posting_period: Joi.string().optional().allow(null, ''),
    card_code: Joi.string().optional().allow(null, ''),
    note: Joi.boolean().optional().default(true),
    card: Joi.boolean().optional().default(true)
  }).required()
});

export const viewSingleProductSchema = Joi.object({
  product_id: Joi.string().required(),
  product_type: Joi.string().required()
});

export const organizationNewOrganizationSavingsProductSchema = Joi.object({
  general_info: Joi.object({
    product_name: Joi.string().required(),
    product_id: Joi.string().required(),
    product_description: Joi.string().optional().allow('', null),
    minimum_amount: Joi.number().optional(),
    base_product: Joi.string().optional().allow('', null),
    frequency: Joi.string().required().valid('daily', 'monthly', 'weekly', 'quarterly'),
    service_charge_type: Joi.string().required(),
    service_charge: Joi.number().required(),
    bank_choice: Joi.string().required()
  }).required(),
  product_settings: Joi.object({
    savings_type: Joi.string().required().valid('live', 'fixed').allow('', null),
    interest_rate: Joi.number().optional().allow('', null, 0),
    minimum_duration: Joi.number().optional().allow('', null),
    maximum_duration: Joi.number().optional().allow('', null),
    withdrawal_charge: Joi.number().optional().allow(0, null)
  }).required(),
  additional_settings: Joi.object({
    product_id: Joi.string().required(),
    analytic_axis: Joi.string().optional().allow('', null),
    product_account: Joi.string().optional().allow('', null),
    interest_account: Joi.string().optional().allow('', null),
    account_dec: Joi.string().optional().allow('', null),
    accounting_fees: Joi.number().optional().allow(0, null),
    accounting_validation_account: Joi.string().optional().allow('', null),
    migration_cost: Joi.number().optional().allow(0, null),
    interest_posting_period: Joi.string().optional().allow('', null),
    card_code: Joi.string().optional().allow('', null),
    note: Joi.boolean().optional().allow('true', 'false'),
    card: Joi.boolean().optional().allow('true', 'false')
  }).required()
});

export const organizationsubscriptionProductSchema = Joi.object({
  general_info: Joi.object({
    product_name: Joi.string().required(),
    product_id: Joi.string().required(),
    product_description: Joi.string().optional().allow('', null),
    period: Joi.string().required(),
    general_amount: Joi.number().required(),
    service_charge_type: Joi.string().required().valid('n/a', 'one-off', 'monthly', 'weekly'),
    service_charge: Joi.number().required(),
    bank_choice: Joi.string().required()
  }).required(),
  product_settings: Joi.array().items(
    Joi.object({
      sub_category_name: Joi.string().required(),
      discount: Joi.number().optional().allow('', null),
      frequency: Joi.string().required().valid('daily', 'monthly', 'weekly', 'quarterly'),
      amount: Joi.number().required(),
      premature_withdrawal_charge: Joi.number().optional().allow(0, null),
      due_period_charge: Joi.number().required()
    }).required()
  ),
  additional_settings: Joi.object({
    product_id: Joi.string().required(),
    analytic_axis: Joi.string().optional().allow('', null),
    product_account: Joi.string().optional().allow('', null),
    interest_account: Joi.string().optional().allow('', null),
    account_dec: Joi.string().optional().allow('', null),
    accounting_fees: Joi.number().optional().allow(0, null),
    accounting_validation_account: Joi.string().optional().allow('', null),
    migration_cost: Joi.number().optional().allow(0, null),
    interest_posting_period: Joi.string().optional().allow('', null),
    card_code: Joi.string().optional().allow('', null),
    note: Joi.boolean().optional().allow('true', 'false'),
    card: Joi.boolean().optional().allow('true', 'false')
  }).required()
});
