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
