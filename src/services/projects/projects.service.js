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
import scheduleModel from '../../models/projects/scheduleModel.js';
import mongoose from 'mongoose';
import { dateFilters } from '../../utils/timeFilters.js';
import ProductCategoryModel from '../../models/products/ProductCategoryModel.js';
import { capitalizeWords, downloadExcel } from '../../utils/general.js';
import { newProjectCreationEmail } from '../../config/mail.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';
import env from '../../config/env.js';

export const createProject = async ({ body, user }) => {
  try {
    const checkProject = await ProjectModel.findOne({
      project_name: body.project_name,
      sponsor_id: user._id
    });

    if (checkProject) throw new DuplicateError('Project already exisiting');

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

    //create email profile here
    const emailData = {
      sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
      project_name: capitalizeWords(body.project_name)
    };

    const mailData = {
      email: user.email,
      subject: `New Project Created - ${emailData.project_name}`,
      type: 'html',
      html: newProjectCreationEmail(emailData).html,
      text: newProjectCreationEmail(emailData).text
    };

    const msg = await formattMailInfo(mailData, env);

    const msgDelivered = await messageBird(msg);
    if (!msgDelivered)
      throw new InternalServerError('server slip. project was created without mail being sent');

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
        status: 'awarded',
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
        status: 'awarded',
        sponsor_id: user._id
      };

      batch.push(data);
    }
  }

  project.project_status = 'awarded';

  await project.save();

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
      $set: { status: 'allocated' }
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
      $set: { status: 'allocated' }
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
    filter.state = state;
  }

  if (lga) {
    filter.lga = lga;
  }

  if (age) {
    const ageSplit = age.split('-');
    const min = ageSplit[0];
    const max = ageSplit[1];

    filter.age = { $gte: Number(min), $lte: Number(max) };
  }

  if (occupation) {
    filter.occupation = occupation;
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
    .sort({ createdAt: -1 })
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

export const projectDashBoardStats = async ({ user }) => {
  const activeProjectCount = await ProjectModel.countDocuments({
    sponsor_id: user._id,
    project_state: 'in-progress'
  });
  const completedProjectCount = await ProjectModel.countDocuments({
    sponsor_id: user._id,
    project_state: 'completed'
  });
  const awardeesCount = await awardeesModel.countDocuments({ sponsor_id: user._id });

  return {
    activeProjectCount,
    completedProjectCount,
    awardeesCount
  };
};

export const viewProject = async ({ project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items').exec();

  if (!project) throw new NotFoundError('Project not found');

  const quantityPerPerson = project.quantity_per_person === 0 ? 1 : project.quantity_per_person;

  const awardedBeneficiariesCount = await awardeesModel.countDocuments({
    project_id,
    status: 'awarded'
  });

  const productQuantities = project.product_items.map((item) => ({
    product_name: item.product_name,
    product_quantity: item.product_quantity
  }));

  const quantityNeeded = quantityPerPerson * awardedBeneficiariesCount;

  const shortages = productQuantities.map((item) => {
    const shortage = quantityNeeded - item.product_quantity;
    return {
      product_name: item.product_name,
      product_shortage_quantity: shortage > 0 ? shortage : 0
    };
  });

  const totalShortage = shortages.reduce(
    (total, item) => total + item.product_shortage_quantity,
    0
  );

  const disbursedBeneficiariesCount = await awardeesModel.countDocuments({
    project_id,
    status: 'disbursed'
  });

  const productType = await ProductCategoryModel.findById(project.product_type);

  const totalQuantity = project.product_items.reduce((acc, item) => acc + item.product_quantity, 0);

  const data = {
    project_name: project.project_name,
    total_item_in_stock: totalQuantity,
    product_item_quantities: productQuantities,
    awarded_beneficiaries: awardedBeneficiariesCount,
    total_shortage: totalShortage,
    shortage_items: shortages,
    delivered_item: disbursedBeneficiariesCount,
    beneficiary_feedback: 'not done',
    quantity_per_person: project.quantity_per_person,
    product_type: productType.product_category_name,
    product_type_id: project.product_type,
    project_discription: project.description,
    product_items: project.product_items,
    is_active: project.is_active,
    created: project.createdAt,
    start_date: project.start_date,
    end_date: project.end_date,
    project_status: project.project_status,
    project_state: project.project_state
  };

  return data;
};

export const updateProject = async ({ user, body, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  const updates = Object.keys(body);

  updates.forEach((update) => (project[update] = body[update]));

  await project.save();

  if (body.is_active === false && project.project_state === 'in-progress') {
    // delete everything with project id
    await awardeesModel.deleteMany({ project_id, sponsor_id: user._id });
    await scheduleModel.deleteMany({ project: project_id, sponsor_id: user._id });
  }
};

export const deleteProject = async ({ project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  const deleteable = ['scheduled', 'disbursed', 'completed', 'ended'];

  if (deleteable.includes(project.project_status))
    throw new BadRequestError(
      'Project has started, you can no longer delete it. Please cancel the project'
    );
  const deleteProject = await ProjectModel.findByIdAndDelete(project_id);

  if (!deleteProject)
    throw new InternalServerError('Deleting project cannot work. contant our customer support');

  await awardeesModel.deleteMany({ project_id });
  await scheduleModel.deleteMany({ project: project_id });

  return {};
};

export const fetchAllProject = async ({ params, user }) => {
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

  const totalDocuments = await ProjectModel.countDocuments(filter);
  const totalPages = Math.ceil(totalDocuments / no_of_requests);

  let fetchedData = await ProjectModel.find(filter)
    .populate('product_type')
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();

  return download === 'on'
    ? fetchedData
    : {
        page_no,
        available_pages: totalPages,
        totalPages,
        fetchedData
      };
};

export const getProjectItem = async ({ user, product_id }) => {
  const product = await ProductCategoryModel.findById(product_id);

  if (!product) throw new NotFoundError('Product does not exist');

  const items = await ProductModel.find({ product_category_id: product_id });

  return items;
};
