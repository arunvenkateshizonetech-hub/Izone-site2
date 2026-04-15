import { motion } from 'framer-motion';
import { Briefcase, FileText, CheckCircle, Navigation, ArrowRight, Check, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";

const services = [
  {
    icon: Zap,
    title: 'Minnagam',
    description: 'Government service platform to handle electricity-related issues and citizen requests efficiently.',
    features: ['Power Outages', 'Damaged Poles', 'New Service Applications', 'Billing Complaints', 'Low-Hanging Wires'],
  },
  {
    icon: Briefcase,
    title: 'Tender Identification',
    description: 'We proactively search and identify government and corporate tenders that align with your business profile and goals.',
    features: ['Market Research', 'Alerts Setup', 'Competitor Analysis', 'Feasibility Review', 'Qualification Verification'],
  },
  {
    icon: FileText,
    title: 'Proposal Preparation',
    description: 'Expert crafting of compelling, compliant, and highly competitive technical and financial proposals.',
    features: ['Technical Writing', 'Financial Modeling', 'Compliance Matrices', 'Document Formatting', 'Executive Summaries'],
  },
  {
    icon: CheckCircle,
    title: 'Compliance & Documentation',
    description: 'We ensure your submissions meet all legal, regulatory, and formatting criteria to avoid disqualifications.',
    features: ['Policy Adherence', 'Legal Reviews', 'Quality Assurance', 'Checklist Validation', 'Risk Mitigation'],
  },
  {
    icon: Navigation,
    title: 'Post-Submission Support',
    description: 'Aiding in presentations, negotiations, and follow-ups after the initial tender has been submitted.',
    features: ['Presentation Prep', 'Interview Coaching', 'Negotiation Support', 'Feedback Analysis', 'Contract Award Assistance'],
  }
];

const process = [
  { step: '01', title: 'Opportunity Mapping', description: 'Curating a list of viable tenders matching your capabilities.' },
  { step: '02', title: 'Strategy Development', description: 'Building a custom bid strategy highlighting your unique value proposition.' },
  { step: '03', title: 'Writing & Compilation', description: 'Drafting all necessary documentation meticulously and accurately.' },
  { step: '04', title: 'Quality Review', description: 'Rigorous internal auditing against the tender requisites.' },
  { step: '05', title: 'Submission', description: 'Handling the secure and timely lodgement of your bid package.' },
  { step: '06', title: 'Award & Debrief', description: 'Navigating post-bid interviews and comprehensive outcome analysis.' },
];

const portfolio = [
  { title: 'Municipal IT Infrastructure', category: 'Technology', description: 'Successfully won a comprehensive multi-year SLA for upgrading regional IT systems.', image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop', tags: ['IT', 'Hardware', 'Networking'] },
  { title: 'Public Health Logistics', category: 'Healthcare', description: 'Secured a major tender for managing logistics and supply chain of medical equipment.', image: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&h=500&fit=crop', tags: ['Logistics', 'Govt', 'Healthcare'] },
  { title: 'Smart City Initiative', category: 'Infrastructure', description: 'Awarded a key phase of urban smart city development focusing on IoT sensors.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=500&fit=crop', tags: ['IoT', 'Smart City', 'Sensors'] },
  { title: 'Education Digitalization', category: 'EdTech', description: 'Partnered with the Department of Education to digitalize rural classrooms.', image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop', tags: ['Education', 'Tech', 'Rural'] },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const GovernmentTenders = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-2xl mx-auto space-y-6">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-black uppercase tracking-widest mb-4">
              Strategic Procurement
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Win More
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block mt-2">Government Elite Contracts</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              End-to-end specialized tender orchestration, strategic proposal engineering, and absolute compliance assurance to secure high-frequency public sector dominance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden px-6">
        <div className="container-custom relative z-10">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-white dark:bg-slate-950 p-10 md:p-14 rounded-[3.5rem] shadow-xl hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-700 relative flex flex-col h-full group border border-slate-100 dark:border-slate-800">
                <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 shadow-lg group-shadow border border-slate-100 dark:border-slate-800">
                  <service.icon className="w-10 h-10 text-[hsl(var(--primary))]" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-black mb-5 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-lg font-medium italic mb-8 leading-relaxed">{service.description}</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mt-auto pt-8 border-t border-slate-50 dark:border-slate-900/50">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-base font-bold text-slate-700 dark:text-slate-300">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] shrink-0 mt-2" />
                      <span className="leading-tight">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden px-6">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-24 max-w-2xl mx-auto space-y-4">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm block">Mission Workflow</motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-primary-foreground leading-tight">Strategic Orchestration</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">Our proprietary procurement lifecycle engineered for absolute reliability and tactical success in bidding.</p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="bg-slate-50 dark:bg-slate-900 p-10 rounded-[3rem] shadow-lg border border-slate-100 dark:border-slate-800 relative overflow-hidden group hover:bg-white dark:hover:bg-slate-800 transition-all duration-700">
                <div className="absolute top-8 right-8 text-7xl font-black text-[hsl(var(--primary))]/5 transition-all group-hover:scale-125 group-hover:text-[hsl(var(--accent))]/10">{item.step}</div>
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-[hsl(var(--primary))] font-black text-xs uppercase tracking-[0.2em]">Phase {item.step}</span>
                    <h3 className="text-2xl font-black mt-4 mb-4 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-base font-medium italic leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Scroll-Triggered Portfolio Section */}
      <ScrollWorksSection works={portfolio} title="Success Stories" subtitle="Recent Contract Wins" />

      {/* CTA */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden px-6">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30 group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Command the Marketplace?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance procurement campaign with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-8 px-12 text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                  Initiate Strategic Quote
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GovernmentTenders;
