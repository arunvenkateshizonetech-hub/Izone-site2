import { motion } from 'framer-motion';
import { Vote, Users, MapPin, BarChart3, Megaphone, Shield, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';


const services = [
  {
    title: 'Voter Outreach',
    summary: 'Reach millions of voters through multi-channel digital campaigns.',
    fullContent:
      'Connect with voters across SMS, WhatsApp, voice calls, and social media with coordinated campaigns designed to maximize reach and engagement.',
    icon: <Vote className="w-8 h-8" />,
    features: ['Multi-Channel Reach', 'Mass Messaging', 'Personalized Appeals', 'Language Support', 'Timed Delivery'],
    shape3D: 'cube',
  },
  {
    title: 'Constituency Mapping',
    summary: 'Target voters precisely with geo-targeted constituency campaigns.',
    fullContent:
      'Leverage advanced geo-targeting to reach voters in specific constituencies, wards, and booths with localized messaging and candidate information.',
    icon: <MapPin className="w-8 h-8" />,
    features: ['Geo-Targeting', 'Booth Level Data', 'Ward Segmentation', 'Rural/Urban Split', 'Location Analytics'],
    shape3D: 'sphere',
  },
  {
    title: 'Volunteer Management',
    summary: 'Coordinate and mobilize campaign volunteers effectively.',
    fullContent:
      'Manage your ground force with tools for volunteer registration, task assignment, progress tracking, and real-time communication during elections.',
    icon: <Users className="w-8 h-8" />,
    features: ['Volunteer Database', 'Task Assignment', 'Mobile App', 'Progress Tracking', 'Team Communication'],
    shape3D: 'torus',
  },
  {
    title: 'Campaign Analytics',
    summary: 'Track campaign performance with real-time analytics and insights.',
    fullContent:
      'Monitor your campaign effectiveness with dashboards showing reach, engagement, sentiment analysis, and voter response patterns across all channels.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Real-time Dashboard', 'Sentiment Analysis', 'Engagement Metrics', 'Voter Response', 'Trend Reports'],
    shape3D: 'octahedron',
  },
  {
    title: 'Social Media Strategy',
    summary: 'Dominate social media with strategic content and advertising.',
    fullContent:
      'Build a strong social media presence with viral content, targeted ads, influencer partnerships, and rapid response strategies for maximum impact.',
    icon: <Megaphone className="w-8 h-8" />,
    features: ['Content Strategy', 'Paid Advertising', 'Viral Campaigns', 'Influencer Outreach', 'Crisis Management'],
    shape3D: 'cube',
  },
  {
    title: 'Compliance & Security',
    summary: 'Ensure campaign compliance with election laws and data security.',
    fullContent:
      'Run compliant campaigns with built-in safeguards for election regulations, spending limits, content guidelines, and secure voter data handling.',
    icon: <Shield className="w-8 h-8" />,
    features: ['Election Compliance', 'Spending Tracking', 'Content Review', 'Data Security', 'Audit Trail'],
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

const DigitalElectionCampaign = () => {
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
              Political Intelligence
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 dark:text-primary-foreground leading-[1.1] tracking-tight">
              Win High-Frequency
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block mt-0">Digital Elections</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Advanced planetary-scale outreach protocols and tactical constituency mapping engineered for absolute electoral dominance.
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
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Command the Electorate?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance campaign with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button size="lg" className="bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-8 px-12 text-xl rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                  Initiate Campaign Quote
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

export default DigitalElectionCampaign;
