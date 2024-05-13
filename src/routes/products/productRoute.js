import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  organizationNewProduction,
  viewSingleProductSchema
} from '../../validators/productsSchema.js';
import {
  createNewProductHandler,
  fetchProductHandler,
  getAllProductsHandler,
  getSingleProductHandler,
  updateSingleProductHandler
} from '../../controllers/products/productController.js';

const productRoutes = router.Router();

const productRoot = () => {
  productRoutes.post(
    '/create-products',
    Validate(organizationNewProduction),
    authentication,
    createNewProductHandler
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
  productRoutes.patch(
    '/update-single-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    updateSingleProductHandler
  );

  return productRoutes;
};

export default productRoot;
