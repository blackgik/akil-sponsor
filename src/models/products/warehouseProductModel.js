import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const WarehouseProductSchema = new Schema(
    {
        warehouse_id: {
            type: Schema.Types.ObjectId,
            ref: 'Warehouse',
            required: true
        },
        quantity:{
            type: Number, default: 0
        },
        product_id: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true
        },
    },
    { timestamps: true }
);

export default model('WarehouseProduct', WarehouseProductSchema);
