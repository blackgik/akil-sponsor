class HttpException extends Error {
    public statusCode: number
    public name: string
    public statusMsg: string
    public msg: string
    public isOperational: boolean
  
    constructor(statusCode: number, statusMsg: string, msg: any) {
      super(msg)
      this.name = 'MMCOOPERRORS';
      console.log('====================================');
      console.log(statusCode);
      console.log('====================================');
      this.isOperational = true;
      this.statusCode = 400
      this.statusMsg = statusMsg
      this.msg = msg
    }
  }

  
  export class BadRequestError extends HttpException {
    constructor(statusCode = 400, statusMsg = 'Bad Request',msg = 'Bad Request', ) {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class InternalServerError extends HttpException {
    constructor(statusCode = 500, statusMsg = 'Something wrong happened.', msg = 'Something wrong happened.') {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class UnAuthorizedError extends HttpException {
    constructor(statusCode = 401, statusMsg = 'Not Authorized access', msg = '401') {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class ForbiddenError extends HttpException {
    constructor(statusCode = 403, statusMsg = 'Forbidden', msg = '403') {
      super(statusCode, statusMsg, msg);
    }
  }
  export class ExpectationFailedError extends HttpException {
    constructor(statusCode = 417, statusMsg = 'Expected inputs were not supplied', msg = '417') {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class NotFoundError extends HttpException {
    constructor(statusCode = 404, statusMsg = 'Resource not found', msg = '200') {
      super(statusCode, statusMsg, msg);
    }
  }
  export class InvalidError extends HttpException {
    constructor(statusCode = 422, statusMsg = 'Invalid Input', msg = '422') {
      super(statusCode, statusMsg, msg);
    }
  }
  export class DuplicateError extends HttpException {
    constructor(statusCode = 406, statusMsg = 'Duplicate value', msg = '406') {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class ConflictError extends HttpException {
    constructor(statusCode = 409, statusMsg = 'Conflict Error', msg = '409') {
      super(statusCode, statusMsg, msg);
    }
  }
  
  export class OkMalformedError extends HttpException {
    constructor(statusCode = 200, statusMsg = 'ok', msg = "200") {
      super(statusCode, statusMsg, msg);
    }
  }
  
  
  export default HttpException
  