import appResponse from '../../../lib/appResponse.js';
import {
  enableChat,
  fetchNotifications,
  marksAsRread,
  removeNotification
} from '../../services/settings/notificationService.js';

export const fetchNotifcationHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchNotifications({ user, param: query });

  res.send(appResponse('fetched notifications successfully', response));
};

export const markAsReadHandler = async (req, res) => {
  const { user, body } = req;

  const response = await marksAsRread({ user, body });

  res.send(appResponse('marked notification as read', response));
};

export const removeNotificationHandler = async (req, res) => {
  const { notification_id } = req.params;

  const response = await removeNotification({ notification_id });

  res.send(appResponse('notification removed', response));
};

export const enableChatHandler = async (req, res) => {
  const { status } = req.body;
  const { user } = req;

  const response = await enableChat({ user, status });

  res.send(appResponse('Updated successfully', response));
};
