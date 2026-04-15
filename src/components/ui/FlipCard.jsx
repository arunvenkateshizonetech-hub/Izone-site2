import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({ shape }) {
  const meshRef = useRef(null);
  const geometry = {
    cube: <boxGeometry args={[1, 1, 1]} />,
    sphere: <sphereGeometry args={[0.6, 32, 32]} />,
    torus: <torusGeometry args={[0.5, 0.2, 16, 50]} />,
    octahedron: <octahedronGeometry args={[0.6]} />,
  }[shape] || <boxGeometry args={[1, 1, 1]} />;

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        {geometry}
        <meshStandardMaterial
          color="hsl(var(--primary))"
          emissive="hsl(var(--primary))"
          emissiveIntensity={0.8}
          transparent
          opacity={0.4}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Mini3DScene({ shape }) {
  return (
    <div className="w-20 h-20 relative">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="hsl(var(--accent))" />
        <FloatingShape shape={shape} />
      </Canvas>
    </div>
  );
}

export function FlipCard({
  title,
  summary,
  fullContent,
  icon,
  features = [],
  use3D = false,
  shape3D = "cube",
  delay = 0,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      className="perspective-1000 w-full"
    >
      <motion.div
        className="relative w-full h-full cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div
          className="relative w-full h-full bg-white dark:bg-slate-950 p-8 md:p-10 shadow-xl hover:shadow-2xl transition-all duration-700 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] flex flex-col group"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="absolute top-0 left-0 w-full h-[4px] border-t-[4px] border-transparent bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-t-[2.5rem] overflow-hidden" style={{ backgroundClip: "padding-box" }} />
          <div className="flex-grow">
            <div className="flex flex-col items-center gap-6 mb-8 text-center">
              {icon && (
                <div className="w-20 h-20 rounded-2xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-lg group-shadow border border-slate-100 dark:border-slate-800">
                  {icon}
                </div>
              )}
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 dark:text-primary-foreground mb-4 group-hover:text-[hsl(var(--accent))] transition-colors leading-tight">
                  {title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-base font-medium italic leading-relaxed">
                  {summary}
                </p>
              </div>
            </div>
            {features.length > 0 && (
              <div className="flex flex-col gap-3 mt-auto pt-6">
                {features.slice(0, 3).map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] shrink-0 mt-1" />
                    <span className="leading-tight">{f}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-8 pt-4 text-[hsl(var(--primary))] text-xs font-black uppercase tracking-widest text-center animate-pulse border-t border-slate-100 dark:border-slate-800/50">
            Analyze Protocol Details →
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-slate-900 dark:bg-slate-950 p-10 rounded-[2.5rem] flex flex-col border border-slate-800 shadow-2xl overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
           <div className="absolute top-0 right-0 w-32 h-32 bg-[hsl(var(--primary))]/10 rounded-full blur-3xl" />
          <div className="flex-grow overflow-y-auto pr-2 custom-scrollbar relative z-10">
            <h3 className="text-2xl font-black text-primary-foreground mb-6 leading-tight">
              {title}
            </h3>
            <p className="text-slate-400 text-lg font-medium italic leading-relaxed mb-8">
              {fullContent}
            </p>
            {features.length > 0 && (
              <div className="space-y-6">
                <h4 className="text-[hsl(var(--accent))] font-black text-xs uppercase tracking-widest">
                  Technical Specifications:
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {features.map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 text-sm font-bold text-slate-300"
                    >
                       <div className="w-1.5 h-1.5 rounded-full bg-[hsl(var(--accent))]" />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="mt-8 text-primary-foreground/50 text-xs font-black uppercase tracking-widest text-center hover:text-primary-foreground transition-colors">
            ← Return to Interface
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;
