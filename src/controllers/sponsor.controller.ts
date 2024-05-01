import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import SponsorService from '../services/sponsor.service'
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
import { ISponsor,ISponsorDocument } from '../models/sponsor.model';
import { Types } from 'mongoose'

class SponsorController implements Controller {
    public path: string
    public router: Router
    private sponsorService: SponsorService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.PARTNERS
        this.router = Router()
        this.sponsorService = new SponsorService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.PARTNER_CREATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createSponsor),
            this.createSponsor,
        )

        this.router.put(
            `${this.path}${ConstantAPI.PARTNER_UPDATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updateSponsor),
            this.updateSponsor,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_GET}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.getSponsor,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_GET_ALL}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.listSponsor,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_DELETE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.deleteSponsor,
        )
    }

    private createSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_sponsor: ISponsor = req.body;
            const saved_sponsor = await this.sponsorService.createSponsorService(input_sponsor);
            logger.info(`user ${input_sponsor.firstname} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_CREATE_SUCCESS,
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

    private listSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const sponsors: ISponsorDocument[] = await this.sponsorService.listSponsorsService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_FOUND,
                data: sponsors,
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

    private getSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const sponsor_id: string = req.params.sponsor_id;
            const sponsor: ISponsor | null = await this.sponsorService.getSponsorService(new Types.ObjectId(sponsor_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_FOUND,
                data: sponsor,
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

    private updateSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const sponsor_id: string = req.params.sponsor_id;
            const input_sponsor: ISponsor = req.body;
            const updated_sponsor: ISponsorDocument | null = await this.sponsorService.updateSponsorService(new Types.ObjectId(sponsor_id), input_sponsor)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_UPDATE_SUCCESS,
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

    private deleteSponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const sponsor_id: string = req.params.sponsor_id;
            const deleted_sponsor: ISponsorDocument | null = await this.sponsorService.deleteSponsorService(new Types.ObjectId(sponsor_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_DELETE_SUCCESS,
                data: deleted_sponsor,
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

export default SponsorController
