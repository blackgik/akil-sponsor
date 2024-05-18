import 'dotenv/config';

export default {
  port: process.env.PORT || 4000,
  db_uri: process.env.DB_URI,
  sendgrid_key: process.env.SENDGRID_API_KEY,
  sendgrid_sender: process.env.SENDGRID_EMAIL_SENDER,
  jwt_key: process.env.JWT_SECRET,
  node_env: process.env.NODE_ENV,
  live_uri: process.env.LIVE_URI,
  otpKey: process.env.OTP_KEY,
  payatittude_marchanid: process.env.PAYATITTUDE_MERCHANTID,
  payatittude_secret_key: process.env.PAYATITTUDE_SECRETKEY,
  paystack_api_url: process.env.PAYSTACK_API_URL,
  paystack_secret_key: process.env.PAYSTACK_SECRET_KEY,
  public_key: process.env.PUBLIC_KEY,
  private_key: process.env.PRIVATE_KEY,
  akilaah_api_url: process.env.AKLAAH_API_URL,
  akilaah_api_secret: process.env.AKLAAH_API_SECRET,
  termii_api_secret: process.env.TERMII_API_SECRET,
  termii_api_url: process.env.TERMII_API_URL,
  termii_sender_id: process.env.TERMII_SENDER_ID,
  dev_base_url_org: `http://localhost`,
  dev_base_url_member: `http://localhost`,
  prod_base_url_member: `http://localhost`,
  prod_base_url_org: `http://localhost`
};
