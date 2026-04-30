import { motion } from 'framer-motion';
import { PenTool, FileText, BookOpen, Search, Mail, Newspaper, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';


const services = [
  {
    title: 'Blog Writing',
    summary: 'Engaging blog posts that educate, entertain, and convert your audience.',
    fullContent: 'Our expert writers create compelling blog content optimized for both readers and search engines. We research trending topics, incorporate keywords naturally, and maintain your brand voice.',
    icon: <PenTool className="w-8 h-8" />,
    features: ['Topic Research', 'SEO Optimization', 'Engaging Headlines', 'Internal Linking', 'Call-to-Actions'],
    shape3D: 'cube',
  },
  {
    title: 'Website Copywriting',
    summary: 'Persuasive web copy that communicates your value and drives action.',
    fullContent: 'From homepage heroes to product descriptions, we craft website copy that clearly communicates your unique value proposition and guides visitors toward conversion.',
    icon: <FileText className="w-8 h-8" />,
    features: ['Homepage Copy', 'Landing Pages', 'Product Descriptions', 'About Us Pages', 'Service Pages'],
    shape3D: 'sphere',
  },
  {
    title: 'SEO Content',
    summary: 'Search-optimized content that ranks and drives organic traffic.',
    fullContent: 'We create content specifically designed to rank on search engines. Our SEO writing process includes keyword research, competitor analysis, and on-page optimization.',
    icon: <Search className="w-8 h-8" />,
    features: ['Keyword Research', 'Meta Descriptions', 'Header Optimization', 'Featured Snippets', 'Content Clusters'],
    shape3D: 'torus',
  },
  {
    title: 'Email Marketing',
    summary: 'Email campaigns that engage subscribers and drive conversions.',
    fullContent: 'From welcome sequences to promotional campaigns, we write emails that get opened, read, and clicked. Our approach combines compelling copy with proven email marketing strategies.',
    icon: <Mail className="w-8 h-8" />,
    features: ['Welcome Sequences', 'Newsletters', 'Promotional Emails', 'Drip Campaigns', 'A/B Testing Copy'],
    shape3D: 'octahedron',
  },
  {
    title: 'Technical Writing',
    summary: 'Clear, concise documentation and technical content for complex topics.',
    fullContent: 'We simplify complex technical concepts into clear, user-friendly documentation. From API guides to user manuals, we make technical content accessible.',
    icon: <BookOpen className="w-8 h-8" />,
    features: ['Documentation', 'User Guides', 'API Documentation', 'Whitepapers', 'Case Studies'],
    shape3D: 'cube',
  },
  {
    title: 'Press Releases',
    summary: 'Newsworthy press releases that get media attention.',
    fullContent: "We write compelling press releases that capture journalists' attention and get your news covered. Our releases follow AP style guidelines and include all essential elements.",
    icon: <Newspaper className="w-8 h-8" />,
    features: ['News Announcements', 'Product Launches', 'Company Updates', 'Media Pitches', 'Distribution Support'],
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

const ContentWriting = () => {
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
              Content Protocol
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Words That</span>
              <span className="text-primary block mt-2">Convert Fast</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              High-frequency specialized content orchestration engineered to amplify brand authority and drive exponential user conversion.
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
              <h2 className="text-2xl md:text-5xl font-black text-primary-foreground mb-4 md:mb-6 leading-tight"> Ready to Deploy Your Narrative Vision?</h2>
              <p className="text-base md:text-xl text-primary-foreground/90 font-bold mb-8 md:mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance content engine with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-6 md:py-8 px-8 md:px-12 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 box-border">
                  Initiate Content Quote
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

export default ContentWriting;
