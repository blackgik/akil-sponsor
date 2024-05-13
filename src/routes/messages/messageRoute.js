import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  createNewConversationHandler,
  fetchAllConversationMessagesHandler,
  fetchAllConversationsHandler
} from '../../controllers/messages/messageController.js';

const messageRoute = router.Router();

const messageRoot = () => {
  messageRoute.post(
    '/create-conversation/:member_id',
    authentication,
    createNewConversationHandler
  );
  messageRoute.get('/fetch-all-conversations', authentication, fetchAllConversationsHandler);
  messageRoute.get(
    '/fetch-messages-in-conversation/:conversation_id',
    authentication,
    fetchAllConversationMessagesHandler
  );
  return messageRoute;
};

export default messageRoot;
