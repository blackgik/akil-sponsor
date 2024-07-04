import { NotFoundError } from '../../../lib/appErrors.js';
import mediaModel from '../../models/media/mediaModel.js';
import notificationsModel from '../../models/settings/notificationsModel.js';

export const uploadMedia = async ({ body, user }) => {
  const { fileKey, title, description, start_date, end_date, project_id } = body;
  const mediaData = {
    file: {
      key: fileKey
    },
    ...body,
    sponsor_id: user._id
  };
  const mediaCreated = await mediaModel.create(mediaData);

  // create notification
  await notificationsModel.create({
    note: `You have successfully Uploaded a new media file`,
    type: 'creation',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  return mediaCreated;
};

export const fetchMedia = async ({ user, param }) => {
  let { page_no, no_of_requests, status, project_id } = param;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;
  const filter = { sponsor_id: user._id };
  if (status) {
    filter.status = status;
  }

  if (project_id) {
    filter.project_id = project_id;
  }

  const media_count = await mediaModel.countDocuments({
    ...filter
  });

  const mediaFiles = await mediaModel
    .find({
      ...filter
    })
    .populate({
      path: 'project_id',
      model: 'Project'
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(media_count / no_of_requests);
  return { page_no, available_pages, media_count, mediaFiles };
};

export const fetchSingleMedia = async ({ user, media_id }) => {
  const mediaFiles = await mediaModel
    .findById(media_id)
    .populate({
      path: 'project_id',
      model: 'Project'
    })
    .sort({ createdAt: -1 });

  if (!mediaFiles) throw new NotFoundError("media file doesn't exist");
  return mediaFiles;
};

export const changeMediaStatus = async ({ user, status, media_id }) => {
  const mediaFile = await mediaModel.findByIdAndUpdate(
    media_id,
    { $set: { status } },
    { new: true, runValidators: true }
  );

  if (!mediaFile) throw new NotFoundError('mediaFile does not exist');

  // create notification
  await notificationsModel.create({
    note: `You have successfully updated the status of this media file to ${status}`,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  return mediaFile;
};

export const removeMediaFile = async ({ user, media_id }) => {
  const mediaFile = await mediaModel.findById(media_id);

  if (!mediaFile) throw new NotFoundError('mediaFile not found');

  await mediaFile.remove();
  // create notification
  await notificationsModel.create({
    note: `You have successfully removed a media file`,
    type: 'update',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  return {};
};

export const editMediaFile = async ({ body, media_id }) => {
  const mediaFile = await mediaModel.findByIdAndUpdate(
    media_id,
    { $set: body },
    { new: true, runValidators: true }
  );

  if (!mediaFile) throw new NotFoundError('mediaFile not found');

  return mediaFile;
};
