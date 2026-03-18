import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight, ExternalLink } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-12 pb-8 px-6 overflow-hidden border-t border-white/5">
      {/* Background Glows */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center font-bold text-black text-sm">
                BN
              </div>
              <span className="font-display font-bold text-2xl tracking-tighter text-white">INTELHUB</span>
            </div>
            
            <p className="text-white/50 mb-8 max-w-md leading-relaxed text-sm">
              A premier EdTech and Software Development company committed to bridging the gap between academia and industry through world-class training and innovative software solutions.
            </p>

            <div className="flex gap-4 mb-10">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bn_intel_hub", color: "hover:bg-pink-500" },
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61575484154751", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full glass flex items-center justify-center text-white/60 hover:text-white transition-all duration-300 ${social.color}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="max-w-sm">
              <h5 className="text-white font-display font-bold mb-4 text-sm uppercase tracking-widest">Newsletter</h5>
              <div className="flex gap-2 p-1.5 glass rounded-2xl border border-white/5">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent border-none focus:ring-0 text-sm px-4 flex-grow text-white placeholder:text-white/20"
                />
                <button className="p-3 bg-brand-primary text-black rounded-xl hover:scale-105 transition-transform">
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-display font-bold mb-8 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4">
              {[
                { label: 'About Us', href: '#about' },
                { label: 'Careers', href: '#' },
                { label: 'Services', href: '#services' },
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms & Conditions', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-white/40 hover:text-brand-primary transition-colors flex items-center group">
                    <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">→</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-display font-bold mb-8 text-sm uppercase tracking-widest">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={18} />
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=STPI+Plot-8+Part+Namkum+Industrial+Area+Namkum+Ranchi+834010"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/40 hover:text-white transition-colors leading-relaxed"
                >
                  STPI- Plot -8 Part, Namkum <br />
                  Industrial Area, Namkum Ranchi - 834010
                </a>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <a href="tel:+918936078905" className="text-sm text-white/40 hover:text-white transition-colors">
                  +91 8936078905
                </a>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center text-brand-primary shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col gap-1">
                  <a href="mailto:bnintelhub@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors">
                    bnintelhub@gmail.com
                  </a>
                  <a href="mailto:bnintelhub.services@gmail.com" className="text-sm text-white/40 hover:text-white transition-colors">
                    bnintelhub.services@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-white/20 font-medium">
            &copy; {currentYear} BN INTELHUB PVT LTD. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a
              href="https://maps.app.goo.gl/XGpoPUUBM7SBPjtTA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/20 hover:text-brand-primary transition-colors flex items-center gap-2"
            >
              VIEW ON MAP <ExternalLink size={12} />
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white transition-colors">
              DISCLAIMER
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
