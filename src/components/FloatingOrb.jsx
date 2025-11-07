import { motion } from 'framer-motion';

const FloatingOrb = ({ 
  size = 300, 
  color = '#E8E6FF', 
  blur = 100,
  initialX = 0,
  initialY = 0,
  animationDuration = 20,
  moveRange = 30
}) => {
  
  const floatingAnimation = {
    x: [initialX, initialX + moveRange, initialX - moveRange, initialX],
    y: [initialY, initialY - moveRange, initialY + moveRange, initialY],
  };

  return (
    <motion.div
      className='absolute rounded-full pointer-events-none'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        left: `${initialX}px`,
        top: `${initialY}px`,
      }}
      animate={floatingAnimation}
      transition={{
        duration: animationDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export default FloatingOrb;