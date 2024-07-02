import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  enableChatHandler,
  fetchNotifcationHandler,
  markasunreadHandler
} from '../../controllers/settings/notificationController.js';
import { permissions } from '../../middlewares/permissions.js';

const notificationRoutes = router.Router();

const notificationRoots = () => {
  notificationRoutes.get('/', authentication, fetchNotifcationHandler);
  notificationRoutes.delete('/mark-as-read/:notification_id', authentication, markasunreadHandler);
  notificationRoutes.patch('/enable-chat', authentication, enableChatHandler);

  return notificationRoutes;
};

export default notificationRoots;
