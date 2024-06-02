import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  createNewProduct,
  restockProduct,
  updateProductImageSchema,
  updateRestockSchema,
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
  publishProductHandler,
  updateProductImageHandler,
  unpublishProductHandler,
  restockProductHandler,
  completeRestockHandler,
  getProductRestockHistoryHandler
} from '../../controllers/products/productController.js';

const productRoutes = router.Router();

const productRoot = () => {
  productRoutes.post(
    '/create-products',
    Validate(createNewProduct),
    authentication,
    createNewProductHandler
  );
  productRoutes.post(
    '/create-draft-products',
    Validate(createNewProduct),
    authentication,
    createNewDraftProductHandler
  );

  productRoutes.post(
    '/restock-product',
    Validate(restockProduct),
    authentication,
    restockProductHandler
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
    '/view-product-restock-history',
    authentication,
    getProductRestockHistoryHandler
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
  productRoutes.get(
    '/unpublish-product/:product_id',
    Validate(viewSingleProductSchema, 'params'),
    authentication,
    unpublishProductHandler
  );
  productRoutes.patch(
    '/update-single-product/:product_id',
    Validate(createNewProduct),
    authentication,
    updateSingleProductHandler
  );

  productRoutes.patch(
    '/complete-restock-operation/:restock_id',
    Validate(updateRestockSchema),
    authentication,
    completeRestockHandler
  );

  productRoutes.patch(
    '/upload-product-image/:product_id',
    Validate(updateProductImageSchema),
    authentication,
    updateProductImageHandler
  );

  return productRoutes;
};

export default productRoot;
