import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* animated blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 rounded-full bg-primary-glow/30 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-accent/20 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-6 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Available for new opportunities
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            Hi, I'm <span className="gradient-text">Santhosh Pavadala</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4">
            Frontend Developer · Angular Specialist
          </p>
          <p className="text-base sm:text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-10">
            Crafting scalable, high-performance web applications with 4.10 years of
            experience in Angular, RxJS, and modern UI development.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button size="lg" asChild className="gradient-bg text-primary-foreground hover:opacity-90 shadow-lg">
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="glass border-foreground/10">
              <a href="/Santhosh_Angular_Cv.pdf" download="Santhosh_Angular_Cv.pdf">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-3">
            {[
              { icon: Github, href: "https://github.com/santhoshpavadala", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/santhosh-pavadala-5245ba206", label: "LinkedIn" },
              { icon: Mail, href: "mailto:santhoshpavadala123@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass w-11 h-11 rounded-xl flex items-center justify-center hover:scale-110 hover:text-primary transition-all"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
