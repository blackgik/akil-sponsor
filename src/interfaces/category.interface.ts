import { Document } from 'mongoose'

export default interface Category extends Document {
    category_name: string
    category_slug?: string
    category_description: string
    is_active: boolean
}
