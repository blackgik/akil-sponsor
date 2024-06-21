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

export const createProject = async ({ body, user }) => {
  try {
    const checkProject = await ProjectModel.findOne({
      project_name: body.project_name,
      sponsor_id: user._id
    });

    if (checkProject) throw new DuplicateError('Project Created successfully');

    // check if any project has the product type
    const checkProductTypeProject = await ProjectModel.findOne({
      product_type: body.product_type,
      sponsor_id: user._id
    });

    if (checkProductTypeProject)
      throw new BadRequestError(
        `${checkProductTypeProject.project_name} project already uses this product type`
      );

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

    shortage = minimun - awardeeCount;
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

    shortage = minimun - awardeeCount;
  }

  return { shortage, saved: true };
};

export const fetchGenerateList = async ({ param, user, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  let {
    page_no,
    no_of_requests,
    search,
    gender,
    state,
    lga,
    age,
    occupation,
    status,
    is_shortaged
  } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filter = { project_id, sponsor_id: user._id, batch_code: '' };

  if (query) {
    filter['$or'] = [{ name: searchRgx, phone: searchRgx }];
  }

  if (gender) {
    filter.gender = gender;
  }

  if (state) {
    filter.gender = state;
  }

  if (lga) {
    filter.gender = lga;
  }

  if (age) {
    filter.gender = age;
  }

  if (occupation) {
    filter.gender = occupation;
  }

  if (status) {
    filter.status = status;
  }

  if (is_shortaged) {
    filter.is_shortaged = Boolean(is_shortaged);
  }

  const count = await awardeesModel.countDocuments(filter);
  const fetched_data = await awardeesModel
    .find(filter)
    .sort({ created_at: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(count / no_of_requests);

  return {
    page_no,
    available_pages,
    count,
    fetched_data
  };
};
