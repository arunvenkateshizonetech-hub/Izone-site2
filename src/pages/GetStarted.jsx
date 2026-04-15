import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Code,
  Palette,
  Smartphone,
  Globe,
  MessageSquare,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Layout from '@/components/Layout';
import { useToast } from '@/hooks/use-toast';
import HeroParagraph from '@/components/ui/HeroParagraph';

import { useAdmin } from '@/context/AdminContext';

const services = [
  { id: 'web', icon: Globe, label: 'Web Development' },
  { id: 'app', icon: Smartphone, label: 'App Development' },
  { id: 'software', icon: Code, label: 'Software Development' },
  { id: 'design', icon: Palette, label: 'Graphics Design' },
  { id: 'marketing', icon: MessageSquare, label: 'Digital Marketing' },
  { id: 'sms', icon: Zap, label: 'Bulk SMS Services' },
];

const subServiceOptions = {
  web: [
    'Static Website',
    'E-commerce Store',
    'Custom Web Application',
    'Landing Page',
    'Blog / Portfolio',
  ],
  app: [
    'iOS Application',
    'Android Application',
    'Cross-Platform App',
    'Progressive Web App (PWA)',
  ],
  software: [
    'ERP / CRM Solutions',
    'Inventory Management',
    'Custom Billing Software',
    'Enterprise Software',
  ],
  design: [
    'Logo & Branding',
    'UI/UX Design',
    'Graphic Design',
    'Social Media Assets',
  ],
  marketing: [
    'Social Media Marketing',
    'SEO Optimization',
    'Pay-Per-Click (PPC)',
    'Content Strategy',
  ],
  sms: [
    'Bulk SMS (Promotional)',
    'Transactional SMS',
    'WhatsApp Marketing',
    'Digital Election Campaign',
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

import PageHeader from "@/components/PageHeader";

const GetStarted = () => {
  const { toast } = useToast();
  const { addServiceRequest } = useAdmin();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    selectedServices: [],
    subServices: [],
    name: '',
    email: '',
    phone: '',
    company: '',
    projectDetails: '',
  });

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const isSelected = prev.selectedServices.includes(serviceId);
      const newSelectedServices = isSelected
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      
      // Also clear sub-services for deslected parent service
      const possibleSubServices = subServiceOptions[serviceId] || [];
      const newSubServices = isSelected
        ? prev.subServices.filter(s => !possibleSubServices.includes(s))
        : prev.subServices;

      return {
        ...prev,
        selectedServices: newSelectedServices,
        subServices: newSubServices,
      };
    });
  };

  const handleSubServiceToggle = (subService) => {
    setFormData((prev) => ({
      ...prev,
      subServices: prev.subServices.includes(subService)
        ? prev.subServices.filter((s) => s !== subService)
        : [...prev.subServices, subService],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addServiceRequest({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      projectDetails: formData.projectDetails,
      services: formData.selectedServices.join(', '),
      subServices: formData.subServices.join(', '),
    });
    toast({
      title: 'Request Submitted!',
      description:
        'Our team will contact you within 24 hours to discuss your project.',
    });

    setStep(1);
    setFormData({
      selectedServices: [],
      subServices: [],
      name: '',
      email: '',
      phone: '',
      company: '',
      projectDetails: '',
    });
  };

  const canProceedStep1 = formData.selectedServices.length > 0;
  const canProceedStep2 = formData.subServices.length > 0;
  const canSubmit =
    formData.name && formData.email && formData.projectDetails;

  return (
    <Layout>
      <PageHeader title="Get Started" />

      {/* Progress Steps */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 space-y-6 max-w-2xl mx-auto">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm block">Project Launchpad</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground leading-tight tracking-tight">Build Something Extraordinary</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">Tell us about your moonshot. Our team is ready to engineer exceptional digital ecosystems that redefine your business.</p>
          </div>

          <div className="flex justify-center items-center gap-4 md:gap-8 mb-16 md:mb-24">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-xl transition-all duration-500 scale-100 ${
                    step >= s
                      ? 'bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] text-primary-foreground shadow-2xl shadow-primary/30'
                      : 'bg-slate-100 dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-800'
                  } ${step === s ? 'scale-110 ring-4 ring-[hsl(var(--primary))]/10' : ''}`}
                >
                  {step > s ? <Check className="w-5 h-5 md:w-8 md:h-8" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-8 sm:w-20 md:w-40 h-[2px] md:h-[3px] mx-2 md:mx-4 rounded-full transition-all duration-700 ${
                      step > s ? 'bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))]' : 'bg-slate-100 dark:bg-slate-800'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 md:p-16 rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden group">
             <div className="absolute top-0 left-0 w-full h-[6px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] shadow-lg" />
            
            {/* Step 1: Select Services */}
            {step === 1 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-14">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-primary-foreground mb-3">
                    Choose Your Mission
                  </h3>
                  <p className="text-lg font-medium text-slate-500 dark:text-slate-400 italic">
                    Select the core disciplines for your digital ecosystem.
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-14"
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      onClick={() => handleServiceToggle(service.id)}
                      className={`group p-8 cursor-pointer transition-all duration-500 border-2 relative overflow-hidden flex flex-col items-center text-center rounded-[2rem] ${
                        formData.selectedServices.includes(service.id)
                          ? 'border-[hsl(var(--primary))] bg-white dark:bg-slate-800 shadow-2xl scale-105 z-10'
                          : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-[hsl(var(--primary))]/30 hover:scale-[1.02]'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${formData.selectedServices.includes(service.id) ? 'bg-[hsl(var(--primary))] text-primary-foreground shadow-xl shadow-primary/20' : 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] group-hover:scale-110'}`}>
                        <service.icon className="w-8 h-8" />
                      </div>
                      <span className="font-black text-sm tracking-widest uppercase leading-tight">{service.label}</span>
                      {formData.selectedServices.includes(service.id) && (
                        <div className="absolute top-4 right-4 text-[hsl(var(--primary))] animate-in zoom-in duration-300">
                          <Check className="w-6 h-6" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div variants={itemVariants} className="flex justify-end pt-8">
                  <Button
                    onClick={() => setStep(2)}
                    disabled={!canProceedStep1}
                    className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-12 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 group"
                  >
                    Next Phase <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 2: Specific Service Selection */}
            {step === 2 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-14">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-primary-foreground mb-3">
                    Refine Your Strategy
                  </h3>
                  <p className="text-lg font-medium text-slate-500 dark:text-slate-400 italic">
                    Which specific solutions will power your growth?
                  </p>
                </motion.div>

                <div className="space-y-12 mb-14">
                  {formData.selectedServices.map((serviceId) => {
                    const parentService = services.find(s => s.id === serviceId);
                    const options = subServiceOptions[serviceId] || [];
                    
                    if (options.length === 0) return null;

                    return (
                      <motion.div key={serviceId} variants={itemVariants} className="space-y-8">
                        <div className="flex items-center gap-6 mb-8 pb-4 border-b border-slate-100 dark:border-slate-800">
                           <div className="w-12 h-12 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center">
                             <parentService.icon className="w-6 h-6 text-[hsl(var(--primary))]" />
                           </div>
                           <h4 className="font-black text-2xl text-slate-900 dark:text-primary-foreground uppercase tracking-wider">{parentService.label}</h4>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {options.map((option) => {
                            const isSelected = formData.subServices.includes(option);

                            return (
                              <motion.div
                                key={option}
                                whileHover={{ y: -5 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => handleSubServiceToggle(option)}
                                className={`p-8 cursor-pointer flex flex-col transition-all duration-500 border-2 rounded-[2rem] ${
                                  isSelected
                                    ? 'border-[hsl(var(--accent))] bg-white dark:bg-slate-800 shadow-2xl scale-[1.02]'
                                    : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-[hsl(var(--accent))]/30'
                                }`}
                              >
                                <div className="flex justify-between items-start mb-4">
                                  <h4 className={`font-black text-lg transition-colors leading-tight ${
                                    isSelected ? 'text-[hsl(var(--accent))]' : 'text-slate-900 dark:text-primary-foreground'
                                  }`}>
                                    {option}
                                  </h4>
                                  {isSelected && <div className="w-6 h-6 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center text-primary-foreground"><Check className="w-4 h-4" /></div>}
                                </div>
                                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium italic leading-relaxed">
                                  Expertly engineered solutions designed for maximum performance and user engagement.
                                </p>
                              </motion.div>
                            );
                          })}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between gap-4 pt-10">
                  <Button
                    variant="outline"
                    onClick={() => setStep(1)}
                    className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-800 text-slate-600 font-black py-8 px-12 text-lg rounded-2xl transition-all"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={() => setStep(3)}
                    disabled={!canProceedStep2}
                    className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-12 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 group"
                  >
                    Identify <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={itemVariants} className="text-center mb-14">
                  <h3 className="font-bold text-2xl text-slate-900 dark:text-primary-foreground mb-3">
                    Sync Your Mission
                  </h3>
                  <p className="text-lg font-medium text-slate-500 dark:text-slate-400 italic">
                    We'll provide the expert crew to navigate your project's orbit.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants} className="space-y-10 mb-14">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Commander Name *</label>
                      <Input
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Email Signal *</label>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Direct Line</label>
                      <Input
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Organization</label>
                      <Input
                        placeholder="Enter company"
                        value={formData.company}
                        onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                        className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Mission Specs *</label>
                    <Textarea
                      placeholder="Define your vision, goals, and technical requirements..."
                      rows={6}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData(prev => ({ ...prev, projectDetails: e.target.value }))}
                      className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 p-6 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))] resize-none"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-between gap-4 pt-10">
                  <Button
                    variant="outline"
                    onClick={() => setStep(2)}
                    className="w-full sm:w-auto border-2 border-slate-200 dark:border-slate-800 text-slate-600 font-black py-8 px-12 text-lg rounded-2xl transition-all"
                  >
                    Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!canSubmit}
                    className="w-full sm:w-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-14 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95 group"
                  >
                    Launch Mission <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6 relative">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[hsl(var(--accent))]/5 rounded-full blur-[100px]"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-2xl mx-auto space-y-4"
          >
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm block">Why Partner With Us</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground leading-tight tracking-tight">
              Elite Engineering Partner
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">We are committed to delivering high-frequency performance and moonshot outcomes for every mission.</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'High Velocity',
                description: 'We prioritize performance and speed, synchronized with precision in every line of code.',
                color: 'hsl(var(--primary))'
              },
              {
                title: 'Transparent Protocols',
                description: 'No technical debt, no hidden costs. Our quotes are engineered for clarity and scalability.',
                color: 'hsl(var(--accent))'
              },
              {
                title: '24/7 Mission Control',
                description: 'Dedicated fleet support and project leads available throughout your journey.',
                color: 'hsl(var(--secondary))'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-12 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-xl hover:shadow-2xl transition-all duration-700 relative overflow-hidden text-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mx-auto mb-8 transition-all duration-500 group-hover:scale-110 shadow-lg group-shadow border border-slate-100 dark:border-slate-800">
                  <Check className="w-10 h-10 transition-colors" style={{ color: feature.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">{feature.description}</p>
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};


export default GetStarted;
