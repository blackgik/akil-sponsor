import { deferredContributionHTML } from './deferredContribution.html.js';

export const deferredContributionHTMLFunc = (data) => {
  return deferredContributionHTML
    .replace(/\{\{email\}\}/g, capitalizeFirstLetter(data.email))
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace(/\{\{contribution_name\}\}/g, capitalizeFirstLetter(data.contribution_name))
    .replace(/\{\{start_date\}\}/g, capitalizeFirstLetter(data.start_date))

};
