import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star, Users, MessageSquare, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Director, Kelkem India Pvt Ltd",
    content: "BN INTELHUB transformed our digital presence with their innovative software solutions. Their team's technical expertise and commitment to excellence are truly world-class.",
    rating: 5,
    image: "https://picsum.photos/seed/person1/100/100"
  },
  {
    name: "Sarah Williams",
    role: "Principal, AJIS",
    content: "The EdTech solutions provided by BN INTELHUB have revolutionized how we interact with our students. Their platform is intuitive, scalable, and highly effective.",
    rating: 5,
    image: "https://picsum.photos/seed/person2/100/100"
  },
  {
    name: "Amit Singh",
    role: "CTO, TechVision Global",
    content: "Working with BN INTELHUB was a seamless experience. They understood our complex requirements and delivered a robust cloud infrastructure that exceeded our expectations.",
    rating: 5,
    image: "https://picsum.photos/seed/person3/100/100"
  },
  {
    name: "Priya Sharma",
    role: "Founder, EduNext",
    content: "Their training programs are exceptional. They bridge the gap between theoretical knowledge and industry requirements perfectly. Highly recommended for any aspiring professional.",
    rating: 5,
    image: "https://picsum.photos/seed/person4/100/100"
  }
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
              <MessageSquare size={14} /> Client Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Voices of <span className="text-gradient">Success</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Discover how BN INTELHUB is empowering businesses and educational institutions through innovative technology and strategic insights.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {[
            { icon: Users, label: "Happy Clients", value: "150+" },
            { icon: Star, label: "Average Rating", value: "4.9/5" },
            { icon: Quote, label: "Testimonials", value: "50+" },
            { icon: ArrowRight, label: "Success Rate", value: "99%" }
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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[3rem] border border-white/5 relative group hover:border-brand-primary/20 transition-all"
            >
              <div className="absolute top-8 right-10 text-brand-primary/10 group-hover:text-brand-primary/20 transition-colors">
                <Quote size={80} />
              </div>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-brand-primary/20">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-brand-primary text-sm font-medium">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-primary text-brand-primary" />
                ))}
              </div>

              <p className="text-white/60 leading-relaxed italic relative z-10">
                "{testimonial.content}"
              </p>
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
