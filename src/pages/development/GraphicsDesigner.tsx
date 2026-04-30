import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Palette, Image, Layers, Box, Monitor, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import FlipCard from '../../components/ui/FlipCard';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';

interface Service {
  title: string;
  summary: string;
  fullContent: string;
  icon: React.ReactNode;
  features: string[];
  shape3D: 'octahedron' | 'cube' | 'sphere' | 'torus';
}

const services: Service[] = [
  {
    title: 'Brand Identity Design',
    summary: 'Complete visual identity systems that make your brand memorable.',
    fullContent: 'We create comprehensive brand identities including logos, color palettes, typography, and brand guidelines that establish a strong, cohesive visual presence across all touchpoints.',
    icon: <Sparkles className="w-8 h-8" />,
    features: ['Logo Design', 'Color Palette', 'Typography Selection', 'Brand Guidelines', 'Stationery Design'],
    shape3D: 'octahedron',
  },
  {
    title: 'UI/UX Design',
    summary: 'User-centered interface designs that delight and convert.',
    fullContent: 'Our UI/UX designers create intuitive, beautiful interfaces for websites and applications. We focus on user research, wireframing, prototyping, and pixel-perfect visual design.',
    icon: <Monitor className="w-8 h-8" />,
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Usability Testing'],
    shape3D: 'cube',
  },
  {
    title: 'Social Media Graphics',
    summary: 'Scroll-stopping visuals optimized for every social platform.',
    fullContent: 'We design engaging social media graphics including posts, stories, covers, and ads that maintain brand consistency while maximizing engagement on each platform.',
    icon: <Image className="w-8 h-8" />,
    features: ['Post Templates', 'Story Designs', 'Cover Images', 'Ad Creatives', 'Carousel Graphics'],
    shape3D: 'sphere',
  },
  {
    title: 'Print Design',
    summary: 'High-quality print materials from business cards to banners.',
    fullContent: 'From business cards to large format banners, we create print-ready designs that look stunning in the physical world. All files are prepared to professional printing standards.',
    icon: <Layers className="w-8 h-8" />,
    features: ['Business Cards', 'Brochures', 'Flyers & Posters', 'Banners', 'Packaging Design'],
    shape3D: 'torus',
  },
  {
    title: 'Illustration',
    summary: 'Custom illustrations that bring your ideas to life.',
    fullContent: 'Our illustrators create unique, custom artwork including character design, infographics, icons, and editorial illustrations that add personality and clarity to your content.',
    icon: <Palette className="w-8 h-8" />,
    features: ['Custom Illustrations', 'Icon Design', 'Infographics', 'Character Design', 'Editorial Art'],
    shape3D: 'octahedron',
  },
  {
    title: 'Motion Graphics',
    summary: 'Animated visuals that capture attention and tell stories.',
    fullContent: 'We create dynamic motion graphics including logo animations, explainer videos, social media animations, and presentation graphics that bring your brand to life.',
    icon: <Box className="w-8 h-8" />,
    features: ['Logo Animation', 'Explainer Videos', 'Social Animations', 'Presentation Graphics', 'GIF Creation'],
    shape3D: 'cube',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const GraphicsDesigner: React.FC = () => {
  const MotionDiv = motion.div as any;
  const MotionSpan = motion.span as any;
  const TypedFlipCard = FlipCard as any;
  const TypedButton = Button as any;

  return (
    <Layout>
      <section className="pt-48 pb-32 px-6 relative overflow-hidden bg-white dark:bg-slate-950">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
        <div className="container-custom relative z-10">
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto space-y-6"
          >
            <MotionSpan initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="inline-block px-5 py-2 rounded-2xl bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/30 text-[hsl(var(--primary))] text-sm font-black uppercase tracking-widest mb-4">
              Visual Intelligence
            </MotionSpan>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Visual Design</span>
              <span className="text-primary block mt-2">Elite Protocols</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              High-frequency specialized visual orchestration engineered to establish absolute brand dominance through premium aesthetic engineering.
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden px-6">
        <div className="container-custom relative z-10">
          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
          >
            {services.map((service, index) => (
              <TypedFlipCard
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
          </MotionDiv>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white dark:bg-slate-950 relative overflow-hidden px-4 md:px-6">
        <div className="container-custom">
          <MotionDiv
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-8 md:p-24 rounded-[2rem] md:rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary/30 group w-[90%] max-w-[360px] md:w-full md:max-w-none mx-auto"
          >
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
             <div className="absolute top-[-20%] right-[-10%] w-[400px] h-[400px] bg-white/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-5xl font-black text-primary-foreground mb-4 md:mb-6 leading-tight">Ready to Elevate Your Visual Brand?</h2>
              <p className="text-base md:text-xl text-primary-foreground/90 font-bold mb-8 md:mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance aesthetic campaign with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                <TypedButton size="lg" className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-6 md:py-8 px-8 md:px-12 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 box-border">
                  Initiate Design Quote
                  <ArrowRight className="ml-3 w-5 h-5 md:w-6 md:h-6" />
                </TypedButton>
              </Link>
            </div>
          </MotionDiv>
        </div>
      </section>
    </Layout>
  );
};

export default GraphicsDesigner;
