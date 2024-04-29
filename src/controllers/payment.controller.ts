import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import PaymentService from '../services/payment.service'
import Validate from '../validations/payment.validation'

import Authenticated from '../middleware/authenticated.middleware'
import validationMiddleware from '../middleware/validation.middleware'

import HttpException from '../utils/exceptions/http.exception'

//payment util
import { IPaystackBank } from "../dto/IPaystackBank"
import { IPaystackResolveAccount } from "../dto/IPaystackResolveAccount";
import axios, { AxiosResponse } from "axios"
import { IUser } from "../dto/IUser";
import { IPaymentInitializeResponse } from "../dto/IPaymentInitializepresonse";
import * as Util from "../utils/payment.util"
import { IPaymentInitializeRequest } from "../dto/IPaymentInitializeRequest";
import { IAccountNameEnqury } from "../dto/IAccountNameEnqury";


// api constant
import ConstantAPI from '../constants/api.constant'

// message constant
import ConstantMessage from '../constants/message.constant'

// http constant
import ConstantHttpCode from '../constants/http.code.constant'
import ConstantHttpReason from '../constants/http.reason.constant'

// logger
import logger from '../utils/logger.util'
//import { IPayment, IPaymentDocument } from '../models/payment.model';
import { Types } from 'mongoose'

class PaymentController implements Controller {
    public path: string
    public router: Router
    private paymentService: PaymentService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.PAYMENTS
        this.router = Router()
        this.paymentService = new PaymentService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.PAYMENT_INIT}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createPayment),
            this.initializePayment,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PAYMENT_VERIFY}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.verifyPayment,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PAYSTACK_BANK_LIST}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.getBankLists,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PAYSTACK_ACCOUNT_INQUIRY}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.accountNmeInqury,
        )


    }

    private initializePayment = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {

        try {
            const { payingUser, amountMajor } = req.body
            const base_url = process.env.PAYSTACK_BASE_URL + `/transaction/initialize`
            const headers = {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
            const amountMinor = (amountMajor || 0) * 100
            const transactionFeeMajor = Util.getPaystackTransactionFeeMajor(amountMajor)
            const payload: any = {
                amount: ((amountMajor || 0) * 100) + (transactionFeeMajor * 100),
                email: payingUser.email,
                metadata: {
                    full_name: `${payingUser.firstName} ${payingUser.lastName}`
                }
            }

            const response: AxiosResponse<any> = await axios.post(base_url, payload, {
                headers
            })

            if (!response.data && response.status !== 200) {
                throw new Error('An error occurred with our third party. Please try again at a later time.')
            }
            const { authorization_url, reference, access_code } = response.data.data


            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_CREATE_SUCCESS,
                data: {
                    paymentProviderRedirectUrl: authorization_url,
                    paymentReference: reference,
                    accessCode: access_code
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

    private getBankLists = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {

            const baseUrl = process.env.PAYSTACK_BASE_URL + `/bank/?country=${req.params.country}`
            const headers = {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
            const response: AxiosResponse<any> = await axios.get(baseUrl, { headers })
            if (!response.data && response.status !== 200) {
                throw new Error('An error occurred with our third party. Please try again at a later time.')
            }
            const paystackBanks: IPaystackBank[] = response.data.data

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_FOUND,
                data: paystackBanks,
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

    private accountNmeInqury = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const { bankCode, accountNumber } = req.body
            const baseURL = process.env.PAYSTACK_BASE_URL + `/bank/resolve?account_number=${accountNumber}&bank_code=${bankCode}`
            const headers = {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
            const response: AxiosResponse<any> = await axios.get(baseURL, { headers })
            if (!response.data && response.status !== 200) {
                throw new Error('An error occurred with our third party. Please try again at a later time.')
            }
            const payStackResolveAccount: IPaystackResolveAccount = response.data.data

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_FOUND,
                data: payStackResolveAccount,
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

    private verifyPayment = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {

            const ref = req.query.trxref
            const baseURL = process.env.PAYSTACK_BASE_URL + `/transaction/verify/${ref}`
            const headers = {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'content-type': 'application/json',
                'cache-control': 'no-cache'
            }
            const response: AxiosResponse<any> = await axios.get(baseURL, { headers })
            if (!response.data && response.status !== 200) {
                throw new Error('An error occurred with our third party. Please try again at a later time.')
            } 

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.OCCUPATION_FOUND,
                data: response.data.data,
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

export default PaymentController
