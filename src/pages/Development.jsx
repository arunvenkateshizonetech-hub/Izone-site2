import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Cpu,
  Share2,
  PenTool,
  Palette,
  Brain,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Button } from "../components/ui/button";
import FlipCard from "@/components/ui/FlipCard";
import HeroParagraph from "@/components/ui/HeroParagraph";

const services = [
  {
    title: "Web Development",
    path: "/development/web-development",
    summary:
      "Custom websites built with modern frameworks like React and Next.js.",
    fullContent:
      "We specialize in building high-performance, responsive websites using the latest technologies. From simple landing pages to complex corporate portals, we ensure a seamless user experience and robust functionality.",
    icon: <Code className="w-8 h-8 text-[hsl(var(--primary))]" />,
    features: [
      "React & Next.js",
      "Responsive Design",
      "SEO Optimization",
      "Performance Focus",
      "State Management",
      "API Integration",
    ],
    shape3D: "cube",
  },
  {
    title: "Software Development",
    path: "/development/software-development",
    summary:
      "Scalable enterprise software solutions tailored to your business needs.",
    fullContent:
      "Our software development services cover the entire lifecycle, from planning and architecture to deployment and maintenance. We build desktop and server-side applications that streamline your operations.",
    icon: <Cpu className="w-8 h-8 text-[hsl(var(--accent))]" />,
    features: [
      "Custom Architecture",
      "Enterprise Solutions",
      "Cloud Integration",
      "Legacy Migration",
      "Security Focus",
      "Scalable Design",
    ],
    shape3D: "sphere",
  },
  {
    title: "App Development",
    path: "/development/app-development",
    summary:
      "Native and cross-platform mobile applications for iOS and Android.",
    fullContent:
      "We create engaging mobile experiences that work beautifully across all devices. Whether it's a native iOS/Android app or a cross-platform solution, we focus on performance and intuitive UI.",
    icon: <Smartphone className="w-8 h-8 text-[hsl(var(--secondary))]" />,
    features: [
      "iOS & Android",
      "React Native",
      "User Centric Design",
      "App Store Deployment",
      "Push Notifications",
      "Offline Sync",
    ],
    shape3D: "torus",
  },
  {
    title: "AI / ML Development",
    path: "/development/ai-ml-development",
    summary:
      "Intelligent automation and data-driven insights using AI/ML.",
    fullContent:
      "Unlock the power of your data with our AI and Machine Learning services. We implement intelligent solutions for automation, predictive analytics, and enhanced decision-making.",
    icon: <Brain className="w-8 h-8 text-[hsl(var(--primary))]" />,
    features: [
      "Predictive Analytics",
      "NLP Integration",
      "Custom Models",
      "Process Automation",
      "Data Processing",
      "Intelligent Insights",
    ],
    shape3D: "octahedron",
  },
  {
    title: "Social Media Marketing",
    path: "/development/social-media-marketing",
    summary:
      "Strategic social media management to grow your brand presence.",
    fullContent:
      "We help you connect with your audience across all major social platforms. Our strategies focus on engagement, brand awareness, and driving conversions through targeted content.",
    icon: <Share2 className="w-8 h-8 text-[hsl(var(--accent))]" />,
    features: [
      "Content Strategy",
      "Platform Management",
      "Audience Engagement",
      "Performance Tracking",
      "Ad Management",
      "Brand Growth",
    ],
    shape3D: "torus",
  },
  {
    title: "Government Tenders",
    path: "/development/government-tenders",
    summary:
      "Expert assistance in identifying and winning public sector contracts.",
    fullContent:
      "We provide end-to-end assistance in navigating the complexities of government procurement. From finding the right opportunities to crafting winning proposals and ensuring compliance.",
    icon: <Briefcase className="w-8 h-8 text-[hsl(var(--secondary))]" />,
    features: [
      "Tender Identification",
      "Bid Strategy",
      "Proposal Writing",
      "Compliance Support",
      "Document Prep",
      "Contract Follow-up",
    ],
    shape3D: "cube",
  },
  {
    title: "Graphics Designer",
    path: "/development/graphics-designer",
    summary:
      "Creative visual designs that make your brand stand out.",
    fullContent:
      "We bring your ideas to life with stunning visual design. Our services include branding, UI/UX design, and marketing materials that resonate with your target audience.",
    icon: <Palette className="w-8 h-8 text-[hsl(var(--primary))]" />,
    features: [
      "Branding & Identity",
      "UI/UX Design",
      "Marketing Collateral",
      "Digital Illustrations",
      "Visual Effects",
      "Print Design",
    ],
    shape3D: "sphere",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const SplitText = ({ text, delay = 0, className = "" }) => {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.2em]">
          {word.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={(wordIndex + 1) % 2 === 0 ? { opacity: 0, y: 20 } : { opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: delay + (wordIndex * 0.08) + (charIndex * 0.02),
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
};

import PageHeader from "@/components/PageHeader";

const Development = () => {
  return (
    <Layout>
      <PageHeader 
        title="Build Your Digital Presence" 
        description="From stunning websites to powerful web applications, we deliver cutting-edge solutions that drive business growth."
      />

      {/* Services Grid */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col space-y-4 max-w-5xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative w-full p-6 md:p-8 bg-slate-50/50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800/80 rounded-2xl hover:bg-white dark:hover:bg-slate-900 hover:shadow-xl hover:shadow-[hsl(var(--primary))]/5 transition-all duration-400 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 overflow-hidden hover:-translate-y-1"
              >
                {/* Decorative left border */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                {/* Gentle background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none" />

                <div className="flex flex-row flex-1 items-center gap-5 md:gap-6 relative z-10 w-full">
                  <div className="shrink-0 w-14 h-14 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-700 shadow-sm transition-all duration-400 group-hover:shadow-md group-hover:border-[hsl(var(--primary))]/30">
                    <div className="transition-transform duration-400 group-hover:scale-110">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--primary))] transition-colors duration-400">{service.title}</h4>
                    <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-medium mt-1 pr-4 line-clamp-2 md:line-clamp-none">
                      {service.summary}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mt-2 md:mt-0 pl-[76px] md:pl-0 z-10 shrink-0">
                  <Link to={service.path} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-sm md:text-base font-bold text-slate-400 group-hover:text-[hsl(var(--primary))] hover:!text-[hsl(var(--accent))] transition-colors duration-400">
                    Check Details <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-transform duration-400 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 text-center px-4 md:px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
         <div className="container-custom px-0 md:px-full max-w-4xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-950 p-8 md:p-20 border border-slate-100 dark:border-slate-800 rounded-[2rem] md:rounded-[3rem] shadow-2xl space-y-6 md:space-y-10 group w-[90%] max-w-[360px] md:w-full md:max-w-none mx-auto"
            >
               <h2 className="text-2xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground mb-4 md:mb-6 leading-tight tracking-tight">Ready to Build Your Project?</h2>
               <p className="text-base md:text-xl text-slate-600 dark:text-slate-400 mb-6 md:mb-8 leading-relaxed font-medium max-w-2xl mx-auto">Let's discuss your specific needs and create a tailored roadmap for your digital success.</p>
               <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="block w-full md:inline-block md:w-auto">
                 <Button className="w-full md:w-auto bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-bold py-6 md:py-8 px-8 md:px-14 text-lg md:text-xl rounded-xl md:rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-2 group-hover:scale-105 active:scale-95 box-border">Start Your Project</Button>
               </Link>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};

export default Development;
