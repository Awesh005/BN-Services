import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown, ChevronRight, Send, Sparkles } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { slugify } from '../data/servicesData';
import { AIButton } from './AIButton';
import { Chatbot } from './Chatbot';

const serviceCategories = [
  {
    title: 'Software',
    items: [
      'Web Applications', 'Mobile Applications', 'Website Design', 
      'Desktop Applications', 'Customized Softwares', 'BI Tools', 
      'AI Solutions', 'API Integrations', 'Dashboards'
    ]
  },
  {
    title: 'Consultancy',
    items: [
      'System Analysis', 'Business Analysis', 'AI Implementation', 
      'Data Analytics', 'Cyber Security', 'System Integration', 
      'Financial Inclusions', 'IT Implementation', 'Documentations'
    ]
  },
  {
    title: 'Support',
    items: [
      'IT Operations', 'ATS & AMC', 'Upskilling', 
      'Professional Training', 'IT Helpdesk', 'Call Center', 
      'PMU Setup', 'Managed Services', 'Hardware Solutions'
    ]
  },
  {
    title: 'Marketing',
    items: [
      'Social Media', 'Digital Marketing', 'SEO', 
      'Email Marketing', 'SMS Marketing', 'Online Promotion', 
      'Graphics Design', 'Presentations', 'Branding'
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      'Server & Hosting', 'Networking', 'Micro Data Center', 
      'CCTV Surveillance', 'Computer Hardware', 'IoT Integrations', 
      'Security Devices', 'Computerization', 'Scanning & Digitization'
    ]
  },
  {
    title: 'Other Services',
    items: [
      'GIS Applications', 'GIS Mapping', 'GPS Survey', 
      'B2B B2C B2E Services', 'G2C G2B G2E Services', 'Data Mining'
    ]
  }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAIChatOpen, setIsAIChatOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isCompanyHovered, setIsCompanyHovered] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const location = useLocation();
  
  const navItems = [
    { name: 'Services', path: '#' },
    { name: 'Company', path: '#' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
    { name: 'Ecosystem', path: '/ecosystem' }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about-us', desc: 'Learn about our mission, vision and core values.' },
    { name: 'Founder Message', path: '/founder-message', desc: 'A personal message from our leadership.' },
    { name: 'Our Projects', path: '/our-projects', desc: 'Explore our portfolio of successful deliveries.' }
  ];
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex !== null && itemRefs.current[hoveredIndex]) {
      const element = itemRefs.current[hoveredIndex];
      if (element) {
        setPillStyle({
          left: element.offsetLeft,
          width: element.offsetWidth,
          opacity: 1,
        });
      }
    } else {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesHovered(false);
    setIsCompanyHovered(false);
  }, [location.pathname]);

  const handleServicesEnter = () => {
    setIsServicesHovered(true);
    setIsCompanyHovered(false);
  };
  const handleServicesLeave = () => setIsServicesHovered(false);

  const handleCompanyEnter = () => {
    setIsCompanyHovered(true);
    setIsServicesHovered(false);
  };
  const handleCompanyLeave = () => setIsCompanyHovered(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6" onMouseLeave={() => { handleServicesLeave(); handleCompanyLeave(); }}>
      <div className="max-w-7xl mx-auto flex items-center justify-between glass px-8 py-3 rounded-full border border-white/10">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/logo.png" 
            alt="BN INTELHUB" 
            className="h-10 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>

        <div className="hidden md:flex items-center gap-2 relative">
          {/* Sliding Pill Background */}
          <motion.div
            className="absolute h-10 bg-white rounded-full z-0"
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
              opacity: pillStyle.opacity,
            }}
            transition={{
              type: 'spring',
              stiffness: 350,
              damping: 30,
            }}
          />

          <AIButton onClick={() => setIsAIChatOpen(true)} className="mr-2" />

          {navItems.map((item, index) => (
            <Link 
              key={item.name} 
              ref={(el) => { itemRefs.current[index] = el; }}
              to={item.path}
              onMouseEnter={() => {
                setHoveredIndex(index);
                if (item.name === 'Services') handleServicesEnter();
                else if (item.name === 'Company') handleCompanyEnter();
                else { handleServicesLeave(); handleCompanyLeave(); }
              }}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative z-10 px-6 py-2 text-[11px] font-display font-bold uppercase tracking-[0.2em] transition-colors duration-300 flex items-center gap-1 ${
                hoveredIndex === index ? 'text-black' : 'text-white/60 hover:text-white'
              }`}
            >
              {item.name}
              {(item.name === 'Services' || item.name === 'Company') && (
                <ChevronDown 
                  size={12} 
                  className={`transition-transform duration-300 ${
                    (item.name === 'Services' && isServicesHovered) || (item.name === 'Company' && isCompanyHovered) 
                    ? 'rotate-180' : ''
                  }`} 
                />
              )}
            </Link>
          ))}
          
          <div className="h-6 w-[1px] bg-white/10 mx-2" />
          
          <Link to="/hire-us">
            <button className="group flex items-center gap-2 px-6 py-3 bg-paper text-black text-[11px] font-mono font-bold uppercase tracking-wider rounded-full hover:scale-105 transition-all active:scale-95 shadow-sm">
              Hire Us <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <AIButton onClick={() => setIsAIChatOpen(true)} />
          <button 
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* AI Chatbot */}
      <Chatbot isOpen={isAIChatOpen} onClose={() => setIsAIChatOpen(false)} />

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isServicesHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
            className="absolute left-6 right-6 top-full mt-2 z-40 hidden md:block"
          >
            <div className="max-w-7xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-black/5 p-12">
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="flex flex-col gap-6">
                    <h3 className="text-black font-display font-bold text-base uppercase tracking-wider border-b border-black/5 pb-4">
                      {category.title}
                    </h3>
                    <ul className="flex flex-col gap-3">
                      {category.items.map((item) => (
                        <li key={item}>
                          <Link 
                            to={`/services/${slugify(item)}`} 
                            className="text-sm text-black/60 hover:text-brand-secondary hover:translate-x-1 transition-all duration-200 flex items-center gap-2 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Company Dropdown */}
      <AnimatePresence>
        {isCompanyHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onMouseEnter={handleCompanyEnter}
            onMouseLeave={handleCompanyLeave}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 z-40 hidden md:block w-full max-w-2xl"
          >
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-black/5 p-8">
              <div className="grid grid-cols-1 gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="group flex items-center justify-between p-6 rounded-3xl hover:bg-brand-primary/5 transition-all"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-black font-display font-bold text-lg group-hover:text-brand-primary transition-colors">
                        {link.name}
                      </span>
                      <span className="text-black/40 text-sm">
                        {link.desc}
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-black transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 glass rounded-3xl p-6 flex flex-col gap-4 border border-white/10 overflow-hidden"
          >
            <AIButton onClick={() => setIsAIChatOpen(true)} className="w-fit" />
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <button 
                  onClick={() => {
                    if (item.name === 'Services' || item.name === 'Company') {
                      setActiveAccordion(activeAccordion === item.name ? null : item.name);
                    } else {
                      setIsOpen(false);
                    }
                  }}
                  className="flex items-center justify-between w-full text-sm font-display font-bold uppercase tracking-[0.2em] text-white/60 hover:text-brand-primary transition-colors py-2"
                >
                  {item.name}
                  {(item.name === 'Services' || item.name === 'Company') && (
                    <ChevronDown size={16} className={`transition-transform ${activeAccordion === item.name ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {item.name === 'Services' && activeAccordion === 'Services' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="flex flex-col gap-6 mt-4 pl-4 border-l border-white/10"
                  >
                    {serviceCategories.map((category) => (
                      <div key={category.title}>
                        <h4 className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-3">{category.title}</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {category.items.map((subItem) => (
                            <Link 
                              key={subItem} 
                              to={`/services/${slugify(subItem)}`}
                              className="text-white/40 text-xs hover:text-white py-1 flex items-center gap-2"
                            >
                              <ChevronRight size={10} />
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {item.name === 'Company' && activeAccordion === 'Company' && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="flex flex-col gap-4 mt-4 pl-4 border-l border-white/10"
                  >
                    {companyLinks.map((link) => (
                      <Link 
                        key={link.name} 
                        to={link.path}
                        className="text-white/40 text-xs hover:text-white py-1 flex items-center gap-2"
                      >
                        <ChevronRight size={10} />
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
            <Link to="/hire-us" className="w-full">
              <button className="w-full py-4 bg-paper text-black font-mono font-bold uppercase tracking-wider rounded-2xl flex items-center justify-center gap-2 mt-4">
                Hire Us <ArrowRight size={16} />
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
