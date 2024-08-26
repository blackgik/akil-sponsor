import appResponse from '../../../lib/appResponse.js';
import {
  createNewProduct,
  fetchAllProducts,
  fetchProduct,
  publishProduct,
  cancelProduct,
  createNewProductDraft,
  getSingleProduct,
  updateSingleProduct,
  updateProductImage,
  unPublishProduct,
  restockProductData,
  completeRestock,
  fetchProductRestockHistory,
  itemStatistics
} from '../../services/product/productService.js';
import { downloadExcel } from '../../utils/general.js';

export const createNewProductHandler = async (req, res) => {
  const { user, body } = req;

  const newProduct = await createNewProduct({ user, body });

  res.send(appResponse('created product successfully', newProduct));
};

export const createNewDraftProductHandler = async (req, res) => {
  const { user, body } = req;

  const newProduct = await createNewProductDraft({ user, body });

  res.send(appResponse('created product successfully', newProduct));
};

export const restockProductHandler = async (req, res) => {
  const { user, body } = req;

  const newProduct = await restockProductData({ user, body });

  res.send(appResponse('product restocked successfully', newProduct));
};

export const fetchProductHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchProduct({ user, params });

  res.send(appResponse('fetched  products successfully', fetchedData));
};

//================================================================================================

//------ commeon product handlers --------------------\\

export const getAllProductsHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllProducts({ user, params });
  if (params.download === 'on') {
    const worksheet = 'product_list';
    const worksheetHeaders = [
      { header: 'Product Name', key: 'product_name', width: 50 },
      { header: 'Product Quantity', key: 'product_quantity', width: 50 },
      { header: 'Product Value Amount ', key: 'product_value_amount', width: 50 },
      { header: 'Product Slug ', key: 'product_slug', width: 50 },
      { header: 'Product Unit ', key: 'product_unit', width: 50 },
      // { header: 'Product Category Name ', key: 'product_category_name', width: 50 },
      // { header: 'Product Category Slug ', key: 'product_category_slug', width: 50 },
      // { header: 'Product Category Description ', key: 'product_category_description', width: 50 },
      // { header: 'Product Category is_active ', key: 'product_is_active', width: 50 },
      { header: ' Product Description', key: 'product_description', width: 50 },
      // { header: ' Product Status', key: 'prdstatus', width: 50 },
      { header: ' Product is_active', key: 'is_active', width: 50 },
      { header: ' CreatedAt', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of fetchedData) {
      mainlist.push({
        product_name: response.product_name,
        product_quantity: response.product_quantity,
        product_value_amount: response.product_value_amount,
        product_slug: response.product_slug,
        product_unit: response.product_unit,
        // product_category_name: response.product_category_id.product_category_name || 'ty',
        // product_category_slug: response.product_category_id.product_category_slug,
        // product_category_description: response.product_category_id.product_category_description,
        // product_is_active: response.product_category_id.is_active,
        product_description: response.product_description,
        product_description: response.product_description,
        is_active: response.is_active,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  }
  res.send(appResponse('fetched products successfully', fetchedData));
};

export const getSingleProductHandler = async (req, res) => {
  const { user, params } = req;
  const { product_id } = params;

  const product = await getSingleProduct({ user, product_id });

  res.send(appResponse('fetched product successfully', product));
};

export const getProductRestockHistoryHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const product = await fetchProductRestockHistory({ user, params });

  res.send(appResponse('fetched product restock history successfully', product));
};

export const cancelProductHandler = async (req, res) => {
  const { user, params } = req;
  const { product_id } = params;

  const product = await cancelProduct({ user, product_id });

  res.send(appResponse('product canceled successfully', product));
};

export const publishProductHandler = async (req, res) => {
  const { user, params } = req;
  const { product_id } = params;

  const product = await publishProduct({ user, product_id });

  res.send(appResponse('product published successfully', product));
};

export const unpublishProductHandler = async (req, res) => {
  const { user, params } = req;
  const { product_id } = params;

  const product = await unPublishProduct({ user, product_id });

  res.send(appResponse('product unpublished successfully', product));
};

export const updateSingleProductHandler = async (req, res) => {
  const { user, params, body } = req;
  const { product_id } = params;

  const updated = await updateSingleProduct({ product_id, body, user });

  res.send(appResponse('updated product successfully', updated));
};

export const completeRestockHandler = async (req, res) => {
  const { user, params, body } = req;
  const { restock_id } = params;

  const updated = await completeRestock({ restock_id, body, user });

  res.send(appResponse('restock completed successfully', updated));
};

export const updateProductImageHandler = async (req, res) => {
  const { user, params, body } = req;
  const { product_id } = params;

  const updated = await updateProductImage({ product_id, body, user });

  res.send(appResponse('updated product image successfully', updated));
};

export const itemStatistictHandler = async (req, res) => {
  const { user, params } = req;

  const { product_id } = params;

  const response = await itemStatistics({ product_id, user });

  res.send(appResponse('Fetched Succesfuly', response));
};
