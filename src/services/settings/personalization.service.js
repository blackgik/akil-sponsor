import axios from 'axios';
import env from '../../config/env.js';
import personalizationModel from '../../models/settings/personalization.model.js';
import { NotFoundError } from '../../../lib/appErrors.js';

export const buildPersonlaization = async ({ user, param, body }) => {
  if (user.hasPaid_personalization_fee) {
    param.deferred = true;
  }
  const data = {
    ...body,
    sponsor_id: user._id
  };

  const updates = Object.keys(data);

  let check_personalization = await personalizationModel.findOne({ sponsor_id: user._id });

  if (check_personalization) {
    updates.forEach((update) => (check_personalization[update] = data[update]));

    await check_personalization.save();
  } else {
    check_personalization = await personalizationModel.create(data);
  }

  if (param.deferred === 'true') {
    if (user.hasPaid_personalization_fee) {
      check_personalization.has_paid = true;

      await check_personalization.save();
    }
    return {};
  }

  const pay_data = {
    amount: user.personalization_fee * 100,
    email: user.email,
    channels: ['bank', 'ussd', 'bank_transfer'],
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_beneficiary}/${user.slug}/dashboard`
        : `${env.prod_base_url_beneficiary}/${user.slug}/dashboard`,
    metadata: {
      amount: user.personalization_fee,
      userId: user._id,
      personalization_id: check_personalization._id,
      type: 'personalization_payment'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const gateway = await axios.post(url, pay_data, {
    headers: {
      Authorization: `Bearer ${env.paystack_secret_key}`,
      'Content-Type': 'application/json'
    }
  });

  return { gateway: gateway.data.data.authorization_url };
};

export const fetchInformation = async ({ param }) => {
  const { url } = param;
  const regex = new RegExp(url, 'i');
  const info = await personalizationModel.findOne({ 'general_info.url_name': { $regex: regex } });

  // if (!info) throw new NotFoundError('No information containing this URL');

  return info;
};

export const fetchUserInformation = async ({ user }) => {
  const userId = user._id;
  const info = await personalizationModel.findOne({ sponsor_id: userId });
  // if (!info) throw new NotFoundError('this user doesnt have personalization turn on');

  return {
    ...info.toJSON(),
    hasPaid_personalization_fee: user.hasPaid_personalization_fee,
    psd_start: user.psdStart,
    psd_end: user.psdEnd
  };
};
