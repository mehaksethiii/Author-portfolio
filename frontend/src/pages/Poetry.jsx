import { motion } from 'framer-motion';

const Poetry = () => {
  const poems = [
    {
      title: "Where Words Become Feelings",
      book: "My Poetry",
      lines: [
        "In the quiet of the night,",
        "when shadows stretch their arms,",
        "I find solace in the ink,",
        "a refuge from the alarms.",
        "Every word a falling tear,",
        "every stanza a quiet breath."
      ]
    },
    {
      title: "Silent Echoes",
      book: "Whispers of Serenity",
      lines: [
        "The moon does not apologize",
        "for needing the dark to shine.",
        "And I will not apologize",
        "for the moments I make mine.",
        "Serenity is not silence,",
        "it is hearing your own soul."
      ]
    }
  ];

  return (
    <div className="py-24 px-4 min-h-screen bg-cream">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-serif mb-4 leading-tight text-charcoal">Welcome to the world of Eunonia.</h1>
          <p className="text-charcoal/60 tracking-widest uppercase text-sm mb-12 font-medium">Poetry by Mehak!!</p>
          
          <div className="w-full max-w-sm mx-auto">
            <img 
              src="/images/EUNONIA.jpeg" 
              alt="Eunonia" 
              className="w-full h-auto object-cover rounded-sm shadow-xl border border-charcoal/5"
            />
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
              <img src="/images/word poem1.jpeg" alt="Poem 1" className="w-full h-auto rounded-sm shadow-lg object-contain" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem1 2ndpic.jpeg" alt="Poem 1 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain" />
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
              <img src="/images/poem2.jpeg" alt="Poem 2" className="w-full h-auto rounded-sm shadow-lg object-contain" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem2 2nd pic.jpeg" alt="Poem 2 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain" />
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
              <img src="/images/poem3.jpeg" alt="Poem 3" className="w-full h-auto rounded-sm shadow-lg object-contain" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem3 2ndpic.jpeg" alt="Poem 3 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain" />
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
              <img src="/images/poem4.jpeg" alt="Poem 4" className="w-full h-auto rounded-sm shadow-lg object-contain" />
            </div>
            <div className="w-full md:w-1/2">
              <img src="/images/poem4 2ndpic.jpeg" alt="Poem 4 illustration" className="w-full h-auto rounded-sm shadow-lg object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Poetry;
