import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const PageHeader = ({ title, description }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const defaultDescription = "Leveraging elite digital architectures to engineer mission-critical solutions that command industry dominance and planetary reach.";

  return (
    <section className="min-h-[100dvh] flex items-center justify-center pt-32 pb-20 px-6 relative overflow-hidden bg-background">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-[hsl(var(--primary))]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] md:w-[600px] h-[500px] md:h-[600px] bg-[hsl(var(--accent))]/10 rounded-full blur-[120px] mix-blend-multiply animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container-custom relative z-10 w-full">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="text-center max-w-5xl mx-auto flex flex-col items-center justify-center"
        >
          <div className="inline-flex items-center justify-center p-[1px] rounded-xl bg-primary/30 mb-8 max-w-full overflow-hidden">
             <div className="bg-background px-6 py-2 rounded-[11px] flex items-center gap-2 truncate">
                <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em] truncate">
                  {pathnames[pathnames.length - 1]?.replace(/-/g, ' ') || 'Mission'} Architecture
                </span>
             </div>
          </div>

          <div className="relative px-4 w-full max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.1] tracking-tight">
              <span className="block text-foreground">{title.split(' ').slice(0, Math.ceil(title.split(' ').length / 2)).join(' ')}</span>
              <span className="block text-primary">{title.split(' ').slice(Math.ceil(title.split(' ').length / 2)).join(' ')}</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed italic max-w-2xl mx-auto mt-6 md:mt-8">
            {description || defaultDescription}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHeader;
