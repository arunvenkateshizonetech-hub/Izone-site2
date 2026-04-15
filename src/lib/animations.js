export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      staggerChildren: 0.15 
    }
  }
};

export const cardHover = {
  initial: { scale: 1, boxShadow: "0 0 0 rgba(113, 33, 255, 0)" },
  hover: { 
    scale: 1.05, 
    boxShadow: "0 10px 30px rgba(113, 33, 255, 0.2)",
    filter: "brightness(1.05)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export const buttonHover = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05, 
    filter: "brightness(1.1)",
    transition: { duration: 0.2, ease: "easeInOut" }
  },
  tap: { scale: 0.95 }
};

export const pageTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.4, ease: "easeInOut" }
};
