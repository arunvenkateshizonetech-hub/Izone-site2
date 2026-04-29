import { useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  animate
} from "framer-motion";
import {
  ArrowRight,
  Code,
  Layers,
  Zap,
  Shield,
  Users,
  Award,
  X,
  Star,
  Quote,
  Twitter,
  Smartphone,
  Brain,
  Cloud,
  Megaphone,
  Palette,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import Layout from "@/components/Layout";
import ScrollWorksSection from "@/components/ui/ScrollWorksSection";
import HeroAnimatedBackground from "../components/HeroAnimatedBackground";
import { useAdmin } from "@/context/AdminContext";

import {
  sectionVariants,
  fadeInUp,
  staggerContainer,
  cardHover,
  buttonHover
} from "@/lib/animations";

const CharacterAnimation = ({ text, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const characters = text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: -18 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.span
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ display: "inline-block" }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{ display: "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const WordAnimation = ({ text, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const words = text.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={`${className} leading-relaxed`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.25em" }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

const services = [
  {
    icon: Code,
    title: "Web & Software Development",
    description: "Custom web apps and enterprise software, built to scale.",
    details: "React, Next.js, Node, Python, .NET. Architected for performance, observability, and a clean handoff.",
    tags: ["React", "Next.js", "Node.js", "APIs", "SaaS"],
    path: "/development?service=web-development",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform apps users keep coming back to.",
    details: "iOS, Android, Flutter, React Native. From MVPs to App Store launches and post-launch growth.",
    tags: ["iOS", "Android", "Flutter", "React Native"],
    path: "/development/app-development",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Practical AI that drives revenue, not just demos.",
    details: "Chatbots, computer vision, predictive analytics, GenAI integrations, and custom ML models trained on your data.",
    tags: ["LLMs", "Computer Vision", "Predictive ML", "RAG"],
    path: "/development/ai-ml",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Cloud-native infrastructure with CI/CD that just works.",
    details: "AWS, Azure, GCP. Containerization, IaC, monitoring, and 99.9% uptime SLAs for production workloads.",
    tags: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD"],
    path: "/development/cloud-devops",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Growth across SMS, WhatsApp, social, and content.",
    details: "Bulk SMS, WhatsApp marketing, social media management, content writing, and election campaigns.",
    tags: ["SMS", "WhatsApp", "Social", "Content"],
    path: "/services",
  },
  {
    icon: Palette,
    title: "UI/UX & Branding",
    description: "Interfaces and identities that earn trust at first glance.",
    details: "Design systems, prototypes, polished UI, and full brand identities for digital and print.",
    tags: ["Design Systems", "Prototypes", "Identity"],
    path: "/development?service=ui-ux-design",
  },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Support" },
];

const Counter = ({ value }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const shouldAnimate = value.includes("+") && !value.includes("/");
  const numericValue = parseInt(value, 10) || 0;
  const suffix = value.includes("+") ? "+" : "";

  useEffect(() => {
    if (shouldAnimate && isInView) {
      const controls = animate(count, numericValue, {
        duration: 3, // slightly shorter for better feel
        ease: "easeOut",
      });

      const unsubscribe = rounded.on("change", (latest) => {
        setDisplayValue(latest);
      });

      return () => {
        controls.stop();
        unsubscribe();
      };
    }
  }, [shouldAnimate, numericValue, count, rounded, isInView]);

  if (!shouldAnimate) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
};


const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "Modern shopping experience with real-time inventory and seamless checkout.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "Stripe", "MongoDB"],
    client: "ShopMax Inc.",
  },
  {
    title: "SaaS Dashboard",
    category: "UI/UX Design",
    description:
      "Comprehensive analytics dashboard for enterprise data management.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["TypeScript", "GraphQL", "AWS", "D3.js"],
    client: "DataFlow Systems",
  },
  {
    title: "Mobile Banking App",
    category: "Full Stack",
    description:
      "Cross-platform mobile banking solution with biometric authentication.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    tags: ["React Native", "Firebase", "Plaid", "Node.js"],
    client: "FinSecure Bank",
  },
];

