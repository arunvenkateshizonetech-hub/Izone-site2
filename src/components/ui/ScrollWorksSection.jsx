import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function ScrollWorksSection({
  works,
  title = "Our Work",
  subtitle = "Case Studies",
}) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.8, 1, 1.1]
  );
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 0.15, 0.15, 0]
  );

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden">
      {/* Large "WORKS" Background Text with Parallax */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ scale: backgroundScale, opacity: backgroundOpacity }}
      >
        <span className="font-display text-[20vw] md:text-[25vw] font-black text-primary/5 whitespace-nowrap tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
          WORKS
        </span>
      </motion.div>

      <div className="container-custom relative z-10 px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium">{title}</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-2">
            {subtitle}
          </h2>
        </motion.div>

        {/* Animated Cards */}
        <div className="space-y-24 md:space-y-32">
          {works.map((work, index) => (
            <ScrollWorkCard 
              key={index}
              work={work}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ScrollWorkCard({ work, index, isLeft }) {
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [isLeft ? -80 : 80, 0]
  );

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale, x }}
      className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
    >
      {/* Image Container */}
      <div className="w-full md:w-3/5 relative group">
        <div className="glass-card overflow-hidden glow-border">
          <div className="relative overflow-hidden aspect-video">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/5 to-transparent" />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        
        {/* Floating Index Number */}
        <motion.div 
          className={`absolute -bottom-4 ${isLeft ? '-right-4' : '-left-4'} w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-md flex items-center justify-center glow-border shadow-lg shadow-primary/10`}
          initial={{ scale: 0, rotate: -10 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, type: "spring" }}
        >
          <span className="font-display text-2xl font-bold gradient-text">
            {String(index + 1).padStart(2, '0')}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`w-full md:w-2/5 ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            {work.category}
          </span>
          <h3 className="font-display text-2xl md:text-3xl font-bold mt-2 mb-4">
            {work.title}
          </h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {work.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {work.tags.map((tag, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="px-4 py-2 rounded-full glass-card border border-primary/20 text-sm text-foreground hover:border-primary/50 hover:bg-primary-hover hover:shadow-premium-glow transition-all cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default ScrollWorksSection;
