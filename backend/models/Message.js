import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    reason: {
      type: String,
      required: true,
      enum: ['General Message', 'Book Feedback', 'Collaboration Request', 'Fan Message', 'Interview Request', 'PDF Purchase Request'],
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
