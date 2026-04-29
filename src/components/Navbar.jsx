import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  Code,
  Share2,
  PenTool,
  Palette,
  Cpu,
  Smartphone,
  MessageSquare,
  Phone,
  MessageCircle,
  Megaphone,
  Vote,
  Brain,
  Briefcase,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const developmentServices = [
  { name: "Web Development", path: "/development/web-development", icon: Code },
  {
    name: "Software Development",
    path: "/development/software-development",
    icon: Cpu,
  },
  {
    name: "App Development",
    path: "/development/app-development",
    icon: Smartphone,
  },
  {
    name: "AI / ML Development",
    path: "/development/ai-ml-development",
    icon: Brain,
  },
  {
    name: "Social Media Marketing",
    path: "/development/social-media-marketing",
    icon: Share2,
  },
  {
    name: "Government Tenders",
    path: "/development/government-tenders",
    icon: Briefcase,
  },
  {
    name: "Graphics Designer",
    path: "/development/graphics-designer",
    icon: Palette,
  },
];

const servicesItems = [
  { name: "Bulk SMS", path: "/services/bulk-sms", icon: MessageSquare },
  { name: "Voice SMS", path: "/services/voice-sms", icon: Phone },
  {
    name: "WhatsApp Panel",
    path: "/services/whatsapp-panel",
    icon: MessageCircle,
  },
  {
    name: "WhatsApp Marketing",
    path: "/services/whatsapp-marketing",
    icon: Megaphone,
  },
  {
    name: "Digital Election Campaign",
    path: "/services/digital-election-campaign",
    icon: Vote,
  },
  {
    name: "Content Writing",
    path: "/development/content-writing",
    icon: PenTool,
  },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  {
    name: "Development",
    path: "/development",
    hasDropdown: true,
    dropdownType: "development",
  },
  {
    name: "Services",
    path: "/services",
    hasDropdown: true,
    dropdownType: "services",
  },
  { name: "Clients", path: "/clients" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  const getDropdownItems = (type) => {
    if (type === "development") return developmentServices;
    if (type === "services") return servicesItems;
    return [];
  };

  const isActiveDropdownPath = (type) => {
    if (type === "development")
      return location.pathname.startsWith("/development");
    if (type === "services") return location.pathname.startsWith("/services");
    return false;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-slate-200/20 dark:shadow-slate-950/20 py-4 border-b border-slate-200/50 dark:border-slate-800/50" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1600px] w-full mx-auto flex items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] p-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-lg shadow-primary/20">
            <img src="/logo.png" alt="logo" className="w-full h-full object-contain brightness-0 invert opacity-80" />
          </div>
          <span className={`font-display text-xl sm:text-2xl font-black tracking-tight transition-colors ${
            scrolled ? "text-slate-900 dark:text-white" : "text-slate-900 dark:text-white"
          }`}>
            Izone<span className="text-[hsl(var(--accent))]">Tech</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.path} className="relative group/nav">
                {link.hasDropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(link.dropdownType)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="py-2"
                  >
                    <button
                      className={`flex items-center gap-1.5 font-bold text-sm tracking-wide transition-all ${
                        scrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-700 dark:text-slate-300"
                      } hover:text-[hsl(var(--accent))] dark:hover:text-[hsl(var(--accent))]`}
                    >
                      {link.name}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          activeDropdown === link.dropdownType ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === link.dropdownType && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          className="absolute top-full left-0 w-72 bg-white dark:bg-slate-900 rounded-[1.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden p-2"
                        >
                          <div className="grid grid-cols-1 gap-1">
                            {/* All Link */}
                            <Link
                              to={link.path}
                              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-black text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group/all cursor-pointer"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[hsl(var(--primary))]/10 dark:bg-[hsl(var(--primary))]/10 flex items-center justify-center text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))] group-hover/all:bg-[hsl(var(--primary))] group-hover/all:text-[hsl(var(--primary-foreground))] transition-all">
                                <ChevronDown size={14} className="-rotate-90" />
                              </div>
                              All {link.name}
                            </Link>
                            
                            <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-1 mx-2"></div>

                            {getDropdownItems(link.dropdownType).map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-[hsl(var(--accent))] dark:hover:text-[hsl(var(--accent))] transition-all group/item cursor-pointer"
                              >
                                <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover/item:bg-white dark:group-hover/item:bg-slate-700 group-hover/item:text-[hsl(var(--primary))] transition-colors">
                                  <item.icon size={16} />
                                </div>
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`font-bold text-sm tracking-wide transition-all cursor-pointer ${
                      scrolled ? "text-slate-700 dark:text-slate-300" : "text-slate-700 dark:text-slate-300"
                    } hover:text-[hsl(var(--accent))] dark:hover:text-[hsl(var(--accent))] relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-[hsl(var(--accent))] after:transition-all hover:after:w-full ${
                      location.pathname === link.path ? "text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))] after:w-full" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-6 ml-2">
            <Link to="/get-started" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="cursor-pointer">
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground rounded-full px-8 py-6 font-bold shadow-lg shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                Get Started
              </Button>
            </Link>
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <ThemeToggle />
            </div>
          </div>
        </div>


        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-700 dark:text-slate-300">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-slate-900 mt-4 mx-4 rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 dark:border-slate-800"
          >
            <div className="p-6 flex flex-col gap-3">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setMobileDropdown(
                            mobileDropdown === link.dropdownType
                              ? null
                              : link.dropdownType
                          )
                        }
                        className={`w-full flex items-center justify-between py-3 px-5 rounded-2xl transition-all font-bold text-sm ${
                          isActiveDropdownPath(link.dropdownType)
                            ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                        }`}
                      >
                        {link.name}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            mobileDropdown === link.dropdownType
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {mobileDropdown === link.dropdownType && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, y: -10 }}
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={{ opacity: 0, height: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="ml-4 mt-2 grid grid-cols-1 gap-1"
                          >
                            <Link
                              to={link.path} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                              className="flex items-center gap-3 py-2 px-5 rounded-xl text-xs font-bold text-slate-400 uppercase tracking-widest hover:text-[hsl(var(--accent))] cursor-pointer"
                            >
                              <span>All {link.name}</span>
                            </Link>
                            {getDropdownItems(link.dropdownType).map((item) => (
                              <Link
                                key={item.path}
                                to={item.path} onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                                className={`flex items-center gap-4 py-3 px-5 rounded-xl transition-all duration-200 group/item cursor-pointer ${
                                  location.pathname === item.path
                                    ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                                    : "text-slate-500 dark:text-slate-400 hover:text-[hsl(var(--accent))] dark:hover:text-[hsl(var(--accent))] hover:bg-slate-50 dark:hover:bg-slate-800"
                                }`}
                              >
                                <item.icon size={18} className="text-[hsl(var(--primary))]" />
                                <span className="text-sm font-bold">{item.name}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => {
                        setIsOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`py-3 px-5 rounded-2xl transition-all block font-bold text-sm cursor-pointer ${
                        location.pathname === link.path
                          ? "bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))]"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
               <Link to="/get-started" onClick={() => { setIsOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="cursor-pointer w-full">
                <Button className="w-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] border-none text-[hsl(var(--primary-foreground))] font-bold py-7 rounded-2xl shadow-xl shadow-primary/20 mt-2 text-sm">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
