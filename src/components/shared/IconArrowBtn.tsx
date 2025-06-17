
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface IconArrowBtnProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
  direction?: 'left' | 'right';
}

export const IconArrowBtn: React.FC<IconArrowBtnProps> = ({ 
  children, 
  type = 'button', 
  onClick, 
  variant = 'primary',
  className = '',
  direction = 'right'
}) => {
  const ArrowIcon = direction === 'left' ? ArrowLeft : ArrowRight;
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`flex items-center space-x-2 px-6 py-3 rounded-eco font-semibold transition-all duration-300 ${
        variant === 'primary' 
          ? 'eco-btn-primary' 
          : 'eco-btn-secondary'
      } ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {direction === 'left' && <ArrowIcon size={18} />}
      <span>{children}</span>
      {direction === 'right' && <ArrowIcon size={18} />}
    </motion.button>
  );
};
