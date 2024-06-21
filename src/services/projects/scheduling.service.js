import { BadRequestError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import organizationBeneficiaryModel from '../../models/beneficiaries/organizationBeneficiaryModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import scheduleModel from '../../models/projects/scheduleModel.js';
import rolepermissionModel from '../../models/settings/rolepermission.model.js';
import usersModels from '../../models/settings/users.models.js';
import { generateId } from '../../utils/general.js';

export const createProductSchedule = async ({ user, body, project_id, param }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  const checkBatch = await scheduleModel.findOne({
    sponsor_id: user._id,
    project: project_id,
    batch_number: body.batch_number
  });

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
    batch_id: schedule._id
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
      const benefic = await organizationBeneficiaryModel.findById(benefic_id).select({ avatar: 1 });

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

  schedule.metadata = metadata;

  await schedule.save();

  return {};
};

export const generateSchedule = async ({ user, project_id }) => {
  const project = await ProjectModel.findById(project_id).populate('product_items');

  if (!project) throw new NotFoundError('Project not found');

  const count = await scheduleModel.countDocuments({ project: project_id, sponsor_id: user._id });

  const code = generateId(count);

  const batch_number = `${project.project_name.toUpperCase()}/BAT/${code}`;

  return batch_number;
};
