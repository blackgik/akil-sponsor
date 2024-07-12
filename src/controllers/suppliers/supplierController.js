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

  const fetchedData = await fetchSupplier({ user, params });

  res.send(appResponse('fetched suppliers successfully', fetchedData));
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
