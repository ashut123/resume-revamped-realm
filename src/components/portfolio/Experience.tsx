import { motion } from "framer-motion";

const timeline = [
  {
    role: "Senior Software Engineer",
    company: "Telemune Software Solutions",
    period: "March 2026 – Present",
    location: "Mohali, India",
    points: [
      "Leading architecture of AI-augmented backend systems",
      "MCP Server with autonomous LLaMA 3.1 tool routing",
      "Driving AI integration strategy across the VCC platform",
    ],
  },
  {
    role: "Software Developer",
    company: "Telemune Software Solutions",
    period: "Sep 2024 – Feb 2026",
    location: "Mohali, India",
    points: [
      "Delivered 6 production modules — Charging, HLR, Rule Engine, UniP SMS, AI Voicemail, Telegram Bot",
      "Architected the VCC Rule Engine using Reflection API + State Machine",
      "Real-time Charging via SOAP/WSDL & Diameter Protocol",
    ],
  },
  {
    role: "Software Engineering Trainee",
    company: "Telemune Software Solutions",
    period: "March 2024 – Aug 2024",
    location: "Mohali, India",
    points: [
      "Built Voice Call Completion (VCC) system end-to-end",
      "Spring Boot REST APIs + Hibernate ORM integrations",
      "Real-time TCP/IP subscriber notifications",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Career Path</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Professional <span className="text-gradient">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

          {timeline.map((t, i) => (
            <motion.div
              key={t.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-12`}
            >
              {/* dot */}
              <div className={`absolute top-3 w-4 h-4 rounded-full bg-primary glow-primary animate-pulse-glow ${
                i % 2 === 0 ? "left-2 md:left-auto md:-right-2" : "left-2 md:-left-2"
              }`} />

              <div className="glass rounded-2xl p-6 hover:border-primary transition-colors">
                <div className="text-xs uppercase tracking-wider text-accent mb-2">{t.period}</div>
                <h3 className="text-xl font-bold mb-1">{t.role}</h3>
                <div className="text-sm text-muted-foreground mb-4">
                  {t.company} · {t.location}
                </div>
                <ul className="space-y-2">
                  {t.points.map((p) => (
                    <li key={p} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">▸</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
