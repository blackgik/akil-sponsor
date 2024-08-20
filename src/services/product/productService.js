import env from '../../config/env.js';
import {
  BadRequestError,
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import ProductModel from '../../models/products/ProductModel.js';
import WarehouseModel from '../../models/products/WarehouseModel.js';
import { formattMailInfo } from '../../utils/mailFormatter.js';
import { newProductMail } from '../../config/mail.js';
import { messageBird } from '../../utils/msgBird.js';
import warehouseProductModel from '../../models/products/warehouseProductModel.js';
import RestockModel from '../../models/products/RestockModel.js';
import notificationsModel from '../../models/settings/notificationsModel.js';
import { capitalizeWords } from '../../utils/general.js';
import ProjectModel from '../../models/projects/ProjectModel.js';
import awardeesModel from '../../models/projects/awardeesModel.js';

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

  body.warehouses.forEach(async (element) => {
    let warehouse = await WarehouseModel.findById(element);
    if (warehouse) {
      await warehouseProductModel.create({
        product_id: created._id,
        warehouse_id: warehouse._id,
        quantity: created.product_quantity
      });
    }
  });
  //create email profile here
  const creationData = {
    email: user.email,
    sponsors_name: capitalizeWords(`${user.firstname} ${user.lastname}`),
    product_name: capitalizeWords(body.product_name),
    product_slug: body.product_slug,
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

  // create notification for beneficiary
  const notifica = await notificationsModel.create({
    note: `You just created a new ${body.product_name} product`,
    type: 'creation',
    who_is_reading: 'sponsor',
    organization_id: user._id
  });

  console.log(notifica);
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

export const restockProductData = async ({ user, body }) => {
  const created = await RestockModel.create(body);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  if (body.rtkstatus == 'complete') {
    body.warehouses.forEach(async (element) => {
      let restock = await warehouseProductModel.findOne({
        product_id: body.product_id,
        warehouse_id: element
      });
      let product = await ProductModel.findById(body.product_id);
      if (restock) {
        restock.quantity += body.quantity_per_warehouse;
        if (product) {
          product.product_quantity += body.quantity_per_warehouse;
          await product.save();
        }
        await restock.save();
      }
    });
  }

  return true;
};

export const completeRestock = async ({ restock_id, body, user }) => {
  let restock = await RestockModel.findById(restock_id);
  if (!restock) throw new BadRequestError('Restock  does not exist');

  if (restock.rtkstatus == 'complete') throw new BadRequestError('Restock  already completed!');

  if (body.rtkstatus == 'complete') {
    restock.warehouses.forEach(async (element) => {
      let warehaouseProduct = await warehouseProductModel.findOne({
        product_id: restock.product_id,
        warehouse_id: element
      });
      let product = await ProductModel.findById(restock.product_id);
      if (warehaouseProduct) {
        warehaouseProduct.quantity += restock.quantity_per_warehouse;
        if (product) {
          product.product_quantity += restock.quantity_per_warehouse;
          await product.save();
        }
        await warehaouseProduct.save();
      }
    });
  }

  restock.rtkstatus = body.rtkstatus;
  await restock.save();
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

  const fetchData = await ProductModel.find({ ...filterData, is_active: true })
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

export const fetchProductRestockHistory = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status, product_id } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;
  const product_idd = typeof product_id !== 'undefined' ? product_id : false;
  if (!product_idd) throw new BadRequestError('A product Id is required');
  const filterData = { product_id: product_id };

  const query = typeof search !== 'undefined' ? search : false;
  const rtkstatus = typeof status !== 'undefined' ? status : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ product_name: searchRgx }];
  }

  if (rtkstatus) {
    filterData['$and'] = [{ rtkstatus: rtkstatus }];
  }

  const totalCount = await RestockModel.countDocuments({
    ...filterData,
    is_active: true
  });

  const fetchData = await RestockModel.find({ ...filterData, is_active: true })
    .populate({
      path: 'product_id',
      model: 'Product'
    })
    .populate({
      path: 'supplier_id',
      model: 'Supplier'
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
  const warehouse = await warehouseProductModel.findOne({ product_id }).populate('warehouse_id');
  productInView = productInView.toObject();
  productInView.warehouse_id = warehouse._id;
  productInView.warehouse_name = warehouse.warehouse_id.warehouse_name;
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

export const itemStatistics = async ({ product_id, user }) => {
  const item = await ProductModel.findById(product_id);

  if (!item) throw new NotFoundError('product does not exist');

  const total_in_stock = item.product_quantity;

  const projects = await ProjectModel.find({ product_items: { $in: [product_id] } });

  let total_needed_quantity = 0;

  let total_disbursed = 0;

  for (const project of projects) {
    const quantity_person = project.quantity_per_person;
    const allocated_persons = await awardeesModel.countDocuments({ project_id: project._id });

    const disbursed_persons = await awardeesModel.countDocuments({
      project_id: project._id,
      status: 'disbursed'
    });

    total_needed_quantity += quantity_person * allocated_persons;

    total_disbursed += disbursed_persons * quantity_person;
  }

  const amount_scale = total_in_stock - (total_needed_quantity - total_disbursed);

  const shortaged = amount_scale > 0 ? 0 : amount_scale;

  return {
    total_in_stock,
    shortaged,
    total_disbursed,
    status: item.prdstatus
  };
};
