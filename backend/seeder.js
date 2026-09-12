import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Book from './models/Book.js';

dotenv.config();
connectDB();

const initialBooks = [
  {
    title: "You're My Favourite Memory",
    author: "Mehak Sethi",
    type: "Novel",
    description: `This book is a romantic suspense depicting the rare kind of love that shines through challenges, proving that true connections are felt, not just remembered. The whole book revolves around the memories and true connections, giving us a gentle reminder that love is not just about memories but a feeling that transcends time and space. A story where a teenage couple is so eager to get married but their destinies have much more unpacked for them after the wedding.

The closest months of the year, yet so far.
January and December unaware of the endings and start.
It's like the nearest stars, different galaxies.
The world's greatest love stories are truly tragedies!
But is this love story a tragedy?

To explore what happens next, keep the book handy with you!`,
    isFeatured: true,
    purchaseLinks: {
      amazon: "https://www.amazon.in/dp/9361754661",
      googlePlay: "https://play.google.com/store/books/details?id=MOpGEQAAQBAJ",
      flipkart: "https://www.flipkart.com/product/p/itme?pid=9789361754661",
      kindle: "https://amzn.in/d/3uq6xCl",
      publisher: "https://jecpublication.com/index.php/product/youre-my-favourite-memory/"
    }
  },
  {
    title: "My Poetry",
    author: "Mehak Sethi",
    type: "Poetry",
    description: "Where words become feelings.",
    isFeatured: false,
    purchaseLinks: {
      bribooks: "https://www.bribooks.com/bookstore/my-poetry"
    }
  },
  {
    title: "Whispers of Serenity",
    author: "Mehak Sethi",
    type: "Poetry",
    description: "Soft whispers of the heart.",
    isFeatured: false,
    purchaseLinks: {
      bribooks: "https://www.bribooks.com/bookstore/whispers-of-serenity"
    }
  }
];

const seedData = async () => {
  try {
    await Book.deleteMany();
    await Book.insertMany(initialBooks);
    console.log('Books Seeded Successfully');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
