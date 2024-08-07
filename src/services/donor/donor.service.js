import { DuplicateError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import donor from '../../models/donor/donor.js';
import organizationModel from '../../models/organizationModel.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import { craeteNewUser } from '../settings/users.service.js';

export const createDonor = async ({ body }) => {
  const sponsor = await organizationModel.findOne({ company_code: body.sponsor_code });

  if (!sponsor) throw new NotFoundError('Sponsor Portal is not available. Please try again later');

  const donorRole = await rolepermissionModel.findOne({
    role_name: 'donor',
    sponsor_id: sponsor._id
  });

  if (!donorRole)
    throw new NotFoundError(
      'Role not found for donation not available at the moment. Please contact Akilaah support'
    );

  const checkDonor = await donor.findOne({ email: body.email });

  if (checkDonor) throw new DuplicateError('You are already a Donor on this page');

  const donorData = {
    ...body,
    sponsor_id: sponsor._id
  };

  const createDonor = await donor.create(donorData);

  if (!donor)
    throw new InternalServerError('Server error. Could not create your account please try again');

  //   create User account here

  const user_data = {
    avatar: '',
    user_name: createDonor.name,
    gender: sponsor?.gender || 'Male',
    email: createDonor.email,
    phone: sponsor.phone,
    date_of_birth: '2000-01-01',
    role_id: donorRole._id,
    password: await codeGenerator(12, 'ABCDEFGHIJ1234567890#$'),
    is_beneficiary: false,
    sponsor_id: sponsor._id
  };

  const bodyData = user_data;
  const user = sponsor;

  const userAcount = await craeteNewUser({ user, body: bodyData });

  return userAcount;
};
