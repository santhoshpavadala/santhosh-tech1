import { useReveal } from "@/hooks/useReveal";
import { Code2, Layers, Rocket, Users } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Clean Code", desc: "Component-driven, type-safe Angular architectures" },
  { icon: Layers, title: "Scalable UI", desc: "Reusable design systems and modular libraries" },
  { icon: Rocket, title: "Performance", desc: "Lazy loading, OnPush, and Lighthouse 95+" },
  { icon: Users, title: "Collaboration", desc: "Mentoring devs and pairing with designers" },
];

export const About = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="py-24">
      <div ref={ref} className="container reveal">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Building the web, <span className="gradient-text">one component at a time</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a Frontend Developer with <strong className="text-foreground">4.10 years</strong> of
            hands-on experience specializing in <strong className="text-foreground">Angular</strong> and
            modern UI development. I focus on building scalable, maintainable, and beautiful interfaces
            that delight users and perform brilliantly at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <div key={h.title} className="glass-card p-6 text-center group">
              <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <h.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
