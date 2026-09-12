import { API_URL } from '../config';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showInsights, setShowInsights] = useState(false);
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0);

  const insightImages = [
    '/images/memory insights1.jpeg',
    '/images/memory insights2.jpeg',
    '/images/memory insights3.jpeg',
    '/images/memory insights4.jpeg'
  ];

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const { data } = await axios.get('`${API_URL}`/api/books');
        setBooks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return <div className="py-24 px-4 min-h-screen flex items-center justify-center">Loading books...</div>;
  }

  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif mb-4">My Books</h1>
          <p className="text-charcoal/60 dark:text-cream/60 tracking-widest uppercase text-sm mb-12">Stories & Poetry</p>
          <div className="w-full max-w-4xl mx-auto overflow-hidden shadow-lg border border-charcoal/10 dark:border-cream/10 bg-white p-6 rounded-sm">
            <img src="/images/3books-group.jpeg" alt="Collection of books" className="w-full h-auto object-cover rounded-sm" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {books.map((book, index) => {
            const externalLink = book.purchaseLinks && book.purchaseLinks.bribooks 
                ? book.purchaseLinks.bribooks 
                : null;
                
            let coverSrc = null;
            if (book.title === "You're My Favourite Memory") coverSrc = "/images/fav-memory-cover.jpeg";
            else if (book.title === "My Poetry") coverSrc = "/images/my poetryy BOOK.jpeg";
            else if (book.title === "Whispers of Serenity") coverSrc = "/images/whispers-cover.png";
                
            return (
              <motion.div
                key={book._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`flex flex-col ${book.isFeatured ? 'md:col-span-3 md:flex-row items-center gap-12 bg-white dark:bg-[var(--color-dark-brown)] p-8 md:p-12 border border-charcoal/5 dark:border-cream/5 shadow-sm hover:shadow-md transition-shadow' : 'items-center text-center'}`}
              >
                <div className={`flex items-center justify-center shadow-lg overflow-hidden ${book.isFeatured ? 'w-full md:w-1/3 aspect-[2/3]' : 'w-full max-w-[280px] aspect-[2/3] mb-6 bg-white'}`}>
                  {coverSrc ? (
                    <img src={coverSrc} alt={book.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="bg-cream dark:bg-charcoal/50 w-full h-full p-6 text-center flex flex-col justify-center items-center border border-charcoal/10 dark:border-cream/10">
                      <h3 className="font-serif text-2xl mb-2">{book.title}</h3>
                      <p className="text-xs uppercase tracking-widest text-charcoal/50 dark:text-cream/50">{book.type}</p>
                    </div>
                  )}
                </div>
                
                <div className={book.isFeatured ? 'w-full md:w-2/3' : ''}>
                  {book.isFeatured && <p className="text-xs uppercase tracking-widest text-burgundy dark:text-dustyRose mb-3">Featured Novel</p>}
                  <h2 className={`${book.isFeatured ? 'text-4xl mb-4' : 'text-2xl mb-2'} font-serif`}>{book.title}</h2>
                  <p className="text-charcoal/70 dark:text-cream/70 mb-6 leading-relaxed whitespace-pre-line text-sm text-left">
                    {book.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    {externalLink ? (
                      <a
                        href={externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                      >
                        Explore {book.title}
                      </a>
                    ) : (
                      <Link
                        to={`/books/${book._id}`}
                        className="inline-block px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                      >
                        Explore Book
                      </Link>
                    )}

                    {book.title === "You're My Favourite Memory" && (
                      <button
                        onClick={() => setShowInsights(true)}
                        className="inline-block px-8 py-3 bg-[#E8D8C2] text-[#3A241A] border border-[#3A241A]/20 hover:bg-[#3A241A] hover:text-[#E8D8C2] transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                      >
                        See Insights
                      </button>
                    )}
                    
                    {book.title === "You're My Favourite Memory" && (
                      <>
                        <a
                          href={book.purchaseLinks?.amazon || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-[#FF9900] hover:text-white hover:border-[#FF9900] transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                        >
                          Amazon
                        </a>

                        <a
                          href={book.purchaseLinks?.flipkart || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-[#2874F0] hover:text-white hover:border-[#2874F0] transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                        >
                          Flipkart
                        </a>

                        <a
                          href={book.purchaseLinks?.kindle || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-[#232F3E] hover:text-white hover:border-[#232F3E] transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                        >
                          Kindle
                        </a>

                        <a
                          href={book.purchaseLinks?.googlePlay || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center px-6 py-3 border border-charcoal/30 text-charcoal hover:bg-[#4285F4] hover:text-white hover:border-[#4285F4] transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm"
                        >
                          Google Play
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Insights Modal */}
      <AnimatePresence>
        {showInsights && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-5xl bg-[#F5EBDD] rounded-xl p-8 shadow-2xl flex flex-col items-center">
              <button 
                onClick={() => setShowInsights(false)}
                className="absolute top-4 right-4 text-2xl text-[#3A241A] hover:text-[#A97872]"
              >
                &times;
              </button>
              
              <h2 className="text-3xl font-serif text-[#2A1812] mb-8">Memories & Insights</h2>
              
              <div className="relative w-full aspect-video md:aspect-[21/9] flex items-center justify-center overflow-hidden rounded-lg shadow-inner bg-white/50 border border-[#3A241A]/10">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentInsightIndex}
                    src={insightImages[currentInsightIndex]}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-[60vh] object-contain"
                  />
                </AnimatePresence>
                
                {/* Controls */}
                <button 
                  onClick={() => setCurrentInsightIndex(prev => (prev === 0 ? insightImages.length - 1 : prev - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-[#3A241A] hover:bg-white shadow-md transition-colors"
                >
                  &#8592;
                </button>
                <button 
                  onClick={() => setCurrentInsightIndex(prev => (prev === insightImages.length - 1 ? 0 : prev + 1))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/80 text-[#3A241A] hover:bg-white shadow-md transition-colors"
                >
                  &#8594;
                </button>
              </div>
              
              <div className="flex gap-2 mt-6">
                {insightImages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentInsightIndex(idx)}
                    className={`w-3 h-3 rounded-full transition-colors ${idx === currentInsightIndex ? 'bg-[#3A241A]' : 'bg-[#3A241A]/30 hover:bg-[#3A241A]/60'}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Books;

