import { Request, Response, NextFunction } from 'express'
import HttpException from '../utils/exceptions/http.exception'

import { verifyToken } from '../validations/token.validation'

// message constant
import ConstantMessage from '../constants/message.constant'

// http constant
import ConstantHttpCode from '../constants/http.code.constant'
import ConstantHttpReason from '../constants/http.reason.constant'
import { UnAuthorizedError } from '../utils/app.errors'
import { verifyJwt } from '../utils/jwt.util'
import customConfig from '../config/default'
import { Account } from '../schemas/account.schema'
import { IDecodedDto } from 'dto/IDecodedDto'

class AuthenticatedMiddleware {
  public async verifyTokenAndAuthorization(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const { authorization } = req.headers;
    if (!authorization) throw new UnAuthorizedError('Missing token');

    const token = authorization.replace('Bearer ', '');

    const decoded: IDecodedDto = verifyJwt(token, "accessTokenPublicKey");
    if (!decoded || decoded == null) {
      throw new UnAuthorizedError('Invalid token, user is not authorized');
    } else {
      let admin;
      admin = await Account.findById(decoded.userId);

      if (!admin || admin.acctstatus === 'suspended')
        throw new UnAuthorizedError('Invalid token, user is not authorized');
      
      req.user = admin;
      next();
    }   
  }
}


export default AuthenticatedMiddleware
