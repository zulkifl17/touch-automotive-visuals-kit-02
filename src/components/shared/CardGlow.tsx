
import React from 'react';
import { motion } from 'framer-motion';

interface CardGlowProps {
  children: React.ReactNode;
  className?: string;
}

export const CardGlow: React.FC<CardGlowProps> = ({ children, className = '' }) => {
  return (
    <motion.div
      className={`eco-card p-8 ${className}`}
      whileHover={{ 
        y: -4,
        boxShadow: "0 0 8px var(--eco-leaf), 0 0 16px var(--eco-leaf)",
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
};
