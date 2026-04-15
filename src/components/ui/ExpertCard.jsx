import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ExpertCard = ({ name, role, avatar, bio, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Generate fallback image if none provided
  const imageUrl =
    image ||
    `https://api.dicebear.com/7.x/personas/svg?seed=${name.replace(/\s/g, "")}`;

  return (
    <motion.div
      className="p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-xl shadow-slate-200/50 dark:shadow-slate-950/50 hover:shadow-2xl hover:shadow-[hsl(var(--primary))]/10 transition-all duration-500 group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[hsl(var(--primary))]/5 to-transparent rounded-bl-[5rem] group-hover:scale-150 transition-transform duration-700"></div>
      {/* Floating Image on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute -top-32 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 bg-[hsl(var(--primary))]/30 rounded-full blur-xl scale-110" />

              {/* Floating Avatar */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl shadow-[hsl(var(--primary))]/20"
              >
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover bg-card"
                />
              </motion.div>

              {/* Connector */}
              <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 -translate-x-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-[hsl(var(--primary))]/50 to-transparent origin-top"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card Content */}
      <div className="flex items-center gap-6 mb-6 relative z-10">
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.3 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center text-primary-foreground font-black text-xl shadow-lg shadow-primary/20"
        >
          {avatar}
        </motion.div>

        <div>
          <h3 className="font-bold text-xl text-slate-900 dark:text-primary-foreground group-hover:text-[hsl(var(--accent))] transition-colors">{name}</h3>
          <span className="text-[hsl(var(--primary))] dark:text-[hsl(var(--primary))] text-sm font-bold tracking-wide uppercase">{role}</span>
        </div>
      </div>

      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed relative z-10 font-medium">{bio}</p>
    </motion.div>
  );
};

export default ExpertCard;
