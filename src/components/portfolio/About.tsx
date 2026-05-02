import { motion } from "framer-motion";

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "8", label: "Production Modules" },
  { value: "3", label: "Certifications" },
  { value: "1000s", label: "Real-time Events / sec" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-accent mb-4">About Me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Engineer behind <span className="text-gradient">live telecom AI systems</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Senior Software Engineer at <span className="text-foreground font-medium">Telemune Software Solutions</span>, specializing in
              high-concurrency Java backends and AI-augmented systems. I've independently delivered 8 production-grade modules
              powering a live CRBT telecom platform serving thousands of simultaneous events.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From Diameter Protocol billing engines to autonomous LLaMA 3.1 tool-routing MCP servers — I bridge
              hardcore Java systems with the new wave of Agentic AI.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center hover:glow-primary transition-shadow"
              >
                <div className="text-4xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
