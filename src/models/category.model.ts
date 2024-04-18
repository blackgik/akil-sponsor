import mongoose from 'mongoose'

import CategorySchema from '../schemas/category.schema'
import CategoryInterface from '../interfaces/category.interface'

import ConstantModel from '../constants/model.constant'

const CategoryModel = mongoose.model<CategoryInterface>(
  ConstantModel.CATEGORY_MODEL,
  CategorySchema,
)

export default CategoryModel
