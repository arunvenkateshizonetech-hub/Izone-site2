import { motion } from 'framer-motion';
import { MessageCircle, Users, Bot, LayoutDashboard, Zap, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'WhatsApp Business API',
    summary: 'Official WhatsApp Business API integration for enterprise-grade messaging.',
    fullContent: 'Connect with the official WhatsApp Business API to send notifications, updates, and engage with customers through the world\'s most popular messaging platform.',
    icon: <MessageCircle className="w-8 h-8" />,
    features: ['Official API', 'Green Tick Verified', 'Template Messages', 'Session Messages', 'Media Support'],
    shape3D: 'cube',
  },
  {
    title: 'Multi-Agent Dashboard',
    summary: 'Manage multiple agents and conversations from a centralized dashboard.',
    fullContent: 'Enable your team to handle customer conversations efficiently with our multi-agent dashboard featuring assignment rules, collaboration tools, and performance tracking.',
    icon: <Users className="w-8 h-8" />,
    features: ['Agent Management', 'Chat Assignment', 'Team Collaboration', 'Performance Stats', 'Role Permissions'],
    shape3D: 'sphere',
  },
  {
    title: 'Chatbot Integration',
    summary: 'Automate responses and customer support with intelligent chatbots.',
    fullContent: 'Build and deploy AI-powered chatbots to handle common queries, qualify leads, and provide 24/7 customer support without human intervention.',
    icon: <Bot className="w-8 h-8" />,
    features: ['Flow Builder', 'AI Responses', 'Quick Replies', 'Human Handoff', 'Intent Detection'],
    shape3D: 'torus',
  },
  {
    title: 'Campaign Manager',
    summary: 'Create and manage bulk WhatsApp campaigns with advanced targeting.',
    fullContent: 'Design, schedule, and send targeted WhatsApp campaigns to your audience segments with rich media support, tracking, and compliance management.',
    icon: <LayoutDashboard className="w-8 h-8" />,
    features: ['Bulk Messaging', 'Rich Media', 'Audience Segments', 'Campaign Analytics', 'Template Manager'],
    shape3D: 'octahedron',
  },
  {
    title: 'API Integration',
    summary: 'Integrate WhatsApp with your existing systems through our robust APIs.',
    fullContent: 'Connect your CRM, e-commerce platform, or custom applications with our comprehensive API for seamless WhatsApp communication automation.',
    icon: <Zap className="w-8 h-8" />,
    features: ['REST APIs', 'Webhooks', 'CRM Integration', 'E-commerce Sync', 'Custom Workflows'],
    shape3D: 'cube',
  },
  {
    title: 'Security & Compliance',
    summary: 'Enterprise-grade security with full WhatsApp policy compliance.',
    fullContent: 'Ensure your messaging is secure and compliant with WhatsApp policies, data protection regulations, and enterprise security standards.',
    icon: <Lock className="w-8 h-8" />,
    features: ['End-to-End Encryption', 'GDPR Compliant', 'Policy Adherence', 'Data Protection', 'Audit Logs'],
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

const WhatsappPanel = () => {
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
              Integrated Console
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Unified WhatsApp
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block mt-2">Control Center</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Centralized high-frequency messaging infrastructure engineered for absolute operational dominance and seamless enterprise-scale automation.
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

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-slate-950 relative overflow-hidden px-6">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-16 md:p-24 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30 group"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Command Your Messaging?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance console with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-8 px-12 text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                  Initiate Panel Quote
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

export default WhatsappPanel;
