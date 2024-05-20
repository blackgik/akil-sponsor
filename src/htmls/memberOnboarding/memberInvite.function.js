import { capitalizeFirstLetter } from '../../utils/general.js';
import { memberInviteHtml } from './memberInvite.html.js';

export const memberInvitehtmlFunction = (data) => {
  return memberInviteHtml
    .replace(/\{\{name_of_cooperation\}\}/g, capitalizeFirstLetter(data.name_of_cooperation))
    .replace(/\{\{member_name\}\}/g, capitalizeFirstLetter(data.member_name))
    .replace('{{email}}', data.email)
    .replace('{{password}}', data.password)
    .replace('{{member_url}}', data.member_user)
    .replace('{{company_code}}', data.company_code);
};
