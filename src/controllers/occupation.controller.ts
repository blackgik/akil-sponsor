import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import OccupationService from '../services/occupation.service'
import Validate from '../validations/occupation.validation'

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
import { IOccupation, IOccupationDocument } from '../models/occupation.model';
import { Types } from 'mongoose'

class OccupationController implements Controller {
    public path: string
    public router: Router
    private occupationService: OccupationService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.OCCUPATIONS
        this.router = Router()
        this.occupationService = new OccupationService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.OCCUPATION_CREATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createOccupation),
            this.createOccupation,
        )

        this.router.put(
            `${this.path}${ConstantAPI.OCCUPATION_UPDATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updateOccupation),
            this.updateOccupation,
        )

        this.router.get(
            `${this.path}${ConstantAPI.OCCUPATION_GET}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.getOccupation,
        )

        this.router.get(
            `${this.path}${ConstantAPI.OCCUPATION_GET_ALL}`,
           // this.authenticated.verifyTokenAndAuthorization,
            this.listOccupation,
        )

        this.router.get(
            `${this.path}${ConstantAPI.OCCUPATION_DELETE}`,
           // this.authenticated.verifyTokenAndAuthorization,
            this.deleteOccupation,
        )
    }

    private createOccupation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_occupation: IOccupation = req.body
            const saved_occupation = await this.occupationService.createOccupationService(input_occupation);
            logger.info(`user ${input_occupation.occupation_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_CREATE_SUCCESS,
                data: saved_occupation,
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

    private listOccupation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const occupations: IOccupationDocument[] = await this.occupationService.listOccupationsService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_FOUND,
                data: occupations,
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

    private getOccupation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const occupation_id: string = req.params.occupation_id;
            const occupation: IOccupation | null = await this.occupationService.getOccupationService(new Types.ObjectId(occupation_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_FOUND,
                data: occupation,
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

    private updateOccupation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const occupation_id: string = req.params.occupation_id;
            const input_occupation: IOccupation = req.body;
            const updated_occupation: IOccupationDocument | null = await this.occupationService.updateOccupationService(new Types.ObjectId(occupation_id), input_occupation)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_UPDATE_SUCCESS,
                data: updated_occupation,
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

    private deleteOccupation = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const occupation_id: string = req.params.occupation_id;
            const deleted_occupation: IOccupationDocument | null = await this.occupationService.deleteOccupationService(new Types.ObjectId(occupation_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_DELETE_SUCCESS,
                data: deleted_occupation,
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

export default OccupationController
