import { Code2, Database, GitBranch, LineChart, Server, Sparkles, type LucideIcon } from "lucide-react";
import { skillGroups } from "./data";
import { Section } from "./Section";

const icons: LucideIcon[] = [Code2, Server, Database, GitBranch, LineChart, Sparkles];

export function Skills() {
  return (
    <Section id="competences" kicker="compétences" title="Stack technique">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-display text-base font-semibold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
