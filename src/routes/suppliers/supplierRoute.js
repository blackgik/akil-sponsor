import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  productNewSupplier,
  updateSupplierStatusSchema,
  viewSingleSupplierSchema
} from '../../validators/suppliersSchema.js';
import {
  createNewDraftSupplierHandler,
  createNewSupplierHandler,
  fetchSupplierHandler,
  getAllSuppliersHandler,
  getSingleSupplierHandler,
  updateSingleSupplierHandler,
  updateSupplierStatusHandler
} from '../../controllers/suppliers/supplierController.js';

const supplierRoutes = router.Router();

const supplierRoot = () => {
  supplierRoutes.post(
    '/create-suppliers',
    Validate(productNewSupplier),
    authentication,
    createNewSupplierHandler
  );
  supplierRoutes.post(
    '/create-draft-suppliers',
    Validate(productNewSupplier),
    authentication,
    createNewDraftSupplierHandler
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
    Validate(productNewSupplier),
    authentication,
    updateSingleSupplierHandler
  );
  supplierRoutes.patch(
    '/update-supplier-status/:supplier_id',
    Validate(updateSupplierStatusSchema),
    authentication,
    updateSupplierStatusHandler
  );

  return supplierRoutes;
};

export default supplierRoot;
