import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/warp_stream_remix.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Atmospheric Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Neon Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-brand-primary/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-secondary/10 blur-[150px] rounded-full animate-pulse delay-700" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-dark/50 to-bg-dark" />
      </div>

      {/* Content Layer */}
      <div className="relative z-20 container mx-auto px-6 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-primary/30 bg-brand-primary/5 backdrop-blur-md mb-8 pointer-events-auto"
        >
          <Sparkles className="w-4 h-4 text-brand-primary animate-pulse" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-brand-primary">
            Pioneering the Future of Intelligence
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-tight leading-[0.9] mb-8">
            Next-Gen <br />
            <span className="text-gradient">AI Solutions</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Empowering global enterprises with autonomous neural architectures and 
          hyper-scale intelligence. BN INTELHUB is where vision meets execution.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto"
        >
          <button className="group relative px-10 py-5 bg-paper text-black font-mono font-bold uppercase tracking-wider rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl">
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-primary to-transparent" />
      </motion.div>
    </section>
  );
}
