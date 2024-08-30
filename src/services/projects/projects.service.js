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
import {
  beneficiarySuccefullyAllocatedEmail,
  beneSuccefulProjectAllocatedEmail,
  beneSuccefulProjectAwardedEmail,
  newProjectCreationEmail,
  projectClosureEmail,
  succefulProjectAwardedEmail
} from '../../config/mail.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird } from '../../utils/msgBird.js';
import env from '../../config/env.js';
import notificationsModel from '../../models/settings/notificationsModel.js';

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

    if (checkProductTypeProject) {
      body.product_items.forEach(async (item) => {
        const item_name = await ProductModel.findById(item);

        if (!item_name) throw new NotFoundError('Product Item not found');

        if (checkProductTypeProject.product_items.includes(item))
          throw BadRequestError(
            `This Item ${item_name.product_name} Can not added because ${checkProductTypeProject.project_name} has it already`
          );
      });
    }

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
      sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
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

    // create notification
    await notificationsModel.create({
      note: `You have successfully created a new project ${body.project_name} `,
      type: 'creation',
      who_is_reading: 'sponsor',
      organization_id: user._id
    });
    return project;
  } catch (err) {
    console.log(err);
    throw new BadRequestError(err.message || 'Could not create project');
  }
};

export const generateProjectList = async ({ user, param, project_id, body }) => {
  try {
    const project = await ProjectModel.findById(project_id);

    if (!project) throw new NotFoundError('Project not found');

    if (!project.is_active)
      throw new BadRequestError(
        'Project is not active. Please activate it before generation of list'
      );

    const { state, status, age, occupation } = param;
    const { selection } = body;

    const filter = { organization_id: user._id, project_ids: { $nin: [project_id] } };

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
    const errolog = [];

    if (selection.includes('*')) {
      const beneficiaries = await organizationBeneficiaryModel.find(filter);

      for (const beneficiary of beneficiaries) {
        // Check for missing or incomplete fields
        const missingFields = [];
        if (!beneficiary.personal.member_name) missingFields.push('name');
        if (!beneficiary.personal.gender) missingFields.push('gender');
        if (!beneficiary.personal.dob) missingFields.push('dob');
        if (!beneficiary.contact.phone) missingFields.push('phone');
        if (!beneficiary.personal.lga) missingFields.push('lga');
        if (!beneficiary.employment_info.employment_status) missingFields.push('occupation');

        if (missingFields.length > 0) {
          // Log the error
          errolog.push({
            beneficiary_id: beneficiary._id,
            missingFields: missingFields,
            name: beneficiary.personal.member_name || 'N/A',
            phone: beneficiary.contact.phone || 'N/A',
            lga: beneficiary.personal.lga || 'N/A',
            occupation: beneficiary.employment_info.employment_status || 'N/A',
            age: beneficiary.personal.dob
              ? Math.floor(
                  Date.now() / (1000 * 60 * 60 * 24 * 365) -
                    new Date(beneficiary.personal.dob).getTime() / (1000 * 60 * 60 * 24 * 365)
                )
              : 'N/A',
            gender: beneficiary.personal.gender || 'N/A'
          });

          // Throw an error for the missing profile information
          throw new BadRequestError(
            `Beneficiary ${
              capitalizeWords(beneficiary.personal.member_name)
            } has not updated their profile. Missing fields: ${missingFields.join(', ')}`
          );
        }

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

        body.selection.push(beneficiary._id);
        batch.push(data);
      }
    } else {
      for (const benefic_id of body.selection) {
        const beneficiary = await organizationBeneficiaryModel.findById(benefic_id);

        if (!beneficiary) continue;

        if (beneficiary.project_ids.includes(project_id)) continue;

        const missingFields = [];
        if (!beneficiary.personal.member_name) missingFields.push('name');
        if (!beneficiary.personal.gender) missingFields.push('gender');
        if (!beneficiary.personal.dob) missingFields.push('dob');
        if (!beneficiary.contact.phone) missingFields.push('phone');
        if (!beneficiary.personal.lga) missingFields.push('lga');
        if (!beneficiary.employment_info.employment_status) missingFields.push('occupation');

        if (missingFields.length > 0) {
          // Log the error
          errolog.push({
            beneficiary_id: beneficiary._id,
            missingFields: missingFields,
            name: beneficiary.personal.member_name || 'N/A',
            phone: beneficiary.contact.phone || 'N/A',
            lga: beneficiary.personal.lga || 'N/A',
            occupation: beneficiary.employment_info.employment_status || 'N/A',
            age: beneficiary.personal.dob
              ? Math.floor(
                  Date.now() / (1000 * 60 * 60 * 24 * 365) -
                    new Date(beneficiary.personal.dob).getTime() / (1000 * 60 * 60 * 24 * 365)
                )
              : 'N/A',
            gender: beneficiary.personal.gender || 'N/A'
          });

          // Throw an error for the missing profile information
          throw new BadRequestError(
            `Beneficiary ${
              capitalizeWords(beneficiary.personal.member_name)
            } has not updated their profile. Missing fields: ${missingFields.join(', ')}`
          );
        }

        const today = Date.now() / (1000 * 60 * 24 * 60 * 365);
        const dob = beneficiary.personal.dob.getTime() / (1000 * 60 * 24 * 60 * 365);
        const data = {
          beneficiary_id: beneficiary._id,
          name: beneficiary.personal.member_name,
          gender: beneficiary.personal.gender,
          age: Math.floor(today - dob),
          phone: beneficiary.contact.phone,
          occupation: beneficiary.employment_info?.employment_status || 'unemployed',
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

    const create_awardees = await awardeesModel.insertMany(batch);

    if (create_awardees.length === 0)
      throw new InternalServerError('List is empty. Users are already allocated to this project');

    project.project_status = 'awarded';
    project.is_beneficary_added = true;

    await project.save();

    const addProject_id = await organizationBeneficiaryModel.updateMany(
      { _id: { $in: body.selection } },
      { $push: { project_ids: project_id } }
    );

    // console.log({ addProject_id });

    // send email to sponsor
    const sponsorEmailData = {
      sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
      project_name: capitalizeWords(project.project_name)
    };

    const sponsorMailData = {
      sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
      email: user.email,
      subject: `Successful Project Beneficiary Award Notification`,
      type: 'html',
      html: succefulProjectAwardedEmail(sponsorEmailData).html,
      text: succefulProjectAwardedEmail(sponsorEmailData).text
    };

    const sponsorMsg = await formattMailInfo(sponsorMailData, env);

    const sponsorMsgDelivered = await messageBird(sponsorMsg);
    if (!sponsorMsgDelivered)
      throw new InternalServerError('server slip. project was created without mail being sent');

    // create notification for sponsor
    await notificationsModel.create({
      note: `You have successfully awarded beneficiaries to this project ${project.project_name}`,
      type: 'creation',
      who_is_reading: 'sponsor',
      organization_id: user._id
    });

    // create notifications and send emails for all beneficiaries
    for (const benefic_id of body.selection) {
      const beneficiary = await organizationBeneficiaryModel.findById(benefic_id);
      if (beneficiary) {
        // create notification for beneficiary
        try {
          await notificationsModel.create({
            note: `You have been awarded to the project ${project.project_name}`,
            type: 'creation',
            who_is_reading: 'beneficiary',
            member_id: benefic_id,
            organization_id: user._id
          });
        } catch (error) {
          throw new Error(error);
        }

        // send email to beneficiary
        const beneficiaryEmailData = {
          beneficiary_name: capitalizeWords(`${beneficiary.personal.member_name}`),
          project_name: capitalizeWords(project.project_name)
        };

        const beneficiaryMailData = {
          sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
          email: beneficiary.contact.email,
          subject: `You have been awarded to project ${project.project_name}`,
          type: 'html',
          html: beneSuccefulProjectAwardedEmail(beneficiaryEmailData).html,
          text: beneSuccefulProjectAwardedEmail(beneficiaryEmailData).text
        };

        const beneficiaryMsg = await formattMailInfo(beneficiaryMailData, env);

        const beneficiaryMsgDelivered = await messageBird(beneficiaryMsg);
        if (!beneficiaryMsgDelivered) {
          throw new InternalServerError(`Failed to send email to beneficiary`);
        }
      }
    }

    return create_awardees;
  } catch (err) {
    console.log(err);

    throw new BadRequestError(err.message || 'server slip');
  }
};

export const saveGenerateList = async ({ user, param, project_id, body }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  if (!project.is_active)
    throw new BadRequestError('Project ID is not active. Please activate it before saving list');

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

    shortage = minimun - awardeeCount * project.quantity_per_person;
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

    shortage = minimun - awardeeCount * project.quantity_per_person;
  }

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    project_name: capitalizeWords(project.project_name)
  };

  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: user.email,
    subject: `Beneficiary Successfully Allocated to ${emailData.project_name}`,
    type: 'html',
    html: beneficiarySuccefullyAllocatedEmail(emailData).html,
    text: beneficiarySuccefullyAllocatedEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project was created without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully allocated beneficiaires to this project ${project.project_name} `,
    type: 'creation',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  for (const benefic_id of selection) {
    const beneficiary = await organizationBeneficiaryModel.findById(benefic_id);
    if (beneficiary) {
      // Create notification for beneficiary
      await notificationsModel.create({
        note: `You have been successfully allocated to the project ${project.project_name}`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: beneficiary._id,
        organization_id: user._id
      });

      // Send email to beneficiary
      const beneficiaryEmailData = {
        beneficiary_name: capitalizeWords(`${beneficiary.personal.member_name}`),
        project_name: capitalizeWords(project.project_name)
      };

      const beneficiaryMailData = {
        sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
        email: beneficiary.contact.email,
        subject: `You have been allocated to project ${project.project_name}`,
        type: 'html',
        html: beneSuccefulProjectAllocatedEmail(beneficiaryEmailData).html,
        text: beneSuccefulProjectAllocatedEmail(beneficiaryEmailData).text
      };

      const beneficiaryMsg = await formattMailInfo(beneficiaryMailData, env);

      const beneficiaryMsgDelivered = await messageBird(beneficiaryMsg);
      if (!beneficiaryMsgDelivered) {
        throw new InternalServerError(
          'server slip.project allocated without email sent to awardees'
        );
      }
    }
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
    download,
    is_shortaged
  } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filter = { project_id, sponsor_id: user._id };

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
    filter.age = age;
  }

  if (occupation) {
    filter.occupation = occupation;
  }

  if (status) {
    filter.status = status;
  }

  if (is_shortaged === 'true' || is_shortaged === true) {
    filter.is_shortaged = true;
  }

  if (is_shortaged === 'false' || is_shortaged === false) {
    filter.is_shortaged = false;
  }

  const count = await awardeesModel.countDocuments(filter);
  const fetched_data = await awardeesModel
    .find(filter)
    .populate([
      { path: 'project_id', populate: { path: 'product_items' } },
      { path: 'beneficiary_id', model: 'Organization_Member', select: 'avatar' }
    ])
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);
  const available_pages = Math.ceil(count / no_of_requests);
  return download === 'on'
    ? fetched_data
    : {
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
  console.log(user);
  return {
    activeProjectCount,
    completedProjectCount,
    awardeesCount
  };
};

export const viewProject = async ({ project_id }) => {
  const project = await ProjectModel.findById(project_id)
    .populate({ path: 'product_items' })
    .populate({ path: 'product_type' })
    .exec();

  if (!project) throw new NotFoundError('Project not found');

  const quantityPerPerson = project.quantity_per_person === 0 ? 1 : project.quantity_per_person;

  const awardedBeneficiariesCount = await awardeesModel.countDocuments({
    project_id,
    status: { $ne: 'awarded' }
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
    product_type: productType?.product_category_name || 'N/A',
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

  let updates = Object.keys(body);

  const fullUpdateState = ['pending'];

  if (!fullUpdateState.includes(project.project_state)) {
    const allowableUpdates = ['description', 'end_date', 'is_active'];

    updates.forEach((item) => {
      if (!allowableUpdates.includes(item)) {
        console.log({ item });
        delete body[item];
      }
    });

    updates = Object.keys(body);

    const iseditable = updates.every((item) => allowableUpdates.includes(item));

    if (!iseditable)
      throw new BadRequestError('Allowable updates at this time are description and end_date');
  }

  updates.forEach((update) => (project[update] = body[update]));

  await project.save();

  if (body.is_active === false && project.project_state === 'in-progress') {
    // delete everything with project id
    await awardeesModel.deleteMany({ project_id, sponsor_id: user._id });
    await scheduleModel.deleteMany({ project: project_id, sponsor_id: user._id });
  }

  return {};
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

  // create notification
  await notificationsModel.create({
    note: `You have successfully deleted ${project.project_name} project`,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: project.sponsor_id
  });

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

  const items = await ProductModel.find({
    product_category_id: product_id,
    organization_id: user._id
  });

  return items;
};

export const closeProject = async ({ user, project_id }) => {
  const project = await ProjectModel.findById(project_id);

  if (!project) throw new NotFoundError('Project not found');

  if (project.project_state === 'pending') {
    project.project_state = 'cancelled';

    await project.save();
  } else {
    throw new BadRequestError('Project is already a moving state.');
  }

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    project_name: capitalizeWords(project.project_name),
    closure_date: project.end_date
  };

  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: user.email,
    subject: `Project Closure Notification of -${emailData.project_name}`,
    type: 'html',
    html: projectClosureEmail(emailData).html,
    text: projectClosureEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project was closed without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully closed ${project.project_name} project`,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });
  return {};
};

