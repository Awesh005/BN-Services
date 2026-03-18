import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Filter, ArrowRight } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';

export const OurProjects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'Software', 'Infrastructure', 'AI', 'Consultancy'];

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32">
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8"
          >
            Our <span className="text-gradient">Projects</span>
          </motion.h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            A showcase of our most impactful work across various industries and technologies.
          </p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-wider uppercase transition-all border ${
                  filter === cat 
                    ? 'bg-brand-primary border-brand-primary text-black' 
                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="glass rounded-[2.5rem] overflow-hidden border border-white/10 group flex flex-col h-full"
                >
                  <div className="aspect-video overflow-hidden relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-bold uppercase tracking-widest">
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="text-brand-secondary text-xs font-bold uppercase tracking-widest mb-4">
                      Client: {project.client}
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/40">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex flex-col gap-3">
                      <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-primary hover:text-black hover:border-brand-primary transition-all group/btn">
                        View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      
                      {project.url && (
                        <a 
                          href={project.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-full py-4 bg-brand-secondary/10 border border-brand-secondary/20 text-brand-secondary rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-secondary hover:text-white transition-all"
                        >
                          Visit Website <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
