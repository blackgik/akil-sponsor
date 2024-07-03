import { NotFoundError } from '../../../lib/appErrors.js';
import mediaModel from '../../models/media/mediaModel.js';

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

  return mediaCreated;
};

export const fetchMedia = async ({ user, param }) => {
  let { page_no, no_of_requests, status, project_id } = param;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;
  const filter = { sponsor_id: user._id,  };
  if (status) {
    filter.status = status;
  }

  if(project_id) {
    filter.project_id = project_id
  }

  const media_count = await mediaModel.countDocuments({
    ...filter,

  });

  const mediaFiles = await mediaModel
    .find({
      ...filter,

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

export const changeMediaStatus = async ({ status, media_id }) => {
  console.log(status);
  const mediaFile = await mediaModel.findById(media_id);

  if (!mediaFile) throw new NotFoundError('mediaFile does not exist');
  mediaFile.status = status;
  await mediaFile.save();

  return mediaFile;
};

export const removeMediaFile = async ({ media_id }) => {
  const mediaFile = await mediaModel.findById(media_id);

  if (!mediaFile) throw new NotFoundError('mediaFile not found');

  await mediaFile.remove();

  return {};
};

export const editMediaFile = async ({ body, media_id }) => {
  const mediaFile = await mediaModel.findById(media_id);
  if (!mediaFile) throw new NotFoundError('mediaFile not found');

  Object.assign(mediaFile, body);

  await mediaFile.save();
  return mediaFile;
};
