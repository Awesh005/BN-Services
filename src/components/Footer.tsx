import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative pt-10 pb-6 px-6 sm:px-10 lg:px-16 overflow-hidden border-t border-white/5 bg-[#030005]">
      {/* Immersive Background (Recipe 7 Inspired) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/2 -left-1/4 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/2 -right-1/4 w-[700px] h-[700px] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        
        {/* Large Background Typography */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center select-none pointer-events-none opacity-[0.02]">
          <h2 className="text-[20vw] font-display font-bold leading-none tracking-tighter text-white whitespace-nowrap">
            BN INTELHUB
          </h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <Link to="/" className="inline-block group">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/logo.png"
                  alt="BN INTELHUB"
                  className="h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-white/50 text-base leading-relaxed max-w-md font-light">
                Empowering the next generation of digital leaders through <span className="text-white font-medium">EdTech excellence</span> and <span className="text-white font-medium">innovative software solutions</span>.
              </p>
            </div>

            {/* Social Grid */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bn_intel_hub", label: "Instagram", color: "hover:bg-pink-500" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575484154751", label: "Facebook", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
                { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 transition-all duration-500 ${social.color} hover:text-white hover:border-transparent hover:shadow-xl`}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] opacity-40">Navigation</h4>
            <ul className="grid grid-cols-1 gap-2">
              {[
                { label: 'About Us', path: '/about-us' },
                { label: 'Insights', path: '/insights' },
                { label: 'Ecosystem', path: '/ecosystem' },
                { label: 'Hire Us', path: '/hire-us' },
                { label: 'Our Projects', path: '/our-projects' },
                { label: 'Testimony', path: '/testimony' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-white/40 hover:text-brand-primary transition-all duration-300 flex items-center group text-sm"
                  >
                    <motion.span 
                      className="w-0 group-hover:w-3 h-[1px] bg-brand-primary mr-0 group-hover:mr-2 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-white font-display font-bold text-xs uppercase tracking-[0.3em] opacity-40">Connect</h4>
            
            <div className="space-y-4">
              {[
                { icon: MapPin, content: "STPI Plot-8 Part, Namkum Industrial Area, Ranchi - 834010", href: "https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Namkum+Ranchi+834010" },
                { icon: Phone, content: "+91 8936078905", href: "tel:+918936078905" },
                { icon: Phone, content: "+91 90412 89863", href: "tel:+919041289863" },
                { icon: Mail, content: "bnintelhub.services@gmail.com", href: "mailto:bnintelhub.services@gmail.com" },
                { icon: Mail, content: "bnintelhub@gmail.com", href: "mailto:bnintelhub@gmail.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-3 group"
                  whileHover={{ x: 3 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-black transition-all duration-500 shrink-0">
                    <item.icon size={16} />
                  </div>
                  <span className="text-white/60 group-hover:text-white transition-colors text-xs leading-relaxed pt-1.5">
                    {item.content}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <div className="relative group">
                <input
                  type="email"
                  placeholder="Join our newsletter"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-brand-primary/50 transition-all"
                />
                <button className="absolute right-1.5 top-1.5 bottom-1.5 px-3 bg-brand-primary text-black rounded-lg hover:scale-105 transition-transform">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-brand-primary hover:text-black hover:border-transparent transition-all duration-500"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronUp size={20} />
          </motion.button>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-white/30 text-xs">
            <p>© {currentYear} BN INTELHUB PVT LTD.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Top Button (Mobile/Tablet) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-8 left-8 z-50 w-14 h-14 rounded-2xl bg-brand-primary text-black shadow-2xl shadow-brand-primary/20 flex items-center justify-center md:hidden"
          >
            <ChevronUp size={28} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
