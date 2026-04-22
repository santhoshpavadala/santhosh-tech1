import { useReveal } from "@/hooks/useReveal";

const skills = [
  { name: "Angular", level: 95 },
  { name: "TypeScript", level: 92 },
  { name: "RxJS", level: 88 },
  { name: "JavaScript (ES6+)", level: 93 },
  { name: "HTML5 & CSS3", level: 95 },
  { name: "SCSS / Sass", level: 90 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Angular Material", level: 90 },
  { name: "Material UI", level: 80 },
  { name: "Bootstrap", level: 85 },
];

export const Skills = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="py-24">
      <div ref={ref} className="container reveal">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Skills</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">tech stack</span>
          </h2>
          <p className="text-muted-foreground">Tools and technologies I use to ship great products.</p>
        </div>

        <div className="glass-card p-6 md:p-10 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6">
            {skills.map((s) => (
              <div key={s.name}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">{s.name}</span>
                  <span className="text-muted-foreground">{s.level}%</span>
                </div>
                <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
                  <div
                    className="h-full gradient-bg rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${s.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
