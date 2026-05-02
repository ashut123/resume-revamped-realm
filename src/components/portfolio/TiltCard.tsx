import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTransform(`perspective(1000px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(20px)`);
  };

  const reset = () => setTransform("perspective(1000px) rotateY(0) rotateX(0) translateZ(0)");

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ transform, transformStyle: "preserve-3d", transition: "transform 0.2s ease-out" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
