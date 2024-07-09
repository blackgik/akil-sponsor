import appResponse from '../../../lib/appResponse.js';
import {
  createNewWarehouse,
  fetchAllWarehouses,
  fetchWarehouse,
  getWarehouseStat,
  getSingleWarehouse,
  updateSingleWarehouse,
  removeWarehouse,
  changeWarehouseStatus
} from '../../services/product/warehouseService.js';

export const createNewWarehouseHandler = async (req, res) => {
  const { user, body } = req;

  const newWarehouse = await createNewWarehouse({ user, body });

  res.send(appResponse('created warehouse successfully', newWarehouse));
};

export const fetchWarehouseHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchWarehouse({ user, params });

  res.send(appResponse('fetched warehouses successfully', fetchedData));
};
//================================================================================================

//------ commeon warehouse handlers --------------------\\

export const getAllWarehousesHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllWarehouses({ user, params });

  res.send(appResponse('fetched warehouses successfully', fetchedData));
};

export const getSingleWarehouseHandler = async (req, res) => {
  const { user, params } = req;
  const { warehouse_id } = params;

  const warehouse = await getSingleWarehouse({ user, warehouse_id });

  res.send(appResponse('fetched warehouse successfully', warehouse));
};

export const getWarehouseStatHandler = async (req, res) => {
  const { user, params } = req;
  const { warehouse_id } = params;

  const warehouse = await getWarehouseStat({ user, warehouse_id });

  res.send(appResponse('fetched warehouse stat successfully', warehouse));
};

export const updateSingleWarehouseHandler = async (req, res) => {
  const { user, params, body } = req;
  const { warehouse_id } = params;

  const updated = await updateSingleWarehouse({ warehouse_id, body, user });

  res.send(appResponse('updated warehouse successfully', updated));
};

export const removeWarehouseHandler = async (req, res) => {
  const { user, params } = req;
  const { warehouse_id } = params;

  const response = await removeWarehouse({ warehouse_id, user });

  res.send(appResponse('warehouse removed successfully', response));
};

export const changeWarehouseStatusHandler = async (req, res) => {
  const { user } = req;
  const { wrhstatus } = req.body;
  const { warehouse_id } = req.params;

  const response = await changeWarehouseStatus({ user, wrhstatus, warehouse_id });

  res.send(appResponse('updated warehouse status successfully updated', response));
};
