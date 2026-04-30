import { motion } from 'framer-motion';
import { Share2, TrendingUp, Users, MessageCircle, BarChart3, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { Button } from '../../components/ui/button';
import FlipCard from '../../components/ui/FlipCard';


const services = [
  {
    title: 'Social Media Strategy',
    summary: 'Comprehensive strategies tailored to your brand voice and business goals.',
    fullContent: 'We develop data-driven social media strategies that align with your business objectives. Our approach includes audience analysis, competitive research, content calendars, and KPI tracking.',
    icon: <Target className="w-8 h-8" />,
    features: ['Audience Research', 'Competitive Analysis', 'Content Calendar', 'KPI Definition', 'Platform Selection'],
    shape3D: 'octahedron',
  },
  {
    title: 'Content Creation',
    summary: 'Engaging visual and written content that resonates with your audience.',
    fullContent: 'Our creative team produces scroll-stopping content including graphics, videos, reels, stories, and captions that capture attention and drive engagement across all platforms.',
    icon: <Share2 className="w-8 h-8" />,
    features: ['Graphics & Images', 'Video Production', 'Reels & Stories', 'Copywriting', 'Brand Guidelines'],
    shape3D: 'cube',
  },
  {
    title: 'Community Management',
    summary: 'Build and nurture an engaged community around your brand.',
    fullContent: 'We handle all aspects of community management including responding to comments, DMs, mentions, and building meaningful relationships with your followers and potential customers.',
    icon: <Users className="w-8 h-8" />,
    features: ['Comment Management', 'DM Responses', 'Community Building', 'Crisis Management', 'Influencer Outreach'],
    shape3D: 'sphere',
  },
  {
    title: 'Paid Advertising',
    summary: 'Targeted ad campaigns that maximize ROI across all major platforms.',
    fullContent: 'We create and manage high-performing paid campaigns on Facebook, Instagram, LinkedIn, and TikTok with precise targeting, A/B testing, and continuous optimization.',
    icon: <TrendingUp className="w-8 h-8" />,
    features: ['Facebook & Instagram Ads', 'LinkedIn Advertising', 'TikTok Campaigns', 'Retargeting', 'A/B Testing'],
    shape3D: 'torus',
  },
  {
    title: 'Analytics & Reporting',
    summary: 'In-depth analytics and insights to measure and improve performance.',
    fullContent: 'We provide comprehensive monthly reports with actionable insights, including engagement metrics, audience growth, conversion tracking, and recommendations for improvement.',
    icon: <BarChart3 className="w-8 h-8" />,
    features: ['Monthly Reports', 'Engagement Metrics', 'ROI Analysis', 'Competitor Tracking', 'Growth Insights'],
    shape3D: 'octahedron',
  },
  {
    title: 'Influencer Marketing',
    summary: 'Connect with the right influencers to amplify your brand message.',
    fullContent: 'We identify, vet, and manage influencer partnerships that align with your brand values and target audience, ensuring authentic collaborations that drive results.',
    icon: <MessageCircle className="w-8 h-8" />,
    features: ['Influencer Discovery', 'Campaign Management', 'Contract Negotiation', 'Performance Tracking', 'UGC Collection'],
    shape3D: 'cube',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SocialMediaMarketing = () => {
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
              Social Influence
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Grow Your Brand</span>
              <span className="text-primary block mt-2">Authority</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Strategic social media orchestration that builds community, 
              amplifies engagement, and converts followers into loyal brand advocates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
                Ready to Boost Your Social Presence?
              </h2>
              <p className="text-base md:text-xl text-primary-foreground/90 font-bold mb-8 md:mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance social campaign with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-6 md:py-8 px-8 md:px-12 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 box-border">
                  Initiate Campaign Quote
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

export default SocialMediaMarketing;
