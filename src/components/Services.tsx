import { motion } from 'motion/react';
import { 
  Globe, 
  Smartphone, 
  Code, 
  Cpu, 
  Palette, 
  Video, 
  Megaphone, 
  Cloud, 
  GraduationCap,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../lib/utils';
import { Service } from '../types';
import { Link } from 'react-router-dom';
import { slugify } from '../data/servicesData';

const services: Service[] = [
  {
    title: "Website Development",
    description: "Custom, responsive, and SEO-friendly websites tailored to your brand.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    icon: Smartphone,
    color: "from-purple-500 to-pink-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Software Development",
    description: "Scalable and robust software solutions for enterprise needs.",
    icon: Code,
    color: "from-emerald-500 to-teal-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "AI & Automation Solutions",
    description: "Intelligent automation and predictive analytics to streamline operations.",
    icon: Cpu,
    color: "from-orange-500 to-yellow-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Graphic Designing",
    description: "Creative visual designs that communicate your brand message effectively.",
    icon: Palette,
    color: "from-pink-500 to-rose-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Video Production & Editing",
    description: "High-quality video content creation and professional editing services.",
    icon: Video,
    color: "from-indigo-500 to-blue-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing solutions to boost your online presence and growth.",
    icon: Megaphone,
    color: "from-amber-500 to-orange-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Cloud & IT Support",
    description: "Reliable cloud infrastructure management and technical support.",
    icon: Cloud,
    color: "from-sky-500 to-blue-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  },
  {
    title: "Training & Development",
    description: "Corporate training and skill development programs for teams.",
    icon: GraduationCap,
    color: "from-teal-500 to-emerald-400",
    features: ["Custom Solutions", "Expert Team", "24/7 Support"]
  }
];

export function Services() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-display font-bold mb-4"
        >
          Our <span className="text-gradient">Core Services</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-2xl mx-auto"
        >
          We build the future of digital interaction through cutting-edge technology and innovative design.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const serviceId = slugify(service.title);
  
  return (
    <Link to={`/${serviceId}`}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        whileHover={{ y: -10, scale: 1.02 }}
        className="glass p-8 rounded-2xl group cursor-pointer relative overflow-hidden h-full flex flex-col"
      >
        <div className={cn(
          "absolute -right-4 -top-4 w-24 h-24 blur-3xl opacity-20 transition-opacity group-hover:opacity-40 bg-gradient-to-br",
          service.color
        )} />
        
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-gradient-to-br",
          service.color
        )}>
          <service.icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
        <p className="text-white/50 text-sm leading-relaxed mb-6">
          {service.description}
        </p>

        {service.features && (
          <ul className="space-y-3 mb-8 flex-grow">
            {service.features.map((feature, i) => (
              <li key={i} className="flex items-center text-xs text-white/40 group-hover:text-white/60 transition-colors">
                <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-brand-primary" />
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="mt-auto flex items-center text-xs font-bold tracking-widest uppercase text-white/30 group-hover:text-brand-primary transition-colors">
          Learn More
          <motion.span 
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="ml-2"
          >
            →
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}
