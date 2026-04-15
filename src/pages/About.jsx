import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Heart,
  Users,
  Calendar,
  Award,
  Lightbulb,
} from "lucide-react";
import Layout from "@/components/Layout";
import ExpertCard from "../components/ui/ExpertCard";
import CEOCard from "../components/ui/CEOCard";
import HeroParagraph from "@/components/ui/HeroParagraph";
import { 
  sectionVariants, 
  fadeInUp, 
  staggerContainer, 
  cardHover, 
  buttonHover 
} from "@/lib/animations";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating your success as our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly pushing boundaries to deliver cutting-edge solutions.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with clients to ensure perfect alignment with their vision.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering nothing less than exceptional quality.",
  },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CTO",
    avatar: "SC",
    bio: "Full-stack expert passionate about scalable architecture.",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    avatar: "MR",
    bio: "Award-winning designer focused on user experience.",
  },
  {
    name: "Emily Johnson",
    role: "Project Manager",
    avatar: "EJ",
    bio: "Agile enthusiast ensuring seamless project delivery.",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    avatar: "DK",
    bio: "React specialist with a love for clean code.",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    avatar: "LW",
    bio: "Data-driven designer advocating for user needs.",
  },
  {
    name: "James Miller",
    role: "DevOps Engineer",
    avatar: "JM",
    bio: "Cloud infrastructure specialist ensuring 99.9% uptime.",
  },
];

const ceoData = {
  name: "Mr.B.Kesavan M.E",
  role: "Founder/CEO",
  description:
    "Visionary leader with 15+ years of experience in the tech industry. Kesavan founded Izone Technologies with a mission to democratize world-class web development and help businesses of all sizes achieve digital excellence.",
};

const milestones = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Izone Technologies was born with a vision to transform digital experiences.",
  },
  {
    year: "2016",
    title: "First Major Client",
    description: "Partnered with Fortune 500 company for enterprise solution.",
  },
  {
    year: "2018",
    title: "Team Expansion",
    description: "Grew to 25+ team members across multiple countries.",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded services to clients in 15+ countries worldwide.",
  },
  {
    year: "2022",
    title: "Industry Award",
    description: "Recognized as Top Web Development Agency of the Year.",
  },
  {
    year: "2024",
    title: "Innovation Hub",
    description: "Launched R&D division for emerging technologies.",
  },
];

const galleryImages = [
  {
    front: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    back: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80",
    title: "Modern office workspace",
  },
  {
    front: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    back: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    title: "Team brainstorming session",
  },
  {
    front: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80",
    back: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    title: "Developer team at work",
  },
  {
    front: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    back: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    title: "Team collaboration",
  },
  {
    front: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=600&q=80",
    back: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    title: "Presentation in office",
  },
  {
    front: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
    back: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80",
    title: "Developer focused on work",
  },
];

