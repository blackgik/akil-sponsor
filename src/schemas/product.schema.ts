import { Schema, model, Types } from 'mongoose'
import ConstantNumber from '../constants/number.constant'
import { IProduct, IProductDocument, IProductCategory, IProductCategoryDocument, IProductModel, IProductCategoryModel } from '../models/product.model';

const ProductCategorySchema = new Schema({
    product_category_name: {
        type: String,
        required: true
    },
    category_slug: {
        type: String,
        required: false,
        min: ConstantNumber.NAME_MIN_LENGTH,
        max: ConstantNumber.NAME_MAX_LENGTH,
    },
    category_description: {
        type: String,
        required: true,
        min: ConstantNumber.ADDRESS_MIN_LENGTH,
        max: ConstantNumber.ADDRESS_MAX_LENGTH,
    },
    parent_category_id: {
        type: Types.ObjectId,
        required: false
    },
    is_active: {
        type: Boolean,
        required: true,
        default: true
    }
}, {
    collection: 'product_categories',
    timestamps: true,
},)

const ProductSchema = new Schema({
    product_category: {
        category_name: {
            type: String,
            required: true
        },
        subscription_category: {
            type: String,
            required: true
        },
        subscription_sector: {
            type: String,
            required: true
        },
        category_description: {
            type: String,
            required: false
        },
    },
    general_information: {
        product_name: {
            type: String,
            required: true
        },
        product_code: {
            type: String,
            required: true
        },
        product_slug: {
            type: String,
            required: true
        },
        product_partner_id: {
            type: Types.ObjectId,
            required: true
        },
        product_image: {
            type: String,
            required: false
        },
        product_description: {
            type: String,
            required: false
        },
        is_active: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    subscription_settings: {
        category_price: {
            type: Number,
            required: true
        },
        frequency: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            required: false
        },
        discount_code: {
            type: String,
            required: false
        },
        discount_start_date: { type: Date },
        discount_end_date: { type: Date },
        product_description: {
            type: String,
            required: false
        },
        enable_direct_debit: {
            type: Boolean,
            default: true,
            required: false
        }
    },
    product_category_id: {
        type: Types.ObjectId,
        required: false
    },

}, {
    collection: 'products',
    timestamps: true,
});

ProductSchema.statics.buildProduct = (product: IProduct): IProductDocument => {
    return new Product(product)
}

ProductSchema.statics.listProducts = async (): Promise<IProductDocument[]> => {
    return await Product.find();
}
ProductSchema.statics.getProduct = async (product_id: Types.ObjectId): Promise<IProductDocument | null> => {
    return await Product.findById(product_id)
}

ProductSchema.statics.updateProduct = async (product_id: Types.ObjectId, product: IProduct): Promise<IProductDocument | null> => {
    return await Product.findByIdAndUpdate(product_id, product);
}

ProductSchema.statics.deleteProduct = async (product_id: Types.ObjectId): Promise<IProductDocument | null> => {
    return await Product.findByIdAndDelete(product_id);
}

const Product = model<IProductDocument, IProductModel>('products', ProductSchema);


ProductCategorySchema.statics.buildProductCategory = (product_category: IProductCategory): IProductCategoryDocument => {
    return new ProductCategory(product_category);
}

ProductCategorySchema.statics.listProductCategory = async (): Promise<IProductCategoryDocument[]> => {
    return await ProductCategory.find();
}

ProductCategorySchema.statics.getPorudctCategory = async (product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null> => {
    return await ProductCategory.findById(product_category_id);
}

ProductCategorySchema.statics.updateProductCategory = async (product_category_id: Types.ObjectId, product_category: IProductCategory): Promise<IProductCategoryDocument | null> => {
    return await ProductCategory.findByIdAndUpdate(product_category_id, product_category);
}

ProductCategorySchema.statics.deleteProductCategory = async (product_category_id: Types.ObjectId): Promise<IProductCategoryDocument | null> => {
    return await ProductCategory.findByIdAndDelete(product_category_id);
}

const ProductCategory = model<IProductCategoryDocument, IProductCategoryModel>('product_categories', ProductCategorySchema);

export {
    Product,
    ProductCategory
}