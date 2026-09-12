import express from 'express';
import cors from 'cors';
import { getBooks, getBookById, getReviews, createReview, createMessage } from './controllers/mockController.js';

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
app.get('/', (req, res) => res.send('API is running in temporary memory mode...'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} in mock database mode`));
