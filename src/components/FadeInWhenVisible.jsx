// src/components/FadeInWhenVisible.jsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

function FadeInWhenVisible({ children, delay = 0, threshold = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    threshold: threshold,
    margin: "0px 0px -100px 0px"
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        visible: { 
          opacity: 1, 
          y: 0,
          scale: 1
        },
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeInWhenVisible;
