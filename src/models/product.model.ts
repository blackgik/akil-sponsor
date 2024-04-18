import mongoose from 'mongoose'

import ProductSchema from '../schemas/product.schema'
import ProductInterface from '../interfaces/product.interface'

import ConstantModel from '../constants/model.constant'

const ProductModel = mongoose.model<ProductInterface>(
  ConstantModel.PRODUCT_MODEL,
  ProductSchema,
)

export default ProductModel