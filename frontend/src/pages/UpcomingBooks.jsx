import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const UpcomingBooks = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/images/upcoming book insights.jpeg',
    '/images/upcoming book insights2.jpeg'
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F5EBDD] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-sm tracking-[0.2em] text-[#A97872] uppercase mb-4">Sneak Peek</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-[#2A1812] mb-6">Upcoming Books</h2>
          <p className="text-xl font-cursive text-[#3A241A] mb-4">A glimpse into the mystery of what's coming next...</p>
          <div className="w-24 h-[1px] bg-[#A97872] mx-auto mt-8"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex flex-col items-center gap-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full text-center max-w-2xl"
          >
            <p className="text-lg text-[#3A241A]/80 leading-relaxed font-sans mb-8">
              I am currently working on something very special. While I can't reveal everything just yet, here are a few exclusive insights and snippets from my upcoming project!
            </p>
          </motion.div>

          {/* Image Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full max-w-4xl relative"
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-white p-4 shadow-xl border border-[#3A241A]/10 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Upcoming Book Insight" 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-full max-h-full object-contain"
                />
              </AnimatePresence>

              {/* Controls */}
              <button 
                onClick={() => setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1))}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-[#3A241A] hover:bg-[#3A241A] hover:text-[#E8D8C2] shadow-lg transition-colors border border-[#3A241A]/20"
              >
                &#8592;
              </button>
              <button 
                onClick={() => setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1))}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 text-[#3A241A] hover:bg-[#3A241A] hover:text-[#E8D8C2] shadow-lg transition-colors border border-[#3A241A]/20"
              >
                &#8594;
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-[#3A241A]' : 'bg-[#3A241A]/30 hover:bg-[#3A241A]/60'}`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default UpcomingBooks;
