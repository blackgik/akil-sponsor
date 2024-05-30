import env from '../../config/env.js';
import {
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import ProductModel from '../../models/products/ProductModel.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import {
  newProductMail,
} from '../../config/mail.js';
import { messageBird } from '../../utils/msgBird.js';

export const createNewProduct = async ({ user, body }) => {
  const productData = {
    ...body,
    organization_id: user._id
  };
  const product = await ProductModel.findOne({
    product_name: body.product_name,
    organization_id: user._id
  });

  if (product) throw new DuplicateError('Duplicate product found');

  const created = await ProductModel.create(productData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  //create email profile here
  const creationData = {
    email: user.email,
    name_of_cooperation: user.name_of_cooperation,
    product_name: body.product_name,
    product_id: created.product_id,
    date: created.updatedAt.toUTCString(),
    status: 'published'
  };
  const mailData = {
    email: user.email,
    subject: 'Successful Creation of Product on Akilaah',
    type: 'html',
    html: newProductMail(creationData).html,
    text: newProductMail(creationData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Bulk Upload was made without mail being sent');

  return true;
};

export const createNewProductDraft = async ({ user, body }) => {
  const productData = {
    ...body,
    organization_id: user._id
  };
  const product = await ProductModel.findOne({
    product_name: body.product_name,
    organization_id: user._id,
    prdstatus: 'draft'
  });

  if (product) throw new DuplicateError('Duplicate product found');

  const created = await ProductModel.create(productData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  //create email profile here
  const creationData = {
    email: user.email,
    name_of_cooperation: user.name_of_cooperation,
    product_name: body.product_name,
    product_id: created.product_id,
    date: created.updatedAt.toUTCString(),
    status: 'draft'
  };
  const mailData = {
    email: user.email,
    subject: 'Successful Creation of Product on Akilaah',
    type: 'html',
    html: newProductMail(creationData).html,
    text: newProductMail(creationData).text
  };
  const msg = await formattMailInfo(mailData, env);

  const msgDelivered = await messageBird(msg);
  if (!msgDelivered)
    throw new InternalServerError('server slip. Bulk Upload was made without mail being sent');

  return true;
};

export const fetchProduct = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status, cat_id, organization_id } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const filterData = { organization_id: user._id };

  const query = typeof search !== 'undefined' ? search : false;
  const prdstatus = typeof status !== 'undefined' ? status : false;
  const catId = typeof cat_id !== 'undefined' ? cat_id : false;
  const sponsorId = typeof organization_id !== 'undefined' ? organization_id : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ product_name: searchRgx }];
  }

  if (prdstatus) {
    filterData['$and'] = [{ prdstatus: prdstatus }];
  }
  if (catId) {
    filterData['$and'] = [{ product_category_id: catId }];
  }
  if (sponsorId) {
    filterData['$and'] = [{ organization_id: sponsorId }];
  }

  const totalCount = await ProductModel.countDocuments({
    ...filterData,
    is_active: true
  });

  const fetchData = await ProductModel
    .find({ ...filterData, is_active: true })
    .populate({
      path: 'product_category_id',
      model: 'ProductCategory'
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(totalCount / no_of_requests)
    ? Math.ceil(totalCount / no_of_requests)
    : 1;

  return { page_no, available_pages, fetchData };
};


//------ common product handlers --------------------\\

export const fetchAllProducts = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status, cat_id, organization_id } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const prdstatus = typeof status !== 'undefined' ? status : false;
  const catId = typeof cat_id !== 'undefined' ? cat_id : false;
  const sponsorId = typeof organization_id !== 'undefined' ? organization_id : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filterData = { organization_id: user._id };

  if (query) {
    filterData['$or'] = [{ product_name: searchRgx }];
  }

  if (prdstatus) {
    filterData['$and'] = [{ prdstatus: prdstatus }];
  }

  if (catId) {
    filterData['$and'] = [{ product_category_id: catId }];
  }
  if (sponsorId) {
    filterData['$and'] = [{ organization_id: sponsorId }];
  }

  let fetchedData = [];

  const productCount = await ProductModel.countDocuments({ ...filterData });
  let productData = await ProductModel.find({ ...filterData }).populate({
    path: 'product_category_id',
    model: 'ProductCategory'
  });

  const count = productCount;

  let startIndex = (page_no - 1) * no_of_requests;
  let endIndex = page_no * no_of_requests;

  fetchedData = [...productData];
  fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  fetchedData = fetchedData.slice(startIndex, endIndex);

  const available_pages = Math.ceil(count / no_of_requests);

  return { page_no, available_pages, fetchedData };
};

export const getSingleProduct = async ({ user, product_id }) => {
  let productInView;

  productInView = await ProductModel.findById(product_id).populate({
    path: 'product_category_id',
    model: 'ProductCategory'
  });

  if (!productInView) throw new NotFoundError('product  does not exist');

  return productInView;
};

export const updateSingleProduct = async ({ product_id, body, user }) => {
  const updates = Object.keys(body);

  let productInView;

  productInView = await ProductModel.findById(product_id);

  if (!productInView) throw new NotFoundError('product  does not exist');

  updates.forEach((update) => (productInView[update] = body[update]));

  await productInView.save();

  return true;
};

export const updateProductImage = async ({ product_id, body, user }) => {
  const updates = Object.keys(body);

  let productInView;

  productInView = await ProductModel.findById(product_id);

  if (!productInView) throw new NotFoundError('product  does not exist');

  updates.forEach((update) => (productInView[update] = body[update]));

  await productInView.save();

  return true;
};

export const cancelProduct = async ({ user, product_id }) => {

  let productInView;

  productInView = await ProductModel.findById(product_id);

  if (!productInView) throw new NotFoundError('product  does not exist');

  productInView.prdstatus = 'draft';

  await productInView.save();

  return true;
};

export const publishProduct = async ({ user, product_id }) => {

  let productInView;

  productInView = await ProductModel.findById(product_id);

  if (!productInView) throw new NotFoundError('product  does not exist');

  productInView.prdstatus = 'published';

  await productInView.save();

  return true;
};

export const unPublishProduct = async ({ user, product_id }) => {

  let productInView;

  productInView = await ProductModel.findById(product_id);

  if (!productInView) throw new NotFoundError('product  does not exist');

  productInView.prdstatus = 'unpublished';

  await productInView.save();

  return true;
};
