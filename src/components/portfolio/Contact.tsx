import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "./data";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="font-mono text-sm text-primary">{"// contact"}</p>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Travaillons ensemble
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Disponible pour des opportunités en génie logiciel et ingénierie des données.
          N'hésitez pas à me contacter.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Phone className="h-4 w-4" />
            {profile.phone}
          </a>
        </div>
        <div className="mt-8 flex items-center justify-center gap-5 text-muted-foreground">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-primary"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-primary"
          >
            <Github className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <p className="text-center font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name} — conçu et développé avec soin.
      </p>
    </footer>
  );
}
