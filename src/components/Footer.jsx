import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about#team" },
    { name: "Careers", path: "/career" },
    { name: "Contact", path: "/contact" },
  ],
  services: [
    { name: "Web Development", path: "/development/web-development" },
    {
      name: "Social Media Marketing",
      path: "/development/social-media-marketing",
    },
    { name: "Content Writing", path: "/development/content-writing" },
    { name: "Graphics Designer", path: "/development/graphics-designer" },
  ],
  resources: [
    { name: "Blog", path: "#" },
    { name: "Case Studies", path: "/development#portfolio" },
    { name: "Documentation", path: "#" },
    { name: "FAQ", path: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-background text-muted-foreground py-12 relative overflow-hidden border-t border-border/50">
      {/* Decorative background element */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container-custom px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-border/50">
          {/* Logo & About */}
          <div className="space-y-8">
            <Link 
              to="/" 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
              className="flex items-center gap-2 group w-fit cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent p-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
                <img src="/logo.png" alt="logo" className="w-full h-full object-contain brightness-0 invert opacity-90" />
              </div>
              <span className="font-display text-2xl font-black tracking-tight text-foreground">
                Izone<span className="text-accent">Tech</span>
              </span>
            </Link>
            <p className="text-base leading-relaxed font-medium italic">
              Izone Technologies crafts exceptional web experiences that transform businesses. From concept to deployment, we bring your vision to life.
            </p>
            <div className="space-y-4">
              <span className="text-foreground font-black uppercase tracking-[0.2em] text-xs">Follow our frequency</span>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-11 h-11 rounded-2xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1 shadow-sm"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-foreground text-sm font-black uppercase tracking-[0.3em] mb-10 relative">
              Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h3>
            <ul className="space-y-4 font-bold text-sm tracking-wide">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                    className="hover:text-primary transition-all flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground text-sm font-black uppercase tracking-[0.3em] mb-10 relative">
              Protocols
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-4 font-bold text-sm tracking-wide">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} 
                    className="hover:text-secondary transition-all flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary/20 group-hover:bg-secondary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts & Newsletter */}
          <div className="space-y-8">
            <div>
              <h3 className="text-foreground text-sm font-black uppercase tracking-[0.3em] mb-10 relative">
                Mission Control
                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-accent rounded-full" />
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium leading-relaxed italic">3rd Floor, Aruvi Arcade Complex, 5th Cross Thillainagar, North Extension Road, Tiruchirapalli, Tamil Nadu-620018.</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-black tracking-tight">+91-9943077284</span>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-primary" />
                  </div>
                  <span className="text-sm font-black tracking-tight">innovativezone.tech@gmail.com</span>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm font-bold italic tracking-wide">
            Izone Tech © {new Date().getFullYear()} — Engineering the Future.
          </p>
          <div className="flex gap-8 text-xs font-black uppercase tracking-[0.15em]">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-primary transition-colors cursor-pointer">Privacy Protocol</Link>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-primary transition-colors cursor-pointer">Service Terms</Link>
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-primary transition-colors cursor-pointer">Security Kit</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
