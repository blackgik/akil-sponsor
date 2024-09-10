import sgMail from '@sendgrid/mail';
import axios from 'axios';
import env from '../config/env.js';

sgMail.setApiKey(env.sendgrid_key);

export const messageBird = async (msg) => {
  return sgMail
    .send(msg)
    .then(() => {
      console.log('email sent successfully');
      return true;
    })
    .catch((error) => {
      console.error(error);
      console.error(error.response.body.errors);
      return false;
    });
};

export const sendsms = async (data) => {
  try {
    const smsUrl = env.termii_api_url + '/api/sms/send';
    const smsData = {
      to: data.phone,
      from: env.termii_sender_id,
      sms: data.sms,
      type: 'plain',
      api_key: env.termii_api_secret,
      channel: 'dnd'
    };

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const sms = await axios.post(smsUrl, smsData, config);

    console.log({ sms: sms.data });

    return true;
  } catch (err) {
    console.log(err.response.data);

    return false;
  }
};
