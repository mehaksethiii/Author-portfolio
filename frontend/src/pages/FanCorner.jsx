import { API_URL } from '../config';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { X } from 'lucide-react';

const FanCorner = () => {
  const [activeTab, setActiveTab] = useState('reviews'); // 'reviews' or 'community'
  const [reviews, setReviews] = useState([]);
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    bookId: '',
    rating: 5,
    reviewText: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [reviewsRes, booksRes] = await Promise.all([
          axios.get(`${API_URL}/api/reviews`),
          axios.get(`${API_URL}/api/books`)
        ]);
        setReviews(reviewsRes.data);
        setBooks(booksRes.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };
    fetchData();
  }, []);

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    try {
      const res = await axios.post(${API_URL}/api/reviews, formData);
      setSubmitStatus('success');
      // Map book title for instant display
      const selectedBook = books.find(b => b._id === formData.bookId);
      const newReview = { ...res.data, bookId: { _id: formData.bookId, title: selectedBook ? selectedBook.title : '' } };
      setReviews([newReview, ...reviews]);
      alert("Your review has been successfully submitted!");
      setIsModalOpen(false);
      setFormData({ name: '', bookId: '', rating: 5, reviewText: '' });
      setSubmitStatus('');
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      alert("There was an error submitting your review. Please try again.");
    }
  };

  return (
    <div className="py-24 px-4 min-h-screen relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif mb-4">Reader's Corner</h1>
          <p className="text-charcoal/60 dark:text-cream/60 tracking-widest uppercase text-sm">Where our stories meet</p>
        </motion.div>

        <div className="flex justify-center space-x-8 border-b border-charcoal/10 dark:border-cream/10 mb-12">
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 text-sm tracking-widest uppercase transition-colors relative ${activeTab === 'reviews' ? 'text-burgundy dark:text-dustyRose font-semibold' : 'text-charcoal/50 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream'}`}
          >
            Reviews
            {activeTab === 'reviews' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy dark:bg-dustyRose" />}
          </button>
          <button 
            onClick={() => setActiveTab('community')}
            className={`pb-4 text-sm tracking-widest uppercase transition-colors relative ${activeTab === 'community' ? 'text-burgundy dark:text-dustyRose font-semibold' : 'text-charcoal/50 dark:text-cream/50 hover:text-charcoal dark:hover:text-cream'}`}
          >
            Fan Messages
            {activeTab === 'community' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-[2px] bg-burgundy dark:bg-dustyRose" />}
          </button>
        </div>

        {activeTab === 'reviews' && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <div key={review._id} className="bg-white dark:bg-[var(--color-dark-brown)] p-8 border border-charcoal/5 dark:border-cream/5 shadow-sm flex flex-col">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-subtleGold text-lg">★</span>
                  ))}
                </div>
                <p className="text-charcoal/80 dark:text-cream/80 italic font-serif flex-grow mb-6 text-lg">"{review.reviewText}"</p>
                <div>
                  <p className="font-semibold tracking-wide text-sm">{review.name}</p>
                  <p className="text-xs uppercase tracking-widest opacity-50 mt-1">{review.bookId?.title}</p>
                </div>
              </div>
            ))}
            
            <div className="bg-cream/50 dark:bg-charcoal/30 p-8 border border-dashed border-charcoal/20 dark:border-cream/20 flex flex-col items-center justify-center text-center">
              <h3 className="font-serif text-2xl mb-2">Leave a Review</h3>
              <p className="text-sm opacity-60 mb-6">Have you read one of the books? Share your thoughts.</p>
              <button onClick={() => setIsModalOpen(true)} className="px-6 py-2 border border-charcoal dark:border-cream hover:bg-charcoal hover:text-cream dark:hover:bg-cream dark:hover:text-charcoal transition-colors uppercase tracking-widest text-xs">
                Submit Review
              </button>
            </div>
          </motion.div>
        )}

        {activeTab === 'community' && (
          <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.5}} className="text-center py-20">
            <h2 className="text-3xl font-serif mb-4">A Space for Readers</h2>
            <p className="text-charcoal/60 dark:text-cream/60 max-w-lg mx-auto mb-8">
              Share your favorite quotes, fan art, or how these stories made you feel. This section will feature community highlights.
            </p>
            {/* For now, just a placeholder or could re-use the contact form approach */}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-charcoal/80 dark:bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-cream dark:bg-[var(--color-dark-brown)] p-8 max-w-md w-full relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-charcoal/50 hover:text-charcoal dark:text-cream/50 dark:hover:text-cream"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-serif mb-2">Submit a Review</h2>
              <p className="text-sm text-charcoal/60 dark:text-cream/60 mb-6">
                Your review will appear immediately on the site.
              </p>

              <form onSubmit={handleSubmitReview} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Select Book</label>
                  <select required value={formData.bookId} onChange={e => setFormData({...formData, bookId: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors [&>option]:bg-cream dark:[&>option]:bg-[var(--color-dark-brown)]">
                    <option value="" disabled>Choose a book</option>
                    {books.map(b => (
                      <option key={b._id} value={b._id}>{b.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Rating</label>
                  <select required value={formData.rating} onChange={e => setFormData({...formData, rating: Number(e.target.value)})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors [&>option]:bg-cream dark:[&>option]:bg-[var(--color-dark-brown)]">
                    <option value="5">5 - Excellent</option>
                    <option value="4">4 - Very Good</option>
                    <option value="3">3 - Good</option>
                    <option value="2">2 - Fair</option>
                    <option value="1">1 - Poor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Review</label>
                  <textarea required rows="4" value={formData.reviewText} onChange={e => setFormData({...formData, reviewText: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors"></textarea>
                </div>
                <button type="submit" disabled={submitStatus === 'submitting'} className="w-full py-3 bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:bg-burgundy dark:hover:bg-dustyRose transition-colors font-medium tracking-wide mt-4 disabled:opacity-50">
                  {submitStatus === 'submitting' ? 'Submitting...' : 'Submit Review'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FanCorner;




