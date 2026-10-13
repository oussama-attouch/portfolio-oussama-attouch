import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="bg-grid relative flex min-h-screen items-center overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto w-full max-w-6xl px-6 pt-24 pb-16">
        <p className="animate-fade-up font-mono text-sm text-primary">
          $ whoami <span className="animate-blink">▌</span>
        </p>
        <h1
          className="animate-fade-up mt-6 font-display text-5xl font-bold tracking-tight sm:text-7xl"
          style={{ animationDelay: "0.1s" }}
        >
          {profile.name}
        </h1>
        <p
          className="animate-fade-up mt-4 font-display text-2xl font-medium text-primary text-glow sm:text-3xl"
          style={{ animationDelay: "0.2s" }}
        >
          {profile.title}
        </p>
        <p
          className="animate-fade-up mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          style={{ animationDelay: "0.3s" }}
        >
          {profile.bio}
        </p>

        <div
          className="animate-fade-up mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projet"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            Me contacter
          </a>
        </div>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-5 text-muted-foreground"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="inline-flex items-center gap-1.5 text-sm">
            <MapPin className="h-4 w-4 text-primary" />
            {profile.location}
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <Github className="h-5 w-5" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="transition-colors hover:text-primary">
            <Mail className="h-5 w-5" />
          </a>
        </div>
      </div>

      <a
        href="#apropos"
        aria-label="Défiler vers le bas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
