import { Document, Model, Types} from 'mongoose'

export interface IProduct{
    product_name: string,
    product_category_id: Types.ObjectId,
    product_code: string,
    product_price: number,
    product_image?: string
    product_slug?: string,
    product_partner_id: Types.ObjectId,
    product_description?: string
    is_active: boolean
}

export interface IProductCategory{
    product_category_name: string
    parent_category_id?: Types.ObjectId,
    product_category_slug?: string
    product_category_description: string
    is_active: boolean
}

export interface IProductDocument extends IProduct, Document{}
export interface IProductCategoryDocument extends IProductCategory, Document{}

export interface IProductModel extends Model<IProductDocument>{
    buildProduct(product: IProduct):IProductDocument
    listProducts():Promise<IProductDocument[]>
    getProduct(product_id: Types.ObjectId):Promise<IProductDocument | null>
    updateProduct(product_id: Types.ObjectId, product: IProduct):Promise<IProductDocument>
    deleteProduct(product_id: Types.ObjectId):Promise<IProductDocument | null>
}

export interface IProductCategoryModel extends Model<IProductCategory>{
    buildProductCategory(product_category: IProductCategory):IProductCategoryDocument
    listProductCategory():Promise<IProductCategoryDocument[]>
    getPorudctCategory(product_category_id: Types.ObjectId):Promise<IProductCategoryDocument>
    updateProductCategory(product_category_id: Types.ObjectId, product_category: IProductCategory): Promise<IProductCategoryDocument>
    deleteProductCategory(product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null>
}

