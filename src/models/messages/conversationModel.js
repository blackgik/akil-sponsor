import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const ConversationSchema = new Schema(
  {
    members: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Organization_Member',
        required: true,
        index: true
      }
    ],
    lastText: {
      type: String,
      default: 'N/A',
      indx: true
    },
    organization_id: {
      type: Schema.Types.ObjectId,
      required: true,
      index: true,
      ref: 'Organization'
    }
  },

  { timestamps: true }
);

export default model('Conversation', ConversationSchema);
