import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps{
  direction: 'left' | 'right';
}

export const Section: React.FC<SectionProps> = ({ children, direction }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView){
      controls.start('show');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { 
      opacity: 0, 
      x: direction === 'left' ? '-50%' : '50%'
    },
    show: { 
      opacity: 1, 
      x: 0,
      transition: {
        delay: 0.2, 
        duration: 0.5
      }
    }
  }

  return (
    <motion.section
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
    >
      {children}
    </motion.section>
  );
}