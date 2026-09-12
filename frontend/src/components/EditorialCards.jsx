import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const EditorialCard = ({ number, title, desc, linkText, to, imageSrc }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  
  // 3D tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onClick={() => navigate(to)} className="relative group w-full h-[450px] rounded-xl bg-[#E8D8C2] border border-[#3A241A]/15 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(58,36,26,0.15)] flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Subtle paper noise texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none z-0"
        style={{
          background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Image Top Half */}
      <div className="w-full h-1/2 relative overflow-hidden bg-[#3A241A]/5 border-b border-[#3A241A]/10">
        <motion.img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Number Badge */}
        <div className="absolute top-4 left-4 bg-[#F5EBDD]/90 backdrop-blur-sm px-3 py-1 rounded-sm border border-[#3A241A]/10">
          <span className="text-[10px] font-serif italic text-[#B89A62] tracking-widest block">
            {number}
          </span>
        </div>
      </div>

      {/* Content Bottom Half */}
      <div className="w-full h-1/2 p-6 flex flex-col justify-between relative z-10 bg-[#E8D8C2]/50">
        {/* Handwritten line detail (appears on hover) */}
        <motion.svg 
          className="absolute top-6 right-6 text-[#A97872] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          width="40" height="20" viewBox="0 0 40 20" fill="none"
          style={{ transform: "translateZ(30px)" }}
        >
          <path d="M2 15C10 5 20 18 38 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </motion.svg>

        <div>
          <h3 style={{ transform: "translateZ(30px)" }} className="text-2xl font-serif text-[#2A1812] mb-3">
            {title}
          </h3>
          <p style={{ transform: "translateZ(20px)" }} className="text-[#3A241A]/70 text-sm leading-relaxed">
            {desc}
          </p>
        </div>

        <div style={{ transform: "translateZ(40px)" }}>
          <Link 
            to={to} 
            className="inline-flex items-center text-[11px] tracking-[0.2em] uppercase text-[#A97872] group-hover:text-[#3A241A] transition-colors font-medium relative"
          >
            {linkText}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#3A241A] transition-all duration-300 group-hover:w-full" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const EditorialCards = () => {
  const cards = [
    { num: "01", title: "My Books", desc: "Stories written from memories, imagination, and everything in between.", link: "Explore Books", to: "/books", img: "/images/books_bundle.jpg" },
    { num: "02", title: "About Me", desc: "Computer science student, novelist, and storyteller.", link: "Meet the Author", to: "/about", img: "/images/author-pic.jpeg" },
    { num: "03", title: "Poetry Journal", desc: "Thoughts, poems, drafts, and little pieces of my writing life.", link: "Read Journal", to: "/poetry", img: "/images/poetry_journal.jpg" },
    { num: "04", title: "Currently Reading", desc: "Books that are inspiring me lately.", link: "View Reading List", to: "/currently-reading", img: "/images/currently_reading.jpg" },
    { num: "05", title: "Upcoming Books", desc: "A glimpse into the mystery of what's coming next...", link: "Sneak Peek", to: "/upcoming-books", img: "/images/upcoming_mystery.jpg" },
    { num: "06", title: "Connect", desc: "For readers, writers, and anyone who loves a good story.", link: "Get in Touch", to: "/contact", img: "/images/connect_envelope.jpg" }
  ];

  return (
    <section className="py-32 px-4 relative z-10 bg-transparent perspective-[1000px]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm tracking-[0.2em] text-[#A97872] uppercase mb-4">The Literary World</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-[#2A1812]">Chapters & Pages</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="h-full">
              <EditorialCard 
                number={card.num}
                title={card.title}
                desc={card.desc}
                linkText={card.link}
                to={card.to}
                imageSrc={card.img}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditorialCards;









