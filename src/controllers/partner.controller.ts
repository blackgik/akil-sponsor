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
import { IPartner,IPartnerDocument } from '../models/partner.model';
import { Types } from 'mongoose'

class PartnerController implements Controller {
    public path: string
    public router: Router
    private partnerService: PartnerService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.PARTNERS
        this.router = Router()
        this.partnerService = new PartnerService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.PARTNER_CREATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createPartner),
            this.createPartner,
        )

        this.router.put(
            `${this.path}${ConstantAPI.PARTNER_UPDATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updatePartner),
            this.updatePartner,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_GET}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.getPartner,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_GET_ALL}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.listPartner,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PARTNER_DELETE}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.deletePartner,
        )
    }

    private createPartner = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_partner: IPartner = req.body
            const saved_partner = await this.partnerService.createPartnerService(input_partner);
            logger.info(`user ${input_partner.partner_business_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_CREATE_SUCCESS,
                data: saved_partner,
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

    private listPartner = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const partners: IPartnerDocument[] = await this.partnerService.listPartnersService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_FOUND,
                data: partners,
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
            const partner_id: string = req.params.partner_id;
            const partner: IPartner | null = await this.partnerService.getPartnerService(new Types.ObjectId(partner_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_FOUND,
                data: partner,
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

    private updatePartner = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const partner_id: string = req.params.partner_id;
            const input_partner: IPartner = req.body;
            const updated_partner: IPartnerDocument | null = await this.partnerService.updatePartnerService(new Types.ObjectId(partner_id), input_partner)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_UPDATE_SUCCESS,
                data: updated_partner,
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
            const partner_id: string = req.params.partner_id;
            const deleted_partner: IPartnerDocument | null = await this.partnerService.deletePartnerService(new Types.ObjectId(partner_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PARTNER_DELETE_SUCCESS,
                data: deleted_partner,
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
