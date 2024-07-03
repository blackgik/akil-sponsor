import { NotFoundError } from '../../../lib/appErrors.js';
import notificationsModel from '../../models/settings/notificationsModel.js';

export const fetchNotifications = async ({ user, param }) => {
  let { page_no, no_of_requests, type, is_read } = param;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;

  const filter = { organization_id: user._id, who_is_reading: 'sponsor' };
  if (type) {
    filter.type = type;
  }

  if (is_read) {
    filter.is_read = is_read;
  }

  const unread_count = await notificationsModel.countDocuments({
    ...filter,
    is_read: false
  });
  const notificationsCount = await notificationsModel.countDocuments({ ...filter });
  const notifications = await notificationsModel
    .find({
      ...filter
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  for (let notification of notifications) {
    notification.is_read = true;

    await notification.save();
  }
  const available_pages = Math.ceil(notificationsCount / no_of_requests);
  return { page_no, available_pages, unread_count, notifications };
};

export const removeNotification = async ({ notification_id }) => {
  const notification = await notificationsModel.findById(notification_id);

  if (!notification) throw new NotFoundError('Notification not found');

  await notification.remove();

  return {};
};

export const marksAsRread = async ({ notification_id }) => {
  const notification = await notificationsModel.findById(notification_id);

  if (!notification) throw new NotFoundError('Notification not found');

  notification.is_read = true;
  await notification.save();

  return {};
};

export const enableChat = async ({ user, status }) => {
  user.chat_enabled = status;

  await user.save();

  return {};
};
