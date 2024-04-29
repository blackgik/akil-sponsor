import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import RoleService from '../services/role.service'
import Validate from '../validations/role.validation'

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
import { IRole, IRoleDocument } from '../models/role.model';
import { Types } from 'mongoose'

class RoleController implements Controller {
    public path: string
    public router: Router
    private roleService: RoleService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.ROLES
        this.router = Router()
        this.roleService = new RoleService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.ROLE_CREATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createRole),
            this.createRole,
        )

        this.router.put(
            `${this.path}${ConstantAPI.ROLE_UPDATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updateRole),
            this.updateRole,
        )

        this.router.get(
            `${this.path}${ConstantAPI.ROLE_GET}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.getRole,
        )

        this.router.get(
            `${this.path}${ConstantAPI.ROLE_GET_ALL}`,
            this.authenticated.verifyTokenAndAdmin,
            this.listRole,
        )

        this.router.get(
            `${this.path}${ConstantAPI.ROLE_DELETE}`,
            this.authenticated.verifyTokenAndAdmin,
            this.deleteRole,
        )
    }

    private createRole = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_role: IRole = req.body.role
            const saved_role = await this.roleService.createRoleService(input_role);
            logger.info(`user ${input_role.role_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.ROLE_CREATE_SUCCESS,
                data: saved_role,
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

    private listRole = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const roles: IRoleDocument[] = await this.roleService.listRolesService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.ROLE_FOUND,
                data: roles,
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

    private getRole = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const role_id: string = req.params.role_id;
            const role: IRole | null = await this.roleService.getRoleService(new Types.ObjectId(role_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.ROLE_FOUND,
                data: role,
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

    private updateRole = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const role_id: string = req.params.role_id;
            const input_role: IRole = req.body.role;
            const updated_role: IRoleDocument | null = await this.roleService.updateRoleService(new Types.ObjectId(role_id), input_role)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.ROLE_UPDATE_SUCCESS,
                data: updated_role,
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

    private deleteRole = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const role_id: string = req.params.role_id;
            const deleted_role: IRoleDocument | null = await this.roleService.deleteRoleService(new Types.ObjectId(role_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.ROLE_DELETE_SUCCESS,
                data: deleted_role,
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

export default RoleController
