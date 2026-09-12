import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="py-24 px-4 min-h-screen flex items-center justify-center bg-[#F5EBDD]">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center justify-center bg-white p-12 md:p-20 shadow-xl border-[8px] border-[#FDFBF7] rounded-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("/images/floral_card_border.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          
          <h1 className="text-5xl md:text-7xl font-cursive text-[#2A1812] mb-6 relative z-10">Write to Me</h1>
          <div className="w-16 h-[1px] bg-[#A97872] mb-8 relative z-10"></div>
          
          <p className="text-[#3A241A]/80 mb-12 leading-relaxed text-lg max-w-lg relative z-10 font-sans">
            Whether you want to share your thoughts on my books, request a collaboration, or just say hello - I'd absolutely love to hear from you. 
          </p>
          
          <div className="space-y-12 relative z-10 w-full">
            <div className="group">
              <h3 className="text-sm uppercase tracking-widest text-[#A97872] mb-3 font-semibold">Send an Email</h3>
              <a 
                href="mailto:sethiimehak21@gmail.com" 
                className="text-xl md:text-2xl text-[#3A241A] hover:text-[#A97872] transition-colors font-serif lowercase block p-4 border border-[#3A241A]/10 rounded bg-[#FDFBF7] hover:shadow-md max-w-md mx-auto"
              >
                sethiimehak21@gmail.com
              </a>
            </div>
            
            <div className="group">
              <h3 className="text-sm uppercase tracking-widest text-[#A97872] mb-4 font-semibold">Social Media</h3>
              <div className="flex justify-center gap-8">
                <a 
                  href="https://share.google/WeKiJ3Y4hwpEdU0oq" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block text-lg text-[#3A241A] hover:text-[#A97872] transition-colors tracking-widest uppercase font-sans border-b border-transparent hover:border-[#A97872] pb-1"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.youtube.com/@author_mehaksethi/shorts" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block text-lg text-[#3A241A] hover:text-[#A97872] transition-colors tracking-widest uppercase font-sans border-b border-transparent hover:border-[#A97872] pb-1"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;