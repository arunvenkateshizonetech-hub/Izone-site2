import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, X, GraduationCap, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';

import PageHeader from "@/components/PageHeader";

const StudentCareerDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Course application submitted');
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <PageHeader title="Career Development" />
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <Link 
            to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
            className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-black hover:text-[hsl(var(--accent))] transition-all mb-16 group"
          >
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--primary))] group-hover:text-primary-foreground transition-colors">
              <ArrowRight size={20} className="rotate-180" />
            </div>
            <span>Back to Careers</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-24 space-y-6"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 mb-8 shadow-2xl border border-slate-100 dark:border-slate-800 transition-all hover:scale-110 hover:-rotate-12 group">
              <GraduationCap className="w-12 h-12 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent))] transition-colors" />
            </div>
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm block">Student Success</motion.span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Career Development
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed italic">
              Kickstart your career by learning industry-relevant skills and working on real-world projects. Our comprehensive training program prepares you for the modern tech landscape.
            </p>
            
            <div className="flex justify-center pt-8">
              <Button 
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-14 text-xl rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-2 active:scale-95"
                onClick={() => setIsModalOpen(true)}
              >
                Apply for Course
              </Button>
            </div>
          </motion.div>

          <div className="mt-32 grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              { title: "Practical Learning", desc: "Gain hands-on experience through real-world projects and proprietary labs.", color: "hsl(var(--primary))" },
              { title: "Expert Mentorship", desc: "Learn directly from senior engineers and industry veterans.", color: "hsl(var(--accent))" },
              { title: "Job Readiness", desc: "Build the skills and portfolio needed to launch your global career.", color: "hsl(var(--secondary))" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="group p-10 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] hover:bg-white dark:hover:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-700 relative overflow-hidden"
              >
                <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-8 transition-all group-hover:scale-110 shadow-lg group-shadow border border-slate-100 dark:border-slate-700">
                  <CheckCircle2 className="w-8 h-8 group-hover:text-primary-foreground transition-colors" style={{ color: item.color }} />
                </div>
                <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-base font-medium italic leading-relaxed">{item.desc}</p>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Popup overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-8">
              {/* Soft dark overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              />

              {/* Centered Modal popup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full max-w-lg bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-2xl rounded-[3rem] z-10 overflow-hidden flex flex-col max-h-[90vh]"
              >
                {/* Modal Header */}
                <div className="flex flex-col space-y-3 p-10 md:p-12 border-b border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-primary-foreground tracking-tight">
                      Enroll in <span className="text-[hsl(var(--primary))]">Elite Academy</span>
                    </h2>
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="p-3 text-slate-400 hover:text-slate-900 dark:hover:text-primary-foreground rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <p className="text-lg font-medium text-slate-500 dark:text-slate-400">
                    Provide your credentials to initiate your career acceleration.
                  </p>
                </div>                <div className="p-10 md:p-12 overflow-y-auto custom-scrollbar">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Candidate Name</label>
                        <Input required placeholder="John Doe" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Email Terminal</label>
                        <Input required type="email" placeholder="john@example.com" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Direct Line</label>
                        <Input required type="tel" placeholder="+91" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Origin Institution</label>
                        <Input required placeholder="Enter institution" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Specialization</label>
                        <Input required placeholder="e.g. Computer Science" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                      <div className="space-y-3 text-left">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Current Orbit (Year)</label>
                        <Input required placeholder="e.g. 4th Year" className="bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 text-left">
                      <div className="space-y-3 flex flex-col">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1 mb-1">Target Discipline</label>
                        <select 
                          required
                          className="w-full h-[60px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 text-lg font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] appearance-none"
                        >
                          <option value="">Select a course...</option>
                          <option value="python">Python Mastery</option>
                          <option value="react">React Architect</option>
                          <option value="web-development">Full Stack Protocol</option>
                        </select>
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1 mb-1">Mission Duration</label>
                        <Input value="3 Months" readOnly className="h-[60px] bg-slate-100 dark:bg-slate-900 border-none text-slate-500 font-bold px-5 text-lg rounded-xl" />
                      </div>
                    </div>

                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-4 pt-10">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                        className="mt-4 sm:mt-0 border-slate-200 dark:border-slate-800 text-slate-600 font-bold py-8 px-10 rounded-2xl"
                      >
                        Recall
                      </Button>
                      <Button type="submit" className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-14 text-xl rounded-2xl shadow-xl shadow-primary/20 active:scale-95">
                        Initialize Enrollment
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </section>
    </Layout>
  );
};

export default StudentCareerDevelopment;
