import router from 'express';
import Validate from '../../validators/index.js';
import { authentication } from '../../middlewares/authentication.js';
import {
  createNewOccupation,
  viewSingleOccupationSchema
} from '../../validators/occupationsSchema.js';
import {
  createNewOccupationHandler,
  fetchOccupationHandler,
  getAllOccupationsHandler,
  getSingleOccupationHandler,
  updateSingleOccupationHandler
} from '../../controllers/occupations/occupationController.js';

const occupationRoutes = router.Router();

const occupationRoot = () => {
  occupationRoutes.post(
    '/create-occupations',
    Validate(createNewOccupation),
    authentication,
    createNewOccupationHandler
  );
  occupationRoutes.get(
    '/fetch-occupations',
    authentication,
    fetchOccupationHandler
  );

  //------common Section of Occupations------------\\
  occupationRoutes.get('/get-all-occupations', authentication, getAllOccupationsHandler);
  occupationRoutes.get(
    '/view-single-occupation/:occupation_id',
    Validate(viewSingleOccupationSchema, 'params'),
    authentication,
    getSingleOccupationHandler
  );
  occupationRoutes.patch(
    '/update-single-occupation/:occupation_id',
    Validate(createNewOccupation, 'params'),
    authentication,
    updateSingleOccupationHandler
  );

  return occupationRoutes;
};

export default occupationRoot;
