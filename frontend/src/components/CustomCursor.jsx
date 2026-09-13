import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [hoverState, setHoverState] = useState('default');
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // We create 5 springs with increasing mass and damping to form a natural, physical tail
  const configs = [
    { damping: 20, stiffness: 300, mass: 0.2 },
    { damping: 25, stiffness: 250, mass: 0.5 },
    { damping: 30, stiffness: 200, mass: 0.8 },
    { damping: 35, stiffness: 150, mass: 1.2 },
    { damping: 40, stiffness: 100, mass: 1.6 },
  ];

  const tX0 = useSpring(cursorX, configs[0]); const tX1 = useSpring(cursorX, configs[1]); const tX2 = useSpring(cursorX, configs[2]); const tX3 = useSpring(cursorX, configs[3]); const tX4 = useSpring(cursorX, configs[4]); const tailsX = [tX0, tX1, tX2, tX3, tX4];
  const tY0 = useSpring(cursorY, configs[0]); const tY1 = useSpring(cursorY, configs[1]); const tY2 = useSpring(cursorY, configs[2]); const tY3 = useSpring(cursorY, configs[3]); const tY4 = useSpring(cursorY, configs[4]); const tailsY = [tY0, tY1, tY2, tY3, tY4];

  useEffect(() => {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    const updateMousePosition = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('canvas')) {
        setHoverState('drag');
      } else if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('a') || e.target.closest('button')) {
        setHoverState('link');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return null;

  // Colors transitioning from bright sunset pink to soft light brown fading out
  const colors = [
    'rgba(255, 182, 193, 0.9)', // Light sunset pink
    'rgba(254, 195, 225, 0.7)', // Soft pink
    'rgba(227, 192, 179, 0.5)', // Rose brown mix
    'rgba(208, 180, 159, 0.3)', // Light brown
    'rgba(169, 120, 114, 0.1)'  // Faded brown
  ];

  const sizes = [12, 24, 36, 48, 60]; // Tail gets wider/softer as it trails

  return (
    <>
      {tailsX.map((x, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[100] rounded-full mix-blend-multiply"
          style={{ 
            x: tailsX[i], 
            y: tailsY[i], 
            translateX: '-50%', 
            translateY: '-50%',
            filter: `blur(${i * 4 + 2}px)` // Increasing blur for dreamy light effect
          }}
          animate={{
            width: hoverState === 'drag' ? sizes[i] * 3 : sizes[i],
            height: hoverState === 'drag' ? sizes[i] * 3 : sizes[i],
            backgroundColor: colors[i],
          }}
          transition={{ type: 'spring' }}
        />
      ))}
      
      {/* DRAG text indicator attached to the first (head) element */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[101] flex items-center justify-center"
        style={{ 
          x: tailsX[0], 
          y: tailsY[0], 
          translateX: '-50%', 
          translateY: '-50%' 
        }}
      >
        {hoverState === 'drag' && (
          <span className="text-[12px] font-bold tracking-[0.3em] text-[#3A241A] drop-shadow-md">
            DRAG
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;


