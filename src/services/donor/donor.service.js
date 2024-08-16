import axios from 'axios';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import sponsorshipRequestModel from '../../models/beneficiaries/sponsorshipRequestModel.js';
import donor from '../../models/donor/donor.js';
import organizationModel from '../../models/organizationModel.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import { craeteNewUser } from '../settings/users.service.js';
import { verifyPayment } from '../../utils/payment.js';
import donorReceiptModel from '../../models/donor/donor.receipt.model.js';

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
    phone: `0703${await codeGenerator(7)}`,
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

export const makeDonationPayment = async ({ user, body }) => {
  const amount = body.amount;

  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + env.paystack_secret_key
    }
  };

  const transactionId = 'TXN' + (await codeGenerator(11));

  const paymentata = {
    email: user.email,
    amount: amount * 100,
    callback_url: `${env.dev_base_url_org}/donations`,
    channels: ['bank', 'bank_transfer'],
    metadata: {
      transactionId,
      donor: String(user._id),
      type: 'Donor-Payment'
    }
  };

  const url = `${env.paystack_api_url}/transaction/initialize`;

  const response = await axios.post(url, paymentata, config);

  if (response.status !== 200) throw new BadRequestError('Could not initialize transaction');

  return response.data.data.authorization_url;
};

export const verifyDonationPayment = async ({ reference, user }) => {
  const donor = user;

  return new Promise(async (resolve, reject) => {
    verifyPayment(reference, async (error, body) => {
      if (error) {
        reject(new BadRequestError(error.message));
      }

      const response = JSON.parse(body);

      if (response.data.status !== 'success')
        throw new BadRequestError('Could not verify payment. Please contact support');

      const confirmTRN = await donorReceiptModel.findOne({
        _id: user._id,
        transactionId: response.data.metadata.transactionId
      });

      if (confirmTRN) return confirmTRN;

      const paymentData = {
        paymentType: 'credit',
        amount: response.data.amount / 100,
        paymentmethod: 'transfer',
        transactionId: response.data.metadata.transactionId,
        reference: reference,
        status: 'paid',
        donor: user._id
      };

      const receipt = await donorReceiptModel.create(paymentData);

      return resolve(receipt);
    });
  });
};

export const fetchDonationReceipt = async ({ param, user }) => {
  let { page_no, no_of_requests, search } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterData = { donor: user._id };

  const query = typeof search !== 'undefined' ? search.trim() : false;

  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ transactionId: searchRgx }, { reference: searchRgx }];
  }

  const count = await donorReceiptModel.countDocuments({ ...filterData });
  const fetched_data = await donorReceiptModel
    .find({ ...filterData })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(count / no_of_requests);

  return { page_no, available_pages, count, fetched_data };
};

export const statGraph = async ({ user, year = new Date().getFullYear() }) => {
  const result = await donorReceiptModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${year}-01-01T00:00:00.000Z`),
          $lt: new Date(`${year + 1}-01-01T00:00:00.000Z`)
        }
      }
    },
    {
      $group: {
        _id: { month: { $month: '$createdAt' } },
        totalAmount: { $sum: '$amount' }
      }
    },
    {
      $sort: { '_id.month': 1 } // Sort by month in ascending order
    }
  ]);

  return result; // Return the aggregated result
};
