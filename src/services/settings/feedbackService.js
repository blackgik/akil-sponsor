import { NotFoundError } from '../../../lib/appErrors.js';
import feedbackModel from '../../models/messages/feedbackModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';

export const createBeneficiaryFeedback = async ({ body, user, beneficiary_id }) => {
  const { title, content } = body;
  const awardee = await awardeesModel.findOne({ beneficiary_id, status: 'disbursed' });
  if (!awardee) throw new NotFoundError('Awardee not found');
  const feedbackData = {
    title,
    content,
    sponsor_id: user._id,
    beneficiary_id
  };
  const feedbackCreated = await feedbackModel.create(feedbackData);
  awardee.status = 'feedback';
  await awardee.save();
  return feedbackCreated;
};

export const fetchAllFeedback = async ({ user, param }) => {
  let { page_no, no_of_requests, search, is_read } = param;
  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || 20;
  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filter = { sponsor_id: user._id };

  if (query) {
    filter.title = searchRgx;
  }

  if (is_read) {
    filter.is_read = is_read;
  }

  const unread_count = await feedbackModel.countDocuments({
    ...filter,
    is_read: false
  });
  const feedbackCount = await feedbackModel.countDocuments({ ...filter });
  const feedbacks = await feedbackModel
    .find({
      ...filter
    })
    .populate({
      path: 'beneficiary_id',
      model: 'Organization_Member'
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(feedbackCount / no_of_requests);
  return { page_no, available_pages, unread_count, feedbacks };
};

export const getSingleFeedback = async ({ feedback_id }) => {
  const feedback = await feedbackModel.findById(feedback_id).populate({
    path: 'beneficiary_id',
    model: 'Organization_Member'
  });

  if (!feedback) throw new NotFoundError('feedback does not exist');

  return feedback;
};

// export const getSingleFeedback_ = async ({ feedback_id }) => {
//     const feedback = await feedbackModel.findById(feedback_id).populate({
//       path: 'beneficiary_id',
//       model: 'Organization_Member'
//     });

//     if (!feedback) throw new NotFoundError('product  does not exist');

//     return feedback;
//   };

export const markAsRead = async ({ feedback_id }) => {
  const feedback = await feedbackModel.findById(feedback_id);

  if (!feedback) throw new NotFoundError('feedback not found');

  feedback.is_read = true;
  await feedback.save();

  return {};
};

export const removeFeedback = async ({ feedback_id }) => {
  const feedback = await feedbackModel.findById(feedback_id);

  if (!feedback) throw new NotFoundError('feedback not found');

  await feedback.remove();

  return {};
};
