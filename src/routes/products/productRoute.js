import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  organizationNewContributionProduction,
  organizationNewOrganizationLoanProductSchema,
  organizationNewOrganizationSavingsProductSchema,
  organizationsubscriptionProductSchema,
  viewSingleProductSchema
} from '../../validators/productsSchema.js';
import {
  createNewContributionProductHandler,
  createNewLoanProductHandler,
  createNewSavingsProductHandler,
  createSubscriptionHandler,
  fetchContributionProductHandler,
  fetchLoanProductHandler,
  fetchSavingsProductHandler,
  fetchSubscriptionProductHandler,
  getAllProductsHandler,
  getSingleProductHandler,
  updateSingleProductHandler
} from '../../controllers/products/productController.js';

const productRoutes = router.Router();

const productRoot = () => {
  productRoutes.post(
    '/create-contribution-products',
    Validate(organizationNewContributionProduction),
    authentication,
    createNewContributionProductHandler
  );
  productRoutes.get(
    '/fetch-contribution-products',
    authentication,
    fetchContributionProductHandler
  );

  // ---------Loan Section of Products------------\\

  productRoutes.post(
    '/create-loan-products',
    Validate(organizationNewOrganizationLoanProductSchema),
    authentication,
    createNewLoanProductHandler
  );

  productRoutes.get('/fetch-loan-products', authentication, fetchLoanProductHandler);

  // ----------------savings Sections of Products------------\\
  productRoutes.post(
    '/create-savings-products',
    Validate(organizationNewOrganizationSavingsProductSchema),
    authentication,
    createNewSavingsProductHandler
  );
  productRoutes.get('/fetch-savings-products', authentication, fetchSavingsProductHandler);

  // -----------------subscription Sectioin of Poducts------------------------\\
  productRoutes.post(
    '/create-subscription-product',
    Validate(organizationsubscriptionProductSchema),
    authentication,
    createSubscriptionHandler
  );
  productRoutes.get(
    '/fetch-subscription-products',
    authentication,
    fetchSubscriptionProductHandler
  );

  //------common Section of Products------------\\
  productRoutes.get('/get-all-products', authentication, getAllProductsHandler);
  productRoutes.get(
    '/view-single-product/:product_id/:product_type',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    getSingleProductHandler
  );
  productRoutes.patch(
    '/update-single-product/:product_id/:product_type',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    updateSingleProductHandler
  );

  return productRoutes;
};

export default productRoot;
