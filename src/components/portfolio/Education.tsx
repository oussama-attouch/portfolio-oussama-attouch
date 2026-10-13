import { GraduationCap, Heart, Sparkles } from "lucide-react";
import { education, interests, qualities } from "./data";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="formation" kicker="formation" title="Études & au-delà">
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <GraduationCap className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold">{education.degree}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{education.school}</p>
          <p className="mt-3 font-mono text-xs text-primary">
            {education.period} · {education.location}
          </p>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Sparkles className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold">Qualités</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {qualities.map((q) => (
              <span key={q} className="rounded-md bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                {q}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Heart className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-lg font-semibold">Centres d'intérêt</h3>
          <ul className="mt-3 space-y-1.5">
            {interests.map((interest) => (
              <li key={interest} className="text-sm text-muted-foreground">
                {interest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
