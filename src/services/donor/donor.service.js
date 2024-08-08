import { DuplicateError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import sponsorshipRequestModel from '../../models/beneficiaries/sponsorshipRequestModel.js';
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

export const dashboardStatistics = async ({ user }) => {
  try {
    const resultCompleted = await sponsorshipRequestModel.aggregate([
      {
        $match: { request_state: 'completed' }
      },
      {
        $group: {
          _id: null, // Grouping by null groups all documents
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    const resultpending = await sponsorshipRequestModel.aggregate([
      {
        $match: { request_state: { $nin: ['completed', 'denied'] } }
      },
      {
        $group: {
          _id: null, // Grouping by null groups all documents
          totalAmount: { $sum: '$amount' }
        }
      }
    ]);

    const total_beneficiaries_assisted = await sponsorshipRequestModel.countDocuments({
      request_state: 'completed'
    });

    const totalAmountCompleted = resultCompleted[0] ? resultCompleted[0].totalAmount : 0;
    const totalAmountPending = resultpending[0] ? resultpending[0].totalAmount : 0;

    const result = {
      total_donations: totalAmountCompleted,
      total_spent: totalAmountCompleted,
      total_balance: totalAmountPending,
      total_beneficiaries_assisted
    };

    return result;
  } catch (error) {
    console.error('Error getting total amount:', error);

    return {
      total_donations: 0,
      total_spent: 0,
      total_balance: 0,
      total_beneficiaries_assisted: 0
    };
  }
};

export const fetchBeneficiries = async ({ user, param }) => {
  let { page_no, no_of_requests, search, status } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterData = {};

  const query = typeof search !== 'undefined' ? search.trim() : false;

  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [
      { 'member_info.personal.member_name': searchRgx },
      { 'member_info.contact.email': searchRgx },
      { 'member_info.contact.phone': searchRgx },
      { 'member_info.member_unique_id': searchRgx }
    ];
  }

  if (status) {
    filterData.request_state = status;
  }

  let fetchedData = await sponsorshipRequestModel.aggregate([
    {
      $lookup: {
        from: 'organization_members',
        as: 'member_info',
        let: { memberId: '$beneficiary_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$memberId'] }] }
            }
          }
        ]
      }
    },

    { $unwind: '$member_info' },

    { $match: { ...filterData } },

    {
      $facet: {
        edges: [
          { $sort: { createdAt: -1 } },
          { $skip: (page_no - 1) * no_of_requests },
          { $limit: no_of_requests }
        ],
        pageInfo: [{ $group: { _id: null, count: { $sum: 1 } } }]
      }
    }
  ]);

  const count = fetchedData[0].pageInfo.length ? fetchedData[0].pageInfo[0].count : 0;

  let available_pages = Math.ceil(count / no_of_requests);

  fetchedData = fetchedData[0].edges;

  available_pages = available_pages ? available_pages : 0;

  return {
    page_no,
    available_pages,
    count,
    fetched_data: fetchedData
  };
};
