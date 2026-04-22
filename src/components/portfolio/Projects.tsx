import { useReveal } from "@/hooks/useReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "RMEYE – Industrial Monitoring Platform",
    description:
      "Enterprise-level industrial monitoring platform with real-time dashboards, dynamic tables, and internationalization support. Built scalable UI components and handled async data flows using RxJS.",
    tech: ["Angular", "TypeScript", "SCSS", "RxJS", "REST APIs"],
    github: "#",
    demo: "#",
    gradient: "from-primary to-primary-glow",
  },
  {
    title: "RIL – Data Visualization Platform",
    description:
      "Data-driven visualization platform with interactive charts (bar, pie, line) using ECharts. Developed responsive, cross-browser compatible UI with reusable components and consistent theming.",
    tech: ["Angular", "SCSS", "ECharts", "Responsive Design"],
    github: "#",
    demo: "#",
    gradient: "from-accent to-primary",
  },
  {
    title: "GANZ – Dynamic Theming Framework",
    description:
      "Implemented backend-driven dynamic theming using JSON configuration, enabling runtime UI customization without code changes. Improved scalability and reusability across multiple applications.",
    tech: ["Angular", "SCSS", "JSON", "Theming"],
    github: "#",
    demo: "#",
    gradient: "from-primary-glow to-accent",
  },
  {
    title: "ZATCA – Government Tax Platform",
    description:
      "Built pixel-perfect, responsive UI aligned with Figma designs. Developed complex forms with Angular Material, integrated REST APIs, and resolved high-priority UI issues.",
    tech: ["Angular", "Angular Material", "TypeScript", "REST APIs"],
    github: "#",
    demo: "#",
    gradient: "from-primary to-accent",
  },
  {
    title: "GBB – Enterprise React Application",
    description:
      "Developed modern UI architecture using Tailwind CSS and Material UI. Built reusable components, handled API-driven data, and implemented routing for scalable frontend applications.",
    tech: ["React", "Tailwind CSS", "Material UI", "REST APIs"],
    github: "#",
    demo: "#",
    gradient: "from-accent to-primary-glow",
  },
];

export const Projects = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="py-24">
      <div ref={ref} className="container reveal">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Projects</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground">A selection of recent projects I'm proud of.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {projects.map((p) => (
            <article key={p.title} className="glass-card overflow-hidden group">
              <div className={`h-40 bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-grid-white/10 opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-6xl font-bold text-white/30 group-hover:scale-110 transition-transform">
                    {p.title.charAt(0)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
