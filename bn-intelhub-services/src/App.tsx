import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { EarthGlobe } from './components/three/EarthGlobe';
import { Footer } from './components/Footer';
import TubesCursor from './components/TubesCursor';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-bg-dark selection:bg-brand-primary/30">
      <TubesCursor />
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[100] origin-left" 
        style={{ scaleX }} 
      />

      <Navbar />
      
      <main>
        <Hero />
        <Services />
        
        {/* About Section Placeholder */}
        <section id="about" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6">
                Redefining the <br />
                <span className="text-gradient">Digital Frontier</span>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                At BN INTELHUB, we don't just build software; we craft digital ecosystems. 
                Our team of architects and engineers are dedicated to pushing the boundaries 
                of what's possible in the cloud and AI space.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-display font-bold text-brand-primary">150+</div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mt-1">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-display font-bold text-brand-secondary">12+</div>
                  <div className="text-xs uppercase tracking-widest text-white/40 mt-1">Global Partners</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-3xl blur-2xl" />
              <div className="relative h-full w-full glass rounded-3xl overflow-hidden flex items-center justify-center">
                <div className="text-8xl font-display font-bold opacity-10 select-none">HUB</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Global Presence Section */}
        <section className="py-24 overflow-hidden">
          <EarthGlobe />
        </section>

        {/* Contact Section Placeholder */}
        <section id="contact" className="py-24 px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass p-12 rounded-[3rem]"
          >
            <h2 className="text-4xl font-display font-bold mb-6">Ready to Build?</h2>
            <p className="text-white/60 mb-10">
              Join forces with BN INTELHUB and transform your vision into a high-performance reality.
            </p>
            <button className="px-10 py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-brand-primary/20">
              Contact Our Team
            </button>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
