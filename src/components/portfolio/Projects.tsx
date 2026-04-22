import { useReveal } from "@/hooks/useReveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Enterprise Analytics Dashboard",
    description: "Real-time analytics platform with 50+ chart types, custom filters, and role-based access. Serves 10k+ daily users.",
    tech: ["Angular", "RxJS", "D3.js", "Tailwind"],
    github: "https://github.com/yourhandle/analytics-dashboard",
    demo: "https://demo.example.com/analytics",
    gradient: "from-primary to-primary-glow",
  },
  {
    title: "E-commerce PWA",
    description: "Progressive web app with offline support, push notifications, and Stripe payments. Lighthouse score 98.",
    tech: ["Angular", "NgRx", "Angular Material", "Service Workers"],
    github: "https://github.com/yourhandle/ecommerce-pwa",
    demo: "https://demo.example.com/shop",
    gradient: "from-accent to-primary",
  },
  {
    title: "Design System Library",
    description: "Reusable component library with 40+ components, themed variants, and Storybook docs. Used across 5 products.",
    tech: ["Angular", "SCSS", "Storybook", "Jest"],
    github: "https://github.com/yourhandle/design-system",
    demo: "https://demo.example.com/storybook",
    gradient: "from-primary-glow to-accent",
  },
  {
    title: "Real-time Collaboration Tool",
    description: "Multi-user document editor with live cursors, comments, and version history powered by WebSockets.",
    tech: ["Angular", "RxJS", "WebSockets", "Material UI"],
    github: "https://github.com/yourhandle/collab-tool",
    demo: "https://demo.example.com/collab",
    gradient: "from-primary to-accent",
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
