import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  productNewSupplier,
  viewSingleSupplierSchema
} from '../../validators/suppliersSchema.js';
import {
  createNewSupplierHandler,
  fetchSupplierHandler,
  getAllSuppliersHandler,
  getSingleSupplierHandler,
  updateSingleSupplierHandler
} from '../../controllers/suppliers/supplierController.js';

const supplierRoutes = router.Router();

const supplierRoot = () => {
  supplierRoutes.post(
    '/create-suppliers',
    Validate(productNewSupplier),
    authentication,
    createNewSupplierHandler
  );
  supplierRoutes.get(
    '/fetch-suppliers',
    authentication,
    fetchSupplierHandler
  );

  //------common Section of Suppliers------------\\
  supplierRoutes.get('/get-all-suppliers', authentication, getAllSuppliersHandler);
  supplierRoutes.get(
    '/view-single-supplier/:supplier_id',
    Validate(viewSingleSupplierSchema, 'params'),
    authentication,
    getSingleSupplierHandler
  );
  supplierRoutes.patch(
    '/update-single-supplier/:supplier_id',
    Validate(viewSingleSupplierSchema, 'params'),
    authentication,
    updateSingleSupplierHandler
  );

  return supplierRoutes;
};

export default supplierRoot;
