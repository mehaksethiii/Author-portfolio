import Book from '../models/Book.js';

// @desc    Fetch all books
// @route   GET /api/books
// @access  Public
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching books' });
  }
};

// @desc    Fetch single book
// @route   GET /api/books/:id
// @access  Public
export const getBookById = async (req, res) => {
  try {
    let book;
    if (req.params.id === 'featured') {
        book = await Book.findOne({ isFeatured: true });
    } else if (req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
        book = await Book.findById(req.params.id);
    } else {
        const titleRegex = new RegExp(req.params.id.replace(/-/g, ' '), 'i');
        book = await Book.findOne({ title: titleRegex });
    }

    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching book' });
  }
};
