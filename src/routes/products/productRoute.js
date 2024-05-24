import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  organizationNewProduction,
  viewSingleProductSchema
} from '../../validators/productsSchema.js';
import {
  createNewProductHandler,
  createNewDraftProductHandler,
  fetchProductHandler,
  getAllProductsHandler,
  getSingleProductHandler,
  updateSingleProductHandler,
  cancelProductHandler,
  publishProductHandler
} from '../../controllers/products/productController.js';

const productRoutes = router.Router();

const productRoot = () => {
  productRoutes.post(
    '/create-products',
    Validate(organizationNewProduction),
    authentication,
    createNewProductHandler
  );
  productRoutes.post(
    '/create-draft-products',
    Validate(organizationNewProduction),
    authentication,
    createNewDraftProductHandler
  );
  productRoutes.get(
    '/fetch-products',
    authentication,
    fetchProductHandler
  );

  //------common Section of Products------------\\
  productRoutes.get('/get-all-products', authentication, getAllProductsHandler);
  productRoutes.get(
    '/view-single-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    getSingleProductHandler
  );
  productRoutes.get(
    '/cancel-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    cancelProductHandler
  );
  productRoutes.get(
    '/publish-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    publishProductHandler
  );
  productRoutes.patch(
    '/update-single-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    updateSingleProductHandler
  );

  return productRoutes;
};

export default productRoot;
