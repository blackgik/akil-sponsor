import axios from 'axios';
import bcrypt from 'bcrypt';
import env from '../../config/env.js';
import { BadRequestError } from './../../../lib/appErrors.js';
import sponsorshipRequestModel from '../../models/beneficiaries/sponsorshipRequestModel.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';

export const updateOrganizationProfile = async ({ body, user }) => {
  if (body?.bank_details?.bank_code) {
    throw new BadRequestError('Bank details cannot be updated here. go to bank details section');
  }

  if (body.password) {
    if (!body.old_password) throw new BadRequestError('Old password is required');

    const isMatch = await bcrypt.compare(body.old_password, user.password);

    if (!isMatch) throw new BadRequestError('Incorrect old password');

    body.password = await bcrypt.hash(body.password, 12);
  }

  const updates = Object.keys(body);

  updates.forEach((update) => (user[update] = body[update]));

  await user.save();

  return {};
};

export const addNewBankAccount = async ({ user, body }) => {
  const bankData = [...user.other_bank_details];

  for (let bank of body) {
    const findIndex = user.other_bank_details.findIndex(
      (item) => item.bank_code === bank.bank_code && item.acct_no === bank.acct_no
    );

    if (findIndex !== -1) continue;

    const subacctData = {
      business_name: user.name_of_cooperation,
      bank_code: bank?.bank_code,
      account_number: bank.acct_no,
      percentage_charge: 2
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${env.paystack_secret_key}`
      }
    };

    try {
      const subacctURL = `${env.paystack_api_url}/subaccount/`;

      const subDetails = await axios.post(subacctURL, subacctData, config);

      bank.metadata = subDetails.data.data;
      bank.approval = 'pending';

      bankData.push(bank);
    } catch (e) {
      console.log(e);
      continue;
    }
  }

  if (bankData.length === 0) throw new BadRequestError('All banks were rejected for this account');

  if (!user.bank_details.bank_name && user.other_bank_details.length === 0) {
    user.bank_details = {
      bank_name: bankData[0].bank_name,
      acct_no: bankData[0].acct_no,
      acct_name: bankData[0].acct_name,
      bank_code: bankData[0].bank_code
    };
    user.paystack_subacct = bankData[0].metadata;
  } else if (!user.bank_details.bank_name && user.other_bank_details.length > 0) {
    user.bank_details = {
      bank_name: user.other_bank_details[0].bank_name,
      acct_no: user.other_bank_details[0].acct_no,
      acct_name: user.other_bank_details[0].acct_name,
      bank_code: user.other_bank_details[0].bank_code
    };
    user.paystack_subacct = user.other_bank_details[0].metadata;
  }

  user.other_bank_details = bankData;

  await user.save();

  return {};
};

export const dashboardStatistics = async ({ user }) => {
  const totalPayouts = await sponsorshipRequestModel.aggregate([
    {
      $match: { sponsor_id: user._id, request_state: 'completed' }
    },
    {
      $group: { _id: null, total_payouts: { $sum: '$amount' } }
    }
  ]);

  const totalBeneficiaries = await organizationBeneficiaryModel.countDocuments({
    organization_id: user._id
  });

  const pendingProjects = await ProjectModel.countDocuments({
    sponsor_id: user._id,
    project_state: 'pending'
  });

  const inProgressProjects = await ProjectModel.countDocuments({
    sponsor_id: user._id,
    project_state: 'in-progress'
  });

  const completdProjects = await ProjectModel.countDocuments({
    sponsor_id: user._id,
    project_state: 'completed'
  });

  const sponsorshipRequest = await sponsorshipRequestModel.countDocuments({
    sponsor_id: user._id
  });

  return {
    total_payouts: totalPayouts[0]?.total_payouts || 0,
    total_bene: totalBeneficiaries,
    pending_projects: pendingProjects,
    project_inporgress: inProgressProjects,
    completed_projects: completdProjects,
    total_sponsorship: sponsorshipRequest
  };
};

export const sponsorsGraph = async ({ user, year = new Date().getFullYear() }) => {
  console.log({ id: user._id });
  year = new Date(`${year}-01-01`).getFullYear();
  const result = await sponsorshipRequestModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(`${year}-01-01T00:00:00.000Z`),
          $lt: new Date(`${year + 1}-01-01T00:00:00.000Z`)
        },
        sponsor_id: user._id
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

  //  education housing transportation finance

  const food = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'food',
        sponsor_id: user._id,
        status: 'allocated'
      }
    },
    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);
  console.log({ food });
  const health = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'health',
        sponsor_id: user._id,
        status: 'disbursed'
      }
    },
    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);

  console.log(health);

  const education = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'education',
        sponsor_id: user._id,
        status: 'disbursed'
      }
    },

    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);
  const housing = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'housing',
        sponsor_id: user._id,
        status: 'disbursed'
      }
    },

    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);
  const transportation = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'transportation',
        sponsor_id: user._id,
        status: 'disbursed'
      }
    },

    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);
  const finance = await awardeesModel.aggregate([
    {
      $lookup: {
        from: 'projects',
        as: 'project_info',
        let: { projectId: '$project_id' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$projectId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$project_info' },
    {
      $lookup: {
        from: 'productcategories',
        as: 'product_info',
        let: { productId: '$project_info.product_type' },
        pipeline: [
          {
            $match: {
              $expr: { $and: [{ $eq: ['$_id', '$$productId'] }] }
            }
          }
        ]
      }
    },
    { $unwind: '$product_info' },
    {
      $match: {
        'product_info.product_category_name': 'finance',
        sponsor_id: user._id,
        status: 'disbursed'
      }
    },

    {
      $group: {
        _id: null,
        totalSum: { $sum: '$project_info.quantity_per_person' }
      }
    }
  ]);

  const distributed =
    (food[0]?.totalSum || 0) +
    (health[0]?.totalSum || 0) +
    (education[0]?.totalSum || 0) +
    (housing[0]?.totalSum || 0) +
    (transportation[0]?.totalSum || 0) +
    (finance[0]?.totalSum || 0);

  console;

  const pie = {
    food: Number((((food[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)),
    health: Number((((health[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)),
    education: Number((((education[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)),
    housing: Number((((housing[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)),
    transportation: Number(
      (((transportation[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)
    ),
    finance: Number((((finance[0]?.totalSum || 0) / distributed) * 100 || 0).toFixed(2)),
    distributed
  };

  return { graph: result, pie };
};
