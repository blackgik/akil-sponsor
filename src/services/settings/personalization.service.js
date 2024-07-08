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
    amount: 840000 * 100,
    email: user.email,
    channels: ['bank', 'ussd', 'bank_transfer'],
    callback_url:
      env.node_env === 'development'
        ? `${env.dev_base_url_beneficiary}/${user.slug}/dashboard`
        : `${env.prod_base_url_beneficiary}/${user.slug}/dashboard`,
    metadata: {
      amount: 840000,
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

export const fetchInformation = async ({ params }) => {
  const { url } = params;
  const info = await personalizationModel.findOne({ 'general_info.url_name': url });

  console.log(url);
  if (!info) throw new NotFoundError('No information containing this URL');

  return info;
};