const Index = () => {
  const { theme } = useTheme();
  const { popups, testimonials } = useAdmin();
  const activePopup = popups?.find((p) => p.isActive) ?? null;
  const [dismissed, setDismissed] = useState(false);
  const [hoveredServiceIndex, setHoveredServiceIndex] = useState(null);

  return (
    <Layout>
      {/* Hero Popup */}
      <AnimatePresence>
        {activePopup && !dismissed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setDismissed(true)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-md bg-card border border-border rounded-2xl p-8 text-center shadow-2xl"
            >
              <button onClick={() => setDismissed(true)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X size={18} />
              </button>
              <h3 className="text-2xl font-bold mb-4">{activePopup.title}</h3>
              <p className="text-muted-foreground mb-6">{activePopup.description}</p>
              <Button onClick={() => setDismissed(true)} className="rounded-xl px-8 bg-primary hover:bg-primary-hover text-primary-foreground transition-all">Got it</Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative lg:min-h-screen flex items-start lg:items-center pt-24 md:pt-32 pb-12 md:pb-20 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="container-custom relative z-10 px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:items-center">
            {/* Hero Content */}
            <div className="lg:col-span-6 space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
                >
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">An Information Technology Sector In Tamilnadu</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
                >
                  <span className="block text-foreground">We Build</span>
                  <span className="block text-primary">Digital Excellence.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-lg md:text-2xl text-muted-foreground/80 max-w-xl font-medium leading-relaxed italic"
                >
                  From custom software and AI integrations to mobile apps and growth marketing, Izone is your full-stack technology partner. Nine years. 100+ launches. One accountable team
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-wrap gap-8 items-center"
              >
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-primary-foreground font-black px-8 py-6 text-base rounded-2xl shadow-xl shadow-primary/30 transition-all hover:-translate-y-1 hover:scale-105 active:scale-95 group">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <Link to="/services" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto border-border text-foreground hover:bg-surface font-black px-8 py-6 text-base rounded-2xl shadow-sm transition-all hover:-translate-y-1 hover:scale-105 active:scale-95">
                      Explore Protocols
                    </Button>
                  </Link>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-surface flex items-center justify-center overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-accent">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-current" />)}
                    </div>
                    <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-widest">500+ Projects Completed</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Image Collage */}
            <div className="lg:col-span-6 mt-8 lg:mt-0">

              {/* ── Mobile & Tablet: premium overlapping stack ── */}
              <div className="lg:hidden relative h-[450px] sm:h-[600px] w-full max-w-[500px] mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: 20, rotate: 2 }}
                  animate={{ opacity: 1, x: 0, rotate: -3 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute top-0 right-0 w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface z-10"
                >
                  <img src="/hero_it_team.png" alt="IT Team" className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20, rotate: -2 }}
                  animate={{ opacity: 1, x: 0, rotate: 3 }}
                  transition={{ duration: 0.8, delay: 0.45 }}
                  className="absolute bottom-4 left-0 w-[85%] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-surface z-20"
                >
                  <img src="/hero_it_dashboard.png" alt="Dashboard" className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                    <Zap size={20} className="fill-current" />
                  </div>
                </motion.div>
              </div>

              {/* ── Desktop: absolute overlap collage ── */}
              <div className="hidden lg:block relative h-[520px]">
                {/* Decorative glows behind */}
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10" />
                <div className="absolute bottom-0 -left-16 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] -z-10" />

                {/* Image 1: Team — large, top-right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 40 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  whileHover={{ y: -8, transition: { duration: 0.4 } }}
                  className="absolute top-0 right-0 w-[74%] aspect-[16/10] rounded-[2.5rem] overflow-hidden border-[6px] border-surface shadow-2xl z-20 group"
                >
                  <img src="/hero_it_team.png" alt="IT Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>

                {/* Image 2: Dashboard — medium, bottom-left, overlapping */}
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="absolute bottom-0 left-0 w-[60%] aspect-[4/3] rounded-[2.5rem] overflow-hidden border-[6px] border-surface shadow-2xl z-30 group"
                >
                  <img src="/hero_it_dashboard.png" alt="Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-primary-foreground border border-white/20">
                    <Zap size={20} />
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container-custom px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-sm"
            >
              Elite Protocols
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              Services We Offer
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            onMouseLeave={() => setHoveredServiceIndex(null)}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                onMouseEnter={() => setHoveredServiceIndex(index)}
                animate={{
                  scale: hoveredServiceIndex === index ? 1.05 : 1,
                  opacity: hoveredServiceIndex !== null && hoveredServiceIndex !== index ? 0.4 : 1,
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="service-card-premium group bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] shadow-xl hover:shadow-premium-glow relative overflow-hidden h-full min-h-[350px] cursor-pointer flex flex-col items-center justify-center transition-shadow"
              >
                {/* First Content - Initially Visible */}
                <div className="first-content p-5 sm:p-6 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-0">
                    <service.icon className="w-7 h-7 text-primary transition-colors" />
                  </div>
                  <h4 className="text-xl font-black text-foreground leading-tight">{service.title}</h4>
                </div>

                {/* Second Content - Visible on Hover */}
                <div className="second-content absolute inset-0 p-5 sm:p-6 flex flex-col items-center justify-center text-center bg-primary/[0.03]">
                  <p className="text-muted-foreground leading-relaxed font-medium italic mb-3 text-xs md:text-sm">{service.description}</p>
                  {service.details && (
                    <p className="text-[10px] md:text-xs text-muted-foreground mb-4 line-clamp-3">{service.details}</p>
                  )}
                  {service.tags && (
                    <div className="flex flex-wrap justify-center gap-1.5">
                      {service.tags.map((tag, i) => (
                        <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Top Border Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="featured" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container-custom px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-black uppercase tracking-[0.3em] text-sm"
            >
              The Izone Advantage
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              Why Choose Us
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-6 lg:flex-row-reverse lg:text-right group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-card rounded-2xl md:rounded-[2rem] border border-border flex items-center justify-center shadow-xl group-hover:border-primary group-hover:shadow-premium-glow transition-all duration-500">
                  <Star className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors uppercase tracking-widest">Experience</h4>
                  <p className="text-muted-foreground font-medium italic leading-relaxed">Decade of delivering cutting-edge digital ecosystems globally.</p>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-6 lg:flex-row-reverse lg:text-right group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-card rounded-2xl md:rounded-[2rem] border border-border flex items-center justify-center shadow-xl group-hover:border-primary group-hover:shadow-premium-glow transition-all duration-500">
                  <Layers className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-black mb-3 text-foreground group-hover:text-primary transition-colors uppercase tracking-widest">Products</h4>
                  <p className="text-muted-foreground font-medium italic leading-relaxed">High-frequency, scalable digital products for modern enterprise.</p>
                </div>
              </motion.div>
            </div>

            {/* Center Visual */}
            <div className="lg:col-span-4 px-4 py-12 md:py-0 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10 block"
              >
                <div className="relative p-2 rounded-[4rem] bg-gradient-to-br from-primary via-secondary to-accent shadow-2xl overflow-hidden">
                  <div className="absolute inset-2 bg-card rounded-[3.8rem] z-0" />
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop" 
                    alt="Process" 
                    className="rounded-[3.8rem] relative z-10 w-full object-cover aspect-square grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-12">
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-card rounded-2xl md:rounded-[2rem] border border-border flex items-center justify-center shadow-xl group-hover:border-secondary group-hover:shadow-premium-glow transition-all duration-500">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-secondary" />
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-black mb-3 text-foreground group-hover:text-secondary transition-colors uppercase tracking-widest">Approach</h4>
                  <p className="text-muted-foreground font-medium italic leading-relaxed">Agile development cycles synchronized with your business mission.</p>
                </div>
              </motion.div>
              
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex items-start gap-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0 bg-card rounded-2xl md:rounded-[2rem] border border-border flex items-center justify-center shadow-xl group-hover:border-accent group-hover:shadow-premium-glow transition-all duration-500">
                  <Shield className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                </div>
                <div className="pt-2">
                  <h4 className="text-2xl font-black mb-3 text-foreground group-hover:text-accent transition-colors uppercase tracking-widest">Support</h4>
                  <p className="text-muted-foreground font-medium italic leading-relaxed">Dedicated mission control available 24/7 for total reliability.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-surface text-foreground relative border-y border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(124,58,237,0.08)_0%,transparent_50%)]" />
        <div className="container-custom px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((s, i) => (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i}
                className="space-y-3 p-6 rounded-2xl bg-card border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Award className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-foreground tracking-tighter mb-1">
                    <Counter value={s.value} />
                  </div>
                  <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">{s.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section id="testimonials" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container-custom px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-black uppercase tracking-[0.3em] text-sm"
            >
              Strategic Feedback
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              Testimonials
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {testimonials?.slice(-3).map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="p-8 sm:p-10 bg-card border border-border rounded-[2rem] sm:rounded-[2.5rem] shadow-xl hover:shadow-premium-glow transition-all duration-500 group hover:-translate-y-3 relative overflow-hidden flex flex-col"
              >
                <div className="flex gap-4 items-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary p-1 shrink-0">
                    <div className="w-full h-full rounded-full bg-card overflow-hidden">
                       <img src={`https://i.pravatar.cc/150?img=${i+20}`} alt="avatar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                  </div>
                  <div>
                    <h5 className="font-black text-foreground text-xl leading-tight">{t.author || t.name}</h5>
                    <p className="text-sm text-primary font-bold uppercase tracking-widest">{t.role || t.designation}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-8 text-accent relative z-10">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-current" size={16} />)}
                </div>
                <p className="text-muted-foreground relative z-10 leading-relaxed font-medium italic text-lg flex-1">
                  <Quote className="absolute -top-6 -left-6 text-primary-foreground/5 w-24 h-24 -z-10" />
                  "{t.quote || t.description}"
                </p>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-[100px] -z-10" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="container-custom px-6 relative z-10">
          <div className="text-center mb-24 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-black uppercase tracking-[0.3em] text-sm"
            >
              Recent Deployments
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight"
            >
              Our Portfolio
            </motion.h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative h-[400px] md:h-[500px] overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-border/50 cursor-pointer"
              >
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 transition-all duration-500 flex flex-col justify-end p-12 translate-y-20 group-hover:translate-y-0">
                  <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-4">{project.category}</span>
                  <h5 className="text-3xl font-black mb-4 text-primary-foreground leading-tight">{project.title}</h5>
                  <p className="text-slate-400 font-medium leading-relaxed italic mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">{project.description}</p>
                  <Link to="/portfolio" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-xl font-black uppercase tracking-widest px-8">View Case Study</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-40 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.05)_0%,transparent_70%)]" />
        <div className="container-custom px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card p-8 sm:p-16 md:p-32 border border-border rounded-[2rem] sm:rounded-[4rem] shadow-premium-glow space-y-12 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="block text-foreground">Let's Discuss your</span>
                <span className="block text-primary">Digital Future.</span>
              </h2>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground/80 font-medium italic leading-relaxed max-w-3xl mx-auto">
                Join the fleet of successful enterprises engineered by Izone Technologies. Our crew is standing by to launch your next mission.
              </p>
            </div>
            <div className="pt-8">
              <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                <Button className="bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 font-black py-6 px-10 md:py-10 md:px-16 text-lg sm:text-xl md:text-2xl rounded-2xl shadow-premium-glow transition-all hover:-translate-y-2 hover:scale-110 active:scale-95 group">
                   Launch Project
                   <ArrowRight className="ml-3 w-6 h-6 md:w-8 md:h-8 transition-transform group-hover:translate-x-2" />
                </Button>
              </Link>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary-hover transition-colors" />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
