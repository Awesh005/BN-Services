import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, CheckCircle2, Code, Layout, Brain, Globe, Smartphone, Server, Loader2, Check } from 'lucide-react';

const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSe2W5NjTxZUVoNyT2MWxk0KORvHXM1g6uXG11L9rfd8wtBgDA/formResponse';

type HireUsFormState = {
  name: string;
  company: string;
  email: string;
  budget: string;
  brief: string;
};

export const HireUs: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const hasSubmittedRef = useRef(false);
  const [formData, setFormData] = useState<HireUsFormState>({
    name: '',
    company: '',
    email: '',
    budget: '',
    brief: ''
  });

  const services = [
    { id: 'web', icon: Layout, label: 'Web Apps' },
    { id: 'mobile', icon: Smartphone, label: 'Mobile Apps' },
    { id: 'ai', icon: Brain, label: 'AI Solutions' },
    { id: 'infra', icon: Server, label: 'Infrastructure' },
    { id: 'consult', icon: Globe, label: 'Consultancy' },
    { id: 'custom', icon: Code, label: 'Custom Dev' }
  ];

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.target.dataset.field as keyof HireUsFormState | undefined;

    if (!field) {
      return;
    }

    setFormData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      budget: '',
      brief: ''
    });
    setSelectedServices([]);
    setSubmitError('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError('');

    if (selectedServices.length === 0) {
      setSubmitError('Please select at least one service before submitting.');
      return;
    }

    setIsSubmitting(true);
    hasSubmittedRef.current = true;
    e.currentTarget.submit();
  };

  const handleFormResponseLoad = () => {
    if (!hasSubmittedRef.current) {
      return;
    }

    hasSubmittedRef.current = false;
    setIsSubmitting(false);
    setIsSuccess(true);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-bg-dark text-white pt-32 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.1),transparent_50%)] pointer-events-none" />
      <iframe
        title="hire-us-google-form-submit"
        name="hidden_google_form_iframe"
        className="hidden"
        onLoad={handleFormResponseLoad}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Launch Your <span className="text-gradient">Project</span>
            </h1>
            <p className="text-white/60 text-lg">
              Ready to build something extraordinary? Tell us about your mission.
            </p>
          </motion.div>
        </div>

        <div className="glass rounded-[3rem] border border-white/10 p-8 md:p-16 relative overflow-hidden min-h-[600px] flex flex-col justify-center">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />
          
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-8 py-12"
              >
                <div className="w-24 h-24 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 size={48} className="text-brand-primary" />
                </div>
                <div className="space-y-4">
                  <h2 className="text-4xl font-display font-bold">Mission Initiated!</h2>
                  <p className="text-white/60 max-w-md mx-auto">
                    Our team has received your transmission. We'll analyze the data and get back to you within 24 hours.
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setIsSuccess(false);
                    resetForm();
                  }}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
                >
                  Send Another Transmission
                </button>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                action={GOOGLE_FORM_ACTION}
                method="POST"
                onSubmit={handleSubmit} 
                target="hidden_google_form_iframe"
                className="space-y-12"
              >
                {/* Service Selection */}
                <div className="space-y-6">
                  <h3 className="text-xl font-display font-bold flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm">01</span>
                    Services
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.id)}
                        className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-4 group relative ${
                          selectedServices.includes(service.id)
                            ? 'bg-brand-primary/10 border-brand-primary text-brand-primary shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                            : 'bg-white/5 border-white/10 text-white/40 hover:border-white/30'
                        }`}
                        aria-pressed={selectedServices.includes(service.id)}
                      >
                        <span
                          className={`absolute top-4 right-4 flex h-5 w-5 items-center justify-center rounded border transition-all ${
                            selectedServices.includes(service.id)
                              ? 'border-brand-primary bg-brand-primary text-black'
                              : 'border-white/20 bg-transparent text-transparent'
                          }`}
                        >
                          <Check size={12} />
                        </span>
                        <service.icon size={24} className={selectedServices.includes(service.id) ? 'text-brand-primary' : 'text-white/20 group-hover:text-white/40'} />
                        <span className="text-xs font-bold uppercase tracking-widest">{service.label}</span>
                      </button>
                    ))}
                  </div>
                  {selectedServices.map((serviceId) => {
                    const selectedService = services.find((service) => service.id === serviceId);

                    if (!selectedService) {
                      return null;
                    }

                    return (
                      <input
                        key={serviceId}
                        type="hidden"
                        name="entry.2123286540"
                        value={selectedService.label}
                      />
                    );
                  })}
                </div>

                {/* Project Details */}
                <div className="space-y-8">
                  <h3 className="text-xl font-display font-bold flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-brand-primary/20 text-brand-primary flex items-center justify-center text-sm">02</span>
                    Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">Your Name</label>
                      <input 
                        required
                        name="entry.378239317"
                        data-field="name"
                        type="text" 
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all"
                        placeholder="Commander Shepard"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">Company Name</label>
                      <input 
                        name="entry.762310747"
                        data-field="company"
                        type="text" 
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all"
                        placeholder="Alliance Systems"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">Email Address</label>
                      <input 
                        required
                        name="entry.1227428686"
                        data-field="email"
                        type="email" 
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all"
                        placeholder="shepard@normandy.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">Estimated Budget</label>
                      <input
                        required
                        name="entry.2660944"
                        data-field="budget"
                        type="text"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all"
                        placeholder="e.g. Rs. 10,000 or Rs. 50,000 - Rs. 1,00,000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">Project Brief</label>
                    <textarea 
                      required
                      name="entry.1283459010"
                      data-field="brief"
                      rows={4}
                      value={formData.brief}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-brand-primary/50 transition-all resize-none"
                      placeholder="Describe your vision..."
                    />
                  </div>
                </div>

                <div className="pt-6">
                  {submitError ? (
                    <p className="mb-4 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                      {submitError}
                    </p>
                  ) : null}
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-brand-primary text-black font-display font-bold uppercase tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_40px_rgba(34,211,238,0.4)] group disabled:opacity-50 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        Processing <Loader2 size={20} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Initiate Mission <Rocket size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[10px] text-white/20 mt-6 uppercase tracking-widest">
                    By initiating, you agree to our terms of engagement.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale">
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
            <CheckCircle2 size={24} /> ISO CERTIFIED
          </div>
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
            <CheckCircle2 size={24} /> SECURE DATA
          </div>
          <div className="flex items-center gap-2 font-display font-bold text-xl tracking-tighter">
            <CheckCircle2 size={24} /> 24/7 SUPPORT
          </div>
        </div>
      </div>
    </div>
  );
};
