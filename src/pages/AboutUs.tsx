import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ShieldCheck, Users, Zap } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
              About <span className="text-gradient">BN INTELHUB</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto mb-12">
              We are a team of innovators, architects, and problem solvers dedicated to 
              transforming businesses through cutting-edge technology and intelligent solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[3rem] border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8">
                <Target size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Mission</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                To empower organizations with innovative digital solutions that drive efficiency, 
                growth, and sustainable competitive advantage in an ever-evolving technological landscape.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="glass p-12 rounded-[3rem] border border-white/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-8">
                <Eye size={32} />
              </div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Vision</h2>
              <p className="text-white/60 leading-relaxed text-lg">
                To be the global leader in digital transformation, recognized for our excellence 
                in engineering, strategic consultancy, and our commitment to building a smarter, 
                connected future.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Core Values</h2>
            <p className="text-white/40">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: 'Integrity', desc: 'We maintain the highest standards of honesty and ethical behavior in all our interactions.' },
              { icon: Zap, title: 'Innovation', desc: 'We constantly push boundaries to find creative solutions to complex challenges.' },
              { icon: ShieldCheck, title: 'Excellence', desc: 'We are committed to delivering superior quality in every project we undertake.' }
            ].map((value, i) => (
              <div key={i} className="glass p-10 rounded-3xl border border-white/10 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 mx-auto">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-display font-bold mb-8">Why Choose <span className="text-gradient">BN INTELHUB?</span></h2>
              <div className="space-y-8">
                {[
                  { icon: Users, title: 'Expert Team', desc: 'Our team consists of industry veterans and certified experts in various domains.' },
                  { icon: ShieldCheck, title: 'Proven Track Record', desc: 'We have successfully delivered 150+ projects across multiple industries.' },
                  { icon: Zap, title: 'Agile Methodology', desc: 'We use agile practices to ensure rapid delivery and flexibility to changes.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/60">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden glass border border-white/10 flex items-center justify-center">
                <div className="text-9xl font-display font-bold opacity-5 select-none">WHY</div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-8 rounded-2xl border border-white/10">
                <div className="text-4xl font-display font-bold text-brand-primary">10+</div>
                <div className="text-xs uppercase tracking-widest text-white/40">Years of Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