const technologies = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "AWS",
  "Docker",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Tailwind CSS",
  "Next.js",
  "Vue.js",
];

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

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const items = container.querySelectorAll(".galeria-book-3d__item");

    const updateContainerState = () => {
      const anyOpen = Array.from(items).some((item) =>
        item.classList.contains("is-open")
      );

      if (anyOpen) {
        container.classList.add("book-open");
      } else {
        container.classList.remove("book-open");
      }
    };

    const handleItemClick = (item) => (e) => {
      e.stopPropagation();
      item.classList.toggle("is-open");
      updateContainerState();
    };

    const cleanups = [];

    items.forEach((item) => {
      const handler = handleItemClick(item);
      item.addEventListener("click", handler);
      cleanups.push(() => item.removeEventListener("click", handler));
    });

    const handleDocumentClick = () => {
      items.forEach((item) => item.classList.remove("is-open"));
      updateContainerState();
    };

    document.addEventListener("click", handleDocumentClick);
    cleanups.push(() =>
      document.removeEventListener("click", handleDocumentClick)
    );

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <Layout>
      <PageHeader 
        title="Innovating the Digital Landscape" 
        description="zone Technology was established in 2016 at Trichy with diverse range of Knowledge, where Izone Technology is an IT Hub consists of all types of IT Services includes Web Designing and Development, Software and Mobile App Development, Digital Marketing Services Like Bulk SMS, Bulk Voice Call & Bulk WhatsApp, and also Students Career Development programs along with Final Year project Guidance Etc."
      />

      {/* Mission & Vision */}
      <section className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6 relative">
        <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[hsl(var(--primary))]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-16 space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm">Our Purpose</motion.span>
             <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">Why We Exist</motion.h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 relative group overflow-hidden"
            >
              <div className="mb-8 w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[hsl(var(--primary))] group-hover:text-primary-foreground group-shadow">
                <Target className="w-8 h-8 text-[hsl(var(--primary))] group-hover:text-primary-foreground transition-colors" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                We strive to develop smart application and websites for our clients for their IT efficiency and business profitability and to be a global leader and expert in providing Smart Training with smart skills.
              </p>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-12 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 relative group overflow-hidden"
            >
              <div className="mb-8 w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-[hsl(var(--accent))] group-hover:text-primary-foreground group-shadow">
                <Eye className="w-8 h-8 text-[hsl(var(--accent))] group-hover:text-primary-foreground transition-colors" />
              </div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">Our Vision</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg font-medium">
                Our Vision is to provide a smart training with smart skills and developing smart application and website with enthusiastically and with innovative methods in full-fledged customer satisfaction and beyond customer expectation.
              </p>
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[hsl(var(--accent))] to-[hsl(var(--secondary))] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--accent))] font-bold tracking-wider uppercase text-sm">Core Beliefs</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">Our Values</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium italic">What drives our commitment to excellence</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-10 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] hover:shadow-2xl hover:shadow-[hsl(var(--accent))]/5 transition-all duration-500 group text-center"
              >
                <div className="w-16 h-16 bg-[hsl(var(--accent))]/10 rounded-2xl flex items-center justify-center mx-auto mb-8 transition-transform group-hover:scale-110 group-hover:bg-[hsl(var(--accent))] group-hover:text-primary-foreground shadow-inner">
                  <value.icon className="w-8 h-8 text-[hsl(var(--accent))] group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-32 bg-white dark:bg-slate-950 overflow-hidden px-6">
        <div className="container-custom">
          {/* CEO Highlight */}
          <div className="max-w-5xl mx-auto mb-32 group">
             <CEOCard name={ceoData.name} role={ceoData.role} description={ceoData.description} />
          </div>

          <div className="text-center mb-16 space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--secondary))] font-bold tracking-wider uppercase text-sm">Professional Team</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">Meet The Experts</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium italic">The talented minds behind our innovative solutions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ExpertCard name={member.name} role={member.role} avatar={member.avatar} bio={member.bio} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Behind the Scenes */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm"
            >
              Life at Izone
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight"
            >
              Behind the Scenes
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 font-medium italic"
            >
              A glimpse into our collaborative and innovative work culture
            </motion.p>
          </div>

          {/* 3D Book Flip Gallery */}
          <div className="book-gallery-wrapper">
            <div className="book-gallery-scene">
              <div className="book-gallery-bg-text">
                <span>Life at</span>
                <span>Izone</span>
              </div>

              <div className="galeria-book-3d" ref={containerRef}>
                {galleryImages.map((item, index) => (
                  <div
                    className="galeria-book-3d__item"
                    style={{ "--i": index }}
                    key={index}
                  >
                    <img src={item.front} alt={`${item.title} front`} />
                    <img src={item.back} alt={`${item.title} back`} />
                    <div className="book-caption">{item.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden px-6 relative">
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[hsl(var(--primary))]/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen animate-pulse"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-20 space-y-4">
             <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="text-[hsl(var(--primary))] font-bold tracking-wider uppercase text-sm">History</motion.span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-primary-foreground tracking-tight">Our Journey</h2>
            <p className="text-slate-500 dark:text-slate-400 font-medium italic">Building excellence, year by year</p>
          </div>

          <div className="relative">
            <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] opacity-20" />

            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex items-center mb-20 relative ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"} pl-10 md:pl-0`}>
                  <div className="p-10 bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-500 relative group overflow-hidden">
                    <div className={`text-3xl font-black text-[hsl(var(--primary))] mb-4 flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
                      <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent italic">#{milestone.year}</span>
                      <Calendar className="text-slate-300 dark:text-slate-700 w-8 h-8 group-hover:text-[hsl(var(--accent))] transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{milestone.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-sm">
                      {milestone.description}
                    </p>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[hsl(var(--primary))] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  </div>
                </div>
                <div className="hidden md:flex w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-2xl absolute left-1/2 transform -translate-x-1/2 z-20 items-center justify-center border-2 border-[hsl(var(--primary))]/20 group">
                   <div className="w-4 h-4 bg-[hsl(var(--primary))] rounded-full animate-pulse shadow-[0_0_15px_rgba(124,58,237,0.5)]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
