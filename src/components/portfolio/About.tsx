import { Languages } from "lucide-react";
import { languages, stats } from "./data";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="apropos" kicker="à propos" title="Chiffres clés">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <p className="font-display text-4xl font-bold text-primary">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 text-primary">
          <Languages className="h-5 w-5" />
          <h3 className="font-display text-lg font-semibold text-foreground">Langues</h3>
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground"
            >
              <span className="font-medium text-foreground">{lang.name}</span>
              <span className="text-muted-foreground"> — {lang.level}</span>
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
