import { motion } from 'framer-motion';
import { MessageSquare, Send, Users, BarChart3, Clock, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'Mass SMS Broadcasting',
    summary: 'Send thousands of messages instantly to your audience with our robust bulk SMS platform.',
    fullContent: 'Reach your customers instantly with our high-capacity SMS broadcasting system. Perfect for promotions, alerts, and mass communications with guaranteed delivery rates.',
    icon: <Send className="w-8 h-8" />,
    features: ['Instant Delivery', 'High Volume Capacity', 'Delivery Reports', 'Scheduled Sending', 'Custom Sender ID'],
    shape3D: 'cube',
  },
  {
    title: 'Promotional Campaigns',
    summary: 'Create engaging promotional SMS campaigns that drive sales and customer engagement.',
    fullContent: 'Design and execute powerful promotional campaigns with personalized messages, tracking, and analytics to maximize your marketing ROI.',
    icon: <MessageSquare className="w-8 h-8" />,
    features: ['Campaign Templates', 'Personalization', 'A/B Testing', 'Click Tracking', 'Conversion Analytics'],
    shape3D: 'sphere',
  },
  {
    title: 'Contact Management',
    summary: 'Organize and segment your contact lists for targeted and effective messaging.',
    fullContent: 'Manage your contacts efficiently with advanced segmentation, import/export tools, and automated list cleaning to ensure your messages reach the right people.',
    icon: <Users className="w-8 h-8" />,
    features: ['List Segmentation', 'CSV Import/Export', 'Duplicate Removal', 'Opt-out Management', 'Custom Fields'],
    shape3D: 'torus',
  },
  {
    title: 'Analytics & Reporting',
    summary: 'Track campaign performance with detailed analytics and comprehensive reports.',
    fullContent: 'Get deep insights into your SMS campaigns with real-time analytics, delivery reports, and performance metrics to optimize your messaging strategy.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Real-time Tracking', 'Delivery Reports', 'Performance Metrics', 'Export Reports', 'ROI Analysis'],
    shape3D: 'octahedron',
  },
  {
    title: 'Scheduled Messaging',
    summary: 'Plan and schedule your SMS campaigns in advance for optimal timing and reach.',
    fullContent: 'Schedule your messages to be sent at the perfect time. Set up recurring campaigns, time-zone aware delivery, and automated follow-ups.',
    icon: <Clock className="w-8 h-8" />,
    features: ['Time-zone Support', 'Recurring Campaigns', 'Queue Management', 'Auto Follow-ups', 'Calendar View'],
    shape3D: 'cube',
  },
  {
    title: 'Secure & Compliant',
    summary: 'Enterprise-grade security with full regulatory compliance for peace of mind.',
    fullContent: 'Our platform ensures your data is protected with encryption, secure APIs, and full compliance with telecommunications regulations and data protection laws.',
    icon: <Shield className="w-8 h-8" />,
    features: ['Data Encryption', 'GDPR Compliant', 'DND Filtering', 'Secure APIs', 'Audit Logs'],
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

const BulkSms = () => {
  return (
    <Layout>
      <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-4"
          >
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-black uppercase tracking-widest">
              Communication Protocol
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight">
              <span className="block text-foreground">Reach Thousands</span>
              <span className="text-primary block mt-0">Instantly</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Powerful bulk SMS solutions to connect with your audience effectively 
              and drive engagement at scale.
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
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">
                Ready to Start Messaging?
              </h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Get started with our bulk SMS platform and reach your audience today.
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

export default BulkSms;
