import { capitalizeFirstLetter } from '../../utils/general.js';
import { kycapprovalHTML, kycDeclinedHTML } from './kycApproval.html.js';

export const kycapprovalFunction = (data) => {
  return kycapprovalHTML
    .replace(/\{\{member_name\}\}/g, capitalizeFirstLetter(data.member_name))
    .replace('{{member_portal}}', data.member_portal)
    .replace(/\{\{org_email\}\}/g, data.org_email)
    .replace('{{org_name}}', data.org_name);
};

export const kycDeclinedFunction = (data) => {
  return kycDeclinedHTML
    .replace(/\{\{member_name\}\}/g, capitalizeFirstLetter(data.member_name))
    .replace('{{reasons}}', data.reasons)
    .replace(/\{\{org_email\}\}/g, data.org_email);
};
