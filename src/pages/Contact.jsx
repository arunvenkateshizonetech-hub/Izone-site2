import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { useAdmin } from "@/context/AdminContext";
import { 
  sectionVariants, 
  fadeInUp, 
  staggerContainer, 
  cardHover, 
  buttonHover 
} from "@/lib/animations";

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

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["5th Cross Thillainagar,", "Tiruchirappalli-620018."],
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["innovativezone.tech@gmail.com", ""],
    link: "mailto:innovativezone.tech@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+91-9943077284", ""],
    link: "tel:+919943077284",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon-Sat: 10:00 AM - 6:30 PM", "Sun: Closed"],
  },
];

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

import PageHeader from "@/components/PageHeader";

const Contact = () => {
  const { toast } = useToast();
  const { addContact } = useAdmin();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    addContact(formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      <PageHeader 
        title="Let's Start a Conversation" 
        description="Have a project in mind ? We'd love to hear from you.Send us a message and we'll respond as soon as possible."
      />

      {/* Main Contact Section */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm mb-4 block">Get In Touch</motion.span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground mb-8 leading-tight tracking-tight">Send Us A Message</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 font-medium leading-relaxed">Send us a message and we'll respond with a custom solution within 24 hours.</p>

              <form onSubmit={handleSubmit} className="space-y-10 p-10 md:p-14 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent rounded-bl-[5rem]"></div>
                
                <div className="grid md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Full Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-2xl focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Email Address</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-2xl focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-10 relative z-10">
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Phone Number</label>
                    <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91" className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-2xl focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Subject</label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-8 px-6 text-lg rounded-2xl focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all" />
                  </div>
                </div>

                <div className="space-y-3 relative z-10">
                  <label className="text-xs font-bold uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Message Details</label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your project or requirements..." rows={6} required className="bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 p-6 text-lg rounded-2xl resize-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all" />
                </div>

                <Button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-bold py-8 px-12 text-xl rounded-2xl shadow-xl shadow-primary/20 w-full md:w-fit transition-all hover:-translate-y-1 active:scale-95 relative z-10">
                  {isSubmitting ? "Sending Discovery..." : "Launch Message"}
                  <Send className="ml-3 w-6 h-6" />
                </Button>
              </form>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-16"
            >
              <div>
                <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm mb-4 block">Our Office</motion.span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground mb-8 tracking-tight">Contact Info</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                 {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="p-10 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] relative overflow-hidden group shadow-lg hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/5 transition-all duration-500"
                    >
                      <div className="mb-8 w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-[hsl(var(--primary))] group-hover:text-primary-foreground group-shadow">
                        <item.icon className="w-8 h-8 text-[hsl(var(--primary))] group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <h4 className="text-2xl font-bold mb-6 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{item.title}</h4>
                      {item.details.map((detail, idx) => (
                        <p key={idx} className="text-slate-600 dark:text-slate-400 leading-relaxed font-bold text-sm tracking-tight">{detail}</p>
                      ))}
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </motion.div>
                 ))}
              </div>

              {/* Socials */}
              <div className="space-y-6">
                 <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[hsl(var(--secondary))] ml-1">Follow Our Journey</h4>
                 <div className="flex gap-6">
                    {socialLinks.map((social, i) => (
                      <a key={i} href={social.href} className="w-16 h-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 rounded-2xl hover:bg-gradient-to-br hover:from-[hsl(var(--primary))] hover:to-[hsl(var(--accent))] hover:text-primary-foreground hover:border-transparent transition-all transform hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-primary/20 group">
                        <social.icon size={26} className="group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                 </div>
              </div>

              {/* Map */}
              <div className="rounded-[2.5rem] border-8 border-slate-50 dark:border-slate-900 shadow-2xl relative overflow-hidden aspect-video group bg-slate-100 dark:bg-slate-800">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.794692751508!2d78.6826!3d10.8216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf23bbaea808d%3A0xc331693e5066a3d6!2sTiruchirappalli%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000"
                    className="absolute inset-0 w-full h-full border-0 group-hover:scale-110 transition-transform duration-[2s] grayscale-0 hover:grayscale-0 dark:invert-[0.9] dark:hue-rotate-180"
                    allowFullScreen=""
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 text-center px-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-64 h-64 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl"></div>
         <div className="container-custom px-full max-w-4xl relative z-10">
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="bg-white dark:bg-slate-950 p-16 md:p-24 border border-slate-100 dark:border-slate-800 rounded-[4rem] shadow-2xl space-y-10 group"
            >
               <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground leading-tight tracking-tight">Have More Questions?</h2>
               <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">Check out our frequently asked questions or reach out to us directly via phone or email for personalized guidance.</p>
               <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] text-primary-foreground font-black py-8 px-12 text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">View Full FAQ</Button>
                  <Button variant="outline" className="border-[hsl(var(--accent))] text-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/5 font-black py-8 px-12 text-lg rounded-2xl transition-all hover:scale-105">Schedule a Call</Button>
               </div>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};

export default Contact;
