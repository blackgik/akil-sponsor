import appResponse from '../../../lib/appResponse.js';
import {
  createNewProduct,
  fetchAllProducts,
  fetchProduct,
  getSingleProduct,
  updateSingleProduct
} from '../../services/product/productService.js';

export const createNewProductHandler = async (req, res) => {
  const { user, body } = req;

  const newContributionProduct = await createNewProduct({ user, body });

  res.send(appResponse('created product successfully', newContributionProduct));
};

export const fetchProductHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchProduct({ user, params });

  res.send(appResponse('fetched contribution products successfully', fetchedData));
};
//================================================================================================

//------ commeon product handlers --------------------\\

export const getAllProductsHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllProducts({ user, params });

  res.send(appResponse('fetched products successfully', fetchedData));
};

export const getSingleProductHandler = async (req, res) => {
  const { user, params } = req;
  const { product_id, product_type } = params;

  const product = await getSingleProduct({ user, product_id, product_type });

  res.send(appResponse('fetched product successfully', product));
};

export const updateSingleProductHandler = async (req, res) => {
  const { user, params, body } = req;
  const { product_id, product_type } = params;

  const updated = await updateSingleProduct({ product_id, product_type, body, user });

  res.send(appResponse('updated product successfully', updated));
};
