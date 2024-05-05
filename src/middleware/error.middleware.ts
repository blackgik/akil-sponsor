import { Request, Response, NextFunction } from 'express'

// http constant
import ConstantHttpCode from '../constants/http.code.constant'
import ConstantHttpReason from '../constants/http.reason.constant'

// message constant
import ConstantMessage from '../constants/message.constant'
import HttpException from 'utils/exceptions/http.exception'

const errorMiddleware = (
  error: HttpException,
  _req: Request,
  res: Response,
  next: NextFunction,
): Response | void => {
  try {
    if (error.name === 'MMCOOPERRORS' || error.isOperational) {

    }
    const statusCode = error.statusCode;
    const statusMsg = error.statusMsg;
    const msg = error.msg
    return res.status(statusCode).send({
      status: {
        code: statusCode,
        msg: msg,
      }
    })
  } catch (err) {
    return next(err)
  }
}

export default errorMiddleware
