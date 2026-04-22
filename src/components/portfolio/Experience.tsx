import { useReveal } from "@/hooks/useReveal";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    role: "Senior Frontend Developer",
    company: "Company Name",
    period: "2022 — Present",
    points: [
      "Led Angular-based enterprise dashboards serving 10k+ daily users.",
      "Improved Lighthouse performance from 62 → 95 via lazy loading & OnPush.",
      "Built reusable component library reducing dev time by 30%.",
      "Mentored 3 junior developers on Angular & RxJS best practices.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Previous Company",
    period: "2020 — 2022",
    points: [
      "Developed responsive SPAs using Angular, RxJS, and NgRx.",
      "Collaborated with designers to deliver pixel-perfect UIs.",
      "Integrated REST APIs with robust validation and error handling.",
    ],
  },
];

export const Experience = () => {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="experience" className="py-24">
      <div ref={ref} className="container reveal">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Experience</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">journey</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-glow to-transparent md:-translate-x-1/2" />

          {timeline.map((t, i) => (
            <div
              key={t.role}
              className={`relative mb-10 md:mb-14 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-10" : "md:ml-auto md:pl-10"
              } pl-14 md:pl-0`}
            >
              <div className={`absolute top-4 ${i % 2 === 0 ? "left-2 md:left-auto md:-right-3" : "left-2 md:-left-3"} w-6 h-6 rounded-full gradient-bg flex items-center justify-center shadow-lg`}>
                <Briefcase className="h-3 w-3 text-primary-foreground" />
              </div>
              <div className="glass-card p-6">
                <p className="text-xs font-semibold text-primary mb-1">{t.period}</p>
                <h3 className="font-display text-xl font-bold">{t.role}</h3>
                <p className="text-sm text-muted-foreground mb-4">{t.company}</p>
                <ul className="space-y-2 text-sm text-foreground/80">
                  {t.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
