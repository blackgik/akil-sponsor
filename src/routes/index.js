import organizationRoute from './authRoute.js';
import beneficiaryRoute from './beneficiaries/beneficiaryRoute.js';
import productRoot from './products/productRoute.js';
import productCategoryRoot from './products/productCategoryRoute.js';
import warehouseRoot from './products/warehouseRoute.js';
import occupationRoot from './occupations/occupationRoute.js';
import messageRoot from './messages/messageRoute.js';
import supplierRoot from './suppliers/supplierRoute.js';
import profileRoot from './profile/profileRoute.js';
import notificationRoots from './settings/notificationRoute.js';
import rolesRouteRoute from './settings/rolespermission.route.js';
import userRoute from './settings/users.route.js';
import personlizationRoute from './settings/personalization.route.js';
import project_route from './projects/project.route.js';

export default (router) => {
  router.use('/auth', organizationRoute());
  router.use('/beneficiary', beneficiaryRoute());
  router.use('/product', productRoot());
  router.use('/supplier', supplierRoot());
  router.use('/warehouse', warehouseRoot());
  router.use('/occupation', occupationRoot());
  router.use('/product-category', productCategoryRoot());
  router.use('/messages', messageRoot());
  router.use('/profile', profileRoot());
  router.use('/notifications', notificationRoots());
  router.use('/roles', rolesRouteRoute);
  router.use('/users', userRoute);
  router.use('/personalization', personlizationRoute);
  router.use('/project', project_route);

  return router;
};
