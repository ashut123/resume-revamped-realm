import { TiltCard } from "./TiltCard";

const items = [
  { title: "Youth Employment Program", issuer: "Tata Consultancy Services (TCS)", icon: "🎓" },
  { title: "Java Full Stack Developer", issuer: "Wipro", icon: "☕" },
  { title: "Python Programming", issuer: "IIT Kanpur", icon: "🐍" },
  { title: "Employee of the Year", issuer: "Telemune Software Solutions", icon: "🏆" },
  { title: "B.Tech Computer Science", issuer: "MIET, Meerut · 2020–2024", icon: "🎯" },
  { title: "8 Production Projects in 18 months", issuer: "Telemune (Junior Engineer)", icon: "⚡" },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-accent mb-3">Recognition</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((i) => (
            <TiltCard key={i.title} className="glass rounded-2xl p-6 flex gap-4 items-start hover:border-primary transition-colors">
              <div className="text-3xl">{i.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{i.title}</h3>
                <p className="text-xs text-muted-foreground">{i.issuer}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
