import { capitalizeFirstLetter } from '../../utils/general.js';
import { trialplanHtml } from './trialplan.html.js';

export const trialplanhtmlFunction = (data) => {
  return trialplanHtml
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace('{{expDate}}', data.expDate);
};
