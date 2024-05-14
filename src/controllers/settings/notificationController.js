import appResponse from '../../../lib/appResponse.js';
import { fetchNotifications, marksAsUnread } from '../../services/settings/notificationService.js';

export const fetchNotifcationHandler = async (req, res) => {
  const { user } = req;

  const response = await fetchNotifications({ user });

  res.send(appResponse('fetched notifications successfully', response));
};

export const markasunreadHandler = async (req, res) => {
  const { user } = req;
  const { notification_id } = req.params;

  const response = await marksAsUnread({ user, notification_id });

  res.send(appResponse('marked notification as read', response));
};
