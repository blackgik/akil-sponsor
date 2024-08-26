import bcrypt from 'bcrypt';
import { BadRequestError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import usersModels from '../../models/settings/users.models.js';
import env from '../../config/env.js';
import { memberInvitehtmlFunction } from '../../htmls/memberOnboarding/memberInvite.function.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';
import organizationModel from '../../models/organizationModel.js';

export const craeteNewUser = async ({ user, body }) => {
  const filter = {};

  const beneFilter = {};

  const role = await rolepermissionModel.findById(body.role_id);

  if (!role) throw new BadRequestError('Our system does not know this role id');

  // check email on admin
  const sponsorAsUser = await organizationModel.findOne({ email: body.email });

  if (sponsorAsUser)
    throw new BadRequestError('This email can not be used. it exits as a sponsor already');

  let checkMember;

  if (body.email) {
    filter['email'] = body.email;
    beneFilter['contact.email'] = body.email;

    checkMember = await usersModels.findOne({
      ...filter
    });

    if (checkMember && checkMember.acctstatus !== 'deleted')
      throw new BadRequestError('User already exists');
  }

  if (body.phone) {
    filter['phone'] = body.phone;
    beneFilter['contact.phone'] = body.phone;

    delete filter['email'];

    checkMember = await usersModels.findOne({
      ...filter
    });

    if (checkMember && checkMember.acctstatus !== 'deleted')
      throw new BadRequestError('User already exists');
  }

  //check if they a beneficiary
  const beneficiaryCheck = await organizationBeneficiaryModel.findOne(beneFilter);

  if (beneficiaryCheck) body.is_beneficiary = true;

  if (checkMember && checkMember.acctstatus === 'deleted') {
    const updates = Object.keys(body);

    updates.forEach((update) => (checkMember[update] = body[update]));

    checkMember.password = await bcrypt.hash(body.password, 12);
    checkMember.sponsor_id = user._id;
    checkMember.acctstatus = 'active';

    await checkMember.save();

    const onboardingData = {
      member_name: body.user_name,
      email: body.email,
      name_of_cooperation: `${user.firstname} ${user.lastname}`,
      password: body.password,
      company_code: user.company_code,
      member_user:
        env.node_env === 'development'
          ? `https://akilaah-sponsor.vercel.app`
          : `https://sponsor.akilaah.com`
    };

    if (body.email) {
      const mailData = {
        email: body.email,
        subject: 'Welcome to Akilaah - Successful Registration',
        type: 'html',
        html: memberInvitehtmlFunction(onboardingData),
        text: memberInvitehtmlFunction(onboardingData)
      };

      const msg = await formattMailInfo(mailData, env);

      const msgDelivered = await messageBird(msg);

      if (!msgDelivered)
        throw new InternalServerError('server slip. Member was created without mail being sent');
    } else {
      try {
        const smsUrl = env.termii_api_url + '/api/sms/send';
        const smsData = {
          to: user.phone,
          from: env.termii_sender_id,
          sms: `Hi there, your credentials are as follows:
    NAME OF COOPERATION: ${onboardingData.name_of_cooperation}\n
    PASSWORD: ${onboardingData.password}\n
    COMPANY CODE: ${onboardingData.company_code}
    `,
          type: 'plain',
          api_key: env.termii_api_secret,
          channel: 'generic'
        };

        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };

        await axios.post(smsUrl, smsData, config);
      } catch (e) {
        console.log(e);
      }
    }

    return {};
  }

  const data = {
    ...body,
    password: await bcrypt.hash(body.password, 12),
    sponsor_id: user._id
  };

  const userx = await usersModels.create(data);

  const onboardingData = {
    member_name: body.user_name,
    email: body.email,
    name_of_cooperation: `${user.firstname} ${user.lastname}`,
    password: body.password,
    company_code: user.company_code,
    member_user:
      env.node_env === 'development'
        ? `https://akilaah-sponsor.vercel.app`
        : `https://sponsor.akilaah.com`
  };

  if (body.email) {
    const mailData = {
      email: body.email,
      subject: 'Welcome to Akilaah - Successful Registration',
      type: 'html',
      html: memberInvitehtmlFunction(onboardingData),
      text: memberInvitehtmlFunction(onboardingData)
    };

    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);

    if (!msgDelivered)
      throw new InternalServerError('server slip. Member was created without mail being sent');
  } else {
    try {
      const smsUrl = env.termii_api_url + '/api/sms/send';
      const smsData = {
        to: user.phone,
        from: env.termii_sender_id,
        sms: `Hi there, your credentials are as follows:
  NAME OF COOPERATION: ${onboardingData.name_of_cooperation}\n
  PASSWORD: ${onboardingData.password}\n
  COMPANY CODE: ${onboardingData.company_code}
  `,
        type: 'plain',
        api_key: env.termii_api_secret,
        channel: 'generic'
      };

      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      await axios.post(smsUrl, smsData, config);
    } catch (e) {
      console.log(e);
    }
  }

  return {};
};

export const fetchUsers = async ({ user, param }) => {
  let { page_no, no_of_request, search, acctstatus, role, download } = param;

  page_no = parseInt(page_no, 10) || 1;
  no_of_request = parseInt(no_of_request, 10) || 20;

  const filter = { sponsor_id: user._id, acctstatus: { $nin: ['deleted'] } };

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filter['$or'] = [{ user_name: searchRgx }, { email: searchRgx }, { phone: searchRgx }];
  }

  if (acctstatus) {
    filter.acctstatus = acctstatus;
  }

  if (role) {
    filter.role_id = role;
  }

  const count = await usersModels.countDocuments(filter);
  const fetched_data = await usersModels
    .find(filter)
    .populate({ path: 'role_id', select: { role_name: 1 } })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_request)
    .limit(no_of_request);

  const available_pages = Math.ceil(count / no_of_request);
  return download === 'on'
    ? fetched_data
    : {
        page_no,
        available_pages,
        count,
        fetched_data
      };
};

export const fetchUser = async ({ user_id, user }) => {
  const userx = await usersModels
    .findById(user_id)
    .populate({ path: 'role_id', select: { role_name: 1 } });

  if (!userx) throw new NotFoundError('User not found');

  return userx;
};

export const editUser = async ({ user_id, body, user }) => {
  const userx = await usersModels.findById(user_id);

  if (!userx || userx.acctstatus === 'deleted') throw new NotFoundError('User not found');

  const updates = Object.keys(body);

  updates.forEach((update) => (userx[update] = body[update]));

  await userx.save();

  return userx;
};

export const updateStatus = async ({ user_id, body, user }) => {
  const userx = await usersModels.findById(user_id);

  if (!userx) throw new NotFoundError('User not found');

  userx.acctstatus = body.status;

  await userx.save();

  return body.status;
};

export const checkIfBenficiary = async ({ user, email }) => {
  const beneficiary = await organizationBeneficiaryModel.findOne({
    'contact.email': email,
    organization_id: user._id
  });

  if (!beneficiary) return {};

  return beneficiary;
};

export const deleteUser = async ({ user_id }) => {
  const userx = await usersModels.findById(user_id);

  if (!userx) throw new NotFoundError('User not found');

  userx.acctstatus = 'deleted';

  await userx.save();

  return {};
};
