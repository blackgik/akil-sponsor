import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const rsaKeySchema = new Schema(
  {
    organization_id: { type: Schema.Types.ObjectId, required: true, ref: 'Organization' },
    private_key: { type: String, required: true },
    public_key: { type: String, required: true },
    hash_code: {}
  },
  { timestamps: true }
);
