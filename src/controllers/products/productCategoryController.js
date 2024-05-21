import appResponse from '../../../lib/appResponse.js';
import {
  createNewProductCategory,
  fetchAllProductCategories,
  fetchProductCategory,
  getSingleProductCategory,
  updateSingleProductCategory
} from '../../services/product/productCategoryService.js';

export const createNewProductCategoryHandler = async (req, res) => {
  const { user, body } = req;

  const newProductCategory = await createNewProductCategory({ user, body });

  res.send(appResponse('created productCategory successfully', newProductCategory));
};

export const fetchProductCategoryHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchProductCategory({ user, params });

  res.send(appResponse('fetched contribution productCategorys successfully', fetchedData));
};
//================================================================================================

//------ commeon productCategory handlers --------------------\\

export const getAllProductCategoriesHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllProductCategories({ user, params });

  res.send(appResponse('fetched productCategorys successfully', fetchedData));
};

export const getSingleProductCategoryHandler = async (req, res) => {
  const { user, params } = req;
  const { productCategory_id } = params;

  const productCategory = await getSingleProductCategory({ user, productCategory_id });

  res.send(appResponse('fetched productCategory successfully', productCategory));
};

export const updateSingleProductCategoryHandler = async (req, res) => {
  const { user, params, body } = req;
  const { productCategory_id} = params;

  const updated = await updateSingleProductCategory({ productCategory_id, body, user });

  res.send(appResponse('updated productCategory successfully', updated));
};
