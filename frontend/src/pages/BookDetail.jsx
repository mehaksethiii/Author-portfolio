import { API_URL } from '../config';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';
import InteractiveBook3D from '../components/InteractiveBook3D';
import { X } from 'lucide-react';
import axios from 'axios';

const BookDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const { data } = await axios.get(``${API_URL}`/api/books/${id}`);
        setBook(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching book:', err);
        setError('Book not found.');
        setLoading(false);
      }
    };
    fetchBook();
  }, [id]);

  if (loading) return <div className="py-24 text-center">Loading...</div>;
  if (error || !book) return <div className="py-24 text-center">Book not found. <Link to="/books" className="underline">Go back</Link></div>;

  const links = [];
  if (book.purchaseLinks) {
    if (book.purchaseLinks.amazon) links.push({ name: 'Amazon', url: book.purchaseLinks.amazon });
    if (book.purchaseLinks.googlePlay) links.push({ name: 'Google Play Books', url: book.purchaseLinks.googlePlay });
    if (book.purchaseLinks.flipkart) links.push({ name: 'Flipkart', url: book.purchaseLinks.flipkart });
    if (book.purchaseLinks.kindle) links.push({ name: 'Kindle', url: book.purchaseLinks.kindle });
    if (book.purchaseLinks.publisher) links.push({ name: 'JEC Publication', url: book.purchaseLinks.publisher });
    if (book.purchaseLinks.bribooks) links.push({ name: 'Bribooks', url: book.purchaseLinks.bribooks });
  }

  const handlePdfRequest = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    try {
      await axios.post('`${API_URL}`/api/messages', {
        name: formData.name,
        email: formData.email,
        reason: 'PDF Purchase Request',
        message: `Requesting PDF for book: ${book.title}. ${formData.message}`
      });
      setSubmitStatus('success');
      alert("Your request for the PDF has been sent. Mehak will contact you with the payment QR code shortly.");
      setIsModalOpen(false);
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('');
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
      alert("There was an error submitting your request. Please try again.");
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Book Viewer */}
          <div className="w-full lg:w-1/2 sticky top-28 flex items-center justify-center">
            <div className="w-full h-[600px] flex items-center justify-center">
              <InteractiveBook3D 
                frontCoverUrl={(() => {
                  if (book.title === "You're My Favourite Memory") return "/images/front-cover.jpeg";
                  if (book.title === "My Poetry") return "/images/my poetryy BOOK.jpeg";
                  if (book.title === "Whispers of Serenity") return "/images/whispers-cover.png";
                  return "/images/fav-memory-cover.jpeg";
                })()}
                backCoverUrl={(() => {
                  if (book.title === "You're My Favourite Memory") return "/images/back-cover.jpeg";
                  if (book.title === "My Poetry") return "/images/my poetryy BOOK.jpeg"; 
                  if (book.title === "Whispers of Serenity") return "/images/whispers-cover.png"; 
                  return "/images/back-cover.jpeg";
                })()}
              />
            </div>
          </div>

          {/* Details */}
          <div className="w-full lg:w-1/2 pt-10">
            <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
              <p className="text-xs tracking-[0.2em] uppercase text-charcoal/50 dark:text-cream/50 mb-4">{book.type}</p>
              <h1 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">{book.title}</h1>
              {book.isFeatured && (
                <motion.p 
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-lg italic font-serif text-charcoal/70 dark:text-cream/70 mb-8 border-l-2 border-burgundy dark:border-dustyRose pl-6"
                >
                  "She remembered who she was and the game changed!!!"
                </motion.p>
              )}
              <div className="prose dark:prose-invert mb-12">
                <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed whitespace-pre-line mb-8">{book.description}</p>
                
                {book.title === "You're My Favourite Memory" && (
                  <div className="border-t border-charcoal/10 dark:border-cream/10 pt-8 mt-8 flex flex-col sm:flex-row gap-6 items-start">
                    <img 
                      src="/images/author-pic.jpeg" 
                      alt="Mehak Sethi" 
                      className="w-32 h-32 rounded-full object-cover shadow-md border-2 border-white dark:border-[var(--color-dark-brown)] shrink-0"
                    />
                    <div>
                      <h3 className="font-serif text-2xl mb-4">Written by Mehak Sethi</h3>
                      <p className="text-charcoal/80 dark:text-cream/80 leading-relaxed whitespace-pre-line">
                        Mehak Sethi is a girl from Uttarakhand, studying in university, who has a wonderful avocation of writing her emotions through poetic lines. She expresses various sentiments in her verses and this book includes a few heartfelt and mesmerizing collection of utterances wrapped in her first novel, where her characters Elena and Yuki are ready to spread their magical essence in the air.
                        
                        These characters will capture your heart!
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {links.length > 0 && (
                <div className="mb-12">
                  <h3 className="text-sm tracking-widest uppercase font-semibold mb-6">Where to Read / Buy</h3>
                  <div className="flex flex-wrap gap-4">
                    {links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 border border-charcoal/20 dark:border-cream/20 hover:border-charcoal dark:hover:border-cream transition-colors text-sm tracking-wide font-medium"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {book.type === 'Novel' && (
                <div className="bg-cream dark:bg-[var(--color-dark-brown)] p-8 border border-charcoal/5 dark:border-cream/5">
                  <h3 className="font-serif text-2xl mb-2">Get Online PDF — ₹99</h3>
                  <p className="text-sm text-charcoal/60 dark:text-cream/60 mb-6">
                    Prefer a digital copy directly from the author? Send a request and receive a secure payment QR code via email.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto px-8 py-3 bg-burgundy text-cream hover:bg-opacity-90 dark:bg-dustyRose dark:text-charcoal transition-colors font-medium tracking-wide"
                  >
                    Request PDF
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* PDF Request Modal */}
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
              className="bg-cream dark:bg-[var(--color-dark-brown)] p-8 max-w-md w-full relative shadow-2xl"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-charcoal/50 hover:text-charcoal dark:text-cream/50 dark:hover:text-cream"
              >
                <X size={20} />
              </button>
              
              <h2 className="text-2xl font-serif mb-2">Request PDF Copy</h2>
              <p className="text-sm text-charcoal/60 dark:text-cream/60 mb-6">
                Fill out the details below. I will send you an email with a payment QR code for ₹99. Once paid, you'll receive the PDF securely.
              </p>

              <form onSubmit={handlePdfRequest} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Name</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Email Address</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest mb-2 opacity-70">Message (Optional)</label>
                  <textarea rows="3" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full p-3 bg-transparent border border-charcoal/20 dark:border-cream/20 focus:outline-none focus:border-burgundy dark:focus:border-dustyRose transition-colors"></textarea>
                </div>
                <button type="submit" disabled={submitStatus === 'submitting'} className="w-full py-3 bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:bg-burgundy dark:hover:bg-dustyRose transition-colors font-medium tracking-wide mt-4 disabled:opacity-50">
                  {submitStatus === 'submitting' ? 'Sending...' : 'Send Request'}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookDetail;

