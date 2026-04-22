import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Index = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <section className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Your Name
        </h1>
        <p className="text-lg text-muted-foreground">
          Frontend Developer · Angular Specialist · 4.10 years of experience
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="/resume.pdf" download="Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground">
          Resume PDF is ready. Send your real details and I'll regenerate it and build the full portfolio.
        </p>
      </section>
    </main>
  );
};

export default Index;
