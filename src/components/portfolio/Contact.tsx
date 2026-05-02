import { motion } from "framer-motion";

const GMAIL_COMPOSE = "https://mail.google.com/mail/?view=cm&fs=1&to=ausu951@gmail.com&su=Let%27s%20work%20together";

const links = [
  { label: "Email (Gmail)", value: "ausu951@gmail.com", href: GMAIL_COMPOSE, external: true },
  { label: "Phone", value: "+91 93058 95286", href: "tel:+919305895286", external: false },
  { label: "GitHub", value: "github.com/ashut123", href: "https://github.com/ashut123", external: true },
  { label: "LinkedIn", value: "ashutosh-mishra-21b10a228", href: "https://linkedin.com/in/ashutosh-mishra-21b10a228", external: true },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.4_0.22_295/0.25)_0%,transparent_60%)] pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Let's build something</p>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready for the <span className="text-gradient">next mission?</span>
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Open to Senior / Lead Backend or AI Backend Engineering roles — Mohali, Delhi NCR, Bangalore, or Remote.
          </p>

          <a
            href="mailto:ausu951@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold hover:scale-105 transition-transform glow-primary mb-12"
          >
            Start a Conversation →
          </a>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 mt-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass rounded-xl p-4 text-left hover:border-primary transition-colors group"
              >
                <div className="text-[10px] uppercase tracking-widest text-accent mb-1">{l.label}</div>
                <div className="text-sm text-foreground group-hover:text-gradient transition-colors break-all">{l.value}</div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <footer className="mt-24 text-center text-xs text-muted-foreground/60">
        © 2026 Ashutosh Mishra · Crafted with React, Three.js & Framer Motion
      </footer>
    </section>
  );
}
