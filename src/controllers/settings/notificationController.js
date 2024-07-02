import appResponse from '../../../lib/appResponse.js';
import {
  enableChat,
  fetchNotifications,
  marksAsUnread
} from '../../services/settings/notificationService.js';

export const fetchNotifcationHandler = async (req, res) => {
  const { user, query } = req;

  const response = await fetchNotifications({ user, param: query });

  res.send(appResponse('fetched notifications successfully', response));
};

export const markasunreadHandler = async (req, res) => {
  const { user } = req;
  const { notification_id } = req.params;

  const response = await marksAsUnread({ user, notification_id });

  res.send(appResponse('marked notification as read', response));
};

export const enableChatHandler = async (req, res) => {
  const { status } = req.body;
  const { user } = req;

  const response = await enableChat({ user, status });

  res.send(appResponse('Updated successfully', response));
};
