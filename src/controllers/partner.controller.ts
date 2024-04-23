import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import PartnerService from '../services/partner.service'
import Validate from '../validations/partner.validation'

import Authenticated from '../middleware/authenticated.middleware'
import validationMiddleware from '../middleware/validation.middleware'

import HttpException from '../utils/exceptions/http.exception'

// api constant
import ConstantAPI from '../constants/api.constant'

// message constant
import ConstantMessage from '../constants/message.constant'

// http constant
import ConstantHttpCode from '../constants/http.code.constant'
import ConstantHttpReason from '../constants/http.reason.constant'

// logger
import logger from '../utils/logger.util'

class PartnerController implements Controller {
  public path: string
  public router: Router
  private userService: PartnerService
  private authenticated: Authenticated
  private validate: Validate

  constructor() {
    this.path = ConstantAPI.PARTNERS
    this.router = Router()
    this.userService = new PartnerService()
    this.authenticated = new Authenticated()
    this.validate = new Validate()

    this.initialiseRoutes()
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}${ConstantAPI.PARTNER_UPDATE_USERNAME}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updatePartnername),
      this.updatePartnername,
    )

    this.router.post(
      `${this.path}${ConstantAPI.PARTNER_UPDATE_EMAIL}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updateEmail),
      this.updateEmail,
    )

    this.router.post(
      `${this.path}${ConstantAPI.PARTNER_UPDATE_PASSWORD}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updatePassword),
      this.updatePassword,
    )

    this.router.post(
      `${this.path}${ConstantAPI.PARTNER_UPDATE_PHONE}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.updatePhone),
      this.updatePhone,
    )

    this.router.post(
      `${this.path}${ConstantAPI.PARTNER_DELETE}`,
      this.authenticated.verifyTokenAndAuthorization,
      validationMiddleware(this.validate.deletePartner),
      this.deletePartner,
    )

    this.router.get(
      `${this.path}${ConstantAPI.PARTNER_GET}`,
      this.authenticated.verifyTokenAndAuthorization,
      this.getPartner,
    )

    this.router.get(
      `${this.path}${ConstantAPI.PARTNER_GET_ALL}`,
      this.authenticated.verifyTokenAndAdmin,
      this.getAllPartners,
    )

    this.router.get(
      `${this.path}${ConstantAPI.PARTNER_GET_ALL_STATS}`,
      this.authenticated.verifyTokenAndAdmin,
      this.getPartnersStats,
    )
  }

  private updatePartnername = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { username, password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }
      logger.info(`user ${user.username} found`)

      const isPartnernameValid = this.validate.validatePartnername(username)
      if (!isPartnernameValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_VALID,
          ),
        )
      }
      logger.info(`username ${username} is valid`)

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }
      logger.info(`password ${password} is valid`)

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }
      logger.info(`password ${password} match`)

      const usernameCheck = await this.userService.findByPartnername(username)
      if (usernameCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_EXIST,
          ),
        )
      }

      if (user.username === username) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_CHANGE,
          ),
        )
      }

      const updatedPartner = await this.userService.updatePartnername(id, username)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USERNAME_NOT_CHANGE,
          ),
        )
      }
      logger.info(`user ${user.username} updated`)

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USERNAME_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private updateFirstName = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { firstName, password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }
      logger.info(`user ${user.username} found`)

      const isFirstNameValid = this.validate.validateFirstname(firstName)
      if (!isFirstNameValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_VALID,
          ),
        )
      }
      logger.info(`firstName ${firstName} is valid`)

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }
      logger.info(`password ${password} is valid`)

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }
      logger.info(`password ${password} match`)

      if (user.firstName === firstName) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_CHANGE,
          ),
        )
      }

      const updatedPartner = await this.userService.updateName(id, firstName)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.NAME_NOT_CHANGE,
          ),
        )
      }
      logger.info(`user ${user.username} updated`)

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.NAME_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private updateEmail = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { email, password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      const isEmailValid = this.validate.validateEmail(email)
      if (!isEmailValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_VALID,
          ),
        )
      }

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      if (user.email === email) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_CHANGE,
          ),
        )
      }

      const emailCheck = await this.userService.findByEmail(email)
      if (emailCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_EXIST,
          ),
        )
      }

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      const updatedPartner = await this.userService.updateEmail(id, email)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.EMAIL_NOT_CHANGE,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.EMAIL_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private updatePassword = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { oldPassword, newPassword, confirmPassword } = req.body
      const { id } = req.params

      if (newPassword !== confirmPassword) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      const isOldPasswordValid = this.validate.validatePassword(oldPassword)
      if (!isOldPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const isNewPasswordValid = this.validate.validatePassword(newPassword)
      if (!isNewPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const isConfirmPasswordValid =
        this.validate.validatePassword(confirmPassword)
      if (!isConfirmPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const isMatch = this.userService.comparePassword(
        oldPassword,
        user.password,
      )
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      if (oldPassword === newPassword) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_CHANGE,
          ),
        )
      }

      const updatedPartner = await this.userService.updatePassword(id, newPassword)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_CHANGE,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.PASSWORD_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private updatePhone = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { phone, password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      const isPhoneValid = this.validate.validatePhone(phone)
      logger.info({ isPhoneValid })
      if (!isPhoneValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_VALID,
          ),
        )
      }

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const phoneCheck = await this.userService.findByPhone(phone)
      if (phoneCheck) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.PHONE_EXIST,
          ),
        )
      }

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      if (user.phone === phone) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_CHANGE,
          ),
        )
      }

      const updatedPartner = await this.userService.updatePhone(id, phone)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PHONE_NOT_CHANGE,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.PHONE_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private updateAddress = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { address, password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      const isAddressValid = this.validate.validateAddress(address)
      if (!isAddressValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_VALID,
          ),
        )
      }

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      if (user.address === address) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_CHANGE,
          ),
        )
      }

      const updatedPartner = await this.userService.updateAddress(id, address)
      if (!updatedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.ADDRESS_NOT_CHANGE,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.ADDRESS_CHANGE_SUCCESS,
        data: {
          user: updatedPartner,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private deletePartner = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { password } = req.body
      const { id } = req.params

      const user = await this.userService.findByIdWithPassword(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      const isPasswordValid = this.validate.validatePassword(password)
      if (!isPasswordValid) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.PASSWORD_NOT_VALID,
          ),
        )
      }

      const isMatch = this.userService.comparePassword(password, user.password)
      if (!isMatch) {
        return next(
          new HttpException(
            ConstantHttpCode.UNAUTHORIZED,
            ConstantHttpReason.UNAUTHORIZED,
            ConstantMessage.PASSWORD_NOT_MATCH,
          ),
        )
      }

      const deletedPartner = await this.userService.deletePartner(id)
      if (!deletedPartner) {
        return next(
          new HttpException(
            ConstantHttpCode.BAD_REQUEST,
            ConstantHttpReason.BAD_REQUEST,
            ConstantMessage.USER_NOT_DELETE,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_DELETE_SUCCESS,
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private getPartner = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const { id } = req.params

      const user = await this.userService.findById(id)
      if (!user) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          user,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private getAllPartners = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const users = await this.userService.findAll()
      if (!users) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          users,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }

  private getPartnersStats = async (
    _req: Request,
    res: Response,
    next: NextFunction,
  ): Promise<Response | void> => {
    try {
      const usersStats = await this.userService.getPartnersStats()
      if (!usersStats) {
        return next(
          new HttpException(
            ConstantHttpCode.NOT_FOUND,
            ConstantHttpReason.NOT_FOUND,
            ConstantMessage.USER_NOT_FOUND,
          ),
        )
      }

      return res.status(ConstantHttpCode.OK).json({
        status: {
          code: ConstantHttpCode.OK,
          msg: ConstantHttpReason.OK,
        },
        msg: ConstantMessage.USER_FOUND,
        data: {
          users: usersStats,
        },
      })
    } catch (err: any) {
      next(
        new HttpException(
          ConstantHttpCode.INTERNAL_SERVER_ERROR,
          ConstantHttpReason.INTERNAL_SERVER_ERROR,
          err?.message,
        ),
      )
    }
  }
}

export default PartnerController
