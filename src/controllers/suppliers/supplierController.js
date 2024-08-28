import appResponse from '../../../lib/appResponse.js';
import {
  createNewSupplier,
  createNewDraftSupplier,
  fetchAllSuppliers,
  fetchSupplier,
  updateSupplierStatus,
  getSingleSupplier,
  updateSingleSupplier,
  getSponosrSupplier
} from '../../services/suppliers/supplierService.js';
import { downloadExcel } from '../../utils/general.js';

export const createNewSupplierHandler = async (req, res) => {
  const { user, body } = req;

  const newSupplier = await createNewSupplier({ user, body });

  res.send(appResponse('created supplier successfully', newSupplier));
};

export const createNewDraftSupplierHandler = async (req, res) => {
  const { user, body } = req;

  const newSupplier = await createNewDraftSupplier({ user, body });

  res.send(appResponse('created supplier successfully', newSupplier));
};

export const fetchSupplierHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const responses = await fetchSupplier({ user, params });
  if (params.download === 'on') {
    const worksheet = 'suppliers';
    const worksheetHeaders = [
      { header: 'Supplier Surname', key: 'supplier_surname', width: 50 },
      { header: 'Supplier Lastname', key: 'supplier_name', width: 50 },
      { header: 'Supplier Phone', key: 'supplier_phone', width: 50 },
      { header: 'Supplier Business Name', key: 'supplier_business_name', width: 50 },
      { header: 'Supplier Address', key: 'supplier_address', width: 50 },
      { header: 'Is_Active ', key: 'is_active', width: 50 },
      { header: 'Product', key: 'product_category_name', width: 50 },
      { header: 'Status', key: 'acctstatus', width: 50 },
      { header: 'CreatedAt', key: 'createdAt', width: 50 }
    ];

    let mainlist = [];

    for (let response of responses) {
      mainlist.push({
        supplier_surname: response.supplier_surname,
        supplier_name: response.supplier_name,
        supplier_phone: response.supplier_phone,
        supplier_business_name: response.supplier_business_name,
        supplier_address: response.supplier_address,
        is_active: response.is_active,
        product_category_name: response.supplier_product_category_id.product_category_name,
        acctstatus: response.acctstatus,
        createdAt: response.createdAt
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('fetched suppliers successfully', responses));
  }
};

export const getSponosrSupplierHanlder = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const fetchedData = await getSponosrSupplier({ user, params });

  res.send(appResponse('fetched sponsors suppliers successfully', fetchedData));
};
//================================================================================================

//------ commeon supplier handlers --------------------\\

export const getAllSuppliersHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const fetchedData = await fetchAllSuppliers({ user, params });

  res.send(appResponse('fetched suppliers successfully', fetchedData));
};

export const getSingleSupplierHandler = async (req, res) => {
  const { user, params } = req;
  const { supplier_id } = params;

  const supplier = await getSingleSupplier({ user, supplier_id });

  res.send(appResponse('fetched supplier successfully', supplier));
};

export const updateSingleSupplierHandler = async (req, res) => {
  const { user, params, body } = req;
  const { supplier_id } = params;

  const updated = await updateSingleSupplier({ supplier_id, body, user });

  res.send(appResponse('updated supplier successfully', updated));
};

export const updateSupplierStatusHandler = async (req, res) => {
  const { user, params, body } = req;
  const { supplier_id } = params;
  const updated = await updateSupplierStatus({ supplier_id, body, user });

  res.send(appResponse(' supplier status updated successfully', updated));
};
