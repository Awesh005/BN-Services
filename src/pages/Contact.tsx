import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, Globe, Sparkles, Loader2, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 overflow-hidden relative">
      {/* Futuristic Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Have a vision? Let's build the future together. Reach out to our team of experts.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <MapPin size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Our Headquarters</h3>
                  <p className="text-white/50 leading-relaxed">
                    STPI- Plot -8 Part, Namkum Industrial Area,<br />
                    Namkum Ranchi - 834010, Jharkhand, India
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-brand-secondary/30 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-brand-secondary group-hover:scale-110 transition-transform">
                  <Phone size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Direct Contact</h3>
                  <p className="text-white/50 leading-relaxed">
                    +91 8936078905<br />
                    +91 90412 89863<br />
                    Mon - Sat, 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-[2.5rem] border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email Us</h3>
                  <p className="text-white/50 leading-relaxed">
                    bnintelhub@gmail.com<br />
                    bnintelhub.services@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass p-10 rounded-[3rem] border border-white/10 relative overflow-hidden flex flex-col justify-center min-h-[500px]"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles size={120} className="text-brand-primary" />
            </div>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center space-y-8 py-12 relative z-10"
                >
                  <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} className="text-brand-primary" />
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-display font-bold">Message Received!</h2>
                    <p className="text-white/60 max-w-sm mx-auto">
                      Thank you for reaching out. Our team will review your message and respond shortly.
                    </p>
                  </div>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Full Name</label>
                      <input 
                        required
                        type="text" 
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Subject</label>
                    <input 
                      required
                      type="text" 
                      placeholder="How can we help?"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-2">Message</label>
                    <textarea 
                      required
                      rows={5}
                      placeholder="Tell us about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all text-white resize-none"
                    />
                  </div>

                  <button 
                    disabled={isSubmitting}
                    className="w-full py-5 bg-gradient-to-r from-brand-primary to-brand-secondary text-black font-display font-bold uppercase tracking-widest rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(34,211,238,0.3)] disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        Sending <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Send Message <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
