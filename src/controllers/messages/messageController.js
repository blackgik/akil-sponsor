import appResponse from '../../../lib/appResponse.js';
import {
  createConversation,
  fetchAllConversationMessages,
  fetchAllConversations
} from '../../services/messages/messageService.js';

export const createNewConversationHandler = async (req, res) => {
  const { user, params } = req;
  const { member_id } = params;

  const conversation = await createConversation({ user, member_id });

  res.send(appResponse('created conversations successfully', conversation));
};

export const fetchAllConversationsHandler = async (req, res) => {
  const { user } = req;

  const conversations = await fetchAllConversations({ user });

  res.send(appResponse('fetched conversations successfully', conversations));
};

export const fetchAllConversationMessagesHandler = async (req, res) => {
  const { conversation_id } = req.params;

  const conversationMessages = await fetchAllConversationMessages({ conversation_id });

  res.send(appResponse('fetched conversation messages successfully', conversationMessages));
};
