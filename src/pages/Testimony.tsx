import { motion } from 'motion/react';
import { Building2, Globe, ShieldCheck, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';
import { projectsData } from '../data/projectsData';

const uniqueClients = Array.from(new Set(projectsData.map((project) => project.client)));
const liveProjects = projectsData.filter((project) => project.url && project.url !== '#');
const websiteProjects = projectsData.filter((project) => project.category === 'Website');
const clientFeedback = [
  {
    client: 'AJIS Group',
    role: 'School Management Team',
    quote:
      'BN INTELHUB delivered a structured platform that made student access, academic updates, and communication significantly smoother for our team.',
  },
  {
    client: 'Creative Collective',
    role: 'Brand & Content Team',
    quote:
      'The Humble Muse needed a polished digital experience, and the final product balanced storytelling, commerce, and usability without overcomplicating the flow.',
  },
  {
    client: 'Kelkem India',
    role: 'Operations Leadership',
    quote:
      'Their execution was practical and business-focused. The website and operational thinking reflected a clear understanding of industrial requirements.',
  },
  {
    client: 'Carzmo',
    role: 'Product Team',
    quote:
      'We needed speed, clarity, and a cleaner user journey. BN INTELHUB helped shape a platform that feels more usable and more ready for growth.',
  },
];

export default function Testimony() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-primary" />
            <span className="text-brand-primary font-mono text-xs font-bold uppercase tracking-[0.3em]">
              Client Proof
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-display font-bold text-white tracking-tighter leading-[0.9] mb-8"
          >
            TRUST BUILT <br />
            <span className="text-white/20">THROUGH DELIVERY.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-lg max-w-2xl leading-relaxed"
          >
            These are not placeholder partnerships. Each card reflects a real BN INTELHUB engagement,
            from education platforms to industrial websites and product-led digital experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: 'Projects Featured', value: `${projectsData.length}`, icon: Building2 },
            { label: 'Live Deployments', value: `${liveProjects.length}`, icon: Globe },
            { label: 'Website Builds', value: `${websiteProjects.length}`, icon: ShieldCheck },
            { label: 'Client Accounts', value: `${uniqueClients.length}`, icon: Zap },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-6 rounded-3xl border border-white/5 flex flex-col items-center text-center"
            >
              <stat.icon className="text-brand-primary mb-3" size={24} />
              <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/40">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-brand-primary/20 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-white/5">
                <img
                  src={project.image.startsWith('/') ? project.image : `/${project.image.replace(/^\.\//, '')}`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-brand-primary font-bold mb-2">
                      {project.category}
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white">{project.title}</h2>
                    <p className="text-white/40 text-sm mt-1">{project.client}</p>
                  </div>
                  {project.url && project.url !== '#' && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-brand-primary hover:border-brand-primary/40 transition-colors"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] uppercase tracking-widest text-white/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24 mb-8 flex items-center gap-3">
          <div className="w-12 h-[1px] bg-brand-primary" />
          <span className="text-brand-primary font-mono text-xs font-bold uppercase tracking-[0.3em]">
            Client Feedback
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clientFeedback.map((feedback, index) => (
            <motion.blockquote
              key={feedback.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass rounded-[2.5rem] border border-white/5 p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-primary/5 blur-[70px] rounded-full pointer-events-none" />
              <div className="relative z-10">
                <div className="text-5xl leading-none text-brand-primary/50 font-display mb-5">"</div>
                <p className="text-white/70 text-lg leading-relaxed mb-8">{feedback.quote}</p>
                <footer>
                  <div className="text-white font-display font-bold text-xl">{feedback.client}</div>
                  <div className="text-white/40 text-xs uppercase tracking-[0.25em] mt-2">{feedback.role}</div>
                </footer>
              </div>
            </motion.blockquote>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 glass p-16 rounded-[3rem] border border-white/5 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-brand-primary/10 blur-[120px] rounded-full pointer-events-none" />

          <MessageSquare className="mx-auto mb-8 text-brand-primary" size={48} />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white tracking-tighter mb-6">
            READY TO BE THE <br />
            <span className="text-brand-primary">NEXT CASE STUDY?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            If you want your product, institution, or operation featured here next, the next step is a scoped build,
            not another placeholder deck.
          </p>
          <button className="px-10 py-5 bg-brand-primary text-black font-display font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
            Start a Project
          </button>
        </motion.div>
      </div>
    </div>
  );
}
