import { BadRequestError, NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import { plans } from '../../config/modules.js';
import subscription from '../../models/subscriptions/subscription.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import { initializePayment, verifyPayment } from '../../utils/payment.js';

export const fetchSubscriptionsHistory = async ({ param, user }) => {
  let { page_no, no_of_requests, search, status } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterData = { sponsor_id: user._id };

  const query = typeof search !== 'undefined' ? search.trim() : false;

  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData.sender = searchRgx;
  }

  if (status) {
    filterData.status = status;
  }

  const count = await subscription.countDocuments(filterData);
  const fetched_data = await subscription
    .find(filterData)
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(count / no_of_requests);

  return {
    count,
    available_pages,
    page_no,
    fetched_data
  };
};

export const subscriptionUpdate = async ({ user, body, param }) => {
  const { show_details } = param;
  const organizationExists = user;

  let amountToPay = 0;
  let supSmsFee = 0;
  let supBeneficiaryFee = 0;
  let personalizationFee = 0;
  let dataCollectionFee = 0;

  if (
    body.psdAgreement &&
    organizationExists.hasPaid_personalization_fee &&
    organizationExists.psdEnd > new Date()
  )
    throw new BadRequestError('You already have Personalization running');

  if (body.psdAgreement && !organizationExists.hasPaid_personalization_fee) {
    amountToPay += plans.sponsor_onboarding_settings.personalization_fee;
    personalizationFee = plans.sponsor_onboarding_settings.personalization_fee;
  }

  supBeneficiaryFee = body?.total_number_of_beneficiaries_chosen || 0;
  amountToPay += supBeneficiaryFee;

  supSmsFee = body?.total_number_of_sms || 0 * plans.sponsor_onboarding_settings.sup_sms_fee;
  amountToPay += supSmsFee;

  if (body.data_collection_quantity > 0) {
    dataCollectionFee =
      body.data_collection_quantity * plans.sponsor_onboarding_settings.data_collection_fee;
    amountToPay += dataCollectionFee;
  }

  body.total_amount = amountToPay;

  const paymentData = {
    beneficiaries: {
      total_number_of_beneficiaries_chosen: body?.total_number_of_beneficiaries_chosen || 0,
      sup_beneficiary_fee: supBeneficiaryFee
    },
    sms: {
      total_number_of_sms: body?.total_number_of_sms || 0,
      sup_sms_fee: supSmsFee
    },
    personalization: {
      psdAgreement: body?.psdAgreement || false,
      personalization_fee: personalizationFee
    },

    data_collection: {
      data_collection_quantity: body.data_collection_quantity,
      data_collection_fee: dataCollectionFee
    },
    total_amount: amountToPay
  };

  if (show_details.toLowerCase() === 'yes') {
    return paymentData;
  }

  let paystackAmount = 0.02 * amountToPay;
  if (paystackAmount >= 2000) paystackAmount = 2000;

  amountToPay = (amountToPay + paystackAmount) * 100;

  const subscriptionData = {
    sender: user.user_info ? user.user_info.user_name : `${user.firstname} ${user.lastname}`,
    amount: body.total_amount,
    deposit_method: 'online',
    date: new Date(),
    ref_no: await codeGenerator(15),
    sponsor_id: user._id,
    metadata: { ...paymentData }
  };

  const createSubscriptionHistory = await subscription.create(subscriptionData);

  const data = {
    amount: amountToPay,
    email: user.email,
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_org}/home`
        : `${env.prod_base_url_org}/home`,
    metadata: {
      userId: user._id,
      package: paymentData,
      amountToPay,
      on_trial: false,
      paystackFee: paystackAmount,
      hasPaid: true,
      acctstatus: 'active',
      subscription_id: createSubscriptionHistory._id,
      type: 'subscription-payment'
    }
  };

  return new Promise(async (resolve, reject) => {
    try {
      initializePayment(data, (error, body) => {
        if (error) {
          reject(new BadRequestError(error.message));
        }
        const response = JSON.parse(body);
        return resolve({ gateway: response.data.authorization_url });
      });
    } catch (error) {
      return reject(new BadRequestError(error.message));
    }
  });
};

export const subscriptionVerification = async ({ user, reference, trxref }) => {
  const organizationExists = user;
  return new Promise(async (resolve, reject) => {
    verifyPayment(reference, async (error, body) => {
      if (error) {
        reject(new BadRequestError(error.message));
      }

      const response = JSON.parse(body);
      const data = response.data.metadata;
      const packages = data.package;

      if (packages.personalization.psdAgreement) {
        organizationExists.psdAgreement = true;
        organizationExists.personalization_fee =
          plans.sponsor_onboarding_settings.personalization_fee;
      }

      if (packages?.beneficiaries?.total_number_of_beneficiaries_chosen) {
        organizationExists.total_number_of_beneficiaries_chosen +=
          packages.beneficiaries.total_number_of_beneficiaries_chosen;
      }

      if (packages?.sms?.total_number_of_sms) {
        organizationExists.total_number_of_sms += packages.sms.total_number_of_sms;
      }

      if (packages?.data_collection?.data_collection_quantity > 0) {
        organizationExists.data_collection_quantity +=
          packages.data_collection.data_collection_quantity;
      }

      await organizationExists.save();

      const subscriptionCheck = await subscription.findById(data.subscription_id);

      if (subscriptionCheck) {
        subscriptionCheck.status = 'paid';

        await subscriptionCheck.save();
      }

      return resolve({ payment: 'successful' });
    });
  });
};

export const subscriptionStatistics = async ({ user }) => {
  const result = await subscription.aggregate([
    {
      $group: {
        _id: null,
        total_number_of_beneficiaries_chosen: {
          $sum: '$metadata.beneficiaries.total_number_of_beneficiaries_chosen'
        },
        total_number_of_sms: { $sum: '$metadata.sms.total_number_of_sms' },
        data_collection_quantity: { $sum: '$metadata.data_collection.data_collection_quantity' }
      }
    },
    {
      $project: {
        _id: 0,
        total_number_of_beneficiaries_chosen: 1,
        total_number_of_sms: 1,
        data_collection_quantity: 1
      }
    }
  ]);

  return result[0];
};

export const viewSubscription = async ({ user, id }) => {
  const viewsubscription = await subscription.findById(id);

  if (!viewsubscription) throw new NotFoundError('No subscription found');

  return viewsubscription;
};
