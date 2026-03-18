import { motion } from 'motion/react';
import { Building2, Globe, ShieldCheck, Zap, MessageSquare } from 'lucide-react';

const clients = [
  { name: "Kelkem India Pvt Ltd", logo: "https://picsum.photos/seed/kelkem/400/200", industry: "Manufacturing", location: "India" },
  { name: "AJIS International", logo: "https://picsum.photos/seed/ajis/400/200", industry: "Education", location: "Global" },
  { name: "TechVision Global", logo: "https://picsum.photos/seed/techvision/400/200", industry: "Technology", location: "USA" },
  { name: "EduNext Systems", logo: "https://picsum.photos/seed/edunext/400/200", industry: "EdTech", location: "UK" },
  { name: "Global Solutions", logo: "https://picsum.photos/seed/global/400/200", industry: "Consulting", location: "Singapore" },
  { name: "Innovate AI", logo: "https://picsum.photos/seed/innovate/400/200", industry: "AI Research", location: "Germany" },
  { name: "Future Soft", logo: "https://picsum.photos/seed/future/400/200", industry: "Software", location: "Canada" },
  { name: "Cloud Nine", logo: "https://picsum.photos/seed/cloud/400/200", industry: "Cloud Infrastructure", location: "Australia" },
];

export default function Testimony() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Our Network
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8"
          >
            GLOBAL <br />
            <span className="text-white/20">PARTNERSHIPS.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl leading-relaxed"
          >
            We collaborate with industry leaders and visionary institutions worldwide. 
            Our clients represent the pinnacle of innovation across diverse sectors.
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Active Clients", value: "150+", icon: Building2 },
            { label: "Countries", value: "12+", icon: Globe },
            { label: "Success Rate", value: "99%", icon: ShieldCheck },
            { label: "Projects", value: "500+", icon: Zap },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center"
            >
              <stat.icon className="text-brand-primary mb-3" size={24} />
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="glass p-8 rounded-[2.5rem] border border-white/5 relative group hover:border-brand-primary/20 transition-all overflow-hidden flex flex-col items-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-full aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5 flex items-center justify-center p-6">
                <img 
                  src={client.logo} 
                  alt={client.name} 
                  className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500 scale-90 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="text-center relative z-10">
                <h4 className="text-white font-display font-bold text-lg mb-1 group-hover:text-brand-primary transition-colors">
                  {client.name}
                </h4>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-brand-primary font-mono text-[9px] uppercase tracking-widest">{client.industry}</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="text-white/40 font-mono text-[9px] uppercase tracking-widest">{client.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass p-16 rounded-[3rem] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
          
          <MessageSquare className="mx-auto mb-8 text-brand-primary" size={48} />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mb-6">
            BECOME OUR NEXT <br />
            <span className="text-brand-primary">GLOBAL PARTNER</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Join our network of industry leaders and experience the power of innovative digital solutions.
          </p>
          <button className="px-10 py-5 bg-brand-primary text-black font-display font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
            Partner with Us
          </button>
        </motion.div>
      </div>
    </div>
  );
}
