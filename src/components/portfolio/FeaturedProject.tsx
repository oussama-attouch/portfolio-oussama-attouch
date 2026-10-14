import { Activity, Github, Landmark, ShieldCheck, Zap, type LucideIcon } from "lucide-react";
import { projects } from "./data";
import { Section } from "./Section";

// Icons stay in the component; the values and labels live in data.ts.
const icons: LucideIcon[] = [Landmark, ShieldCheck, Activity, Zap];

export function FeaturedProject() {
  return (
    <Section id="projet" kicker="projet majeur" title="Projets">
      <div className="space-y-8">
        {projects.map((project) => {
          const { metrics } = project;
          return (
            <div
              key={project.title}
              className="overflow-hidden rounded-2xl border border-primary/25 bg-card shadow-glow"
            >
              <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-border bg-secondary/50 px-6 py-3 font-mono text-xs text-muted-foreground">
                <span>
                  <span className="text-primary">~/projets/</span>
                  {project.terminalPath.replace("~/projets/", "")} — {project.subtitle}
                </span>
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Code source de ${project.title} sur GitHub`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2 py-1 text-primary transition-colors hover:bg-primary/20"
                  >
                    <Github className="h-3.5 w-3.5" />
                    code source
                  </a>
                )}
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-xl font-semibold">{project.title}</h3>
                {metrics && metrics.length > 0 && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {metrics.map((metric, i) => {
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
                )}
                <ul className="mt-6 space-y-2.5">
                  {project.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
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
          );
        })}
      </div>
    </Section>
  );
}
