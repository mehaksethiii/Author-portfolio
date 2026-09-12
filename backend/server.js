import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { getBooks, getBookById, getReviews, createReview, createMessage } from './controllers/pgController.js';

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

const router = express.Router();
router.get('/books', getBooks);
router.get('/books/:id', getBookById);
router.get('/reviews', getReviews);
router.post('/reviews', createReview);
router.post('/messages', createMessage);

app.use('/api', router);
app.get('/', (req, res) => res.send('API is running with Postgres DB...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} with Postgres support`));
