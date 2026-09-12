import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-[#F5EBDD] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-cursive text-[#2A1812] mb-4">About Me</h1>
          <div className="w-24 h-[1px] bg-[#A97872] mx-auto"></div>
        </motion.div>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20">
          
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative group p-4 bg-white shadow-xl rotate-[-2deg] transition-transform hover:rotate-0 duration-500">
              <img 
                src="/images/about me.jpeg" 
                alt="Mehak Sethi" 
                className="w-72 md:w-[400px] h-auto object-cover border-4 border-[#FDFBF7]"
              />
              <p className="text-center font-cursive text-xl text-[#3A241A] mt-4">Mehak Sethi</p>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-3xl font-serif text-[#2A1812] mb-6">Hello, I'm Mehak.</h2>
            
            <div className="space-y-6 text-lg text-[#3A241A]/80 leading-relaxed font-sans">
              <p>
                I believe that words have the power to heal, inspire, and connect us in ways nothing else can. My journey as an author and poetess is fueled by a deep passion for storytelling and a desire to capture the beautiful, complex emotions of the human experience.
              </p>
              <p>
                When I'm not writing, you can find me exploring new places, enjoying a warm cup of coffee, and finding inspiration in the everyday moments.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-cursive text-4xl text-[#A97872]">With love,</p>
              <p className="font-cursive text-5xl text-[#2A1812] mt-2 ml-4">Mehak</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;


