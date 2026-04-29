import { motion } from 'framer-motion';
import { Megaphone, Target, TrendingUp, Users, Sparkles, PieChart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'Marketing Campaigns',
    summary: 'Create engaging WhatsApp marketing campaigns that convert and drive sales.',
    fullContent: 'Design and execute high-converting WhatsApp marketing campaigns with rich media, interactive buttons, and compelling CTAs to maximize your marketing ROI.',
    icon: <Megaphone className="w-8 h-8" />,
    features: ['Rich Media Campaigns', 'Interactive Buttons', 'Carousel Messages', 'Quick Replies', 'Campaign Templates'],
    shape3D: 'cube',
  },
  {
    title: 'Targeted Messaging',
    summary: 'Reach the right audience with precision targeting and segmentation.',
    fullContent: 'Leverage advanced targeting options to segment your audience based on behavior, demographics, and preferences for personalized messaging that resonates.',
    icon: <Target className="w-8 h-8" />,
    features: ['Audience Segmentation', 'Behavior Targeting', 'Custom Attributes', 'Lookalike Audiences', 'Retargeting'],
    shape3D: 'sphere',
  },
  {
    title: 'Growth Strategies',
    summary: 'Grow your WhatsApp subscriber base with proven opt-in strategies.',
    fullContent: 'Build your WhatsApp audience with click-to-WhatsApp ads, QR codes, website widgets, and landing pages designed to capture and convert leads.',
    icon: <TrendingUp className="w-8 h-8" />,
    features: ['Click-to-WhatsApp Ads', 'QR Code Generation', 'Website Widgets', 'Landing Pages', 'Referral Programs'],
    shape3D: 'torus',
  },
  {
    title: 'Customer Engagement',
    summary: 'Build lasting relationships with personalized customer engagement.',
    fullContent: 'Keep your customers engaged with timely updates, personalized offers, loyalty programs, and interactive content that builds brand loyalty.',
    icon: <Users className="w-8 h-8" />,
    features: ['Drip Campaigns', 'Loyalty Programs', 'Birthday Messages', 'Re-engagement', 'Feedback Collection'],
    shape3D: 'octahedron',
  },
  {
    title: 'Creative Content',
    summary: 'Stand out with creative and engaging WhatsApp content that captures attention.',
    fullContent: 'Create scroll-stopping content with our creative team including videos, animations, interactive catalogs, and compelling copy that drives action.',
    icon: <Sparkles className="w-8 h-8" />,
    features: ['Video Content', 'Animated Stickers', 'Product Catalogs', 'Copywriting', 'Brand Templates'],
    shape3D: 'cube',
  },
  {
    title: 'Performance Analytics',
    summary: 'Measure and optimize your campaigns with comprehensive analytics.',
    fullContent: 'Track every aspect of your WhatsApp marketing with detailed analytics on delivery, engagement, conversions, and ROI to continuously improve performance.',
    icon: <PieChart className="w-8 h-8" />,
    features: ['Delivery Tracking', 'Engagement Metrics', 'Conversion Tracking', 'ROI Analysis', 'A/B Testing'],
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

const WhatsappMarketing = () => {
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
              Conversational Influence
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Marketing That</span>
              <span className="text-primary block mt-2">Converts Planet-Wide</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Unlock the power of high-frequency WhatsApp marketing protocols designed to engage millions and drive exponential business growth.
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
              <h2 className="text-4xl md:text-5xl font-black text-primary-foreground mb-6 leading-tight">Ready to Command the Conversation?</h2>
              <p className="text-xl text-primary-foreground/90 font-bold mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance marketing campaign with tactical precision.
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

export default WhatsappMarketing;
