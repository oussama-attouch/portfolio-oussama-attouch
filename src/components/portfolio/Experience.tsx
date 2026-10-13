import { Briefcase } from "lucide-react";
import { experiences } from "./data";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experiences" kicker="expériences" title="Parcours professionnel">
      <ol className="relative space-y-10 border-l border-border pl-8">
        {experiences.map((exp) => (
          <li key={exp.company} className="relative">
            <span className="absolute -left-[41px] flex h-5 w-5 items-center justify-center rounded-full border border-primary bg-background">
              <span className="h-2 w-2 rounded-full bg-primary" />
            </span>
            <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-semibold">{exp.role}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary">
                    <Briefcase className="h-3.5 w-3.5" />
                    {exp.company}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-xs text-primary">{exp.period}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{exp.mode}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
