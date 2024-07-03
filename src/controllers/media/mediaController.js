import appResponse from '../../../lib/appResponse.js';
import {
  changeMediaStatus,
  editMediaFile,
  fetchMedia,
  removeMediaFile,
  uploadMedia
} from '../../services/media/mediaService.js';

export const uploadMediaHanlder = async (req, res) => {
  const { body, user } = req;
  const { project_id } = req.params;

  const response = await uploadMedia({ body, user, project_id });

  res.send(appResponse('uploaded media file successfully', response));
};

export const fetchMediaHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchMedia({ user, param: query });

  res.send(appResponse('fetched all media files successfully', response));
};

export const changeMediaStatusHandler = async (req, res) => {
  const { status } = req.body;
  const { media_id } = req.params;

  const response = await changeMediaStatus({ status, media_id });

  res.send(appResponse('updated media file successfully', response));
};

export const editMediaFileHandler = async (req, res) => {
  const { body } = req;
  const { media_id } = req.params;

  const response = await editMediaFile({ body, media_id });

  res.send(appResponse('mediafile edited', response));
};

export const removeMediaFileHandler = async (req, res) => {
  const { media_id } = req.params;

  const response = await removeMediaFile({ media_id });

  res.send(appResponse('removed mediafile', response));
};
