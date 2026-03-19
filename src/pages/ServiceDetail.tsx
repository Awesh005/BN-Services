import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, ChevronRight, 
  ArrowLeft, ExternalLink, MessageSquare, Award 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { PricingTable } from '../components/PricingTable';

export const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (serviceId && !servicesData[serviceId]) {
      navigate('/');
    }
  }, [serviceId, navigate]);

  if (!service) return null;

  const Icon = service.features[0].icon;

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/30 rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-brand-primary transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                {service.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight">
                {service.title.split(' ').map((word, i) => (
                  <span key={i} className={i === service.title.split(' ').length - 1 ? 'text-gradient' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-brand-primary text-black font-bold rounded-full hover:scale-105 transition-all shadow-xl shadow-brand-primary/20">
                  Request Consultation
                </button>
                <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden glass border border-white/10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-[12rem] font-display font-bold opacity-5 select-none">
                  {service.title.substring(0, 2).toUpperCase()}
                </div>
              </div>
              <div className="absolute bottom-12 left-12 right-12">
                <div className="glass p-8 rounded-3xl border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/20 flex items-center justify-center text-brand-primary">
                      <Icon size={24} />
                    </div>
                    <div>
                      <div className="text-sm font-bold">Enterprise Ready</div>
                      <div className="text-xs text-white/40">Scale your operations instantly</div>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      className="h-full bg-brand-primary"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold mb-8">Overview</h2>
              <p className="text-lg text-white/60 leading-relaxed mb-12">
                {service.longDescription}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                    <CheckCircle2 size={20} className="text-brand-primary" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60">
                        <ChevronRight size={16} className="mt-1 text-brand-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                    <ExternalLink size={20} className="text-brand-secondary" />
                    Use Cases
                  </h3>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60">
                        <ChevronRight size={16} className="mt-1 text-brand-secondary flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="glass p-8 rounded-[2rem] border border-white/10 h-fit">
              <h3 className="text-xl font-display font-bold mb-8">Industries</h3>
              <div className="flex flex-wrap gap-3">
                {service.industries.map((industry, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white/80">
                    {industry}
                  </span>
                ))}
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <h3 className="text-xl font-display font-bold mb-6">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {service.techStack.map((tech, i) => (
                    <div key={i} className="text-sm text-white/40 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Core Features</h2>
            <p className="text-white/40">Engineered for excellence and reliability</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, i) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass p-10 rounded-[2.5rem] border border-white/10 hover:border-brand-primary/50 transition-colors group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform">
                    <FeatureIcon size={28} />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Table for Web Applications */}
      {serviceId === 'web-applications' && <PricingTable />}

      {/* Process Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-4">Our Process</h2>
            <p className="text-white/40">A systematic approach to delivering value</p>
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 hidden lg:block" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {service.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative z-10"
                >
                  <div className="w-12 h-12 rounded-full bg-bg-dark border-2 border-brand-primary flex items-center justify-center text-brand-primary font-bold mb-6 mx-auto lg:mx-0">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-bold mb-3 text-center lg:text-left">{step.title}</h3>
                  <p className="text-sm text-white/40 text-center lg:text-left leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-24 px-6 bg-brand-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-12 md:p-20 rounded-[4rem] border border-brand-primary/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px]" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-brand-primary font-bold text-xs uppercase tracking-widest mb-6">
                  <Award size={16} />
                  Success Story
                </div>
                <h2 className="text-4xl font-display font-bold mb-8 leading-tight">
                  {service.caseStudy.title}
                </h2>
                <p className="text-xl text-white/60 mb-10 leading-relaxed">
                  {service.caseStudy.description}
                </p>
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="text-brand-primary font-bold text-lg mb-2">The Result</div>
                  <div className="text-2xl font-display text-white/90">{service.caseStudy.result}</div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-3xl overflow-hidden glass border border-white/10 flex items-center justify-center">
                  <div className="text-6xl font-display font-bold opacity-10">CASE STUDY</div>
                </div>
                <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-secondary/20 flex items-center justify-center text-brand-secondary">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <div className="text-xs text-white/40">Client Feedback</div>
                      <div className="text-sm font-bold">"Exceptional Delivery"</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
            Ready to <span className="text-gradient">Transform?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let's discuss how our {service.title} expertise can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="px-12 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-all flex items-center justify-center gap-2">
              Get a Quote <ArrowRight size={20} />
            </button>
            <button className="px-12 py-5 glass text-white font-bold rounded-full hover:bg-white/10 transition-all">
              Contact Us
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
