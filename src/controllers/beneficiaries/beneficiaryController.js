import appResponse from '../../../lib/appResponse.js';
import {
  editBeneficiaryProfile,
  fetchBeneficiariesByStatus,
  fileFormatter,
  getBankList,
  pdfBuilder,
  updateBeneficiaryStatus,
  updateBeneficiaryBatchListStatus,
  viewBeneficiaryProfile,
  viewBeneficiariesDashboardStats,
  viewBeneficiariesUploadedList
} from '../../services/beneficiaries/beneficiaryService.js';
import { codeGenerator } from '../../utils/codeGenerator.js';
import { downloadExcel } from '../../utils/general.js';

export const fetchedUploadedFilesHandler = async (req, res) => {
  const formatFile = await fileFormatter(req.files);

  res.send(appResponse('uploaded to cloud storage sucessfully', formatFile));
};

export const fetchBeneficiariesByStatusHandler = async (req, res) => {
  const { user } = req;
  const params = req.query;

  const beneficiaries = await fetchBeneficiariesByStatus({ user, params });
  if (params.download === 'on') {
    const worksheet = 'beneficiaries';
   const worksheetHeaders = [
      { header: 'Beneficiary', key: 'name', width: 50 },
      { header: 'Email', key: 'email', width: 50 },
      { header: 'Phone', key: 'phone', width: 50 },
      { header: 'Date Added', key: 'createdAt', width: 50 },
      { header: 'Status', key: 'acctstatus', width: 50 }
    ];

    let mainlist = [];

    for (let response of beneficiaries) {
      mainlist.push({
        name: response.personal.member_name,
        email: response.contact.email,
        phone: response.contact.phone,
        createdAt: response.createdAt,
        acctstatus: response.acctstatus
      });
    }

    const file = await downloadExcel(worksheet, worksheetHeaders, mainlist);
    res.send(appResponse('File paths', file));
  } else {
    res.send(appResponse('fetched organization beneficiaries successfully', beneficiaries));
  }
};

export const beneficiaryEmailVerifyHandler = async (req, res) => {
  const { body } = req;

  const userData = await verifyEmail(body);

  res.send(appResponse('Email verified successfully', userData));
};

export const updateBeneficiaryStatusHandler = async (req, res) => {
  const { user, body } = req;
  const { beneficiary_id } = req.params;

  const { status, note } = body;

  const updatedBeneficiary = await updateBeneficiaryStatus({ user, status, beneficiary_id, note });

  res.send(appResponse(`updated organization beneficiary successfully`, updatedBeneficiary));
};

export const viewBeneficiaryProfileHandler = async (req, res) => {
  const { beneficiary_id } = req.params;

  const beneficiary = await viewBeneficiaryProfile({ beneficiary_id });

  res.send(appResponse(`Viewing organization beneficiary successfully`, beneficiary));
};

export const editBeneficiaryProfileHandler = async (req, res) => {
  const { beneficiary_id } = req.params;
  const { body, user } = req;

  const updatedUser = await editBeneficiaryProfile({ user, beneficiary_id, body });

  res.send(appResponse(`Edited organization beneficiary Profile successfully`, updatedUser));
};

export const beneficiaryDashboardStatsHandler = async (req, res) => {
  const { user } = req;

  const stats = await viewBeneficiariesDashboardStats({ user });

  res.send(appResponse(`fetched dashboard stats successfully`, stats));
};

export const beneficiaryUploadedListHandler = async (req, res) => {
  const { user, query } = req;
  const params = query;

  const beneficiaryBatchList = await viewBeneficiariesUploadedList({ user, params });

  res.send(appResponse('fetched beneficiaries uploaded list successfully', beneficiaryBatchList));
};

export const beneficiaryUpdateBatchListHandler = async (req, res) => {
  const { user, body, query } = req;
  const { beneficiary_batch_id } = query;

  const updatedList = await updateBeneficiaryBatchListStatus({ beneficiary_batch_id, body, user });

  res.send(appResponse('Updated beneficiaries uploaded list successfully', updatedList));
};

export const beneficiaryBankListHandler = async (req, res) => {
  const banks = await getBankList();

  res.send(appResponse('listed banks Successfully', banks));
};

export const pdfBuilderHandler = async (req, res) => {
  const { body } = req;

  const pdfResponse = await pdfBuilder({ body, res }, (filer, doc) => {
    // res.send(filer);
  });
};