export const deleteAwardee = async ({ body, user }) => {
  for (const awardee_id of body.selection) {
    const awardee = await awardeesModel.findById(awardee_id);

    if (!awardee) throw new NotFoundError('Awardee not found');

    const deletableStatus = ['awarded', 'allocated'];

    if (deletableStatus.includes(awardee.status)) {
      await awardee.remove();

      const beneficiary = await organizationBeneficiaryModel.findById(awardee.beneficiary_id);

      if (!beneficiary) continue;

      const filtered = beneficiary.project_ids.filter(
        (item) => String(item) !== String(awardee.project_id)
      );

      beneficiary.project_ids = filtered;

      await beneficiary.save();
    } else {
      throw new BadRequestError('Awardee is already in  a moving state. You can not delete');
    }
  }

  return {};
};

export const fetchBeneficiariesForProjects = async ({ user, param, project_id }) => {
  const project = await ProjectModel.findById(project_id);

  if (!project) throw new NotFoundError('Project not found');

  let { page_no, no_of_requests, search, status, download } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filterData = {
    organization_id: user._id,
    project_ids: { $nin: [project_id] },
    acctstatus: 'active'
  };

  const query = typeof search !== 'undefined' ? search.trim() : false;

  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ 'personal.member_name': searchRgx }, { 'contact.email': searchRgx }];
  }

  if (status) {
    filterData.acctstatus = status;
  }

  const beneficiaryCount = await organizationBeneficiaryModel.countDocuments({ ...filterData });
  const fetchedResults = await organizationBeneficiaryModel
    .find({ ...filterData })
    .select({
      avatar: 1,
      'personal.member_name': 1,
      'personal.lga': 1,
      'personal.state_of_origin': 1,
      'personal.dob': 1,
      'contact.email': 1,
      'employment_info.employment_status': 1,
      'contact.country_of_residence': 1,
      'personal.gender': 1,
      has_paid_reg: 1,
      'contact.phone': 1,
      createdAt: 1,
      acctstatus: 1
    })
    .populate({
      path: 'organization_id',
      model: 'Organization',
      select: { name_of_cooperation: 1, company_code: 1 }
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(beneficiaryCount / no_of_requests);
  return download === 'on'
    ? fetchedResults
    : {
        page_no,
        available_pages,
        fetchedResults
      };
};
