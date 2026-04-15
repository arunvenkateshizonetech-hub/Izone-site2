import { motion } from 'framer-motion';
import { Code, Palette, Settings, Headphones, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";

const services = [
  {
    icon: Code,
    title: 'Custom Web Development',
    description: 'Tailored web applications built from the ground up using modern frameworks and best practices.',
    features: ['React & Next.js', 'TypeScript', 'Node.js Backend', 'REST & GraphQL APIs', 'Database Design'],
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces designed with your users in mind for maximum engagement.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Accessibility'],
  },
  {
    icon: Settings,
    title: 'Technical Consulting',
    description: 'Expert guidance on architecture, technology stack, and development strategy.',
    features: ['Architecture Review', 'Code Audits', 'Performance Optimization', 'Security Assessment', 'Scalability Planning'],
  },
  {
    icon: Headphones,
    title: 'Ongoing Support',
    description: 'Continuous maintenance, updates, and support to keep your application running smoothly.',
    features: ['24/7 Monitoring', 'Bug Fixes', 'Feature Updates', 'Performance Tuning', 'Security Patches'],
  },
];

const process = [
  { step: '01', title: 'Discovery', description: 'We dive deep into understanding your business, goals, and requirements.' },
  { step: '02', title: 'Planning', description: 'Creating detailed roadmaps, wireframes, and technical specifications.' },
  { step: '03', title: 'Design', description: 'Crafting beautiful, user-centric interfaces that align with your brand.' },
  { step: '04', title: 'Development', description: 'Building robust, scalable applications using cutting-edge technologies.' },
  { step: '05', title: 'Testing', description: 'Rigorous quality assurance to ensure flawless functionality.' },
  { step: '06', title: 'Launch & Support', description: 'Seamless deployment and ongoing maintenance for lasting success.' },
];

const portfolio = [
  { title: 'E-Commerce Platform', category: 'Full Stack Development', description: 'Modern shopping experience with real-time inventory and seamless checkout. Built with cutting-edge technologies for optimal performance.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop', tags: ['React', 'Node.js', 'Stripe', 'PostgreSQL'] },
  { title: 'SaaS Dashboard', category: 'Web Application', description: 'Comprehensive analytics dashboard for enterprise data management. Features real-time data visualization and custom reporting.', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop', tags: ['TypeScript', 'GraphQL', 'AWS', 'D3.js'] },
  { title: 'Healthcare Portal', category: 'Enterprise Solution', description: 'HIPAA-compliant patient management system with telemedicine features. Secure, scalable, and user-friendly design.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop', tags: ['React', 'PostgreSQL', 'WebRTC', 'HIPAA'] },
  { title: 'FinTech Mobile App', category: 'Mobile Development', description: 'Cross-platform mobile banking solution with biometric authentication. Seamless user experience across iOS and Android.', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=500&fit=crop', tags: ['React Native', 'Firebase', 'Plaid', 'Biometrics'] },
  { title: 'Real Estate Platform', category: 'Web Application', description: 'Property listing platform with virtual tours and CRM integration. Interactive maps and advanced search functionality.', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop', tags: ['Next.js', 'Prisma', 'Mapbox', '3D Tours'] },
  { title: 'Learning Management System', category: 'EdTech', description: 'Interactive e-learning platform with video streaming and progress tracking. Gamification elements for better engagement.', image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop', tags: ['Vue.js', 'Django', 'Redis', 'WebSockets'] },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const WebDevelopment = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="container-custom relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-2xl mx-auto space-y-6">
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-black uppercase tracking-widest mb-4">
              Mission Component
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Web Engineering
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block mt-2">Elite Protocols</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              From conception to planetary deployment, we engineer high-frequency web ecosystems that command industry dominance.
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
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium italic leading-relaxed">Our proprietary development lifecycle engineered for absolute reliability and high-speed execution.</p>
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

     

      {/* CTA */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden px-6">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30 group">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Deploy Your Digital Vision?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance web solution with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-8 px-12 text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                  Initiate Project Quote
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

export default WebDevelopment;
