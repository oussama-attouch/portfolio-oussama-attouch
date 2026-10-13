import { Activity, Landmark, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { featuredProject } from "./data";
import { Section } from "./Section";

// Icons stay in the component; the values and labels live in data.ts.
const icons: LucideIcon[] = [Landmark, ShieldCheck, Activity, Zap];

export function FeaturedProject() {
  return (
    <Section id="projet" kicker="projet majeur" title={featuredProject.title}>
      <div className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow">
        <div className="border-b border-border bg-secondary/50 px-6 py-3 font-mono text-xs text-muted-foreground">
          <span className="text-primary">~/projets/</span>plateforme-bancaire — {featuredProject.subtitle}
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProject.metrics.map((metric, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-background/60 p-4"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <p className="mt-3 font-display text-2xl font-bold">{metric.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                </div>
              );
            })}
          </div>
          <ul className="mt-6 space-y-2.5">
            {featuredProject.points.map((point) => (
              <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2">
            {featuredProject.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
