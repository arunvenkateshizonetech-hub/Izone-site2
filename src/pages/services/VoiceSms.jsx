import { motion } from 'framer-motion';
import { Phone, Mic, Volume2, Radio, Settings, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'Automated Voice Calls',
    summary: 'Deliver pre-recorded voice messages to thousands of recipients simultaneously.',
    fullContent: 'Our automated voice call system lets you broadcast important messages, reminders, and promotional content through crystal-clear voice calls at scale.',
    icon: <Phone className="w-8 h-8" />,
    features: ['Mass Broadcasting', 'IVR Integration', 'Call Scheduling', 'Retry Logic', 'Call Recording'],
    shape3D: 'cube',
  },
  {
    title: 'Text-to-Speech',
    summary: 'Convert your text messages into natural-sounding voice calls automatically.',
    fullContent: 'Transform written content into engaging voice messages with our advanced text-to-speech technology supporting multiple languages and voice options.',
    icon: <Mic className="w-8 h-8" />,
    features: ['Multiple Languages', 'Natural Voices', 'Custom Pacing', 'SSML Support', 'Voice Selection'],
    shape3D: 'sphere',
  },
  {
    title: 'Voice Broadcasting',
    summary: 'Reach your entire audience with personalized voice broadcasts in minutes.',
    fullContent: 'Send personalized voice messages to large audiences for announcements, alerts, political campaigns, and promotional activities with high delivery rates.',
    icon: <Volume2 className="w-8 h-8" />,
    features: ['Personalization', 'Bulk Delivery', 'Priority Queuing', 'Custom CallerID', 'Time Optimization'],
    shape3D: 'torus',
  },
  {
    title: 'Interactive Voice Response',
    summary: 'Create interactive voice menus for surveys, feedback, and customer engagement.',
    fullContent: 'Build sophisticated IVR systems for collecting customer feedback, conducting surveys, and creating interactive campaigns with keypress responses.',
    icon: <Radio className="w-8 h-8" />,
    features: ['Menu Builder', 'Keypress Capture', 'Survey Creation', 'Response Tracking', 'Data Collection'],
    shape3D: 'octahedron',
  },
  {
    title: 'Campaign Management',
    summary: 'Manage and optimize your voice campaigns with our intuitive dashboard.',
    fullContent: 'Control all aspects of your voice campaigns from a single dashboard with scheduling, audience management, and real-time monitoring capabilities.',
    icon: <Settings className="w-8 h-8" />,
    features: ['Campaign Dashboard', 'Audience Segments', 'A/B Testing', 'Schedule Control', 'Template Library'],
    shape3D: 'cube',
  },
  {
    title: 'Analytics & Insights',
    summary: 'Track call performance with detailed analytics and actionable insights.',
    fullContent: 'Monitor your voice campaign performance with comprehensive analytics including answer rates, call duration, response patterns, and conversion tracking.',
    icon: <BarChart className="w-8 h-8" />,
    features: ['Call Analytics', 'Answer Rates', 'Duration Stats', 'Response Analysis', 'Export Reports'],
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

const VoiceSms = () => {
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
              Acoustic Orchestration
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Voice That</span>
              <span className="text-primary block mt-2">Resonates Worldwide</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Deliver your message through powerful high-frequency voice broadcasting protocols engineered for maximum planetary reach.
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
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Command the Frequencies?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance voice campaign with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-8 px-12 text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                  Initiate Broadcast Quote
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

export default VoiceSms;
