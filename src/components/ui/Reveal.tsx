
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  threshold?: number;
  variants?: Variants;
  className?: string;
  delay?: number;
}

const defaultVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.45, 0.05, 0.55, 0.95],
    },
  },
};

const Reveal: React.FC<RevealProps> = ({
  children,
  threshold = 0.2,
  variants = defaultVariants,
  className = '',
  delay = 0,
}) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            controls.start('visible');
            setHasAnimated(true);
          }, delay);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, threshold, hasAnimated, delay]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
