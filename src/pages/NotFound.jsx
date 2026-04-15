import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6 relative overflow-hidden">
      {/* Background Grains/Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[hsl(var(--accent))]/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-screen animate-pulse" />

      <div className="container-custom relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.8, type: "spring" }}
           className="mb-8"
        >
          <h1 className="text-9xl font-black bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--accent))] to-[hsl(var(--secondary))] bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-primary-foreground leading-tight">
            Protocol Error: <span className="text-[hsl(var(--accent))]">Route Not Found</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 font-bold italic max-w-lg mx-auto">
            The requested tactical coordinates do not exist in the current planetary deployment database. Exit and re-synchronize.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90 text-primary-foreground font-black py-7 px-10 rounded-2xl shadow-2xl transition-all hover:-translate-y-2 active:scale-95">
                <Home className="mr-3 w-6 h-6" />
                Return to Command
              </Button>
            </Link>
            <Button 
                onClick={() => window.history.back()}
                variant="outline" 
                size="lg" 
                className="border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 font-black py-7 px-10 rounded-2xl transition-all hover:bg-slate-50 dark:hover:bg-slate-900 hover:-translate-y-2 active:scale-95"
            >
              <ArrowLeft className="mr-3 w-6 h-6" />
              Previous Protocol
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
