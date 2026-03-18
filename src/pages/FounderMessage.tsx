import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export const FounderMessage: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32">
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden glass border border-white/10 relative">
                <img 
                  src="https://picsum.photos/seed/founder/800/1000" 
                  alt="Founder" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-8 -right-8 glass p-10 rounded-3xl border border-white/10 backdrop-blur-2xl">
                <h3 className="text-2xl font-display font-bold text-brand-primary">John Doe</h3>
                <p className="text-white/40 uppercase tracking-widest text-xs mt-1">Founder & CEO</p>
              </div>
            </motion.div>

            {/* Message Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8">
                <Quote size={32} />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                A Message from our <span className="text-gradient">Founder</span>
              </h1>
              <div className="space-y-6 text-lg text-white/70 leading-relaxed italic">
                <p>
                  "When we started BN INTELHUB, our vision was simple yet ambitious: to bridge the gap 
                  between complex business challenges and innovative technological solutions. We believed 
                  that technology should be an enabler, not a barrier."
                </p>
                <p>
                  "Over the years, we have stayed true to this mission. Our journey has been defined by 
                  constant learning, adaptation, and a relentless pursuit of excellence. Every project 
                  we undertake is an opportunity to create something meaningful and impactful."
                </p>
                <p>
                  "I am incredibly proud of the team we have built and the partnerships we have forged. 
                  As we look to the future, we remain committed to being at the forefront of digital 
                  innovation, helping our clients navigate the complexities of the modern world."
                </p>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <div className="font-display text-3xl text-white/90">John Doe</div>
                <div className="text-brand-primary font-bold uppercase tracking-widest text-xs mt-2">Founder, BN INTELHUB</div>
                
                {/* Signature Placeholder */}
                <div className="mt-6 opacity-40">
                  <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 40C30 35 50 45 70 40C90 35 110 30 130 35C150 40 170 45 190 40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M40 20C60 25 80 15 100 20C120 25 140 30 160 25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
