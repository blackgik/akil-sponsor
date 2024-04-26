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
import { IProduct, IProductCategory, IProductCategoryDocument } from '../models/product.model';
import { Types } from 'mongoose'

class ProductCategoryController implements Controller {
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
            `${this.path}${ConstantAPI.CATEGORY_CREATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            validationMiddleware(this.validate.createNewProductCategory),
            this.createProductCategory,
        )

        this.router.put(
            `${this.path}${ConstantAPI.CATEGORY_UPDATE}`,
            this.authenticated.verifyTokenAndAuthorization,
            //validationMiddleware(this.validate.updateProductCategory),
            this.updateProductCategory,
        )

        this.router.get(
            `${this.path}${ConstantAPI.CATEGORY_DELETE}`,
            this.authenticated.verifyTokenAndAuthorization,
            //validationMiddleware(this.validate.deleteProductCategory),
            this.deleteProductCategory,
        )

        this.router.get(
            `${this.path}${ConstantAPI.CATEGORY_GET}`,
            this.authenticated.verifyTokenAndAuthorization,
            this.getProductCategory,
        )

        this.router.get(
            `${this.path}${ConstantAPI.CATEGORY_GET_ALL}`,
            this.authenticated.verifyTokenAndAdmin,
            this.listProductCategory,
        )

    }

    private createProductCategory = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const input_product_category: IProductCategory = req.body.product_category
            const saved_product_category = await this.productService.createProductCategoryService(input_product_category);

            logger.info(`category ${saved_product_category.product_category_name} found`)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.CATEGORY_CREATE_SUCCESS,
                data: {
                    product_category: saved_product_category
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

    private listProductCategory = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_categories: IProductCategoryDocument[] = await this.productService.listProductCategoryService();

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.CATEGORY_FOUND,
                data: product_categories,
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

    private getProductCategory = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_category_id: string = req.params.product_category_id;
            const product_category: IProductCategoryDocument | null = await this.productService.getProductCategoryService(new Types.ObjectId(product_category_id));
            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.CATEGORY_FOUND,
                data: product_category,
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

    private updateProductCategory = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_category_id: string = req.params.product_category_id;
            const input_product_category: IProductCategory = req.body.product_category;
            const updated_product_category: IProductCategoryDocument | null = await this.productService.updateProductCategoryService(new Types.ObjectId(product_category_id), input_product_category)

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.CATEGORY_UPDATE_SUCCESS,
                data: updated_product_category,
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

    private deleteProductCategory = async (
        req: Request,
        res: Response,
        next: NextFunction,
    ): Promise<Response | void> => {
        try {
            const product_category_id: string = req.params.product_category_id;
            const deleted_product_category: IProductCategoryDocument | null = await this.productService.deleteProductCategoryService(new Types.ObjectId(product_category_id));

            return res.status(ConstantHttpCode.OK).json({
                status: {
                    code: ConstantHttpCode.OK,
                    msg: ConstantHttpReason.OK,
                },
                msg: ConstantMessage.CATEGORY_DELETE_SUCCESS,
                data: deleted_product_category,
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

export default ProductCategoryController
