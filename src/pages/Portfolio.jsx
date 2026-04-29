import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Layout from '@/components/Layout';
import ecommerceImg from '../assets/projects/ecommerce.png';
import saasImg from '../assets/projects/saas.png';
import bankingImg from '../assets/projects/banking.png';
import healthcareImg from '../assets/projects/healthcare.png';
import realestateImg from '../assets/projects/realestate.png';
import educationImg from '../assets/projects/education.png';
import foodImg from '../assets/projects/food.png';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern shopping experience with real-time inventory, seamless checkout, and advanced analytics dashboard for store owners.',
    image: ecommerceImg,
    tags: ['React', 'Node.js', 'Stripe', 'MongoDB'],
    client: 'ShopMax Inc.',
  },
  {
    title: 'SaaS Dashboard',
    category: 'UI/UX Design',
    description: 'Comprehensive analytics dashboard for enterprise data management with real-time insights and customizable reports.',
    image: saasImg,
    tags: ['TypeScript', 'GraphQL', 'AWS', 'D3.js'],
    client: 'DataFlow Systems',
  },
  {
    title: 'Mobile Banking App',
    category: 'Full Stack',
    description: 'Cross-platform mobile banking solution with biometric authentication, instant transfers, and investment tracking.',
    image: bankingImg,
    tags: ['React Native', 'Firebase', 'Plaid', 'Node.js'],
    client: 'FinSecure Bank',
  },
  {
    title: 'Healthcare Portal',
    category: 'Web Application',
    description: 'Patient management system with appointment scheduling, telemedicine integration, and secure medical records.',
    image: healthcareImg,
    tags: ['Vue.js', 'Python', 'PostgreSQL', 'HIPAA'],
    client: 'MediCare Plus',
  },
  {
    title: 'Real Estate Platform',
    category: 'Web Development',
    description: 'Property listing and management platform with virtual tours, mortgage calculator, and agent portal.',
    image: realestateImg,
    tags: ['Next.js', 'Prisma', 'Mapbox', 'Cloudinary'],
    client: 'HomeFind Realty',
  },
  {
    title: 'Education LMS',
    category: 'Full Stack',
    description: 'Learning management system with video courses, progress tracking, certifications, and community features.',
    image: educationImg,
    tags: ['React', 'Django', 'Redis', 'WebRTC'],
    client: 'EduLearn Academy',
  },
  {
    title: 'Food Delivery App',
    category: 'Mobile App',
    description: 'On-demand food delivery platform with real-time tracking, restaurant management, and driver coordination.',
    image: foodImg,
    tags: ['Flutter', 'Node.js', 'Socket.io', 'Google Maps'],
    client: 'QuickBite Foods',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

import PageHeader from "@/components/PageHeader";

const Portfolio = () => {
  return (
    <Layout>
      <PageHeader title="Our Portfolio" />

      {/* Projects Grid */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[hsl(var(--primary))]/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm">Our Work</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight leading-tight">Projects That Define Excellence</h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">Explore our collection of successful projects that showcase our expertise in creating innovative digital solutions for businesses across industries.</p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[3rem] hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-700 relative overflow-hidden flex flex-col h-full group"
              >
                <div className="relative overflow-hidden aspect-[16/10] m-3 rounded-[2.5rem]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                </div>
                <div className="p-10 flex-1 flex flex-col">
                  <div className="mb-8">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-black text-primary-foreground bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-primary/20">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                        {project.client}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-lg">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs font-bold px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-400 group-hover:border-[hsl(var(--primary))]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left z-20" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 text-center px-6 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl scale-150"></div>
         <div className="container-custom px-full max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-950 p-16 md:p-24 border border-slate-100 dark:border-slate-800 rounded-[4rem] shadow-2xl space-y-10 group"
            >
               <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground leading-tight tracking-tight">Want to See Your Project Here?</h2>
               <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 font-medium leading-relaxed max-w-2xl mx-auto">Let's create something amazing together. Share your vision with us and join our growing list of successful global projects.</p>
               <div className="flex flex-col sm:flex-row gap-8 justify-center">
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                    <Button className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] hover:opacity-90 text-primary-foreground font-black py-8 px-12 text-lg rounded-2xl shadow-xl shadow-primary/20 transition-all hover:-translate-y-1 active:scale-95">Start Your Project</Button>
                  </Link>
                  <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                   <Button variant="outline" className="border-[hsl(var(--primary))] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/5 font-black py-8 px-12 text-lg rounded-2xl transition-all hover:scale-105 active:scale-95">Consult Our Experts</Button>
                  </Link>
               </div>
            </motion.div>
         </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
