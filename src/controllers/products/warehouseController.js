import appResponse from '../../../lib/appResponse.js';
import {
  createNewWarehouse,
  fetchAllWarehouses,
  fetchWarehouse,
  getSingleWarehouse,
  updateSingleWarehouse
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

export const updateSingleWarehouseHandler = async (req, res) => {
  const { user, params, body } = req;
  const { warehouse_id} = params;

  const updated = await updateSingleWarehouse({ warehouse_id, body, user });

  res.send(appResponse('updated warehouse successfully', updated));
};
