import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-8 px-5 sm:px-8 lg:px-12 overflow-hidden border-t border-cyan-950/40 bg-gradient-to-b from-[#0a0015] via-[#05000a] to-[#030005]">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute -bottom-20 -right-20 sm:-bottom-32 sm:-right-32 w-64 sm:w-96 h-64 sm:h-96 bg-purple-700/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-10 lg:mb-12">
          {/* Brand + Newsletter Column */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3">
              <Link to="/">
                <img
                  src="/logo.png"
                  alt="BN INTELHUB"
                  className="h-10 sm:h-12 lg:h-14 w-auto object-contain drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
                  referrerPolicy="no-referrer"
                />
              </Link>
            </div>

            <p className="text-cyan-100/65 text-sm sm:text-base leading-relaxed max-w-md font-light">
              Premier EdTech & Software Development company bridging academia and industry with world-class training and innovative solutions.
            </p>

            {/* Social Icons – compact */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bn_intel_hub", glow: "hover:shadow-[0_0_20px_#ec4899]" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575484154751", glow: "hover:shadow-[0_0_20px_#3b82f6]" },
                { icon: Twitter, href: "#", glow: "hover:shadow-[0_0_20px_#0ea5e9]" },
                { icon: Linkedin, href: "#", glow: "hover:shadow-[0_0_20px_#1d4ed8]" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-black/40 backdrop-blur-lg border border-white/10 flex items-center justify-center text-cyan-300/80 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${social.glow}`}
                  whileHover={{ rotateX: 12, rotateY: 12, z: 15 }}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <social.icon size={18} className="sm:size-20" />
                </motion.a>
              ))}
            </div>

            {/* Newsletter – tighter */}
            <div className="max-w-sm">
              <h5 className="text-cyan-300 font-semibold mb-3 text-xs sm:text-sm uppercase tracking-wider neon-text">
                Newsletter
              </h5>
              <div className="flex bg-black/50 backdrop-blur-xl rounded-xl border border-cyan-500/20 focus-within:border-cyan-400/50 overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.12)]">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent border-none focus:ring-0 text-sm px-4 py-3 flex-grow text-white placeholder:text-cyan-200/40 outline-none"
                />
                <motion.button
                  className="px-4 sm:px-5 bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center hover:brightness-110 transition-all"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <ArrowRight size={18} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <h4 className="text-cyan-300 font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider neon-text">Company</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'About Us', path: '/about-us' },
                { label: 'Insights', path: '/insights' },
                { label: 'Ecosystem', path: '/ecosystem' },
                { label: 'Hire Us', path: '/hire-us' },
                { label: 'Our Projects', path: '/our-projects' },
                { label: 'Contact Us', path: '/contact' },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="text-cyan-100/70 hover:text-cyan-300 transition-colors flex items-center group"
                  >
                    <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <h4 className="text-cyan-300 font-semibold mb-4 text-xs sm:text-sm uppercase tracking-wider neon-text">Contact Us</h4>

            <div className="space-y-5">
              {[
                { icon: MapPin, content: <>STPI Plot-8 Part, Namkum<br />Industrial Area, Ranchi - 834010</>, href: "https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Namkum+Ranchi+834010" },
                { icon: Phone, content: "+91 8936078905", href: "tel:+918936078905" },
                { icon: Mail, content: (
                  <>
                    bnintelhub@gmail.com<br />
                    bnintelhub.services@gmail.com
                  </>
                ), href: "mailto:bnintelhub.services@gmail.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.icon === MapPin ? "_blank" : undefined}
                  rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
                  className="group flex items-start gap-3 text-sm text-cyan-100/75 hover:text-white transition-colors"
                  whileHover={{ x: 4, scale: 1.02 }}
                >
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-gradient-to-br from-cyan-900/50 to-purple-900/30 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon size={16} className="sm:size-18" />
                  </div>
                  <span className="leading-relaxed">{item.content}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar – compact */}
        <div className="pt-6 border-t border-cyan-950/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-cyan-200/50">
          <p>© {currentYear} BN INTELHUB PVT LTD. All Rights Reserved.</p>
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://maps.app.goo.gl/XGpoPUUBM7SBPjtTA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors flex items-center gap-1.5"
            >
              View on Map <ExternalLink size={13} />
            </a>
            <a href="#" className="hover:text-white transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>

      {/* Required global styles (add to your CSS file) */}
      {/*
        @keyframes pulse-slow { 0%, 100% { opacity: 0.35 } 50% { opacity: 0.65 } }
        .animate-pulse-slow { animation: pulse-slow 14s infinite ease-in-out; }
        .delay-1000 { animation-delay: 1.4s; }
        .neon-text { text-shadow: 0 0 8px #22d3ee88, 0 0 16px #a855f788; }
      */}
    </footer>
  );
}