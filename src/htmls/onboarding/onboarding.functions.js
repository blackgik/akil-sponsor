import { capitalizeFirstLetter } from '../../utils/general.js';
import { blockAcctHtml } from './acctBlocker.html.js';
import { onboardingHtml } from './onboarding.html.js';

export const onboardinghtmlFunction = (data) => {
  return onboardingHtml
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace('{{email}}', data.email)
    .replace('{{password}}', data.password)
    .replace('{{company_code}}', data.company_code);
};

export const blockaccessFunctionAfter14Days = () => {
  return blockAcctHtml;
};
