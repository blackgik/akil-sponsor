import { donorHTML } from './donor.html.js';

export const donorEmailText = (data) => {
  return donorHTML
    .replace('{{name}}', data.name)
    .replace('{{email}}', data.email)
    .replace('{{donation}}', data.donation);
};
