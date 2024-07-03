import router from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  changeMediaStatusHandler,
  editMediaFileHandler,
  fetchMediaHandler,
  removeMediaFileHandler,
  uploadMediaHanlder
} from '../../controllers/media/mediaController.js';

const mediaFileRoutes = router.Router();

const mediaFileRoots = () => {
  mediaFileRoutes.post('/upload-mediafile', authentication, uploadMediaHanlder);
  mediaFileRoutes.get('/fetch-mediafiles', authentication, fetchMediaHandler);
  mediaFileRoutes.patch('/update-status/:media_id', authentication, changeMediaStatusHandler);
  mediaFileRoutes.patch('/edit-mediafile/:media_id', authentication, editMediaFileHandler);
  mediaFileRoutes.delete('/remove/:media_id', authentication, removeMediaFileHandler);

  return mediaFileRoutes;
};

export default mediaFileRoots;
