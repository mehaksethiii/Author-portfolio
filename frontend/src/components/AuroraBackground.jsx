import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const AuroraBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Smooth springs for the interactive light
  const springConfig = { damping: 40, stiffness: 50, mass: 2 };
  const smoothX = useSpring(mousePos.x, springConfig);
  const smoothY = useSpring(mousePos.y, springConfig);

  useEffect(() => {
    // Disable heavy mouse tracking on touch devices for performance
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX);
      smoothY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [smoothX, smoothY]);

  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 mix-blend-multiply opacity-60 dark:mix-blend-screen dark:opacity-40">
      
      {/* Background Aurora Orbs */}
      {!prefersReducedMotion && (
        <>
          <motion.div
            animate={{
              x: ['0%', '20%', '-20%', '0%'],
              y: ['0%', '-20%', '20%', '0%'],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] opacity-30"
            style={{ background: 'radial-gradient(circle, #F5EBDD, transparent)' }}
          />
          <motion.div
            animate={{
              x: ['0%', '-30%', '10%', '0%'],
              y: ['0%', '30%', '-10%', '0%'],
              scale: [1, 0.8, 1.1, 1],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[120px] opacity-20"
            style={{ background: 'radial-gradient(circle, #F1E3C8, transparent)' }}
          />
          <motion.div
            animate={{
              x: ['0%', '40%', '-10%', '0%'],
              y: ['0%', '10%', '40%', '0%'],
              scale: [1, 1.3, 0.8, 1],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
            className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] rounded-full blur-[90px] opacity-20"
            style={{ background: 'radial-gradient(circle, #A97872, transparent)' }}
          />
        </>
      )}

      {/* Interactive Mouse Light */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full blur-[150px] opacity-30 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          x: smoothX,
          y: smoothY,
          background: 'radial-gradient(circle, #FADCB3 0%, transparent 60%)',
        }}
      />
    </div>
  );
};

export default AuroraBackground;

