import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/portfolio/About";
import { Contact, Footer } from "@/components/portfolio/Contact";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { FeaturedProject } from "@/components/portfolio/FeaturedProject";
import { Hero } from "@/components/portfolio/Hero";
import { Nav } from "@/components/portfolio/Nav";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oussama Attouch — Ingénieur Software & Data" },
      {
        name: "description",
        content:
          "Portfolio d'Oussama Attouch, ingénieur d'État MIAGE à Casablanca : génie logiciel (Java, Spring Boot, React), ingénierie des données (Power BI, SQL) et DevOps (Docker, CI/CD).",
      },
      { property: "og:title", content: "Oussama Attouch — Ingénieur Software & Data" },
      {
        property: "og:description",
        content:
          "Génie logiciel, ingénierie des données et DevOps — découvrez le parcours, les compétences et les projets d'Oussama Attouch.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <FeaturedProject />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
