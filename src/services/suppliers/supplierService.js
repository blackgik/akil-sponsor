import env from '../../config/env.js';
import {
  DuplicateError,
  InternalServerError,
  NotFoundError
} from '../../../lib/appErrors.js';
import SupplierModel from '../../models/suppliers/supplierModel.js';

export const createNewSupplier = async ({ user, body }) => {
  const supplierData = {
    ...body,
    acctstatus: 'active'
  };
  const supplier = await SupplierModel.findOne({
    supplier_name: body.supplier_name
  });

  if (supplier) throw new DuplicateError('Duplicate supplier found');

  const created = await SupplierModel.create(supplierData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  //create email profile here
//   const creationData = {
//     email: user.email,
//     name_of_cooperation: user.name_of_cooperation,
//     supplier_name: body.supplier_name,
//     supplier_id: created.supplier_id,
//     date: created.updatedAt.toUTCString(),
//     status: 'processing'
//   };
//   const mailData = {
//     email: user.email,
//     subject: 'Successful Creation of Supplier on Akilaah',
//     type: 'html',
//     html: newSupplierMail(creationData).html,
//     text: newSupplierMail(creationData).text
//   };
//   const msg = await formattMailInfo(mailData, env);

//   const msgDelivered = await messageBird(msg);
//   if (!msgDelivered)
//     throw new InternalServerError('server slip. Bulk Upload was made without mail being sent');

  return true;
};

export const createNewDraftSupplier = async ({ user, body }) => {
  const supplierData = {
    ...body,    
    acctstatus: 'draft',
  };
  const supplier = await SupplierModel.findOne({
    supplier_name: body.supplier_name
  });

  if (supplier) throw new DuplicateError('Duplicate supplier found');

  const created = await SupplierModel.create(supplierData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  //create email profile here
//   const creationData = {
//     email: user.email,
//     name_of_cooperation: user.name_of_cooperation,
//     supplier_name: body.supplier_name,
//     supplier_id: created.supplier_id,
//     date: created.updatedAt.toUTCString(),
//     status: 'processing'
//   };
//   const mailData = {
//     email: user.email,
//     subject: 'Successful Creation of Supplier on Akilaah',
//     type: 'html',
//     html: newSupplierMail(creationData).html,
//     text: newSupplierMail(creationData).text
//   };
//   const msg = await formattMailInfo(mailData, env);

//   const msgDelivered = await messageBird(msg);
//   if (!msgDelivered)
//     throw new InternalServerError('server slip. Bulk Upload was made without mail being sent');

  return true;
};

export const fetchSupplier = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const filterData = { is_active: true };

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ supplier_name: searchRgx }];
  }

  const totalCount = await SupplierModel.countDocuments({
    ...filterData,
    is_active: true
  });

  const fetchData = await SupplierModel
    .find({ ...filterData, is_active: true })
    .populate({
      path: 'supplier_product_category_id',
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


//------ common supplier handlers --------------------\\

export const fetchAllSuppliers = async ({ user, params }) => {
  let { page_no, no_of_requests, search } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filterData = { is_active: true };

  if (query) {
    filterData['$or'] = [{ supplier_name: searchRgx }];
  }

  let fetchedData = [];

  const supplierCount = await SupplierModel.countDocuments({ ...filterData });
  let supplierData = await SupplierModel.find({ ...filterData }).populate({
    path: 'supplier_product_category_id',
    model: 'ProductCategory'
  });

  const count = supplierCount;

  let startIndex = (page_no - 1) * no_of_requests;
  let endIndex = page_no * no_of_requests;

  fetchedData = [...supplierData];
  fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  fetchedData = fetchedData.slice(startIndex, endIndex);

  const available_pages = Math.ceil(count / no_of_requests);

  fetchedData = fetchedData.reduce(function (result, current) {
    return result;
  }, {});

  return { page_no, available_pages, fetchedData };
};

export const getSingleSupplier = async ({ user, supplier_id }) => {
  let supplierInView;

  supplierInView = await SupplierModel.findById(supplier_id).populate({
    path: 'supplier_product_category_id',
    model: 'ProductCategory'
  });

  if (!supplierInView) throw new NotFoundError('supplier  does not exist');

  return supplierInView;
};

export const updateSingleSupplier = async ({ supplier_id, body, user }) => {
  const updates = Object.keys(body);

  let supplierInView;

  supplierInView = await SupplierModel.findById(supplier_id);

  if (!supplierInView) throw new NotFoundError('supplier  does not exist');

  updates.forEach((update) => (supplierInView[update] = body[update]));

  await supplierInView.save();

  return true;
};

export const updateSupplierStatus = async ({ supplier_id, body, user }) => {
  const updates = Object.keys(body);

  let supplierInView;

  supplierInView = await SupplierModel.findById(supplier_id);

  if (!supplierInView) throw new NotFoundError('supplier  does not exist');

  updates.forEach((update) => (supplierInView[update] = body[update]));

  await supplierInView.save();

  return true;
};
