import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import initialBooks from './data.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REVIEWS_FILE = path.join(__dirname, '..', 'data', 'reviews.json');
const MESSAGES_FILE = path.join(__dirname, '..', 'data', 'messages.json');

// Ensure data directory and files exist
if (!fs.existsSync(path.join(__dirname, '..', 'data'))) {
  fs.mkdirSync(path.join(__dirname, '..', 'data'));
}
if (!fs.existsSync(REVIEWS_FILE)) {
  fs.writeFileSync(REVIEWS_FILE, '[]');
}
if (!fs.existsSync(MESSAGES_FILE)) {
  fs.writeFileSync(MESSAGES_FILE, '[]');
}

// Helper functions to read/write
const getReviewsData = () => JSON.parse(fs.readFileSync(REVIEWS_FILE, 'utf8'));
const getMessagesData = () => JSON.parse(fs.readFileSync(MESSAGES_FILE, 'utf8'));
const saveReviewsData = (data) => fs.writeFileSync(REVIEWS_FILE, JSON.stringify(data, null, 2));
const saveMessagesData = (data) => fs.writeFileSync(MESSAGES_FILE, JSON.stringify(data, null, 2));

let books = [...initialBooks];

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
  const reviews = getReviewsData();
  res.json(reviews.filter(r => r.status === 'approved'));
};

export const createReview = async (req, res) => {
  const { name, bookId, rating, reviewText } = req.body;
  const reviews = getReviewsData();
  
  const newReview = {
    _id: Date.now().toString(),
    name,
    bookId,
    rating,
    reviewText,
    status: 'approved',
    createdAt: new Date().toISOString()
  };
  
  reviews.push(newReview);
  saveReviewsData(reviews);
  res.status(201).json(newReview);
};

// Messages
export const createMessage = async (req, res) => {
  const { name, email, reason, message } = req.body;
  const messages = getMessagesData();
  
  const newMessage = {
    _id: Date.now().toString(),
    name, email, reason, message,
    createdAt: new Date().toISOString()
  };
  
  messages.push(newMessage);
  saveMessagesData(messages);
  console.log("New Message Received:", newMessage);
  res.status(201).json(newMessage);
};
