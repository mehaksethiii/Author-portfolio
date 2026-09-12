import React from 'react';
import { motion } from 'framer-motion';

const CurrentlyReading = () => {
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
          <h1 className="text-sm tracking-[0.2em] text-[#A97872] uppercase mb-4">Currently Reading</h1>
          <h2 className="text-5xl md:text-6xl font-serif text-[#2A1812] mb-6">Watch Me</h2>
          <p className="text-xl font-cursive text-[#3A241A] mb-4">from the Shatter Me series</p>
          <p className="text-md uppercase tracking-widest text-[#3A241A]/60">By Tahereh Mafi</p>
          <div className="w-24 h-[1px] bg-[#A97872] mx-auto mt-8"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative group p-4 bg-white shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500 max-w-sm">
              <img 
                src="/images/cufrrently readingg shatter me.jpeg" 
                alt="Watch Me - Shatter Me Series" 
                className="w-full h-auto object-cover border-4 border-[#FDFBF7]"
              />
              <p className="text-center font-cursive text-xl text-[#3A241A] mt-4">Current Obsession</p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-3xl font-serif text-[#2A1812] mb-6">Why I'm loving it...</h3>
            
            <div className="space-y-6 text-lg text-[#3A241A]/80 leading-relaxed font-sans">
              <p>
                <strong>Watch Me</strong> is an electrifying addition to the bestselling <em>Shatter Me</em> series by Tahereh Mafi. Her writing style is so incredibly unique, poetic, and intense�it feels like you are reading someone's racing heartbeat on a page.
              </p>
              <p>
                This thrilling installment dives deep into the complex minds of the characters, unfolding dark secrets, raw emotions, and the gripping tension that Tahereh Mafi is so well known for. 
              </p>
              <p>
                As an author, I am completely fascinated by how she builds atmosphere and emotional depth. It is a beautifully written, dark, and romantic piece that completely draws you in from the very first page!
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default CurrentlyReading;
