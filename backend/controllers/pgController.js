import initialBooks from './data.js';
import { getPool } from '../config/db.js';

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
  const pool = getPool();
  if (!pool) return res.json([]); // Return empty if no DB

  try {
    const result = await pool.query("SELECT * FROM reviews WHERE status = 'approved' ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching reviews' });
  }
};

export const createReview = async (req, res) => {
  const pool = getPool();
  if (!pool) return res.status(500).json({ message: 'Database not connected' });

  const { name, bookId, rating, reviewText } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO reviews (name, "bookId", rating, "reviewText", status) VALUES ($1, $2, $3, $4, 'approved') RETURNING *`,
      [name, bookId, rating, reviewText]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Invalid review data' });
  }
};

// Messages
export const createMessage = async (req, res) => {
  const pool = getPool();
  if (!pool) return res.status(500).json({ message: 'Database not connected' });

  const { name, email, reason, message } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO messages (name, email, reason, message) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, email, reason, message]
    );
    console.log("New Message Received:", result.rows[0]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ message: 'Invalid message data' });
  }
};
