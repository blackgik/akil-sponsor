import {
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import ProductCategoryModel from '../../models/products/ProductCategoryModel.js';


export const createNewProductCategory = async ({ user, body }) => {
  const productCategoryData = {
    ...body };
  const productCategory = await ProductCategoryModel.findOne({
    product_category_name: body.product_category_name
  });

  if (productCategory) throw new DuplicateError('Duplicate productCategory found');

  const created = await ProductCategoryModel.create(productCategoryData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  return true;
};

export const fetchProductCategory = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const filterData = { is_active: true};

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ product_category_name: searchRgx }];
  }

  const totalCount = await ProductCategoryModel.countDocuments({
    ...filterData,
    is_active: true
  });

  const fetchData = await ProductCategoryModel
    .find({ ...filterData, is_active: true })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(totalCount / no_of_requests)
    ? Math.ceil(totalCount / no_of_requests)
    : 1;

  return { page_no, available_pages, fetchData };
};


//------ common productCategory handlers --------------------\\

export const fetchAllProductCategories = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filterData = { is_active: true };

  if (query) {
    filterData['$or'] = [{ product_category_name: searchRgx }];
  }

  let fetchedData = [];

  const productCategoryCount = await ProductCategoryModel.countDocuments({ ...filterData });
  let productCategoryData = await ProductCategoryModel.find({ ...filterData });

  const count = productCategoryCount;

  let startIndex = (page_no - 1) * no_of_requests;
  let endIndex = page_no * no_of_requests;

  fetchedData = [...productCategoryData];
  fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  fetchedData = fetchedData.slice(startIndex, endIndex);

  const available_pages = Math.ceil(count / no_of_requests);

  fetchedData = fetchedData.reduce(function (result, current) {
    return result;
  }, {});

  return { page_no, available_pages, fetchedData };
};

export const getSingleProductCategory = async ({ user, productCategory_id }) => {
  let productCategoryInView;

  productCategoryInView = await ProductCategoryModel.findById(productCategory_id);

  if (!productCategoryInView) throw new NotFoundError('productCategory  does not exist');

  return productCategoryInView;
};

export const updateSingleProductCategory = async ({ productCategory_id, body, user }) => {
  const updates = Object.keys(body);

  let productCategoryInView;

  productCategoryInView = await ProductCategoryModel.findById(productCategory_id);

  if (!productCategoryInView) throw new NotFoundError('productCategory  does not exist');

  updates.forEach((update) => (productCategoryInView[update] = body[update]));

  await productCategoryInView.save();

  return true;
};
