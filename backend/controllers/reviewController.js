import Review from '../models/Review.js';

// @desc    Fetch all approved reviews
// @route   GET /api/reviews
// @access  Public
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ status: 'approved' }).populate('bookId', 'title');
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server Error fetching reviews' });
  }
};

// @desc    Create a review
// @route   POST /api/reviews
// @access  Public
export const createReview = async (req, res) => {
  try {
    const { name, bookId, rating, reviewText } = req.body;

    const review = new Review({
      name,
      bookId,
      rating,
      reviewText,
      status: 'pending' // Default status
    });

    const createdReview = await review.save();
    res.status(201).json(createdReview);
  } catch (error) {
    res.status(400).json({ message: 'Invalid review data' });
  }
};
