import appResponse from '../../../lib/appResponse.js';
import {
  changeMediaStatus,
  editMediaFile,
  fetchMedia,
  fetchSingleMedia,
  removeMediaFile,
  uploadMedia
} from '../../services/media/mediaService.js';

export const uploadMediaHanlder = async (req, res) => {
  const { body, user } = req;

  const response = await uploadMedia({ body, user });

  res.send(appResponse('uploaded media file successfully', response));
};

export const fetchMediaHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchMedia({ user, param: query });

  res.send(appResponse('fetched all media files successfully', response));
};

export const fetchSingleMediaHandler = async (req, res) => {
  const { user } = req;
  const { media_id } = req.params;

  const response = await fetchSingleMedia({ user, media_id });

  res.send(appResponse('fetched single media file successfully', response));
};

export const changeMediaStatusHandler = async (req, res) => {
  const { user } = req;
  const { status } = req.body;
  const { media_id } = req.params;

  const response = await changeMediaStatus({ user, status, media_id });

  res.send(appResponse('updated media file successfully', response));
};

export const editMediaFileHandler = async (req, res) => {
  const { body } = req;
  const { media_id } = req.params;

  const response = await editMediaFile({ body, media_id });

  res.send(appResponse('media filie edited', response));
};

export const removeMediaFileHandler = async (req, res) => {
  const { user } = req;
  const { media_id } = req.params;

  const response = await removeMediaFile({ user, media_id });

  res.send(appResponse('removed mediafile', response));
};
