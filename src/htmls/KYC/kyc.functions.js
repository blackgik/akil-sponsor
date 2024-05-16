import { capitalizeFirstLetter } from '../../utils/general.js';
import { kycSubmissionHtml, kycSubmissionUHtml, reminderKycsubmission } from './kyc.html.js';

export const kycSubmissionhtmlFunction = (data) => {
  return kycSubmissionHtml
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace('{{submission_date}}', data.createdAt);
};

export const kycSubmissionhtmlUFunction = (data) => {
  return kycSubmissionUHtml.replace(
    /\{\{name_of_cooperation\}\}/g,
    capitalizeFirstLetter(data.name_of_cooperation)
  );
};

export const kycReminderFunction = (data) => {
  return reminderKycsubmission.replace(
    /\{\{name_of_cooperation\}\}/g,
    capitalizeFirstLetter(data.name_of_cooperation)
  );
};

export const kycAndacctBlockReminderFunction = (data) => {
  return reminderKycsubmission
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace('{{current_plan}}', 'Trial')
    .replace('{{expiry_date}}', data.expiry_date);
};
