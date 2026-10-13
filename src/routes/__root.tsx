import {
  createRootRoute,
  Outlet,
} from "@tanstack/react-router";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Oussama Attouch — Ingénieur Software & Data" },
      {
        name: "description",
        content:
          "Ingénieur Software & Data basé à Casablanca. Java, Spring Boot, React, PostgreSQL, Power BI.",
      },
      { name: "author", content: "Oussama Attouch" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: () => <Outlet />,
});
