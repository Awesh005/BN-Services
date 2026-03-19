import React from 'react';
import { motion } from 'motion/react';

interface AIButtonProps {
  onClick: () => void;
  className?: string;
}

const SoundWaveBars: React.FC = () => {
  const bars = [
    { scaleY: 0.4, anim: 'aiBtnWave1', dur: '0.85s' },
    { scaleY: 0.7, anim: 'aiBtnWave2', dur: '0.92s' },
    { scaleY: 1.0, anim: 'aiBtnWave3', dur: '0.88s' },
    { scaleY: 0.7, anim: 'aiBtnWave4', dur: '0.95s' },
    { scaleY: 0.4, anim: 'aiBtnWave5', dur: '0.80s' },
  ];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '2px', height: '12px' }}>
        {bars.map((bar, index) => (
          <div
            key={index}
            style={{
              width: '2px',
              height: `${12 * bar.scaleY}px`,
              borderRadius: '99px',
              background: '#22d3ee',
              transformOrigin: 'center',
              animation: `${bar.anim} ${bar.dur} ease-in-out infinite`,
              animationDelay: `${index * 0.09}s`,
              flexShrink: 0,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes aiBtnWave1 { 0%,100%{transform:scaleY(0.4)} 50%{transform:scaleY(1)} }
        @keyframes aiBtnWave2 { 0%,100%{transform:scaleY(0.7)} 50%{transform:scaleY(0.3)} }
        @keyframes aiBtnWave3 { 0%,100%{transform:scaleY(1)} 50%{transform:scaleY(0.5)} }
        @keyframes aiBtnWave4 { 0%,100%{transform:scaleY(0.5)} 50%{transform:scaleY(0.9)} }
        @keyframes aiBtnWave5 { 0%,100%{transform:scaleY(0.3)} 50%{transform:scaleY(0.8)} }
      `}</style>
    </>
  );
};

export const AIButton: React.FC<AIButtonProps> = ({ onClick, className = '' }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`flex relative group items-center justify-center p-[1.5px] rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-cyan-400 animate-rotate-gradient opacity-80 group-hover:opacity-100" />

      <div className="relative flex items-center gap-1.5 px-4 py-1.5 bg-[#050505] rounded-full z-10">
        <SoundWaveBars />
        <span className="text-[11px] font-display font-bold uppercase tracking-[0.2em] text-white relative">
          AI
          <span className="absolute inset-0 text-[#FF0080] opacity-0 group-hover:opacity-70 group-hover:translate-x-[1px] group-hover:translate-y-[-1px] transition-all duration-100 mix-blend-screen pointer-events-none">
            AI
          </span>
          <span className="absolute inset-0 text-[#00FFFF] opacity-0 group-hover:opacity-70 group-hover:translate-x-[-1px] group-hover:translate-y-[1px] transition-all duration-100 mix-blend-screen pointer-events-none">
            AI
          </span>
        </span>
      </div>
    </motion.button>
  );
};
