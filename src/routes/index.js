import organizationRoute from './authRoute.js';
import beneficiaryRoute from './beneficiaries/beneficiaryRoute.js';
import productRoot from './products/productRoute.js';
import messageRoot from './messages/messageRoute.js';
import profileRoot from './profile/profileRoute.js';
import notificationRoots from './settings/notificationRoute.js';

export default (router) => {
  router.use('/auth', organizationRoute());
  router.use('/beneficiary', beneficiaryRoute());
  router.use('/product', productRoot());
  router.use('/messages', messageRoot());
  router.use('/profile', profileRoot());
  router.use('/notifications', notificationRoots());

  return router;
};
