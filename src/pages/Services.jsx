import { motion } from "framer-motion";
import { MessageSquare, Phone, MessageCircle, Megaphone, Vote, ArrowRight, Code, Layers, Zap, Shield, Smartphone, Globe, BarChart, Database, Mail, Share2, Search, PenTool } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroParagraph from "@/components/ui/HeroParagraph";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Bulk SMS",
    path: "/services/bulk-sms",
    icon: MessageSquare,
    description: "Reach thousands of customers instantly with our reliable bulk SMS platform. Perfect for updates, promotions, and alerts.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    name: "Voice SMS",
    path: "/services/voice-sms",
    icon: Phone,
    description: "Deliver automated voice messages to your audience. Create a more personal connection with high-quality voice broadcasts.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    name: "WhatsApp Panel",
    path: "/services/whatsapp-panel",
    icon: MessageCircle,
    description: "Manage your business communications efficiently with our user-friendly WhatsApp management panel.",
    color: "bg-emerald-500/10 text-emerald-500",
  },
  {
    name: "WhatsApp Marketing",
    path: "/services/whatsapp-marketing",
    icon: Megaphone,
    description: "Leverage the power of WhatsApp for your marketing campaigns. Drive higher engagement and conversion rates.",
    color: "bg-teal-500/10 text-teal-500",
  },
  {
    name: "Digital Election Campaign",
    path: "/services/digital-election-campaign",
    icon: Vote,
    description: "Strategic digital campaigning for modern elections. Connect with voters through data-driven digital outreach.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    name: "Content Writing",
    path: "/development/content-writing",
    icon: PenTool,
    description: "Compelling content that resonates with your audience and boosts SEO. Professional writers delivering high-quality content.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
];

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

const Services = () => {
  return (
    <Layout>
      <PageHeader 
        title="Empowering Your Digital Growth" 
        description="We provide a comprehensive suite of digital communication and marketing solutions designed to scale your business and engage your audience."
      />

      {/* Services Split Layout */}
      <section id="services" className="py-24 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse pointer-events-none" />
        <div className="container-custom relative z-10 flex flex-col gap-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} items-stretch gap-0 rounded-[2rem] overflow-hidden border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shadow-md hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Icon / Visual Panel */}
                <div className="relative flex items-center justify-center md:w-[280px] shrink-0 min-h-[200px] md:min-h-[220px] bg-gradient-to-br from-[hsl(var(--primary))]/15 to-[hsl(var(--accent))]/15 dark:from-[hsl(var(--primary))]/20 dark:to-[hsl(var(--accent))]/10 overflow-hidden">
                  {/* Decorative blob */}
                  <div className="absolute w-40 h-40 rounded-full bg-[hsl(var(--primary))]/10 blur-2xl group-hover:scale-125 transition-transform duration-700 pointer-events-none" />
                  {/* Number badge */}
                  <span className="absolute top-4 left-4 text-xs font-black tracking-widest text-[hsl(var(--primary))]/40 select-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Icon */}
                  <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/50 dark:border-slate-700/50 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:shadow-[hsl(var(--primary))]/30 transition-all duration-500">
                    <service.icon className="w-10 h-10 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent))] transition-colors duration-300" />
                  </div>
                  {/* Accent bar on side */}
                  <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-[3px] h-full bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top`} />
                </div>

                {/* Content Panel */}
                <div className="flex flex-col justify-center flex-1 px-10 py-10 md:py-8">
                  <h4 className="text-2xl font-extrabold mb-3 text-slate-900 dark:text-white group-hover:text-[hsl(var(--primary))] transition-colors duration-300">
                    {service.name}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium mb-6 max-w-lg">
                    {service.description}
                  </p>
                  <Link
                    to={service.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-bold hover:text-[hsl(var(--accent))] transition-all duration-300 group-hover:gap-3 w-fit"
                  >
                    Learn More <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6 relative">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(var(--accent))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
               <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm mb-4 block">Key Benefits</motion.span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-primary-foreground mb-8 leading-tight">
                Why Choose Our <span className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] bg-clip-text text-transparent">Solutions?</span>
              </h2>
              <div className="space-y-10">
                {[
                  { title: "Scalability", desc: "Our platform grows with your business, handling thousands of updates simultaneously." },
                  { title: "Reliability", desc: "Enterprise-grade infrastructure ensuring 99.9% uptime for all your campaigns." },
                  { title: "Security", desc: "Advanced security protocols to protect your data and communications." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-[hsl(var(--accent))]/10 flex items-center justify-center shrink-0 text-[hsl(var(--accent))] font-black text-xl group-hover:bg-[hsl(var(--accent))] group-hover:text-primary-foreground transition-all duration-300 shadow-inner">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-slate-800 dark:text-slate-100 group-hover:text-[hsl(var(--accent))] transition-colors">{item.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sm font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white dark:bg-slate-800 p-1 rounded-[3rem] shadow-2xl relative overflow-hidden group border border-slate-100 dark:border-slate-700"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/20 via-[hsl(var(--accent))]/20 to-[hsl(var(--secondary))]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
               <div className="text-center relative z-10 p-16 md:p-20 bg-slate-50 dark:bg-slate-900 rounded-[2.8rem] space-y-6">
                 <div className="w-20 h-20 rounded-3xl bg-[hsl(var(--primary))] mx-auto flex items-center justify-center shadow-xl shadow-primary/20 mb-8 animate-float">
                   <Layers className="text-primary-foreground w-10 h-10" />
                 </div>
                 <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-primary-foreground leading-tight">Integrated Platform</h3>
                 <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">Manage all your digital communications in one central place with our unified interface designed for efficiency and ease of use.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white dark:bg-slate-950 text-center px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-[hsl(var(--accent))]/10 rounded-full blur-3xl"></div>
         <div className="container-custom px-full max-w-4xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 dark:bg-slate-900 p-16 md:p-20 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-2xl space-y-10 group"
            >
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-primary-foreground leading-tight">Ready to Boost Your Marketing?</h2>
               <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed font-medium max-w-2xl mx-auto">Let's discuss how our services can help you reach your target audience effectively and drive conversions with precision.</p>
               <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                 <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-bold py-8 px-14 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-2 group-hover:scale-105 active:scale-95">Contact Us Today</Button>
               </Link>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};

export default Services;
