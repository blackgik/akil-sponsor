import axios from 'axios';
import env from '../../config/env.js';
import { BadRequestError } from './../../../lib/appErrors.js';

export const updateOrganizationProfile = async ({ body, user }) => {
  if (body?.bank_details?.bank_code) {
    throw new BadRequestError('Bank details cannot be updated here. go to bank details section');
  }

  const updates = Object.keys(body);

  updates.forEach((update) => (user[update] = body[update]));

  await user.save();

  return true;
};

export const addNewBankAccount = async ({ user, body }) => {
  const bankData = [...user.other_bank_details];

  for (let bank of body) {
    const findIndex = user.other_bank_details.findIndex(
      (item) => item.bank_code === bank.bank_code && item.acct_no === bank.acct_no
    );

    if (findIndex !== -1) continue;

    const subacctData = {
      business_name: user.name_of_cooperation,
      bank_code: bank?.bank_code,
      account_number: bank.acct_no,
      percentage_charge: 2
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.paystack_secret_key}`
      }
    };

    try {
      const subacctURL = `${env.paystack_api_url}/subaccount/`;

      const subDetails = await axios.post(subacctURL, subacctData, config);

      bank.metadata = subDetails.data.data;
      bank.approval = 'pending';

      bankData.push(bank);
    } catch (e) {
      console.log(e);
      continue;
    }
  }

  if (bankData.length === 0) throw new BadRequestError('All banks were rejected for this account');

  if (!user.bank_details.bank_name && user.other_bank_details.length === 0) {
    user.bank_details = {
      bank_name: bankData[0].bank_name,
      acct_no: bankData[0].acct_no,
      acct_name: bankData[0].acct_name,
      bank_code: bankData[0].bank_code
    };
    user.paystack_subacct = bankData[0].metadata;
  } else if (!user.bank_details.bank_name && user.other_bank_details.length > 0) {
    user.bank_details = {
      bank_name: user.other_bank_details[0].bank_name,
      acct_no: user.other_bank_details[0].acct_no,
      acct_name: user.other_bank_details[0].acct_name,
      bank_code: user.other_bank_details[0].bank_code
    };
    user.paystack_subacct = user.other_bank_details[0].metadata;
  }

  user.other_bank_details = bankData;

  await user.save();

  return {};
};
