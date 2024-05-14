import { NotFoundError } from '../../../lib/appErrors.js';
import notificationsModel from '../../models/settings/notificationsModel.js';

export const fetchNotifications = async ({ user }) => {
  const unread_count = await notificationsModel.countDocuments({
    is_read: false,
    who_is_reading: 'organization',
    organization_id: user._id
  });
  const notifications = await notificationsModel
    .find({
      organization_id: user._id,
      who_is_reading: 'organization'
    })
    .sort({ createdAt: -1 });

  for (let notification of notifications) {
    notification.is_read = true;

    await notification.save();
  }

  return { unread_count, notifications };
};

export const marksAsUnread = async ({ user, notification_id }) => {
  const notification = await notificationsModel.findById(notification_id);

  if (!notification) throw new NotFoundError('Notification not found');

  await notification.remove();

  return {};
};
