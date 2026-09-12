import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import InteractiveBook3D from '../components/InteractiveBook3D';
import AuroraBackground from '../components/AuroraBackground';
import NoiseOverlay from '../components/NoiseOverlay';
import FloatingAtmosphere from '../components/FloatingAtmosphere';
import EditorialCards from '../components/EditorialCards';

// Helper component for literary line-by-line reveal
const LiteraryQuote = ({ lines, delayOffset = 0 }) => {
  return (
    <div className="flex flex-col gap-2 mb-16">
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 15, filter: 'blur(5px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, delay: delayOffset + (i * 0.4), ease: "easeOut" }}
          className={`italic font-serif ${i === 0 ? 'text-2xl md:text-3xl text-charcoal/80' : 'text-xl md:text-2xl text-charcoal/60'} max-w-2xl mx-auto leading-relaxed`}
        >
          {line}
        </motion.div>
      ))}
    </div>
  );
};

const ManuscriptDetail = ({ className }) => (
  <motion.svg 
    initial={{ pathLength: 0, opacity: 0 }}
    whileInView={{ pathLength: 1, opacity: 0.3 }}
    viewport={{ once: true }}
    transition={{ duration: 2, ease: "easeInOut" }}
    className={className} 
    width="150" height="40" viewBox="0 0 150 40" fill="none"
  >
    <path d="M5 25C30 10 50 35 75 20C100 5 120 30 145 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </motion.svg>
);

const Home = () => {
  const { scrollY } = useScroll();
  
  // Subtle parallax transforms
  const yHero = useTransform(scrollY, [0, 1000], [0, 150]);
  const yAtmosphere = useTransform(scrollY, [0, 1000], [0, -50]);
  
  return (
    <div className="w-full relative">
      <NoiseOverlay />
      <FloatingAtmosphere />
      <AuroraBackground />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Top Left Quote */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="absolute top-[65px] left-4 md:top-[75px] md:left-8 z-20"
        >
          <p className="italic font-serif text-xs md:text-base text-[#3A241A]/70 whitespace-nowrap">
            "One day, the girl with the books became the woman writing them!"
          </p>
        </motion.div>
        
        {/* Parallax wrapper for hero text */}
        <motion.div style={{ y: yHero }} className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-7xl md:text-8xl lg:text-9xl font-cursive text-charcoal dark:text-cream mb-4 tracking-wide relative"
          >
            Mehak Sethi
            <ManuscriptDetail className="absolute -bottom-8 right-0 text-burgundy dark:text-dustyRose" />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase text-burgundy dark:text-dustyRose mb-12 font-medium"
          >
            Author � poetess � Storyteller
          </motion.p>

          <LiteraryQuote 
            lines={[
              '"She remembered who she was and the game changed!!!"'
            ]}
            delayOffset={0.8}
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link to="/books" className="px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm hover:scale-[1.02]">
              Explore My Books
            </Link>
            <Link to="/community" className="px-8 py-3 border-2 border-burgundy text-charcoal hover:bg-burgundy transition-all duration-300 tracking-wide rounded-sm hover:scale-[1.02]">
              Read What Readers Say
            </Link>
          </motion.div>
        </motion.div>

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
        <section className="py-24 px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div 
              className="w-full relative rounded-xl shadow-lg p-12 md:p-24 overflow-hidden"
              style={{
                backgroundImage: "url('/images/minimal_thin_border_landscape.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
            >
              <div className="flex flex-col md:flex-row-reverse items-center gap-16 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="w-full md:w-1/2 flex justify-center"
                >
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#A97872]/20 transform translate-x-4 translate-y-4 rounded-full transition-transform group-hover:translate-x-6 group-hover:translate-y-6"></div>
                    <img 
                      src="/images/author-pic.jpeg" 
                      alt="Mehak Sethi" 
                      className="relative w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-xl border-[6px] border-[#FDFBF7]" 
                    />
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="w-full md:w-1/2 text-center md:text-left relative"
                >
                  <h2 className="text-sm tracking-[0.2em] text-[#A97872] uppercase mb-4">About the Author</h2>
                  <h3 className="text-6xl md:text-7xl font-cursive text-[#2A1812] mb-6 leading-tight">Mehak Sethi</h3>
                  <p className="text-[#3A241A]/80 mb-6 text-lg leading-relaxed">
                    I believe that words have the power to heal, inspire, and connect us in ways nothing else can. My journey as an author and poetess is fueled by a deep passion for storytelling and a desire to capture the beautiful, complex emotions of the human experience.
                  </p>
                  <p className="text-[#3A241A]/80 mb-8 text-lg leading-relaxed">
                    When I'm not writing, you can find me exploring new places, enjoying a warm cup of coffee, and finding inspiration in the everyday moments.
                  </p>
                  <Link to="/contact" className="inline-block px-8 py-3 bg-[#3A241A] text-[#F5EBDD] hover:bg-[#A97872] transition-colors font-medium tracking-wide">
                    Get in Touch
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

      {/* Featured Book Section */}
      <section className="py-24 px-4 bg-white/60 dark:bg-charcoal/60 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="w-full md:w-1/2 flex items-center justify-center relative"
          >
            <div className="absolute inset-0 bg-radial-gradient from-burgundy/5 to-transparent blur-3xl rounded-full" />
            <div className="w-full h-[500px] relative z-10">
              <InteractiveBook3D 
                frontCoverUrl="/images/front-cover.jpeg"
                backCoverUrl="/images/back-cover.jpeg"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-sm tracking-[0.2em] text-burgundy dark:text-dustyRose uppercase mb-4">Featured Novel</h2>
            <h3 className="text-6xl md:text-7xl font-cursive mb-6 leading-tight">You're My Favourite Memory</h3>
            <div className="text-charcoal/70 dark:text-cream/70 mb-8 text-base md:text-lg leading-relaxed whitespace-pre-line">
{`This book is a romantic suspense depicting the rare kind of love that shines through challenges, proving that true connections are felt, not just remembered. The whole book revolves around the memories and true connections, giving us a gentle reminder that love is not just about memories but a feeling that transcends time and space. A story where a teenage couple is so eager to get married but their destinies have much more unpacked for them after the wedding.

The closest months of the year, yet so far.
January and December unaware of the endings and start.
It's like the nearest stars, different galaxies.
The world's greatest love stories are truly tragedies!
But is this love story a tragedy?

To explore what happens next, keep the book handy with you!`}
            </div>
            <Link to="/books/featured" className="inline-block px-8 py-3 bg-burgundy text-charcoal hover:bg-dustyRose transition-all duration-300 font-medium tracking-wide rounded-sm shadow-sm mt-4 hover:-translate-y-1">
              Discover the Story
            </Link>
          </motion.div>
        </div>
      </section>
      
      <EditorialCards />
    </div>
  );
};

export default Home;



















