import { BadRequestError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import env from '../../config/env.js';
import {
  batchDeliveryCreatedEmail,
  batchDeliveryStartedEmail,
  beneSuccefulProjectScheduledEmail,
  disbursementBeneficiariesEmail
} from '../../config/mail.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import scheduleModel from '../../models/projects/scheduleModel.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';
import usersModels from '../../models/settings/users.models.js';
import { capitalizeWords, generateId } from '../../utils/general.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { messageBird, sendsms } from '../../utils/msgBird.js';
import ProductModel from '../../models/products/ProductModel.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import { buildOtpHash, codeGenerator } from '../../utils/codeGenerator.js';

export const createProductSchedule = async ({ user, body, project_id, param }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  if (!project.is_active)
    throw new BadRequestError('Project is not active. Please activate it before scheduling');

  // confirm that the allocation project is enough for this allocation

  const quantity_tray_check = [];

  for (let itemid of project.product_items) {
    const item = await ProductModel.findById(itemid);
    quantity_tray_check.push(item.product_quantity);
  }

  const minimun = Math.min(...quantity_tray_check);
  const quantity_per_person = project.quantity_per_person;
  const total_allocated = await awardeesModel.countDocuments({
    project_id,
    sponsor_id: user._id,
    status: 'allocated'
  });

  const people_can_feed = minimun / quantity_per_person;

  let shortage_persons = people_can_feed - total_allocated;

  const total_persons_to_get =
    shortage_persons < 0 ? total_allocated - Math.abs(shortage_persons) : total_allocated;

  const { gender, state, lga, age, occupation, status } = param;

  const { selection } = body;

  const filter = { project_id, sponsor_id: user._id, batch_code: '' };

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

  //   verify user
  const userExist = await usersModels.findById(body.userid);

  if (!userExist) throw new NotFoundError('This user does not exist');

  const role = await rolepermissionModel.findById(userExist.role_id);

  if (!role) throw new BadRequestError('Role not found');

  const authorization = role.authorization['projects'];

  if (!authorization) throw new BadRequestError('You do not have permission to access this role.');

  if (!authorization.is_active) throw new BadRequestError('This role is not active');

  const userfunction = authorization.functions['disbursement'];

  if (!userfunction) throw new BadRequestError('You do not have permission for this function');

  if (!userfunction.is_active) throw new BadRequestError('Function is not active for your role');

  if (!userfunction.permissions.includes('create') || !userfunction.permissions.includes('edit'))
    throw new BadRequestError('Permission not allowed on this role');

  const total_scheduled = await awardeesModel.countDocuments({
    project_id,
    sponsor_id: user._id,
    status: 'scheduled'
  });

  const total_left = total_persons_to_get - total_scheduled;

  if (total_left <= 0) throw new BadRequestError('Total number of participants has been exhausted');

  //   create object
  const schedule_data = {
    ...body,
    project: project_id,
    sponsor_id: user._id
  };

  const schedule = await scheduleModel.create(schedule_data);

  const metadata = { images: [], total_awardees: 0 };

  if (!schedule)
    throw new InternalServerError('Could not create schedule. Check your network and try again');

  const quantity_tray = [];

  let shortage = 0;

  const update_data = {
    batch_code: body.batch_number,
    batch_id: schedule._id,
    status: 'scheduled'
  };

  if (selection.includes('*')) {
    // update the awardees with IDs
    const totalawardees = await awardeesModel.countDocuments(filter);

    metadata.total_awardees = totalawardees;

    const someAwardees = await awardeesModel.find(filter).limit(5);

    for (const benefic_id of someAwardees) {
      const benefic = await organizationBeneficiaryModel
        .findById(benefic_id.beneficiary_id)
        .select({ avatar: 1 });

      metadata.images.push(benefic.avatar.key);
    }

    const updateAwardees = await awardeesModel.updateMany(filter, { $set: { ...update_data } });

    if (!updateAwardees) throw new InternalServerError('Updating batch codes failed');

    for (let itemid of project.product_items) {
      quantity_tray.push(itemid.product_quantity);
    }

    const minimun = Math.min(...quantity_tray);

    shortage = minimun - totalawardees;

    if (shortage < 0) {
      const shortageAbsolute = Math.abs(shortage);
      const shortageAwardee = await awardeesModel
        .find({ ...update_data, sponsor_id: user._id })
        .sort({ createdAt: -1 })
        .limit(shortageAbsolute);

      const ids = shortageAwardee.map((doc) => doc._id);

      await awardeesModel.updateMany({ _id: { $in: ids } }, { $set: { is_shortaged: true } });
    }
  } else {
    const totalawardees = body.selection.length;

    metadata.total_awardees = totalawardees;

    for (const benefic_id of body.selection.slice(0, 5)) {
      const awardee = await awardeesModel.findById(benefic_id);

      if (!awardee) continue;

      const benefic = await organizationBeneficiaryModel
        .findById(awardee.beneficiary_id)
        .select({ avatar: 1 });

      metadata.images.push(benefic.avatar.key);
    }

    const updateAwardees = await awardeesModel.updateMany(
      { _id: { $in: body.selection } },
      { $set: { ...update_data } }
    );

    if (!updateAwardees) throw new InternalServerError('Updating batch codes failed');

    for (let itemid of project.product_items) {
      quantity_tray.push(itemid.product_quantity);
    }

    const minimun = Math.min(...quantity_tray);

    shortage = minimun - totalawardees;

    if (shortage < 0) {
      const shortageAbsolute = Math.abs(shortage);

      const shortageAwardee = body.selection.slice(
        body.selection.length - shortageAbsolute,
        body.selection.length
      );

      const ids = shortageAwardee;

      await awardeesModel.updateMany({ _id: { $in: ids } }, { $set: { is_shortaged: true } });
    }
  }

  project.project_status = 'scheduled';

  await project.save();

  schedule.metadata = metadata;

  await schedule.save();

  // for (eachAwardee of body.selection) {
  //   const awardee = await awardeesModel.findById(eachAwardee)
  //   .populate;
  // }

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    project_name: capitalizeWords(project.project_name),
    batch_delivery_number: body.batch_number
  };

  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: user.email,
    subject: `Batch Delivery Created for - ${emailData.project_name}`,
    type: 'html',
    html: batchDeliveryCreatedEmail(emailData).html,
    text: batchDeliveryCreatedEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project delivery created without mail being sent');
  // create notification
  await notificationsModel.create({
    note: `You have successfully scheduled a new batch for the ${project.project_name} project with the batch number ${body.batch_number} `,
    type: 'creation',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  for (const benefic_id of body.selection) {
    const beneficiary = await organizationBeneficiaryModel.findById(benefic_id);
    if (beneficiary) {
      // Create notification for beneficiary
      await notificationsModel.create({
        note: `you have been successfully scheduled for the ${project.project_name} project with the batch number ${body.batch_number}`,
        type: 'update',
        who_is_reading: 'beneficiary',
        member_id: benefic_id,
        organization_id: user._id
      });

      // Send email to beneficiary
      const beneficiaryEmailData = {
        beneficiary_name: capitalizeWords(`${beneficiary.personal.member_name}`),
        project_name: capitalizeWords(project.project_name),
        batch_delivery_number: body.batch_number
      };

      const beneficiaryMailData = {
        sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
        email: beneficiary.contact.email,
        subject: `you have been successfully scheduled for the ${project.project_name} project with the batch number ${body.batch_number}`,
        type: 'html',
        html: beneSuccefulProjectScheduledEmail(beneficiaryEmailData).html,
        text: beneSuccefulProjectScheduledEmail(beneficiaryEmailData).text
      };

      const beneficiaryMsg = await formattMailInfo(beneficiaryMailData, env);

      const beneficiaryMsgDelivered = await messageBird(beneficiaryMsg);
      if (!beneficiaryMsgDelivered) {
        throw new InternalServerError(
          'server slip.project allocated without email sent to awardees'
        );
      }
      if (beneficiary.contact.phone) {
        const smsData = {
          phone: beneficiary.contact.phone,
          sms: `Congratulations, you have been scheduled for the ${capitalizeWords(
            project.project_name
          )} project with batch number ${body.batch_number}`
        };

        const sms = await sendsms(smsData);
        if (!sms)
          throw new BadRequestError('server slip. project scheduled without sms being sent');
      }
    }
  }

  return {};
};

export const generateSchedule = async ({ user, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  if (!project.is_active)
    throw new BadRequestError('Project is not active. Please activate it before scheduling');

  const count = await scheduleModel.countDocuments({ project: project_id, sponsor_id: user._id });

  const code = generateId(count);

  const batch_number = `${project.project_name.toUpperCase().replace(/ /g, '_')}/BAT/${code}`;

  return batch_number;
};

export const listschedules = async ({ user, param, project_id }) => {
  let { page_no, no_of_requests, search, status, download } = param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filter = { sponsor_id: user._id, project: project_id };

  if (status) {
    filter.status = status;
  }

  if (query) {
    filter.batch_number = searchRgx;
  }

  const count = await scheduleModel.countDocuments(filter);
  const fetched_data = await scheduleModel
    .find(filter)
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

export const startSchedule = async ({ body, user, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  if (!project.is_active)
    throw new BadRequestError('Project is not active. Please activate it before starting schedule');

  const scheduleItem = await scheduleModel.find({
    sponsor_id: user._id,
    project: project_id
  });
  let updatedAwardees = [];

  if (body.selection.includes('*')) {
    await scheduleModel.updateMany(
      { project: project_id, status: 'scheduled' },
      { $set: { status: 'in-progress', start_date: new Date() } }
    );

    const schedules = await scheduleModel.find({ project: project_id, sponsor_id: user._id });

    for (let schedule of schedules) {
      await awardeesModel.updateMany(
        { batch_id: schedule._id },
        { $set: { status: 'in-progress' } }
      );

      const updated = await awardeesModel
        .find({ batch_id: schedule._id, status: 'in-progress' })
        .populate('beneficiary_id')
        .populate('project_id')
        .populate('batch_id');
      updatedAwardees = [...updatedAwardees, ...updated];
    }
  } else {
    await scheduleModel.updateMany(
      { _id: { $in: body.selection }, status: 'scheduled' },
      { $set: { status: 'in-progress' } }
    );

    for (const eachbatch of body.selection) {
      await awardeesModel.updateMany({ batch_id: eachbatch }, { $set: { status: 'in-progress' } });

      const updated = await awardeesModel
        .find({ batch_id: eachbatch, status: 'in-progress' })
        .populate('beneficiary_id')
        .populate('project_id')
        .populate('batch_id');
      updatedAwardees = [...updatedAwardees, ...updated];
    }
  }

  project.project_state =
    project.project_state === 'scheduled ' || project.project_state === 'pending'
      ? 'in-progress'
      : project.project_state;

  project.start_date =
    (await scheduleModel.countDocuments({
      sponsor_id: user._id,
      status: { $nin: ['scheduled', 'completed'] }
    })) > 1
      ? project.start_date
      : new Date();

  await project.save();
  // return { updatedAwardees };
  await disbursementCode({ project_id, user, updatedAwardees });
  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    project_name: capitalizeWords(project.project_name),
    batch_delivery_number: scheduleItem.batch_number
  };

  const mailData = {
    sponsor_name: emailData.sponsor_name.toUpperCase(),
    email: user.email,
    subject: `Batch Delivery Started for - ${emailData.project_name}`,
    type: 'html',
    html: batchDeliveryStartedEmail(emailData).html,
    text: batchDeliveryStartedEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project delivery created without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully started batch delivery for ${project.project_name} project`,
    type: 'update',
    who_is_reading: 'sponsor',
    compliment_obj: { status: 'pending' },
    organization_id: user._id
  });
  return {};
};

const disbursementCode = async ({ project_id, user, updatedAwardees }) => {
  const project = await ProjectModel.findById(project_id);

  const start_date = project.start_date;
  const end_date = project.end_date;
  const awardees = await awardeesModel
    .find({ sponsor_id: user._id, project_id })
    // .find({ batch_id: sponsor })
    .populate('beneficiary_id')
    .populate('project_id')
    .populate('batch_id');

  if (awardees.length === 0) throw new NotFoundError('No awardees found');
  const results = [];
  for (const awardee of updatedAwardees) {
    const code = await codeGenerator(6);

    const contact = awardee.beneficiary_id.contact.email
      ? awardee.beneficiary_id.contact.email
      : awardee.beneficiary_id.contact.phone;

    const hash = buildOtpHash(contact, code, env.otpKey, 15);

    awardee.hash = hash;

    const contactEmail = awardee.beneficiary_id.contact.email;
    const contactPhone = awardee.beneficiary_id.contact.phone;

    await awardee.save();

    if (contactEmail) {
      // Create email profile
      const emailData = {
        beneficiary_name: capitalizeWords(awardee.name),
        project_name: capitalizeWords(awardee.project_id.project_name),
        start_date: awardee?.batch_id?.start_date || start_date,
        end_date: awardee?.batch_id?.end_date || end_date,
        location: awardee.batch_id.delivery_address,
        code: code
      };

      const mailData = {
        sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
        email: contactEmail,
        subject: `Your ${emailData.project_name} Package is Ready for Collection`,
        type: 'html',
        html: disbursementBeneficiariesEmail(emailData).html,
        text: disbursementBeneficiariesEmail(emailData).text
      };

      const msg = await formattMailInfo(mailData, env);

      const msgDelivered = await messageBird(msg);
      if (!msgDelivered) {
        results.push({
          awardee_id: awardee._id,
          error: 'Server slip. Project delivery created without mail being sent'
        });
      }
    } else {
      // Create SMS profile
      const smsData = {
        phone: contactPhone,
        sms: `Hi there, you should go to ${awardee.batch_id.delivery_address} from ${
          awardee.batch_id.start_date
        } to ${awardee.batch_id.end_date} to collect your ${capitalizeWords(
          awardee.project_id.project_name
        )}.\nCome with a means of identification and also your disbursement code ${code}`
      };

      const sms = await sendsms(smsData);
      if (!sms) throw new BadRequestError('server slip. project scheduled without sms being sent');
    }

    results.push({
      awardee_id: awardee._id,
      code,
      contact,
      hash
    });
  }

  return results;
};

export const viewSchedule = async ({ schedule_id, user }) => {
  const schedule = await scheduleModel.findById(schedule_id).populate('project').populate('userid');

  if (!schedule) throw new NotFoundError('Schedule not found for');

  return schedule;
};

export const fetchAwardeesinSchedule = async ({ schedule_id, user, param }) => {
  let { page_no, no_of_requests, search, gender, state, lga, age, occupation, status, download } =
    param;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filter = { sponsor_id: user._id, batch_id: schedule_id, is_shortaged: false };

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

  const count = await awardeesModel.countDocuments(filter);
  const fetched_data = await awardeesModel
    .find(filter)
    .populate({
      path: 'beneficiary_id',
      model: 'Organization_Member'
    })
    .populate({
      path: 'project_id', // Field to populate
      populate: {
        path: 'product_type', // Nested field to populate
        model: 'ProductCategory' // Model for `product_type`
      }
    })
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

export const editSchedule = async ({ schedule_id, user, body }) => {
  const schedule = await scheduleModel.findById(schedule_id);

  if (!schedule) throw new NotFoundError('Schedule not found');

  if (schedule.status === 'completed') throw new BadRequestError('Schedule already completed');

  const updates = Object.keys(body);

  updates.forEach((update) => (schedule[update] = body[update]));

  if (schedule.status === 'in-progress' && updates.includes('start_date'))
    throw new BadRequestError('Schedule already started, start date cannot be updated');

  await schedule.save();

  return {};
};

export const deleteSchedule = async ({ schedule_id, user }) => {
  const scheduleCheck = await scheduleModel.findById(schedule_id);

  if (!scheduleCheck) throw new NotFoundError('Schedule not found for');

  if (scheduleCheck.status === 'completed') throw new BadRequestError('Schedule already completed');

  await scheduleCheck.remove();

  await awardeesModel.updateMany(
    { batch_id: schedule_id, status: { $nin: ['disbursed'] } },
    { $set: { status: 'allocated', batch_code: '', is_shortaged: false } }
  );

  const projectInfo = await ProjectModel.findById(scheduleCheck.project);

  const count = await scheduleModel.countDocuments({
    project: projectInfo._id,
    sponsor_id: schedule_id
  });

  if (count === 0) {
    projectInfo.project_status = 'awarded';

    await projectInfo.save();
  }

  //create email profile here
  const emailData = {
    sponsor_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    project_name: capitalizeWords(projectInfo.project_name),
    batch_delivery_number: scheduleCheck.batch_number,
    start_date: scheduleCheck.start_date
  };
  const mailData = {
    sponsor_name: `${user.firstname} ${user.lastname}`.toUpperCase(),
    email: user.email,
    subject: `Batch Delivery Deleted for - ${emailData.project_name}`,
    type: 'html',
    html: batchDeliveryStartedEmail(emailData).html,
    text: batchDeliveryStartedEmail(emailData).text
  };

  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. project delivery created without mail being sent');

  // create notification
  await notificationsModel.create({
    note: `You have successfully deleted batch delivery for ${projectInfo.project_name} project`,
    type: 'update',
    who_is_reading: 'sponsor',
    compliment_obj: { status: 'pending' },
    organization_id: user._id
  });

  return {};
};

export const updateShortagedPerson = async ({ product, user }) => {
  const projects = await ProjectModel.find({
    sponsor_id: user._id,
    product_items: { $in: [product._id] }
  });

  if (!projects.length) return [];

  let totalProductQuanity = product.product_quantity;

  for (let project of projects) {
    const quantityPerPerso = project.quantity_per_person;
    const awardeeCount = await awardeesModel.countDocuments({
      project_id: project._id,
      sponsor_id: user._id,
      is_shortaged: true
    });

    const totalNeededProduct = quantityPerPerso * awardeeCount;

    if (totalNeededProduct < totalProductQuanity) {
      await awardeesModel.updateMany(
        { project_id: project._id, sponsor_id: user._id, is_shortaged: true },
        { $set: { is_shortaged: false } }
      );

      product.product_quantity = totalProductQuanity - totalNeededProduct;
    }
  }

  return [];
};
