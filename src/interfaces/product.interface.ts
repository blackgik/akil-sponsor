import { Document, Types } from 'mongoose'

export default interface Product extends Document {
    product_name: string,
    product_slug?: string,
    product_category_id: Types.ObjectId,
    product_partner_id: Types.ObjectId,
    product_code: string,
    product_price: number,
    product_image?: string
    product_description?: string
    is_active: boolean
}
