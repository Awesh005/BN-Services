import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cpu, Zap, Shield, Globe, Layers, Database, Radio } from 'lucide-react';

export const Ecosystem: React.FC = () => {
  const nodes = [
    { icon: Cpu, title: 'AI Core', desc: 'Advanced neural networks driving intelligent automation.' },
    { icon: Database, title: 'Data Nexus', desc: 'Secure, scalable data infrastructure for the modern enterprise.' },
    { icon: Radio, title: 'Connectivity', desc: 'Seamless integration across IoT and cloud networks.' },
    { icon: Shield, title: 'Security Grid', desc: 'Military-grade protection for your digital assets.' },
    { icon: Layers, title: 'Software Stack', desc: 'Full-spectrum development from web to mobile.' },
    { icon: Zap, title: 'Energy Ops', desc: 'Optimized performance for high-load environments.' }
  ];

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(to right, #ffffff05 1px, transparent 1px), linear-gradient(to bottom, #ffffff05 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Network size={14} /> The BN Ecosystem
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
              A Connected <span className="text-gradient">Future</span>
            </h1>
            <p className="text-white/60 text-xl max-w-3xl mx-auto leading-relaxed">
              Our ecosystem is a symbiotic network of technologies, services, and expertise 
              designed to propel your business into the next dimension.
            </p>
          </motion.div>
        </div>

        {/* Central Visualization */}
        <div className="relative py-20 mb-32">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[100px] animate-pulse" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {nodes.map((node, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass p-10 rounded-[3rem] border border-white/10 hover:border-brand-primary/40 transition-all group relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-brand-primary/5 rounded-full blur-2xl group-hover:bg-brand-primary/10 transition-all" />
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary mb-8 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all">
                  <node.icon size={32} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{node.title}</h3>
                <p className="text-white/50 leading-relaxed">
                  {node.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Global Impact Section */}
        <section className="glass rounded-[4rem] p-12 md:p-20 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Global <span className="text-gradient">Reach</span></h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Our ecosystem spans across continents, connecting diverse markets and 
                industries through a unified digital thread. We don't just build software; 
                we build bridges to global opportunities.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-display font-bold text-brand-primary mb-2">150+</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Global Partners</div>
                </div>
                <div>
                  <div className="text-4xl font-display font-bold text-brand-secondary mb-2">24/7</div>
                  <div className="text-xs uppercase tracking-widest text-white/40">Network Uptime</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-brand-primary/20 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border border-brand-secondary/20 animate-spin-reverse" />
                <Globe size={120} className="text-white/20" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
