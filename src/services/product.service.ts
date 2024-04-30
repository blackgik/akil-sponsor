import { IProduct, IProductCategory, IProductCategoryDocument, IProductDocument } from '../models/product.model';
import { Product, ProductCategory } from '../schemas/product.schema';
import { Types } from 'mongoose'

class ProductService {

    constructor() {
    }

    public async createProductService(product: IProduct): Promise<IProductDocument> {
        try {
            if (!product.product_name)
                throw new Error(`Please enter product name`);
            if (!product.product_quantity)
                throw new Error(`Please enter product code`);
            if (!product.product_category_id)
                throw new Error(`Please enter product category`);
            if (!product.product_unit)
                throw new Error(`Please enter product price`)

            const newProduct: IProductDocument = Product.buildProduct(product);
            return await newProduct.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listProductsService(): Promise<IProductDocument[]> {
        try {
            return Product.listProducts();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }


    public async getProductService(product_id: Types.ObjectId): Promise<IProductDocument | null> {
        try {
            if (!product_id)
                throw new Error(`Please enter product id`);
            return Product.getProduct(product_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`)
        }
    }

    public async updateProductService(product_id: Types.ObjectId, product: IProduct): Promise<IProductDocument | null> {
        try {
            if (!product_id)
                throw new Error(`Please enter product id`);
            return Product.updateProduct(product_id, product);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteProductService(product_id: Types.ObjectId): Promise<IProductDocument | null> {
        try {
            if (!product_id)
                throw new Error(`Please enter product id`);
            return Product.deleteProduct(product_id);
        } catch (err: any) {
            throw new Error(`Something went wrong-${err.message}`);
        }
    }

    public async createProductCategoryService(product_category: IProductCategory): Promise<IProductCategoryDocument> {
        try {
            if (!product_category.product_category_name)
                throw new Error(`Please enter product category name`);
            if (product_category.parent_category_id)
                product_category.parent_category_id = new Types.ObjectId(product_category.parent_category_id)
            const newProductCategory = ProductCategory.buildProductCategory(product_category);
            return await newProductCategory.save();
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

    public async listProductCategoryService(): Promise<IProductCategoryDocument[]> {
        try {
            return ProductCategory.listProductCategory();
        } catch (err: any) {
            throw new Error(`Something went wrong- ${err.message}`);
        }
    }

    public async getProductCategoryService(product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null> {
        try {
            if (!product_category_id)
                throw new Error(`Please enter product category id`);
            return ProductCategory.getPorudctCategory(product_category_id);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`)
        }
    }

    public async updateProductCategoryService(product_category_id: Types.ObjectId, product_category: IProductCategory): Promise<IProductCategoryDocument | null> {
        try {
            if (!product_category_id)
                throw new Error(`Please enter product category id`)
            return ProductCategory.updateProductCategory(product_category_id, product_category);
        } catch (err: any) {
            throw new Error(`Something went wrong -${err.message}`);
        }
    }

    public async deleteProductCategoryService(product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null> {
        try {
            if (!product_category_id)
                throw new Error(`Please enter product category id`);
            return ProductCategory.deleteProductCategory(product_category_id);
        } catch (err: any) {
            throw new Error(`Something went wrong - ${err.message}`);
        }
    }

}

export default ProductService

