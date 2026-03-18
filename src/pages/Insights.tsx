import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Globe, Cpu, Layers, MessageSquare, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

const clients = [
  { name: "Kelkem India Pvt Ltd", logo: "https://picsum.photos/seed/kelkem/300/150", industry: "Manufacturing" },
  { name: "AJIS International", logo: "https://picsum.photos/seed/ajis/300/150", industry: "Education" },
  { name: "TechVision Global", logo: "https://picsum.photos/seed/techvision/300/150", industry: "Technology" },
  { name: "EduNext Systems", logo: "https://picsum.photos/seed/edunext/300/150", industry: "EdTech" },
  { name: "Global Solutions", logo: "https://picsum.photos/seed/global/300/150", industry: "Consulting" },
  { name: "Innovate AI", logo: "https://picsum.photos/seed/innovate/300/150", industry: "Artificial Intelligence" },
  { name: "Future Soft", logo: "https://picsum.photos/seed/future/300/150", industry: "Software" },
  { name: "Cloud Nine", logo: "https://picsum.photos/seed/cloud/300/150", industry: "Cloud Services" },
];

export const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 relative overflow-hidden">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Building2 size={14} /> Global Partnerships
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Trusted by <span className="text-gradient">Industry Leaders</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We collaborate with forward-thinking brands and institutions to build the next generation of digital excellence.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Globe, label: "Global Reach", value: "12+ Countries" },
            { icon: ShieldCheck, label: "Trusted Brands", value: "150+" },
            { icon: Zap, label: "Projects Delivered", value: "500+" },
            { icon: ArrowRight, label: "Client Retention", value: "95%" }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/5 text-center group hover:border-brand-primary/30 transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-brand-primary mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} />
              </div>
              <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass p-8 rounded-[2rem] border border-white/5 flex flex-col items-center justify-center group hover:border-brand-primary/40 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-full aspect-[3/2] rounded-xl overflow-hidden mb-6 bg-white/5 flex items-center justify-center p-4">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="text-center relative z-10">
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-brand-primary transition-colors">{client.name}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono">{client.industry}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center glass p-16 rounded-[4rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6">Be Our Next <span className="text-gradient">Success Story</span></h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            Join the ranks of leading organizations that have transformed their future with BN INTELHUB.
          </p>
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            Start Your Journey <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
