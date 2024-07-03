import router from 'express';
import { authentication } from '../../middlewares/authentication.js';
import {
  enableChatHandler,
  fetchNotifcationHandler,
  markAsReadHandler,
  removeNotificationHandler
} from '../../controllers/settings/notificationController.js';

const notificationRoutes = router.Router();

const notificationRoots = () => {
  notificationRoutes.get('/', authentication, fetchNotifcationHandler);
  notificationRoutes.patch('/mark-as-read/:notification_id', authentication, markAsReadHandler);
  notificationRoutes.delete(
    '/remove-notification/:notification_id',
    authentication,
    removeNotificationHandler
  );
  notificationRoutes.patch('/enable-chat', authentication, enableChatHandler);

  return notificationRoutes;
};

export default notificationRoots;
