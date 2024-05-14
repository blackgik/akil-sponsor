import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  fetchNotifcationHandler,
  markasunreadHandler
} from '../../controllers/settings/notificationController.js';

const notificationRoutes = router.Router();

const notificationRoots = () => {
  notificationRoutes.get('/', authentication, fetchNotifcationHandler);
  notificationRoutes.delete('/mark-as-read/:notification_id', authentication, markasunreadHandler);

  return notificationRoutes;
};

export default notificationRoots;
