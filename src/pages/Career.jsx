import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import { useNavigate, Link } from 'react-router-dom';
import HeroParagraph from "@/components/ui/HeroParagraph";
import { GraduationCap, ArrowRight, Briefcase } from 'lucide-react';

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

const Career = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <PageHeader 
        title="Build Your Career With Us" 
        description="Join a team of passionate innovators shaping the future of web development. We're always looking for talented individuals to grow with us."
      />

      {/* Main Content */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 max-w-2xl mx-auto space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm">Join Our Team</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight leading-tight">Grow With Us</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed italic">Join a team of passionate innovators shaping the future of digital excellence. We provide the platform, you bring the talent.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="group p-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-[hsl(var(--primary))] group-hover:text-primary-foreground shadow-inner">
                   <Briefcase className="w-8 h-8 text-[hsl(var(--primary))] group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-primary-foreground mb-6 group-hover:text-[hsl(var(--accent))] transition-colors">Job Openings</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium italic">
                  Join our talented team and build innovative web solutions for global clients. Explore exciting career opportunities and grow with us in a high-performance environment.
                </p>
              </div>
              <Link
                to="/career/jobs"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full relative z-10"
              >
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-bold py-8 px-10 rounded-2xl w-full shadow-xl shadow-primary/20 transition-all hover:-translate-y-2">
                  Apply for Job
                </Button>
              </Link>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="group p-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-[hsl(var(--accent))]/10 transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-[hsl(var(--accent))] group-hover:text-primary-foreground shadow-inner">
                   <GraduationCap className="w-8 h-8 text-[hsl(var(--accent))] group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-primary-foreground mb-6 group-hover:text-[hsl(var(--accent))] transition-colors">Internship Program</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium italic">
                  Kickstart your career with our internship program. Work on real projects, learn from experienced developers, and gain practical industry experience that sets you apart.
                </p>
              </div>
              <Link
                to="/career/internships"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full relative z-10"
              >
                <Button className="bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] hover:opacity-90 text-primary-foreground font-bold py-8 px-10 rounded-2xl w-full shadow-xl shadow-accent/20 transition-all hover:-translate-y-2">
                  Apply for Internship
                </Button>
              </Link>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="group p-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-[hsl(var(--secondary))]/10 transition-all duration-700 relative overflow-hidden flex flex-col justify-between h-full"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[hsl(var(--secondary))]/10 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:bg-[hsl(var(--secondary))] group-hover:text-primary-foreground shadow-inner">
                   <ArrowRight className="w-8 h-8 text-[hsl(var(--secondary))] group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-primary-foreground mb-6 group-hover:text-[hsl(var(--secondary))] transition-colors">
                  Student Training
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10 font-medium italic">
                  Help students build industry-ready skills through practical training, mentorship, and real-world project experience with our expert educators and tech leads.
                </p>
              </div>
              <Link
                to="/student-career-development"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="w-full relative z-10"
              >
                <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-bold py-8 px-10 rounded-2xl w-full shadow-xl shadow-primary/20 transition-all hover:-translate-y-2 flex items-center justify-center gap-2">
                  View Courses <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[hsl(var(--secondary))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6 relative">
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(var(--accent))]/5 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                 <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm mb-4 block">Company Culture</motion.span>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-primary-foreground mb-8 leading-tight">Why Join Izone Technologies?</h2>
                 <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 font-bold leading-relaxed italic">We don't just offer jobs; we offer career paths designed for elite performance and personal growth.</p>
                 <ul className="space-y-6">
                    {[
                      "Flexible working hours and modern workspace",
                      "Mentorship from industry-leading experts",
                      "Opportunity to work on global enterprise projects",
                      "Regular knowledge sharing and training sessions",
                      "A culture that celebrates your wins and supports your growth"
                    ].map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-5 text-lg font-bold text-slate-700 dark:text-slate-300 group"
                      >
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] shadow-lg group-hover:scale-150 transition-transform" />
                        {item}
                      </motion.li>
                    ))}
                 </ul>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-slate-950 p-16 md:p-24 rounded-[4rem] shadow-2xl relative overflow-hidden group border border-slate-100 dark:border-slate-800"
              >
                  <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                 <p className="text-2xl md:text-3xl font-bold text-[hsl(var(--primary))] leading-tight text-center relative z-10 italic">"Your talent has a home here. Let's create the future together with precision."</p>
                 <div className="mt-12 flex justify-center relative z-10">
                    <div className="w-1.5 h-12 bg-gradient-to-b from-[hsl(var(--primary))] to-transparent rounded-full animate-bounce"></div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>
    </Layout>
  );
};

export default Career;
