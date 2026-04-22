import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

type FormData = z.infer<typeof schema>;

export const Contact = () => {
  const ref = useReveal<HTMLDivElement>();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    await new Promise((r) => setTimeout(r, 600));
    toast({
      title: "Message sent!",
      description: `Thanks ${data.name}, I'll get back to you soon.`,
    });
    reset();
  };

  return (
    <section id="contact" className="py-24">
      <div ref={ref} className="container reveal">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">work together</span>
          </h2>
          <p className="text-muted-foreground">
            Have a project in mind or just want to chat? Drop me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          <div className="md:col-span-2 space-y-3">
            {[
              { icon: Mail, label: "Email", value: "your.email@example.com", href: "mailto:your.email@example.com" },
              { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/yourprofile", href: "https://linkedin.com/in/yourprofile" },
              { icon: Github, label: "GitHub", value: "github.com/yourhandle", href: "https://github.com/yourhandle" },
            ].map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium truncate">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="md:col-span-3 glass-card p-6 md:p-8 space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" {...register("name")} className="mt-1.5 bg-background/50" placeholder="Jane Doe" />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} className="mt-1.5 bg-background/50" placeholder="jane@example.com" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" rows={5} {...register("message")} className="mt-1.5 bg-background/50" placeholder="Tell me about your project..." />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full gradient-bg text-primary-foreground hover:opacity-90">
              {isSubmitting ? "Sending..." : (<>Send Message <Send className="ml-2 h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
