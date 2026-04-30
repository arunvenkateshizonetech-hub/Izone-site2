import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Settings, Shield, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'Custom Software Solutions',
    summary: 'Tailored software built specifically for your unique business requirements.',
    fullContent: 'We develop custom software solutions that perfectly align with your workflows, processes, and business goals. From enterprise applications to specialized tools.',
    icon: <Cpu className="w-8 h-8" />,
    features: ['Requirements Analysis', 'Custom Architecture', 'Agile Development', 'Quality Assurance', 'Ongoing Support'],
    shape3D: 'cube',
  },
  {
    title: 'Enterprise Applications',
    summary: 'Scalable enterprise software to streamline operations and boost productivity.',
    fullContent: 'Build robust enterprise applications including ERP systems, CRM platforms, inventory management, and workflow automation tools for large-scale operations.',
    icon: <Database className="w-8 h-8" />,
    features: ['ERP Systems', 'CRM Development', 'Inventory Management', 'Workflow Automation', 'Business Intelligence'],
    shape3D: 'sphere',
  },
  {
    title: 'Cloud Solutions',
    summary: 'Modern cloud-native applications with seamless scalability and reliability.',
    fullContent: 'Leverage cloud technologies for scalable, secure, and cost-effective solutions. We build applications on AWS, Azure, and Google Cloud platforms.',
    icon: <Cloud className="w-8 h-8" />,
    features: ['AWS/Azure/GCP', 'Microservices', 'Serverless Architecture', 'Auto-Scaling', 'Cloud Migration'],
    shape3D: 'torus',
  },
  {
    title: 'System Integration',
    summary: 'Connect and unify your existing systems for seamless data flow.',
    fullContent: 'Integrate disparate systems, APIs, and databases to create a unified ecosystem. Enable real-time data synchronization and automated workflows across platforms.',
    icon: <Settings className="w-8 h-8" />,
    features: ['API Integration', 'Data Migration', 'Legacy Modernization', 'Third-party Connect', 'Real-time Sync'],
    shape3D: 'octahedron',
  },
  {
    title: 'Security & Compliance',
    summary: 'Enterprise-grade security implementation and regulatory compliance.',
    fullContent: 'Ensure your software meets the highest security standards with encryption, access controls, audit logging, and compliance with industry regulations.',
    icon: <Shield className="w-8 h-8" />,
    features: ['Security Audits', 'Encryption', 'Access Control', 'HIPAA/GDPR', 'Penetration Testing'],
    shape3D: 'cube',
  },
  {
    title: 'DevOps & Deployment',
    summary: 'Streamlined development and deployment with modern DevOps practices.',
    fullContent: 'Implement CI/CD pipelines, infrastructure as code, and automated testing to ensure fast, reliable, and consistent software delivery.',
    icon: <Rocket className="w-8 h-8" />,
    features: ['CI/CD Pipelines', 'Docker/Kubernetes', 'Automated Testing', 'Monitoring', 'Infrastructure as Code'],
    shape3D: 'sphere',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SoftwareDevelopment = () => {
  return (
    <Layout>
      <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-black uppercase tracking-widest mb-4">
              Enterprise Neural Systems
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Build Powerful</span>
              <span className="text-primary block mt-2">Neural Solutions</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Custom software engineering that transforms complex business architectures 
              into streamlined, high-performance digital ecosystems.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden px-6">
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {services.map((service, index) => (
              <FlipCard
                key={index}
                title={service.title}
                summary={service.summary}
                fullContent={service.fullContent}
                icon={service.icon}
                features={service.features}
                use3D={true}
                shape3D={service.shape3D}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden px-4 md:px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-8 md:p-24 rounded-[2rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30 group w-[90%] max-w-[360px] md:w-full md:max-w-none mx-auto"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black text-primary-foreground mb-4 md:mb-6 leading-tight">
                Ready to Build Your Neural Edge?
              </h2>
              <p className="text-base md:text-xl text-primary-foreground/90 font-bold mb-8 md:mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance enterprise solution with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-6 md:py-8 px-8 md:px-12 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 box-border">
                  Initiate System Quote
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SoftwareDevelopment;
