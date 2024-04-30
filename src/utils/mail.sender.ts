import sgMail from '@sendgrid/mail';
import Variable from '../env/variable.env'

sgMail.setApiKey(Variable.SENDGRID_API_KEY);

export const messageBird = async (msg: sgMail.MailDataRequired | sgMail.MailDataRequired[]) => {
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