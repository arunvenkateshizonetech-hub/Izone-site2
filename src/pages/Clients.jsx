import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Building2, Users, Globe, Award, Star, Quote, Code, Layers, Zap, Shield, Smartphone, BarChart, Database, Mail, Phone, MessageSquare, Megaphone, Share2, Search, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import HeroParagraph from "@/components/ui/HeroParagraph";
import { useAdmin } from "@/context/AdminContext";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import { Button } from "@/components/ui/button";



const stats = [
  {
    icon: Building2,
    value: 500,
    suffix: "+",
    label: "Clients Served",
  },
  {
    icon: Users,
    value: 50,
    suffix: "M+",
    label: "Users Reached",
  },
  { icon: Globe, value: 25, suffix: "+", label: "Countries" },
  {
    icon: Award,
    value: 99,
    suffix: "%",
    label: "Satisfaction Rate",
  },
];

const Counter = ({ value, suffix }) => {
  const time = useMotionValue(0);
  const display = useTransform(time, (latest) => Math.floor(latest));
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const controls = animate(time, value, {
      duration: 4,
      ease: "linear",
    });

    const unsubscribe = display.on("change", (latest) => {
      setCurrentValue(latest);
    });

    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, time, display]);

  return (
    <span className="time">
      {currentValue}
      {suffix}
    </span>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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

const Clients = () => {
  const { clients, testimonials } = useAdmin();

  return (
    <Layout>
      <PageHeader 
        title="Trusted by Industry Leaders" 
        description="We're proud to partner with leading organizations across various industries to deliver exceptional digital solutions."
      />

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        <div className="container-custom px-6 relative z-10 font-sans">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="space-y-3 group">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center mx-auto text-primary-foreground shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl md:text-4xl font-bold tracking-tight drop-shadow-lg">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section id="clients" className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm">Partnerships</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">Our Valued Partners</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">Trusted by industry leaders across various sectors to deliver world-class digital experiences.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {clients?.map((client, index) => (
              <motion.div
                key={client.id || index}
                variants={itemVariants}
                className="group p-10 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 text-center relative overflow-hidden flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center mb-8 mx-auto overflow-hidden group-hover:scale-110 group-hover:border-[hsl(var(--primary))] transition-all duration-500 shadow-xl group-shadow">
                  {client.icon ? (
                    <img src={client.icon} alt={client.companyName} className="w-full h-full object-cover p-2" />
                  ) : (
                    <span className="text-3xl font-black text-[hsl(var(--primary))] drop-shadow-sm">
                      {client.companyName ? client.companyName.substring(0, 2).toUpperCase() : "IZ"}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">
                   {client.companyName || client.name}
                </h3>
                <p className="text-[hsl(var(--primary))] text-xs font-bold mb-6 uppercase tracking-[0.1em]">{client.industry}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed min-h-[60px] font-medium italic">
                  "{client.description}"
                </p>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 border-y border-slate-100 dark:border-slate-800 overflow-hidden px-6 relative">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[hsl(var(--accent))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm">Client Feedback</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">What Our Clients Say</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium italic">Real feedback from our satisfied digital partners worldwide.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials?.slice(-3).map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="p-12 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[3rem] relative shadow-xl shadow-[hsl(var(--primary))]/5 hover:shadow-2xl hover:shadow-[hsl(var(--accent))]/10 transition-all duration-500 group hover:-translate-y-2"
              >
                <Quote className="absolute top-10 right-10 text-slate-50 dark:text-slate-900 w-24 h-24 group-hover:text-[hsl(var(--accent))]/10 transition-colors duration-500" />
                
                <div className="flex gap-4 items-center mb-8 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] shrink-0 p-[2px] shadow-lg">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-950"></div>
                  </div>
                  <div>
                    <h5 className="font-bold text-xl text-slate-900 dark:text-primary-foreground leading-tight">{t.name || t.author}</h5>
                    <p className="text-sm text-[hsl(var(--primary))] font-bold uppercase tracking-wide mt-1">{t.designation || t.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-6 text-[hsl(var(--secondary))] relative z-10">
                  {[...Array(5)].map((_, j) => <Star key={j} className="fill-[hsl(var(--secondary))]" size={20} />)}
                </div>
                
                <p className="text-slate-600 dark:text-slate-300 relative z-10 text-lg leading-relaxed italic font-medium">
                  "{t.description || t.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-slate-950 text-center px-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-80 h-80 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
         <div className="container-custom px-full max-w-4xl relative z-10">
            <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="bg-slate-900 text-primary-foreground p-16 md:p-20 rounded-[3rem] shadow-2xl relative overflow-hidden group"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
               <div className="relative z-10 space-y-10 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">Join Our Growing List of Clients</h2>
                  <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">Let's discuss how we can help your business achieve its digital goals and scale new heights together.</p>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Button className="bg-white text-slate-900 group-hover:scale-105 active:scale-95 font-black py-8 px-14 text-xl rounded-2xl shadow-2xl transition-all hover:bg-slate-50">
                      Get Started Today
                    </Button>
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};

export default Clients;
