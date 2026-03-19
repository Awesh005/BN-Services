import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Layers, Cpu, Building2 } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const categoryCounts = projectsData.reduce<Record<string, number>>((accumulator, project) => {
  accumulator[project.category] = (accumulator[project.category] ?? 0) + 1;
  return accumulator;
}, {});

const categoryMeta = {
  Website: { icon: Globe, tone: 'text-brand-primary' },
  Software: { icon: Layers, tone: 'text-brand-secondary' },
  AI: { icon: Cpu, tone: 'text-brand-primary' },
  Consultancy: { icon: Building2, tone: 'text-brand-secondary' },
} as const;

export const Insights: React.FC = () => {
  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 relative overflow-hidden">
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
              <Layers size={14} /> Delivery Insights
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">
              Projects That <span className="text-gradient">Explain Our Range</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              This page turns project references into a cleaner picture of what BN INTELHUB actually ships:
              platforms, websites, product experiences, and operational systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24">
          {(Object.keys(categoryMeta) as Array<keyof typeof categoryMeta>).map((category, index) => {
            const meta = categoryMeta[category];
            const Icon = meta.icon;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-8 rounded-3xl border border-white/5 text-center group hover:border-brand-primary/30 transition-all"
              >
                <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${meta.tone}`}>
                  <Icon size={24} />
                </div>
                <div className="text-3xl font-display font-bold mb-1">{categoryCounts[category] ?? 0}</div>
                <div className="text-xs uppercase tracking-widest text-white/40">{category}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="space-y-8">
          {projectsData.map((project, index) => {
            const meta = categoryMeta[project.category];
            const Icon = meta.icon;
            const imageSrc = project.image.startsWith('/') ? project.image : `/${project.image.replace(/^\.\//, '')}`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-brand-primary/30 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
                  <div className="p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center ${meta.tone}`}>
                        <Icon size={20} />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold">
                          {project.category}
                        </div>
                        <div className="text-white/40 text-sm">{project.client}</div>
                      </div>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-5">{project.title}</h2>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">{project.description}</p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-white/70"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      {project.url && project.url !== '#' ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform inline-flex items-center gap-2"
                        >
                          Visit Live Project <ArrowRight size={18} />
                        </a>
                      ) : (
                        <span className="px-6 py-3 glass rounded-full border border-white/10 text-white/50 font-bold inline-flex items-center gap-2">
                          Internal Showcase <ArrowRight size={18} />
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="relative min-h-[280px] lg:min-h-full bg-white/5">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center glass p-16 rounded-[4rem] border border-white/5 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none" />
          <h2 className="text-4xl font-display font-bold mb-6">
            Want the Next <span className="text-gradient">Project Here?</span>
          </h2>
          <p className="text-white/60 mb-10 max-w-xl mx-auto">
            The pattern is consistent: clear business need, tight delivery scope, visible execution, and a result
            worth showing.
          </p>
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
            Start Your Journey <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </div>
  );
};
