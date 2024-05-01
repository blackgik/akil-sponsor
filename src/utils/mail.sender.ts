import sgMail from '@sendgrid/mail';
import Variable from '../env/variable.env'
import customConfig from "../config/default";

sgMail.setApiKey(customConfig.sendgridApiKey);

export const messageBird = async (msg: any) => {
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