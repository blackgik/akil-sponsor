import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
    NewProductCategory,
  viewSingleProductCategorySchema
} from '../../validators/productCategoriesSchema.js';
import {
  createNewProductCategoryHandler,
  fetchProductCategoryHandler,
  getAllProductCategoriesHandler,
  getSingleProductCategoryHandler,
  updateSingleProductCategoryHandler
} from '../../controllers/products/productCategoryController.js';

const productCategoryRoutes = router.Router();

const productCategoryRoot = () => {
  productCategoryRoutes.post(
    '/create-product-categories',
    Validate(NewProductCategory),
    authentication,
    createNewProductCategoryHandler
  );
  productCategoryRoutes.get(
    '/fetch-product-categories',
    authentication,
    fetchProductCategoryHandler
  );

  //------common Section of ProductCategorys------------\\
  productCategoryRoutes.get('/get-all-product-categories', authentication, getAllProductCategoriesHandler);
  productCategoryRoutes.get(
    '/view-single-product-category/:product_category_id',
    Validate(viewSingleProductCategorySchema, 'params'),
    authentication,
    getSingleProductCategoryHandler
  );
  productCategoryRoutes.patch(
    '/update-single-product-category/:product_category_id',
    Validate(NewProductCategory),
    authentication,
    updateSingleProductCategoryHandler
  );

  return productCategoryRoutes;
};

export default productCategoryRoot;
