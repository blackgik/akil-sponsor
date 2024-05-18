import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
    newWarehouse,
  viewSingleWarehouseSchema
} from '../../validators/warehousesSchema.js';
import {
  createNewWarehouseHandler,
  fetchWarehouseHandler,
  getAllWarehousesHandler,
  getSingleWarehouseHandler,
  updateSingleWarehouseHandler
} from '../../controllers/products/warehouseController.js';

const warehouseRoutes = router.Router();

const warehouseRoot = () => {
  warehouseRoutes.post(
    '/create-warehouses',
    Validate(newWarehouse),
    authentication,
    createNewWarehouseHandler
  );
  warehouseRoutes.get(
    '/fetch-warehouses',
    authentication,
    fetchWarehouseHandler
  );

  //------common Section of Warehouses------------\\
  warehouseRoutes.get('/get-all-warehouses', authentication, getAllWarehousesHandler);
  warehouseRoutes.get(
    '/view-single-warehouse/:warehouse_id',
    Validate(viewSingleWarehouseSchema, 'params'),
    authentication,
    getSingleWarehouseHandler
  );
  warehouseRoutes.patch(
    '/update-single-warehouse/:warehouse_id',
    Validate(viewSingleWarehouseSchema, 'params'),
    authentication,
    updateSingleWarehouseHandler
  );

  return warehouseRoutes;
};

export default warehouseRoot;
