import React from 'react';
import { motion } from 'motion/react';
import { Check, Globe, Shield, Server, Mail, Calendar } from 'lucide-react';

const packages = [
  {
    sNo: 1,
    title: 'Website',
    particulars: 'Web Starter',
    pages: '1',
    rate: '4000/-',
    adminPanel: '--------'
  },
  {
    sNo: 2,
    title: 'Website',
    particulars: 'Standard Website',
    pages: '5',
    rate: '8000/-',
    adminPanel: '--------'
  },
  {
    sNo: 3,
    title: 'Website',
    particulars: 'Semi Customized Web.',
    pages: '8',
    rate: '12000/-',
    adminPanel: 'Yes (3 page Dynamic)'
  },
  {
    sNo: 4,
    title: 'Website',
    particulars: 'Customized Website',
    pages: '10 to 12',
    rate: '14000/-',
    adminPanel: 'Yes (6 page Dynamic)'
  },
  {
    sNo: 5,
    title: 'Website',
    particulars: 'High Value Dynamic Website',
    pages: '------',
    rate: 'As per requirement',
    adminPanel: 'Yes'
  },
  {
    sNo: 6,
    title: 'Android/IOS App.',
    particulars: 'High Value & Responsive',
    pages: '------',
    rate: 'As per requirement',
    adminPanel: 'Yes'
  }
];

const inclusions = [
  { icon: Globe, text: 'Domain: .com / .in / .org' },
  { icon: Server, text: 'High-Speed Hosting' },
  { icon: Shield, text: 'SSL Certificate' },
  { icon: Mail, text: 'Business Mail (After Standard website)' },
  { icon: Calendar, text: 'Validity: One Year' }
];

export const PricingTable: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">Package Details</h2>
          <p className="text-white/40">Transparent pricing for every business scale</p>
        </div>

        <div className="overflow-x-auto glass rounded-[2.5rem] border border-white/10 mb-16">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">S No.</th>
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">Title</th>
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">Particulars</th>
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">Pages</th>
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">Rate (Starting From)</th>
                <th className="px-6 py-5 text-xs uppercase tracking-widest text-brand-primary font-bold">Admin Panel</th>
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg, i) => (
                <tr 
                  key={pkg.sNo} 
                  className={`border-b border-white/5 hover:bg-white/[0.02] transition-colors ${i === packages.length - 1 ? 'border-none' : ''}`}
                >
                  <td className="px-6 py-5 text-sm text-white/40">{pkg.sNo}</td>
                  <td className="px-6 py-5 text-sm font-bold">{pkg.title}</td>
                  <td className="px-6 py-5 text-sm text-white/80">{pkg.particulars}</td>
                  <td className="px-6 py-5 text-sm text-white/60">{pkg.pages}</td>
                  <td className="px-6 py-5 text-sm font-mono text-brand-secondary">
                    {pkg.rate === 'As per requirement' ? pkg.rate : `₹${pkg.rate}`}
                  </td>
                  <td className="px-6 py-5 text-sm text-white/60">{pkg.adminPanel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="glass p-10 rounded-[3rem] border border-white/10">
          <h3 className="text-2xl font-display font-bold mb-8 flex items-center gap-3">
            <Check className="text-brand-primary" />
            Package Including
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {inclusions.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform">
                  <item.icon size={20} />
                </div>
                <span className="text-white/60 text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
