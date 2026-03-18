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
      className={`relative group flex items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] ${className}`}
    >
      {/* Purple Border Glow Effect */}
      <div className="absolute inset-0 rounded-full border-2 border-[#8B5CF6] opacity-80 group-hover:opacity-100 shadow-[0_0_10px_rgba(139,92,246,0.3)] transition-all duration-300" />
      
      {/* Inner Dark Background */}
      <div className="relative flex flex-col items-center justify-center w-10 h-10 bg-[#050505] rounded-full z-10 -space-y-1">
        <Sparkles size={12} className="text-[#22D3EE] drop-shadow-[0_0_5px_rgba(34,211,238,0.5)] group-hover:animate-pulse" />
        <span className="text-[8px] font-display font-black tracking-tighter text-white relative">
          AI
          {/* Glitch Effect Layers */}
          <span className="absolute inset-0 text-[#FF0080] opacity-0 group-hover:opacity-70 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-all duration-100 mix-blend-screen pointer-events-none">AI</span>
          <span className="absolute inset-0 text-[#00FFFF] opacity-0 group-hover:opacity-70 group-hover:translate-x-[-1px] group-hover:translate-y-[1px] transition-all duration-100 mix-blend-screen pointer-events-none">AI</span>
        </span>
      </div>
    </motion.button>
  );
};
