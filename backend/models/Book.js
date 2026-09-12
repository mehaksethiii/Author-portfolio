import mongoose from 'mongoose';

const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: 'Mehak Sethi',
    },
    type: {
      type: String,
      required: true,
      enum: ['Novel', 'Poetry'],
    },
    description: {
      type: String,
    },
    coverImage: {
      type: String, // URL to image
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
    purchaseLinks: {
      amazon: String,
      googlePlay: String,
      flipkart: String,
      kindle: String,
      publisher: String,
      bribooks: String,
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model('Book', bookSchema);

export default Book;
