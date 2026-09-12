// Mock database using in-memory arrays
import initialBooks from './data.js';

let books = [...initialBooks];
let reviews = [];
let messages = [];

// Books
export const getBooks = async (req, res) => {
  res.json(books);
};

export const getBookById = async (req, res) => {
  let book;
  if (req.params.id === 'featured') {
      book = books.find(b => b.isFeatured === true);
  } else {
      const titleRegex = new RegExp(req.params.id.replace(/-/g, ' '), 'i');
      book = books.find(b => titleRegex.test(b.title));
  }

  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};

// Reviews
export const getReviews = async (req, res) => {
  res.json(reviews.filter(r => r.status === 'approved'));
};

export const createReview = async (req, res) => {
  const { name, bookId, rating, reviewText } = req.body;
  const newReview = {
    _id: Date.now().toString(),
    name,
    bookId,
    rating,
    reviewText,
    status: 'approved', // Auto-approve for the shortcut
    createdAt: new Date().toISOString()
  };
  reviews.push(newReview);
  res.status(201).json(newReview);
};

// Messages
export const createMessage = async (req, res) => {
  const { name, email, reason, message } = req.body;
  const newMessage = {
    _id: Date.now().toString(),
    name, email, reason, message,
    createdAt: new Date().toISOString()
  };
  messages.push(newMessage);
  console.log("New Message Received:", newMessage);
  res.status(201).json(newMessage);
};
