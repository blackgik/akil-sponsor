import jwt from 'jsonwebtoken';
import { BadRequestError, NotFoundError, UnAuthorizedError } from '../../lib/appErrors.js';
import env from '../config/env.js';
import {
  findOrganizationById,
  findUserById
} from '../services/authentication/authenticationService.js';
import { secondDb } from '../db/connection.js';

export const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new UnAuthorizedError('Missing token');

    const token = authorization.replace('Bearer ', '');

    const decoded = jwt.verify(token, env.jwt_key);
    if (!decoded) throw new UnAuthorizedError('Invalid token, user is not authorized');

    const adminType = decoded.adminType;
    let admin;

    req.dbConnection = secondDb;

    if (adminType === 'sponsor') {
      admin = await findOrganizationById(decoded._id);

      const path = req.path.replace('/', '');

      if (
        admin &&
        (path === 'make-onboarding-payments' ||
          path === 'profile' ||
          path === 'fetch-beneficiariess-by-status' ||
          path === 'dashboard' ||
          path === 'list-items')
      ) {
        req.user = admin;
        req.token = token;

        return next();
      }

      if (!admin || admin.acctstatus === 'suspended')
        throw new UnAuthorizedError('Invalid Organization, user is not authorized');

      req.user = admin;
      req.token = token;
    } else {
      const user = await findUserById(decoded._id);

      if (!user) throw new NotFoundError('User not found');

      const sponsor = await findOrganizationById(user.sponsor_id);

      if (!sponsor) throw new NotFoundError('Sponsor not found');

      admin = { ...sponsor.toJSON(), user_info: user };

      const path = req.path.replace('/', '');

      if (
        admin &&
        (path === 'make-onboarding-payments' ||
          path === 'profile' ||
          path === 'fetch-beneficiariess-by-status' ||
          path === 'dashboard' ||
          path === 'list-items')
      ) {
        req.user = admin;
        req.token = token;

        return next();
      }

      if (!admin || admin.acctstatus === 'suspended' || admin.user_info.acctstatus !== 'active')
        throw new UnAuthorizedError('user is not authorized or active');

      req.user = admin;
      req.token = token;
    }

    req.user = admin;
    req.token = token;

    next();
  } catch (err) {
    console.log(err);
    throw new UnAuthorizedError(err.message || 'User is not authorized');
  }
};

export const dbconnection = (req, res, next) => {
  req.dbConnection = secondDb;

  next();
};
