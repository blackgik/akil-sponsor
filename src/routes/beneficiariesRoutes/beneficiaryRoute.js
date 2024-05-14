import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  editBeneficiaryProfileHandler,
  fetchBeneficiariesByStatusHandler,
  fetchedUploadedFilesHandler,
  beneficiaryBankListHandler,
  beneficiaryDashboardStatsHandler,
  beneficiaryUpdateBatchListHandler,
  beneficiaryUploadedListHandler,
  pdfBuilderHandler,
  updateBeneficiaryStatusHandler,
  viewBeneficiaryProfileHandler
} from '../../controllers/beneficiaries/beneficiaryController.js';
import { validateBeneficiaryUpdateSchema } from '../../validators/organizationSchema.js';
import { uploadS3 } from '../../../lib/aws-cloud.js';

const beneficiaryRoutes = router.Router();

const beneficiaryRoute = () => {
  beneficiaryRoutes.post('/upload-files', uploadS3, fetchedUploadedFilesHandler);
  beneficiaryRoutes.get('/fetch-beneficiaries-by-status', authentication, fetchBeneficiariesByStatusHandler);
  beneficiaryRoutes.patch('/update-beneficiary-status/:beneficiary_id', authentication, updateBeneficiaryStatusHandler);
  beneficiaryRoutes.get('/view-beneficiaries-profile/:beneficiary_id', authentication, viewBeneficiaryProfileHandler);
  beneficiaryRoutes.patch(
    '/edit-beneficiary-profile/:beneficiary_id',
    Validate(validateBeneficiaryUpdateSchema),
    authentication,
    editBeneficiaryProfileHandler
  );
  beneficiaryRoutes.get('/beneficiaries-dashboard-stats', authentication, beneficiaryDashboardStatsHandler);
  beneficiaryRoutes.get('/fetch-beneficiary-uploaded-list', authentication, beneficiaryUploadedListHandler);
  beneficiaryRoutes.patch('/update-batch-list/', authentication, beneficiaryUpdateBatchListHandler);

  beneficiaryRoutes.get('/bank-list', beneficiaryBankListHandler);
  beneficiaryRoutes.post('/pdf-builder', pdfBuilderHandler);

  return beneficiaryRoutes;
};

export default beneficiaryRoute;
