import mongoose, { Schema, Types } from "mongoose";

const ProductSchema = new mongoose.Schema({
    product_name:{
        type: String,
        required: true
    },
    product_slug:{
        type: String,
        required: true
    },
    product_category_id:{
        type: Types.ObjectId,
        required: true
    },
    product_partner_id:{
        type: Types.ObjectId,
        required: true
    },
    product_price:{
        type: Number,
        required: true
    },
    product_code:{
        type: String,
        required: true
    },
    product_image:{
        type: String,
        required: false
    },
    product_description:{
        type: String,
        required: false
    },
    is_active:{
        type: Boolean,
        required: true,
        default: true
    }

});

export default ProductSchema
