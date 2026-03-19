import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-primary/10 blur-[120px] rounded-full" />
          
          <div className="relative flex flex-col items-center gap-8">
            {/* Logo Animation */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img 
                src="/logo.png" 
                alt="BN INTELHUB" 
                className="h-20 w-auto object-contain brightness-125"
                referrerPolicy="no-referrer"
              />
              <motion.div 
                className="absolute -inset-4 border border-brand-primary/20 rounded-full"
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ rotate: { duration: 8, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity } }}
              />
            </motion.div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-2">
              <motion.span 
                className="text-[10px] font-mono uppercase tracking-[0.4em] text-brand-primary/60"
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Initializing Systems
              </motion.span>
              
              {/* Progress Bar Container */}
              <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-brand-primary shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
              
              <span className="text-[10px] font-mono text-white/30 tabular-nums">
                {Math.floor(progress)}%
              </span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-12 left-12 flex flex-col gap-1">
            <div className="w-12 h-[1px] bg-brand-primary/20" />
            <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest">BN-INTELHUB-OS v2.0</span>
          </div>
          
          <div className="absolute top-12 right-12">
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 1, delay: i * 0.2, repeat: Infinity }}
                  className="w-1 h-1 bg-brand-primary rounded-full"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
