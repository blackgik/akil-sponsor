import env from '../../config/env.js';
import { BadRequestError, DuplicateError, InternalServerError, NotFoundError } from '../../../lib/appErrors.js';
import WarehouseModel from '../../models/products/WarehouseModel.js';
import warehouseProductModel from '../../models/products/warehouseProductModel.js';
import usersModels from '../../models/settings/users.models.js';
import mongoose from 'mongoose';

export const createNewWarehouse = async ({ user, body }) => {
  const userx = await usersModels.findById(body.warehouse_overseer_id);
  if (!userx) throw new NotFoundError('User not found');

  const warehouseData = {
    ...body,
    sponsor_id: user._id
  };
  const warehouse = await WarehouseModel.findOne({
    warehouse_name: body.warehouse_name,
    sponsor_id: user._id
  });

  if (warehouse) throw new DuplicateError('Duplicate warehouse found');

  const created = await WarehouseModel.create(warehouseData);
  if (!created)
    throw new InternalServerError('server slip error. Please Check your Input properly');

  return true;
};

export const fetchWarehouse = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const filterData = { sponsor_id: user._id };

  const wrhstatus = typeof status !== 'undefined' ? status : false;
  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  if (query) {
    filterData['$or'] = [{ warehouse_name: searchRgx }];
  }
  if (wrhstatus) {
    filterData['$and'] = [{ wrhstatus: wrhstatus }];
  }

  const totalCount = await WarehouseModel.countDocuments({
    ...filterData
  });

  const fetchData = await WarehouseModel
    .find({ ...filterData })
    .populate({
      path: 'warehouse_overseer_id',
      model: 'User'
    })
    .populate({
      path: 'sponsor_id',
      model: 'Organization'
    })
    .sort({ createdAt: -1 })
    .skip((page_no - 1) * no_of_requests)
    .limit(no_of_requests);

  const available_pages = Math.ceil(totalCount / no_of_requests)
    ? Math.ceil(totalCount / no_of_requests)
    : 1;

  return { page_no, available_pages, fetchData };
};

//------ common warehouse handlers --------------------\\

export const fetchAllWarehouses = async ({ user, params }) => {
  let { page_no, no_of_requests, search, status } = params;

  page_no = Number(page_no) || 1;
  no_of_requests = Number(no_of_requests) || Infinity;

  const wrhstatus = typeof status !== 'undefined' ? status : false;
  const query = typeof search !== 'undefined' ? search : false;
  const rgx = (pattern) => new RegExp(`.*${pattern}.*`, 'i');
  const searchRgx = rgx(query);

  const filterData = { sponsor_id: user._id };

  if (query) {
    filterData['$or'] = [{ warehouse_name: searchRgx }];
  }
  if (wrhstatus) {
    filterData['$and'] = [{ wrhstatus: wrhstatus }];
  }
  let fetchedData = [];

  const warehouseCount = await WarehouseModel.countDocuments({ ...filterData });

  let warehouseData = await WarehouseModel.find({ ...filterData })
    .populate({
      path: 'warehouse_overseer_id',
      model: 'User'
    }).populate({
      path: 'sponsor_id',
      model: 'Organization'
    });

  const count = warehouseCount;

  let startIndex = (page_no - 1) * no_of_requests;
  let endIndex = page_no * no_of_requests;

  fetchedData = [...warehouseData];
  fetchedData = fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  fetchedData = fetchedData.slice(startIndex, endIndex);

  const available_pages = Math.ceil(count / no_of_requests);

  return { page_no, available_pages, fetchedData };
};

export const getSingleWarehouse = async ({ user, warehouse_id }) => {
  let warehouseInView;

  warehouseInView = await WarehouseModel.findById(warehouse_id)
    .populate({
      path: 'warehouse_overseer_id',
      model: 'User'
    })
    .populate({
      path: 'sponsor_id',
      model: 'Organization'
    });

  if (!warehouseInView) throw new BadRequestError('warehouse  does not exist')
  const totalInStock = await warehouseProductModel.aggregate([
    //{$match : {warehouse_i: warehouse_id }},
    { $match: { warehouse_id: mongoose.Types.ObjectId(warehouse_id) } },
    { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } }
  ]);

  const itemCount = await warehouseProductModel.countDocuments({
    warehouse_id: warehouse_id
  });

  const itemOnShortageCount = await warehouseProductModel.countDocuments({
    warehouse_id: warehouse_id, quantity: 0
  });
  const totalProductQuantityInStock = totalInStock[0]?.totalQuantity || 0;
  return { itemCount, totalProductQuantityInStock, itemOnShortageCount, warehouseInView };
};

export const getWarehouseStat = async ({ user, warehouse_id }) => {
  let warehouseInView;

  warehouseInView = await WarehouseModel.findById(warehouse_id);

  if (!warehouseInView) throw new BadRequestError('warehouse  does not exist')
  const totalInStock = await warehouseProductModel.aggregate([
    //{$match : {warehouse_i: warehouse_id }},
    { $match: { warehouse_id: mongoose.Types.ObjectId(warehouse_id) } },
    { $group: { _id: null, totalQuantity: { $sum: "$quantity" } } }
  ]);

  const itemCount = await warehouseProductModel.countDocuments({
    warehouse_id: warehouse_id
  });

  const itemOnShortageCount = await warehouseProductModel.countDocuments({
    warehouse_id: warehouse_id, quantity: 0
  });
  const totalProductQuantityInStock = totalInStock[0]?.totalQuantity || 0;
  return { itemCount, totalProductQuantityInStock, itemOnShortageCount, warehouseInView };
};

export const updateSingleWarehouse = async ({ warehouse_id, body, user }) => {
  const updates = Object.keys(body);

  let warehouseInView;

  warehouseInView = await WarehouseModel.findById(warehouse_id);

  if (!warehouseInView) throw new NotFoundError('warehouse  does not exist');

  updates.forEach((update) => (warehouseInView[update] = body[update]));

  await warehouseInView.save();

  return true;
};
