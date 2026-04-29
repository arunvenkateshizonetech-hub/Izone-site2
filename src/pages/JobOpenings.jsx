import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';
import { useAdmin } from '@/context/AdminContext';



const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

import PageHeader from "@/components/PageHeader";

const JobOpenings = () => {
  const { jobRoles, addJobApplication } = useAdmin();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    address: '',
    qualification: '',
    experience: '',
    resume: null,
    resumeName: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size should not exceed 5MB");
        e.target.value = "";
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, resume: reader.result, resumeName: file.name }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApply = (job) => {
    setSelectedJob(job);
    setIsOpen(true);
    setIsSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Add to admin panel
    addJobApplication({
      name: formData.fullName,
      email: formData.email,
      phone: formData.mobile,
      location: formData.address,
      qualification: formData.qualification,
      experience: formData.experience,
      resume: formData.resume,
      resumeName: formData.resumeName,
      jobRole: selectedJob?.roleName || selectedJob?.title || 'General Application',
    });
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Application submitted successfully!');
    
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        mobile: '',
        address: '',
        qualification: '',
        experience: '',
        resume: null,
        resumeName: ''
      });
    }, 2000);
  };

  return (
    <Layout>
      <PageHeader title="Job Openings" />
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-black hover:text-[hsl(var(--accent))] transition-all mb-16 group">
            <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--primary))] group-hover:text-primary-foreground transition-colors">
              <ArrowRight size={20} className="rotate-180" />
            </div>
            <span>Back to Careers</span>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto mb-24 space-y-4"
          >
            <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm block">Open Roles</motion.span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Current Openings
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed italic">
              Join our team of talented individuals and build innovative web solutions for global clients.
            </p>
          </motion.div>

          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8 max-w-4xl mx-auto">
            {jobRoles.length === 0 ? (
              <div className="text-center text-slate-500 p-20 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] font-bold italic shadow-inner">No job openings available at the moment. Check back soon!</div>
            ) : (
              jobRoles.map((job) => (
                <motion.div key={job.id || job.roleName} variants={itemVariants} className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 rounded-[2.5rem] shadow-lg hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 p-10 flex flex-col md:flex-row md:items-center justify-between gap-8 relative group overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black text-slate-900 dark:text-primary-foreground mb-5 group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">{job.roleName}</h3>
                    <div className="flex flex-wrap gap-8 text-[13px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      <span className="flex items-center gap-2"><Briefcase className="w-5 h-5 text-[hsl(var(--primary))]"/> {job.qualification}</span>
                      <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[hsl(var(--accent))]"/> {job.location}</span>
                      <span className="flex items-center gap-2"><Clock className="w-5 h-5 text-[hsl(var(--secondary))]"/> {job.workTiming}</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-10 rounded-2xl shadow-xl shadow-primary/20 shrink-0 transition-all hover:-translate-y-1 relative z-10 active:scale-95 text-lg"
                    onClick={() => handleApply(job)}
                  >
                    Apply Now
                  </Button>
                  <div className="absolute top-0 left-0 w-[4px] h-full bg-gradient-to-b from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-bottom" />
                </motion.div>
              ))
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }} className="text-center mt-24 p-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] max-w-3xl mx-auto shadow-2xl relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--primary))]/5 rounded-bl-[5rem]"></div>
            <p className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-8 italic leading-relaxed">Don't see a position that fits your elite skills? We're always looking for exceptional talent to join our moonshot projects.</p>
            <Button 
              className="bg-white dark:bg-slate-950 border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))] hover:text-primary-foreground font-black py-8 px-12 text-lg rounded-2xl transition-all hover:-translate-y-1 shadow-lg active:scale-95"
              onClick={() => handleApply({ roleName: 'General Application' })}
            >
              Launch General Application
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Form Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border-primary/20">
          <DialogHeader>
            <DialogTitle className="text-3xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
              Join as <span className="text-primary">{selectedJob?.roleName || selectedJob?.title}</span>
            </DialogTitle>
            <DialogDescription className="text-lg font-medium text-slate-500 dark:text-slate-400 mt-2">
              Ready to create something legendary? Tell us about yourself.
            </DialogDescription>
          </DialogHeader>

          {isSubmitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-24 h-24 rounded-[2rem] bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center mb-4 shadow-2xl animate-bounce">
                <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 dark:text-primary-foreground">Application Transmitted!</h3>
              <p className="text-lg text-slate-500 dark:text-slate-400 max-w-sm font-medium">
                Our talent acquisition team has received your signal. We'll synchronize with you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 py-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="fullName" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" required className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" value={formData.fullName} onChange={handleInputChange} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Email Nexus</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" value={formData.email} onChange={handleInputChange} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="mobile" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Direct Line</Label>
                  <Input id="mobile" type="tel" placeholder="+91" required className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" value={formData.mobile} onChange={handleInputChange} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="role" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Target Mission</Label>
                  <Input id="role" value={selectedJob?.roleName || selectedJob?.title || ''} readOnly className="bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 py-7 px-5 text-lg rounded-xl font-bold text-slate-500 cursor-not-allowed" />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="address" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Current Base</Label>
                <Textarea id="address" placeholder="Your residential address" className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-5 text-lg rounded-xl min-h-[100px] resize-none focus:ring-2 focus:ring-[hsl(var(--primary))]" value={formData.address} onChange={handleInputChange} />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="qualification" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Key Credentials</Label>
                  <Input id="qualification" placeholder="e.g. Master in Innovation" required className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" value={formData.qualification} onChange={handleInputChange} />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="experience" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Mission Experience</Label>
                  <Input 
                    id="experience" 
                    list="experience-options" 
                    placeholder="e.g. 5 Years" 
                    required 
                    className="bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 py-7 px-5 text-lg rounded-xl focus:ring-2 focus:ring-[hsl(var(--primary))]" 
                    value={formData.experience} 
                    onChange={handleInputChange} 
                  />
                  <datalist id="experience-options">
                    <option value="Fresher" />
                    <option value="1 Year" />
                    <option value="2 Years" />
                    <option value="3 Years" />
                    <option value="4 Years" />
                    <option value="5 Years" />
                    <option value="More than 5 Years" />
                  </datalist>
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="resume" className="text-xs font-black uppercase tracking-widest text-[hsl(var(--primary))] ml-1">Portfolio / Resume</Label>
                <div className="relative group">
                  <Input 
                    id="resume" 
                    type="file" 
                    accept=".pdf,.doc,.docx" 
                    required 
                    onChange={handleFileChange}
                    className="cursor-pointer bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 h-20 file:mr-6 file:py-3 file:px-8 file:rounded-xl file:border-0 file:text-sm file:font-black file:bg-gradient-to-r file:from-[hsl(var(--primary))] file:to-[hsl(var(--accent))] file:text-primary-foreground hover:file:opacity-90 flex items-center"
                  />
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 italic">Accepted formats: PDF, DOC, DOCX (Max 5MB)</p>
              </div>

              <div className="flex items-center space-x-3 pt-4">
                <Checkbox id="terms" required className="w-5 h-5 rounded-lg border-slate-300 data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:border-[hsl(var(--primary))]" />
                <Label htmlFor="terms" className="text-sm font-bold text-slate-600 dark:text-slate-400 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  I verify my details and agree to the <span className="text-[hsl(var(--primary))] hover:underline cursor-pointer">Mission Terms</span>.
                </Label>
              </div>

              <DialogFooter className="pt-10 flex gap-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsOpen(false)}
                  disabled={isSubmitting}
                  className="border-slate-200 dark:border-slate-800 text-slate-600 font-bold py-7 px-8 rounded-xl flex-1 md:flex-none"
                >
                  Recall
                </Button>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-7 px-10 rounded-xl shadow-xl shadow-primary/20 flex-1 md:flex-none active:scale-95"
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit Application'}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default JobOpenings;
