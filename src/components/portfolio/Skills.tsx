import { motion } from "framer-motion";
import { TiltCard } from "./TiltCard";

const groups = [
  {
    title: "Java Core",
    accent: "from-violet-500 to-fuchsia-500",
    items: ["Core Java", "Multithreading", "ThreadPoolExecutor", "Reflection API", "State Machine", "Socket Programming"],
  },
  {
    title: "Frameworks",
    accent: "from-cyan-400 to-blue-500",
    items: ["Spring Boot", "Spring MVC", "Hibernate", "JPA", "Apache Kafka", "Maven"],
  },
  {
    title: "AI / LLM",
    accent: "from-pink-500 to-rose-500",
    items: ["Agentic AI", "LLaMA 3.1", "MCP Protocol", "Ollama", "OpenClaw", "Prompt Engineering"],
  },
  {
    title: "Protocols",
    accent: "from-amber-400 to-orange-500",
    items: ["REST", "SOAP / WSDL", "Diameter", "TCP/IP", "WebSocket", "Telnet"],
  },
  {
    title: "Databases",
    accent: "from-emerald-400 to-teal-500",
    items: ["MySQL", "Oracle", "JDBC", "Stored Procedures", "Connection Pool", "ORM"],
  },
  {
    title: "DevOps & Tools",
    accent: "from-indigo-500 to-purple-500",
    items: ["Git / GitHub", "JBoss", "Tomcat", "IntelliJ", "Maven", "Eclipse"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Tech Arsenal</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <TiltCard key={g.title} className="glass rounded-2xl p-6 group">
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${g.accent} text-white`}>
                {g.title}
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item, i) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-3 py-1.5 text-xs rounded-lg bg-secondary/60 text-secondary-foreground border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
