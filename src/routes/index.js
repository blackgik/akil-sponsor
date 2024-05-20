import organizationRoute from './authRoute.js';
import beneficiaryRoute from './beneficiaries/beneficiaryRoute.js';
import productRoot from './products/productRoute.js';
import messageRoot from './messages/messageRoute.js';
import profileRoot from './profile/profileRoute.js';
import notificationRoots from './settings/notificationRoute.js';
import rolesRouteRoute from './settings/rolespermission.route.js';
import userRoute from './settings/users.route.js';
import personlizationRoute from './settings/personalization.route.js';

export default (router) => {
  router.use('/auth', organizationRoute());
  router.use('/beneficiary', beneficiaryRoute());
  router.use('/product', productRoot());
  router.use('/messages', messageRoot());
  router.use('/profile', profileRoot());
  router.use('/notifications', notificationRoots());
  router.use('/roles', rolesRouteRoute);
  router.use('/users', userRoute);
  router.use('/personalization', personlizationRoute);

  return router;
};
