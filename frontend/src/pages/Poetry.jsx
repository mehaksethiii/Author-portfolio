import { motion } from 'framer-motion';

const Poetry = () => {
  return (
    <div className="py-24 px-4 min-h-screen bg-[#F5EBDD]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight text-[#2A1812]">Welcome to the world of Eunonia.</h1>
          <p className="text-[#A97872] tracking-widest uppercase text-sm mb-12 font-medium">Poetry by Mehak!!</p>
          
          <div className="w-full max-w-sm mx-auto">
            <img 
              src="/images/EUNONIA.jpeg" 
              alt="Eunonia" 
              className="w-full h-auto object-cover rounded-sm shadow-xl border border-charcoal/5"
            />
          </div>

          {/* YouTube Short Video */}
          <div className="mt-24 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-cursive text-[#A97872] mb-6">A glimpse of my spoken poetry</h3>
            <div className="relative w-full max-w-[315px] aspect-[9/16] rounded-xl overflow-hidden shadow-2xl border-[6px] border-white bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/abzf-dBTMqQ?rel=0" 
                title="YouTube Shorts" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="absolute inset-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </motion.div>

        <div className="space-y-24 mt-24">
          {/* Poem 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <div className="w-full md:w-1/2">
              <img src="/images/word poem1.jpeg" alt="Poem 1" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem1 2ndpic.jpeg" alt="Poem 1 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
          </motion.div>

          {/* Poem 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <div className="w-full md:w-1/2">
              <img src="/images/poem2.jpeg" alt="Poem 2" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem2 2nd pic.jpeg" alt="Poem 2 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
          </motion.div>

          {/* Poem 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <div className="w-full md:w-1/2">
              <img src="/images/poem3.jpeg" alt="Poem 3" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem3 2ndpic.jpeg" alt="Poem 3 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
          </motion.div>

          {/* Poem 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <div className="w-full md:w-1/2">
              <img src="/images/poem4.jpeg" alt="Poem 4" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem4 2ndpic.jpeg" alt="Poem 4 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
          </motion.div>

          {/* Poem 5 */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row gap-8 items-center justify-center"
          >
            <div className="w-full md:w-1/2">
              <img src="/images/poem5.jpeg" alt="Poem 5" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem5 2ndpic.jpeg" alt="Poem 5 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain border-4 border-white" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
