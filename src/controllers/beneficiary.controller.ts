import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import BeneficiaryService from '../services/beneficiary.service'
import Validate from '../validations/beneficiary.validation'

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
import { IBeneficiary,IBeneficiaryDocument } from '../models/beneficiary.model';
import { Types } from 'mongoose'

class BeneficiaryController implements Controller {
    public path: string
    public router: Router
    private beneficiaryService: BeneficiaryService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.BENEFICIARIES
        this.router = Router()
        this.beneficiaryService = new BeneficiaryService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.BENEFICIARY_CREATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            //validationMiddleware(this.validate.createBeneficiary),
            this.createBeneficiary,
        )

        this.router.put(
            `${this.path}${ConstantAPI.BENEFICIARY_UPDATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            //validationMiddleware(this.validate.updateBeneficiary),
            this.updateBeneficiary,
        )

        this.router.get(
            `${this.path}${ConstantAPI.BENEFICIARY_GET}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.getBeneficiary,
        )

        this.router.get(
            `${this.path}${ConstantAPI.BENEFICIARY_GET_ALL}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.listBeneficiary,
        )

        this.router.get(
            `${this.path}${ConstantAPI.BENEFICIARY_GET_BY_SPONSOR}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.listBeneficiaryBySponsor,
        )

        this.router.get(
            `${this.path}${ConstantAPI.BENEFICIARY_DELETE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.deleteBeneficiary,
        )
    }

    private createBeneficiary = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_beneficiary: IBeneficiary = req.body
            const saved_beneficiary = await this.beneficiaryService.createBeneficiaryService(input_beneficiary);
            logger.info(`user ${input_beneficiary.lastname} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_CREATE_SUCCESS,
                data: saved_beneficiary,
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

    private listBeneficiary = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const beneficiarys: IBeneficiaryDocument[] = await this.beneficiaryService.listBeneficiarysService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_FOUND,
                data: beneficiarys,
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

    private getBeneficiary = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const beneficiary_id: string = req.params.beneficiary_id;
            const beneficiary: IBeneficiary | null = await this.beneficiaryService.getBeneficiaryService(new Types.ObjectId(beneficiary_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_FOUND,
                data: beneficiary,
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

    private listBeneficiaryBySponsor = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const sponsor_id: string = req.params.sponsor_id;
            const beneficiaries: IBeneficiaryDocument[] = await this.beneficiaryService.getBeneficiariesBySponsorService(new Types.ObjectId(sponsor_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_FOUND,
                data: beneficiaries,
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

    private updateBeneficiary = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const beneficiary_id: string = req.params.beneficiary_id;
            const input_beneficiary: IBeneficiary = req.body;
            const updated_beneficiary: IBeneficiaryDocument | null = await this.beneficiaryService.updateBeneficiaryService(new Types.ObjectId(beneficiary_id), input_beneficiary)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_UPDATE_SUCCESS,
                data: updated_beneficiary,
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

    private deleteBeneficiary = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const beneficiary_id: string = req.params.beneficiary_id;
            const deleted_beneficiary: IBeneficiaryDocument | null = await this.beneficiaryService.deleteBeneficiaryService(new Types.ObjectId(beneficiary_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.BENEFICIARY_DELETE_SUCCESS,
                data: deleted_beneficiary,
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

export default BeneficiaryController
