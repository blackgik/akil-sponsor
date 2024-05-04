import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import SponsorService from '../services/sponsor.service'
import AuthService from '../services/auth.service'
import RoleService from '../services/role.service'
import Validate from '../validations/sponsor.validation'

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
import { ISponsor, ISponsorDocument } from '../models/sponsor.model';
import { Types } from 'mongoose'
import { IAccount, IAccountDocument } from '../models/account.model'
import { IAuthDto } from 'dto/IAuthDto'
import { Tokens } from 'types'


class AuthController implements Controller {
    public path: string
    public router: Router
    private sponsorService: SponsorService
    private authService: AuthService
    private authenticated: Authenticated
    private validate: Validate
    private roleService: RoleService

    constructor() {
        this.path = ConstantAPI.SPONSORS
        this.router = Router()
        this.sponsorService = new SponsorService()
        this.authService = new AuthService()
        this.roleService = new RoleService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()
        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.SPONSOR_AUTH_ONBOARDING}`,
            validationMiddleware(this.validate.createSponsor),
            this.createSponsor,
        )

        this.router.post(
            `${this.path}${ConstantAPI.SPONSOR_AUTH_LOGIN}`,
            validationMiddleware(this.validate.login),
            this.login,
        )

        this.router.post(
            `${this.path}${ConstantAPI.SPONSOR_AUTH_FORGOT}`,
            validationMiddleware(this.validate.login),
            this.forgotPassword,
        )

        this.router.post(
            `${this.path}${ConstantAPI.SPONSOR_MAIL_VERIFY}`,
            validationMiddleware(this.validate.verifyMail),
            this.verifySponsorMail,
        )


    }

    private createSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_sponsor: ISponsor = req.body
        
            const saved_user = await this.authService.signupLocal(input_sponsor);
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_CREATE_SUCCESS,
                data: saved_user,
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


    private verifySponsorMail = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const otpData = req.body
            const verifData = await this.authService.verifyOtp(otpData);

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_CREATE_SUCCESS,
                data: verifData,
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


    private login = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const authDto: IAuthDto = req.body;
            const tokens: Tokens | null = await this.authService.signinLocal(authDto)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_UPDATE_SUCCESS,
                data: tokens,
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

    private forgotPassword = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const authDto: IAuthDto = req.body;
            const tokens: Tokens | null = await this.authService.signinLocal(authDto)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_UPDATE_SUCCESS,
                data: tokens,
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

    private refreshToken = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const authDto: IAuthDto = req.body;
            const tokens: Tokens | null = await this.authService.signinLocal(authDto)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_UPDATE_SUCCESS,
                data: tokens,
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

export default AuthController
