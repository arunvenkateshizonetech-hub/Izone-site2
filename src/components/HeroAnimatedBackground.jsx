// src/components/HeroAnimatedBackground.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroAnimatedBackground = () => {
  return (
    <motion.div
      initial={{ y: 0, rotate: 0 }}
      animate={{ 
        y: [7, -10], 
        rotate: [2, 0] 
      }}
      transition={{ 
        y: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        },
        rotate: {
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }}
      className="absolute inset-0 pointer-events-none z-0 bg-no-repeat"
      style={{
        backgroundImage: "url(/hero/jeremy-bishop-G9i_plbfDgk-unsplash.jpg)", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.85,
        transformOrigin: "center",
      }}
    />
  );
};

export default HeroAnimatedBackground;
