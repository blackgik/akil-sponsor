import { Router, Request, Response, NextFunction } from 'express'

import Controller from '../interfaces/controller.interface'

import ProductService from '../services/product.service'
import Validate from '../validations/product.validation'

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
import { IProduct, IProductCategory, IProductCategoryDocument, IProductDocument } from '../models/product.model';
import { Types } from 'mongoose'

class ProductController implements Controller {
    public path: string
    public router: Router
    private productService: ProductService
    private authenticated: Authenticated
    private validate: Validate

    constructor() {
        this.path = ConstantAPI.PARTNERS
        this.router = Router()
        this.productService = new ProductService()
        this.authenticated = new Authenticated()
        this.validate = new Validate()

        this.initialiseRoutes()
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}${ConstantAPI.PRODUCT_CREATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createProduct),
            this.createProduct,
        )

        this.router.put(
            `${this.path}${ConstantAPI.PRODUCT_UPDATE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.updateProduct),
            this.updateProduct,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PRODUCT_GET}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.getProduct,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PRODUCT_GET_ALL}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.listProduct,
        )

        this.router.get(
            `${this.path}${ConstantAPI.PRODUCT_DELETE}`,
            //this.authenticated.verifyTokenAndAuthorization,
            this.deleteProduct,
        )
    }

    private createProduct = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_product: IProduct = req.body.product
            const saved_product = await this.productService.createProductService(input_product);
            logger.info(`user ${input_product.product_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PRODUCT_CREATE_SUCCESS,
                data: saved_product,
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

    private listProduct = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const products: IProductDocument[] = await this.productService.listProductsService()
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PRODUCT_FOUND,
                data: products,
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

    private getProduct = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_id: string = req.params.product_id;
            const product: IProduct | null = await this.productService.getProductService(new Types.ObjectId(product_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PRODUCT_FOUND,
                data: product,
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

    private updateProduct = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_id: string = req.params.product_id;
            const input_product: IProduct = req.body.product;
            const updated_product: IProductDocument | null = await this.productService.updateProductService(new Types.ObjectId(product_id), input_product)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PRODUCT_UPDATE_SUCCESS,
                data: updated_product,
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

    private deleteProduct = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_id: string = req.params.product_id;
            const deleted_product: IProductDocument | null = await this.productService.deleteProductService(new Types.ObjectId(product_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.PRODUCT_DELETE_SUCCESS,
                data: deleted_product,
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

export default ProductController
