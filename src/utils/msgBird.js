import sgMail from '@sendgrid/mail';
import env from '../config/env.js';

env;
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
      return false;
    });
};
