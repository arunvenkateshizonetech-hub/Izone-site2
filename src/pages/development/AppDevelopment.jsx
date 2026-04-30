import { motion } from 'framer-motion';
import {
  Smartphone,
  TabletSmartphone,
  Layers,
  Palette,
  Zap,
  Store,
  ArrowRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import Layout from '../../components/Layout';
import FlipCard from '../../components/ui/FlipCard';

const services = [
  {
    title: 'iOS App Development',
    summary: 'Native iOS applications built with Swift for the Apple ecosystem.',
    fullContent:
      'Create stunning iOS apps that leverage the full power of Apple devices. From iPhone to iPad, we build native experiences that users love.',
    icon: <Smartphone className="w-8 h-8" />,
    features: [
      'Swift & SwiftUI',
      'iPhone & iPad',
      'Apple Watch',
      'App Store Launch',
      'iOS Updates',
    ],
    shape3D: 'cube',
  },
  {
    title: 'Android Development',
    summary: 'Powerful Android apps built with Kotlin for the Google Play Store.',
    fullContent:
      'Develop feature-rich Android applications that run smoothly across thousands of devices. We use Kotlin and modern Android architecture.',
    icon: <TabletSmartphone className="w-8 h-8" />,
    features: [
      'Kotlin & Java',
      'Material Design',
      'Google Play Launch',
      'Device Testing',
      'Android Updates',
    ],
    shape3D: 'sphere',
  },
  {
    title: 'Cross-Platform Apps',
    summary: 'Build once, deploy everywhere with React Native and Flutter.',
    fullContent:
      'Maximize efficiency with cross-platform development. Single codebase for iOS and Android with near-native performance and consistent experience.',
    icon: <Layers className="w-8 h-8" />,
    features: [
      'React Native',
      'Flutter',
      'Code Reusability',
      'Faster Development',
      'Consistent UX',
    ],
    shape3D: 'torus',
  },
  {
    title: 'UI/UX Design',
    summary: 'Beautiful, intuitive app interfaces designed for maximum engagement.',
    fullContent:
      'Create delightful user experiences with thoughtful UI/UX design. From wireframes to polished interfaces, we design apps users love to use.',
    icon: <Palette className="w-8 h-8" />,
    features: [
      'User Research',
      'Wireframing',
      'Prototyping',
      'Visual Design',
      'Usability Testing',
    ],
    shape3D: 'octahedron',
  },
  {
    title: 'App Performance',
    summary: 'Optimized apps that are fast, responsive, and battery efficient.',
    fullContent:
      'Deliver exceptional performance with optimized code, efficient data handling, and smooth animations. Your app will feel snappy and responsive.',
    icon: <Zap className="w-8 h-8" />,
    features: [
      'Performance Profiling',
      'Memory Optimization',
      'Battery Efficiency',
      'Offline Support',
      'Fast Loading',
    ],
    shape3D: 'cube',
  },
  {
    title: 'App Store Launch',
    summary: 'Complete app store submission and optimization services.',
    fullContent:
      'Navigate the app store submission process with confidence. We handle everything from screenshots to descriptions and ASO for maximum visibility.',
    icon: <Store className="w-8 h-8" />,
    features: [
      'Store Submission',
      'ASO Optimization',
      'Screenshots & Video',
      'Review Response',
      'Update Management',
    ],
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

const AppDevelopment = () => {
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
              Mobile Core
            </motion.span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
              <span className="block text-foreground">Apps That Users</span>
              <span className="text-primary block mt-2">Love Deeply</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Native and cross-platform mobile applications engineered for high-frequency engagement and absolute performance.
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
                Ready to Build Your App?
              </h2>
              <p className="text-base md:text-xl text-primary-foreground/90 font-bold mb-8 md:mb-12 italic max-w-2xl mx-auto">
                Synchronize with our specialized fleet today and launch your high-performance mobile solution with tactical precision.
              </p>
              <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                <Button size="lg" className="w-full md:w-auto bg-white text-[hsl(var(--primary))] hover:bg-slate-100 font-black py-6 md:py-8 px-8 md:px-12 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95 box-border">
                  Initiate Project Quote
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

export default AppDevelopment;
