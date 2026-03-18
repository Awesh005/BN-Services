import React from 'react';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface AIButtonProps {
  onClick: () => void;
  className?: string;
}

export const AIButton: React.FC<AIButtonProps> = ({ onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`relative group flex items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] ${className}`}
    >
      {/* Animated Gradient Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-400 animate-rotate-gradient opacity-80 group-hover:opacity-100" />
      
      {/* Inner Dark Background */}
      <div className="relative flex items-center gap-1.5 px-4 py-1.5 bg-[#050505] rounded-full z-10">
        <Sparkles size={12} className="text-cyan-400 group-hover:animate-pulse" />
        <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white">
          AI
        </span>
      </div>
    </motion.button>
  );
};
