import { motion } from "framer-motion";
import { Scene3D } from "./Scene3D";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero">
      {/* 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <Scene3D />
      </div>

      {/* Vignette overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.04_270/0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 pointer-events-auto"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Open to Opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="block">Ashutosh</span>
          <span className="block text-gradient">Mishra</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-lg md:text-2xl text-muted-foreground mb-3 font-light"
        >
          Senior Software Engineer · Java Backend · Agentic AI
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="text-sm md:text-base text-muted-foreground/70 max-w-2xl mx-auto mb-10"
        >
          Building mission-critical telecom systems and LLM-powered backends — MCP Server, LLaMA 3.1 tool routing, Agentic AI.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4 pointer-events-auto"
        >
          <a href="#projects" className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform glow-primary">
            View Projects
          </a>
          <a href="#contact" className="px-7 py-3 rounded-full glass-strong font-medium hover:scale-105 transition-transform">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
