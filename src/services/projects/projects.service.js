import moment from 'moment';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import ProductModel from '../../models/products/ProductModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import RestockModel from '../../models/products/RestockModel.js';
import mongoose from 'mongoose';
import { dateFilters } from '../../utils/timeFilters.js';

export const createProject = async ({ body, user }) => {
  try {
    const checkProject = await ProjectModel.findOne({
      project_name: body.project_name,
      sponsor_id: user._id
    });

    if (checkProject) throw new DuplicateError('Project Created successfully');

    const product_item_display = [];

    for (let item of body.product_items) {
      const item_name = await ProductModel.findById(item);

      if (!item_name) continue;

      product_item_display.push(item_name.product_name);
    }

    const projectData = {
      ...body,
      product_item_display,
      sponsor_id: user._id
    };

    const project = await ProjectModel.create(projectData);

    if (!project) throw new InternalServerError('Project not created. Server is down');

    return project;
  } catch (err) {
    console.log(err);
    throw new BadRequestError(err.message || 'Could not create project');
  }
};

export const generateProjectList = async ({ user, param, project_id, body }) => {
  const project = await ProjectModel.findById(project_id);

  if (!project) throw new NotFoundError('Project not found');

  const { state, status, age, occupation } = param;

  const { selection } = body;

  const filter = { organization_id: user._id };

  if (state) {
    filter['contact.state'] = param.state;
  }

  if (status) {
    filter.acctstatus = status;
  }

  if (age) {
    const currentDate = moment();

    const splitAge = age.split('-');
    const minAge = splitAge[0];
    const maxAge = splitAge[1];
    const startDate = currentDate.subtract(maxAge, 'years').startOf('day').toDate();
    const endDate = currentDate
      .add(maxAge - minAge, 'years')
      .subtract(minAge, 'years')
      .endOf('day')
      .toDate();

    filter['persona.dob'] = { $gte: startDate, $lte: endDate };
  }

  if (occupation) {
    filter['employment_info.position'] = occupation;
  }

  const batch = [];

  if (selection.includes('*')) {
    const beneficiaries = await organizationBeneficiaryModel.find(filter);

    for (const beneficiary of beneficiaries) {
      const today = Date.now() / (1000 * 60 * 24 * 60 * 365);
      const dob = beneficiary.personal.dob.getTime() / (1000 * 60 * 24 * 60 * 365);
      const data = {
        beneficiary_id: beneficiary._id,
        name: beneficiary.personal.member_name,
        gender: beneficiary.personal.gender,
        age: Math.floor(today - dob),
        phone: beneficiary.contact.phone,
        occupation: beneficiary.employment_info.employment_status,
        state: beneficiary.personal.state_of_origin,
        lga: beneficiary.personal.lga,
        ward: beneficiary.personal.lga,
        beneficiary_status: beneficiary.acctstatus,
        project_id: project_id,
        status: 'selected',
        sponsor_id: user._id
      };

      batch.push(data);
    }
  } else {
    for (const benefic_id of body.selection) {
      const beneficiary = await organizationBeneficiaryModel.findById(benefic_id);

      if (!beneficiary) continue;

      const today = Date.now() / (1000 * 60 * 24 * 60 * 365);
      const dob = beneficiary.personal.dob.getTime() / (1000 * 60 * 24 * 60 * 365);
      const data = {
        beneficiary_id: beneficiary._id,
        name: beneficiary.personal.member_name,
        gender: beneficiary.personal.gender,
        age: Math.floor(today - dob),
        phone: beneficiary.contact.phone,
        occupation: beneficiary.employment_info.employment_status,
        state: beneficiary.personal.state_of_origin,
        lga: beneficiary.personal.lga,
        ward: beneficiary.personal.lga,
        beneficiary_status: beneficiary.acctstatus,
        project_id: project_id,
        status: 'selected',
        sponsor_id: user._id
      };

      batch.push(data);
    }
  }

  const create_awardees = await awardeesModel.insertMany(batch);

  if (create_awardees.length === 0) throw new InternalServerError('Error inserting Data');

  return create_awardees;
};

