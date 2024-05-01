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
import { IUser, IUserDocument } from '../models/user.model'


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


    }

    private createSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_sponsor: ISponsor = req.body
            let saved_user: IUserDocument 
            const saved_sponsor = await this.sponsorService.createSponsorService(input_sponsor);
            logger.info(`user ${input_sponsor.firstname} found`)
            if (saved_sponsor._id) {
                const userRole = await this.roleService.getRoleByCodeService('SPONSOR');
                const newUser = {
                    firstname: saved_sponsor.firstname,
                    lastname: saved_sponsor.lastname,
                    avatar: saved_sponsor.avatar,
                    email: saved_sponsor.email,
                    phone: saved_sponsor.phone,
                    gender: saved_sponsor.gender,
                    password: '',
                    state: saved_sponsor.state,
                    country: saved_sponsor.country,
                    city: saved_sponsor.city,
                    address: saved_sponsor.address,
                    dob: new Date,
                    hash: '',
                    hashedRt : '',
                    email_verified: false,
                    acctstatus: 'pending',
                    roleId: userRole?._id
                };
                saved_user = await this.authService.signupLocal(newUser);
                if (saved_user._id) {
                    saved_sponsor.otpHash = saved_user.otpHash;
                    await this.sponsorService.updateSponsorService(saved_sponsor._id, saved_sponsor);
                }
            }
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_CREATE_SUCCESS,
                data: saved_sponsor,
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
            const sponsor_id: string = req.params.sponsor_id;
            const input_sponsor: ISponsor = req.body.sponsor;
            const updated_sponsor: ISponsorDocument | null = await this.sponsorService.updateSponsorService(new Types.ObjectId(sponsor_id), input_sponsor)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.SPONSOR_UPDATE_SUCCESS,
                data: updated_sponsor,
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
