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
import { downloadExcel } from '../../utils/general.js';

export const createNewWarehouseHandler = async (req, res) => {
  const { user, body } = req;

  const newWarehouse = await createNewWarehouse({ user, body });

  res.send(appResponse('created warehouse successfully', newWarehouse));
};

export const fetchWarehouseHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await fetchWarehouse({ user, params });
  if (params.download === 'on') {
    const worksheet = 'warehouse_list';
    const worksheetHeaders = [
      { header: 'Warehouse Name', key: 'warehouse_name', width: 50 },
      { header: 'Country', key: 'warehouse_country', width: 50 },
      { header: 'State ', key: 'warehouse_state', width: 50 },
      { header: 'LGA ', key: 'warehouse_lga', width: 50 },
      { header: 'Address ', key: 'warehouse_address', width: 50 },
      { header: 'Storekeeper Name ', key: 'user_name', width: 50 },
      { header: 'Storekeeper Phone ', key: 'phone', width: 50 },
      { header: ' Storekeeper Status', key: 'acctstatus', width: 50 },
      { header: ' Warehouse Status', key: 'wrhstatus', width: 50 },
      { header: ' CreatedAt', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of fetchedData) {
      mainlist.push({
        warehouse_name: response.warehouse_name,
        warehouse_country: response.warehouse_country,
        warehouse_state: response.warehouse_state,
        warehouse_lga: response.warehouse_lga,
        warehouse_address: response.warehouse_address,
        user_name: response.warehouse_overseer_id.user_name,
        phone: response.warehouse_overseer_id.phone,
        acctstatus: response.warehouse_overseer_id.acctstatus,
        wrhstatus: response.wrhstatus,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  }
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
