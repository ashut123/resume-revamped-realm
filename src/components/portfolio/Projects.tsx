import { TiltCard } from "./TiltCard";

const projects = [
  {
    name: "MCP Server + LLaMA 3.1",
    tag: "Agentic AI",
    desc: "MCP Server powered by Ollama LLaMA 3.1 with autonomous API tool selection — zero hardcoded routing.",
    stack: ["Ollama", "LLaMA 3.1", "MCP Protocol", "Java", "Python"],
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Agentic AI Voicemail",
    tag: "AI Platform",
    desc: "Personalized AI voicemail assistant with dual delivery (voice / WhatsApp text) and autonomous decision-making.",
    stack: ["Agentic AI", "Spring Boot", "WhatsApp API", "LLM"],
    accent: "from-pink-500 to-rose-600",
  },
  {
    name: "Rule Engine — VCC Hub",
    tag: "Core Systems",
    desc: "Central Rule Engine routing all VC
 requests via Reflection API + State Machine for dynamic dispatching.",
    stack: ["Java", "Reflection API", "State Machine", "Oracle"],
    accent: "from-violet-500 to-indigo-600",
  },
  {
    name: "Charging Module",
    tag: "Telecom",
    desc: "Real-time prepaid/postpaid balance check & deduction over SOAP/WSDL & Diameter Protocol.",
    stack: ["Java", "SOAP", "Diameter", "Socket"],
    accent: "from-cyan-400 to-blue-600",
  },
  {
    name: "HLR Module",
    tag: "Telecom",
    desc: "Activate/deactivate telecom services (CRBT, VCC, MCA, VMS) and classify MSISDNs for accurate charging.",
    stack: ["Java", "HTTP", "Telnet", "WSDL", "TCP"],
    accent: "from-emerald-400 to-teal-600",
  },
  {
    name: "VCC — Voice Call Completion",
    tag: "Production",
    desc: "Tracks missed calls (busy / off / unreachable) and notifies subscribers automatically when reachable.",
    stack: ["Spring Boot", "Hibernate", "MySQL", "TCP/IP"],
    accent: "from-amber-400 to-orange-600",
  },
  {
    name: "UniP SMS Service",
    tag: "Backend",
    desc: "Synchronous Spring Boot SMS service with guaranteed delivery confirmation inside CRBT platform.",
    stack: ["Spring Boot", "Hibernate", "REST", "MySQL"],
    accent: "from-lime-400 to-green-600",
  },
  {
    name: "Telegram AI Chatbot",
    tag: "AI",
    desc: "OpenClaw-powered Telegram bot with context-aware multi-turn conversations & real-time session tracking.",
    stack: ["OpenClaw", "Telegram API", "Python", "Webhook"],
    accent: "from-sky-400 to-indigo-600",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">8 Production Modules</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            All deployed on a live CRBT telecom platform handling thousands of real-time events.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <TiltCard key={p.name} className="glass rounded-2xl p-6 group relative overflow-hidden">
              <div className={`absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />
              <div className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider mb-3 bg-gradient-to-r ${p.accent} text-white`}>
                {p.tag}
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span key={s} className="px-2 py-0.5 text-[10px] rounded bg-secondary/60 border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
