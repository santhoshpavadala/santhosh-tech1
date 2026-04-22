import { useReveal } from "@/hooks/useReveal";
import { Briefcase } from "lucide-react";

const timeline = [
  {
    role: "Angular & React UI Developer",
    company: "Swayam Infologic",
    period: "Jul 2025 – Dec 2025 | Hyderabad",
    points: [
      "Developed responsive and pixel-perfect UI aligned with Figma designs for enterprise and government applications",
      "Built complex forms and UI components using Angular Material and TypeScript",
      "Integrated REST APIs and handled dynamic data rendering in frontend applications",
      "Worked on reusable UI components and layouts using modern frontend practices",
      "Contributed to React-based UI development using Tailwind CSS and Material UI",
      "Implemented routing, navigation, and state-driven UI updates in React applications",
      "Ensured responsive design and cross-browser compatibility across devices",
      "Identified and resolved UI defects to improve application stability and user experience"
    ],
  },
  {
    role: "Angular UI Developer",
    company: "RMES India Pvt Ltd",
    period: "Feb 2021 – May 2025 | Hyderabad",
    points: [
      "Led end-to-end UI development for enterprise and industrial monitoring applications using Angular",
      "Designed scalable frontend architecture with modular, reusable components and global SCSS structure",
      "Developed pixel-perfect, responsive UI based on Figma designs using Angular Material, SCSS, Flexbox, and CSS Grid",
      "Built dynamic dashboards, data tables, and monitoring screens for industrial analytics",
      "Integrated REST APIs and managed asynchronous data using RxJS",
      "Implemented backend-driven dynamic theming using JSON configuration for runtime UI customization",
      "Optimized performance using lazy loading, AOT compilation, and modular architecture",
      "Ensured cross-browser compatibility and resolved high-priority UI/functional issues",
      "Collaborated with backend (.NET), QA, and UI/UX teams in Agile environment",
      "Contributed to CI/CD pipelines using Jenkins for smooth deployments"
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
