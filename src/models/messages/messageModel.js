import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const MessageSchema = new Schema(
  {
    conversation_id: {
      type: Schema.Types.ObjectId,
      ref: 'Conversation',
      index: true,
      required: true
    },
    sender_id: {
      type: Schema.Types.ObjectId,
      index: true,
      required: true
    },
    text: {
      type: String,
      trim: true
    }
  },
  { timestamps: true }
);

export default model('Message', MessageSchema);
