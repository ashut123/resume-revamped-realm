import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ashutosh Mishra — Senior Software Engineer · Java & Agentic AI" },
      {
        name: "description",
        content:
          "Portfolio of Ashutosh Mishra — Senior Software Engineer building Java backend systems, MCP Server, LLaMA 3.1 agents and Agentic AI at Telemune.",
      },
      { property: "og:title", content: "Ashutosh Mishra — Java & Agentic AI Engineer" },
      { property: "og:description", content: "8 production telecom & AI modules. MCP Server · LLaMA 3.1 · Spring Boot." },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
