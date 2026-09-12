import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cream dark:bg-charcoal transition-colors duration-500 z-0" />
        
        {/* Subtle background texture/particles can go here */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at center, #800020 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-charcoal dark:text-cream mb-4 tracking-wide"
          >
            Mehak Sethi
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-burgundy dark:text-dustyRose mb-12 font-medium"
          >
            Author • Poet • Storyteller
          </motion.p>

          <div className="flex flex-col gap-4 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.8, type: "spring", stiffness: 50 }}
              className="italic font-serif text-2xl md:text-3xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed"
            >
              "She remembered who she was and the game changed!!!"
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 1.0, type: "spring", stiffness: 50 }}
              className="italic font-serif text-xl md:text-2xl text-charcoal/60 max-w-2xl mx-auto leading-relaxed"
            >
              "One day, the girl with the books became the woman writing them!"
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/books" className="px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm">
              Explore My Books
            </Link>
            <Link to="/community" className="px-8 py-3 border-2 border-burgundy text-charcoal hover:bg-burgundy transition-all duration-300 tracking-wide rounded-sm">
              Read What Readers Say
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-widest mb-2 opacity-50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-charcoal to-transparent dark:from-cream dark:to-transparent" />
        </motion.div>
      </section>

      {/* About Author Section */}
      <section className="py-24 px-4 bg-cream dark:bg-charcoal border-b border-charcoal/10 dark:border-cream/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-16">
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-burgundy/20 dark:bg-dustyRose/20 transform translate-x-4 translate-y-4 rounded-full"></div>
              <img 
                src="/images/author-pic.jpeg" 
                alt="Mehak Sethi" 
                className="relative w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-[var(--color-dark-brown)]" 
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm tracking-[0.2em] text-burgundy dark:text-dustyRose uppercase mb-4">About the Author</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">Mehak Sethi</h3>
            <p className="text-charcoal/70 dark:text-cream/70 mb-6 text-lg leading-relaxed">
              I believe that words have the power to heal, inspire, and connect us in ways nothing else can. My journey as an author and poet is fueled by a deep passion for storytelling and a desire to capture the beautiful, complex emotions of the human experience.
            </p>
            <p className="text-charcoal/70 dark:text-cream/70 mb-8 text-lg leading-relaxed">
              When I'm not writing, you can find me exploring new places, enjoying a warm cup of coffee, and finding inspiration in the everyday moments.
            </p>
            <Link to="/contact" className="inline-block px-8 py-3 bg-charcoal text-cream dark:bg-cream dark:text-charcoal hover:bg-burgundy dark:hover:bg-dustyRose transition-colors font-medium tracking-wide">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Book Section Placeholder */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <img 
              src="/images/front-cover.jpeg" 
              alt="You're My Favourite Memory Cover" 
              className="max-h-[500px] w-auto object-contain shadow-2xl rounded-sm border border-charcoal/10 dark:border-cream/10"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-sm tracking-[0.2em] text-burgundy dark:text-dustyRose uppercase mb-4">Featured Novel</h2>
            <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">You're My Favourite Memory</h3>
            <div className="text-charcoal/70 dark:text-cream/70 mb-8 text-base md:text-lg leading-relaxed whitespace-pre-line">
{`This book is a romantic suspense depicting the rare kind of love that shines through challenges, proving that true connections are felt, not just remembered. The whole book revolves around the memories and true connections, giving us a gentle reminder that love is not just about memories but a feeling that transcends time and space. A story where a teenage couple is so eager to get married but their destinies have much more unpacked for them after the wedding.

The closest months of the year, yet so far.
January and December unaware of the endings and start.
It's like the nearest stars, different galaxies.
The world's greatest love stories are truly tragedies!
But is this love story a tragedy?

To explore what happens next, keep the book handy with you!`}
            </div>
            <Link to="/books/featured" className="inline-block px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm mt-4">
              Discover the Story
            </Link>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Home;