export const saveGenerateList = async ({ user, param, project_id, body }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  const { state, status, age, occupation } = param;

  const { selection } = body;

  const filter = { sponsor_id: user._id, project_id };

  if (state) {
    filter['state'] = param.state;
  }

  if (status) {
    filter.beneficiary_status = status;
  }

  if (age) {
    const splitAge = age.split('-');
    const minAge = splitAge[0];
    const maxAge = splitAge[1];

    filter['age'] = { $gte: minAge, $lte: maxAge };
  }

  if (occupation) {
    filter['employment_info.position'] = occupation;
  }

  const quantity_tray = [];

  let shortage = 0;

  if (selection.includes('*')) {
    const awardeeCount = await awardeesModel.countDocuments(filter);
    const update = await awardeesModel.updateMany(filter, {
      $set: { status: 'awarded' }
    });

    if (!update) throw new InternalServerError('Could not update status');

    for (let itemid of project.product_items) {
      const item = await ProductModel.findById(itemid);
      quantity_tray.push(item.product_quantity);
    }

    const minimun = Math.min(...quantity_tray);

    shortage = awardeeCount - minimun;
  } else {
    filter._id = { $in: selection };

    const update = await awardeesModel.updateMany(filter, {
      $set: { status: 'awarded' }
    });

    if (!update) throw new InternalServerError('Could not update status');

    for (let itemid of project.product_items) {
      const item = await ProductModel.findById(itemid);
      quantity_tray.push(item.product_quantity);
    }

    const awardeeCount = selection.length;

    const minimun = Math.min(...quantity_tray);

    shortage = awardeeCount - minimun;
  }

  return { shortage, saved: true };
};

export const projectDashBoard = async ({ params, user }) => {
  let {
    page_no,
    no_of_requests,
    search,
    product_type,
    product_item,
    dateCreated,
    duration,
    from,
    to,
    todayTime,
    project_status,
    project_state,
    download
  } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const { today, timeDiff } = dateFilters({ duration, from, to, todayTime });
  const filter = {
    sponsor_id: mongoose.Types.ObjectId(user._id),
    createdAt: { $gte: timeDiff, $lte: today }
  };

  if (search) {
    const searchRgx = new RegExp(`.*${search}.*`, 'i');
    filter['$or'] = [{ project_name: searchRgx }, { description: searchRgx }];
  }

  if (product_type) {
    filter.product_type = mongoose.Types.ObjectId(product_type);
  }

  if (product_item) {
    filter.product_items = mongoose.Types.ObjectId(product_item);
  }

  if (dateCreated) {
    filter.createdAt = { $gte: new Date(dateCreated) };
  }

  if (project_status) {
    filter.project_status = project_status;
  }

  if (project_state) {
    filter.project_state = project_state;
  }

  const skip = (page_no - 1) * no_of_requests;
  const limit = no_of_requests;

  // Find the total count of documents for pagination
  const totalDocuments = await ProjectModel.countDocuments(filter);
  const totalPages = Math.ceil(totalDocuments / no_of_requests);
  // Fetch the filtered and paginated data
  const awardees = await awardeesModel.find({ sponsor_id: user._id });
  console.log(awardees);
  const awardeesCount = awardees.length;
  let fetchedData = await ProjectModel.find(filter)
    .populate('product_type')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
  // Categorize projects based on project_state
  const draftedProject = fetchedData.filter((project) => project.project_state === 'pending');
  const projectInProgress = fetchedData.filter(
    (project) => project.project_state === 'in-progress'
  );
  const completedProject = fetchedData.filter((project) => project.project_state === 'completed');
  const cancelledProject = fetchedData.filter((project) => project.project_state === 'cancelled');
  const projectInProgressCount = projectInProgress.length;
  const completedProjectCount = completedProject.length;

  if (download === 'on') {
    const excelData = fetchedData.map((item) => ({
      ProductName: item.project_name,
      DateCreated: item.createdAt
    }));
    const file = await downloadExcel(
      'Projects Report',
      [
        { header: 'ProductName', key: 'ProductName', width: 50 },
        { header: 'DateCreated', key: 'DateCreated', width: 50 }
      ],
      excelData
    );
    return file; // Return the generated file
  }

  return {
    page_no,
    available_pages: totalPages,
    totalPages,
    projectInProgressCount,
    completedProjectCount,
    totalBeneficaries: awardeesCount,
    draftedProject,
    projectInProgress,
    completedProject,
    cancelledProject
  };
};
