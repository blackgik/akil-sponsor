import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import UserService from '../services/user.service'
import RoleService from '../services/role.service'
import Validate from '../validations/user.validation'

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
import { Types } from 'mongoose'
import { IUser, IUserDocument } from '../models/user.model'
import { IAuthDto } from 'dto/IAuthDto'
import { Tokens } from 'types'


class UserController implements Controller {
    public path: string
    public router: Router
    private userService: UserService
    private authenticated: Authenticated
    private validate: Validate
    private roleService: RoleService

    constructor() {
        this.path = ConstantAPI.USERS
        this.router = Router()
        this.userService = new UserService()
        this.roleService = new RoleService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.USER_CREATE}`,
            validationMiddleware(this.validate.createUser),
            this.createUser,
        )

    }

    private createUser = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_user: IUser = req.body
            let saved_user: IUserDocument
            const userRole = await this.roleService.getRoleByCodeService('USER');
            const newUser = {
                firstname: input_user.firstname,
                lastname: input_user.lastname,
                avatar: input_user.avatar,
                email: input_user.email,
                phone: input_user.phone,
                gender: input_user.gender,
                password: '',
                state: input_user.state,
                country: input_user.country,
                city: input_user.city,
                address: input_user.address,
                dob: new Date,
                hash: '',
                hashedRt: '',
                email_verified: false,
                acctstatus: 'pending',
                roleId: userRole?._id
            };
            saved_user = await this.userService.signupLocal(input_user);
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.USER_CREATE_SUCCESS,
                data: input_user,
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

export default UserController
