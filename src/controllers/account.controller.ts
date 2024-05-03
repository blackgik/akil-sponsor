import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import AccountService from '../services/account.service'
import RoleService from '../services/role.service'
import Validate from '../validations/account.validation'

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
import { IAccount, IAccountDocument } from '../models/account.model'
import { IAuthDto } from 'dto/IAuthDto'
import { Tokens } from 'types'


class AccountController implements Controller {
    public path: string
    public router: Router
    private accountService: AccountService
    private authenticated: Authenticated
    private validate: Validate
    private roleService: RoleService

    constructor() {
        this.path = ConstantAPI.USERS
        this.router = Router()
        this.accountService = new AccountService()
        this.roleService = new RoleService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.USER_CREATE}`,
            validationMiddleware(this.validate.createAccount),
            this.createAccount,
        )

    }

    private createAccount = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_account: IAccount = req.body
            let saved_account: IAccountDocument
            const accountRole = await this.roleService.getRoleByCodeService('USER');
            const newAccount = {
                firstname: input_account.firstname,
                lastname: input_account.lastname,
                avatar: input_account.avatar,
                email: input_account.email,
                phone: input_account.phone,
                password: '',
                state: input_account.state,
                country: input_account.country,
                address: input_account.address,
                dob: new Date,
                hash: '',
                hashedRt: '',
                email_verified: false,
                acctstatus: 'pending',
                roleId: accountRole?._id
            };
            //saved_account = await this.accountService.signupLocal(input_account);
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.USER_CREATE_SUCCESS,
                data: input_account,
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

export default AccountController
