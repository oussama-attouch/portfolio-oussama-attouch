export const profile = {
  name: "Oussama Attouch",
  title: "Ingénieur Software & Data",
  subtitle: "Ingénieur d'État (MIAGE)",
  location: "Casablanca, Maroc",
  email: "oussamaattouch20@gmail.com",
  phone: "+212 725 547 140",
  linkedin: "https://www.linkedin.com/in/oussama-attouch",
  github: "https://github.com/oussamaattouch",
  bio: "Diplômé de l'EMSI (MIAGE), ingénieur Software Full-Stack spécialisé en Java / Spring Boot et front-end moderne (React, Angular). J'accompagne la conception de systèmes distribués et résilients — architectures microservices, flux événementiels Kafka — et l'intégration d'environnements Cloud / DevOps (Docker, CI/CD). Orienté solutions et performance, je m'appuie également sur une expertise data (Power BI, SQL) pour livrer des applications alignées sur les enjeux métier.",
};

export const stats = [
  { value: "40 000+", label: "Opérations bancaires gérées" },
  { value: "2 700+", label: "Virements sécurisés via Kafka" },
  { value: "96%", label: "Taux de succès des transferts" },
  { value: "54x", label: "Accélération du rendu analytique" },
];

export const skillGroups = [
  {
    title: "Front-End",
    skills: ["JavaScript", "TypeScript", "React.js", "Angular", "HTML5 / CSS3", "Tailwind CSS"],
  },
  {
    title: "Back-End & Architecture",
    skills: ["Java", "Spring Boot", "Microservices", "APIs REST", "Kafka", "POO & SOLID"],
  },
  {
    title: "Données & Sécurité",
    skills: ["PostgreSQL", "MySQL", "Auditabilité", "Keycloak", "JWT / OAuth2", "RBAC"],
  },
  {
    title: "DevOps & Qualité",
    skills: ["Docker", "Jenkins", "Git / GitLab", "Azure", "TDD / JUnit", "CI/CD", "Agile / Scrum"],
  },
  {
    title: "Data & Analytics",
    skills: ["Power BI (DAX)", "Power Query", "SQL", "Modélisation dimensionnelle", "Talend"],
  },
];

export const experiences = [
  {
    company: "Omnidata",
    role: "Ingénieur Data & Logiciel — Mission de migration",
    period: "02/2026 — 07/2026",
    mode: "Casablanca · Full-Remote",
    points: [
      "Pilotage de la migration intégrale de Qlik Sense vers Power BI en remodelisant la structure de données et la logique métier.",
      "Optimisation des flux de données et requêtes SQL/DAX sous Power Query pour accélérer le rafraîchissement des rapports.",
    ],
    stack: ["Power BI", "DAX", "Power Query", "Qlik Sense", "SQL", "Talend", "Python"],
  },
  {
    company: "SQORUS",
    role: "Stage PFE — Développeur Full-Stack",
    period: "03/2025 — 08/2025",
    mode: "Casablanca · Hybride",
    points: [
      "Cadrage des spécifications fonctionnelles et architecture d'une solution SaaS modulaire et évolutive.",
      "Implémentation du modèle de sécurité applicative : contrôle d'accès basé sur les rôles (RBAC) et authentification JWT.",
      "Animation des cérémonies Agile (Scrum) et documentation technique auprès des parties prenantes.",
    ],
    stack: ["JavaScript", "Python (Django)", "React.js", "PostgreSQL", "Redis", "JWT", "RBAC", "Jira"],
  },
  {
    company: "WHD Agency",
    role: "Stage PFA — Développeur Full-Stack MERN",
    period: "07/2024 — 09/2024",
    mode: "Casablanca · Hybride",
    points: [
      "Conception et développement des modules métier de gestion centralisée des offres et opérations de transport.",
      "Intégration d'un service de notifications asynchrones multi-canaux (Email, WhatsApp).",
      "Conteneurisation des microservices via Docker et structuration du flux Git.",
    ],
    stack: ["ReactJS", "NodeJS", "MongoDB", "Docker", "Git"],
  },
  {
    company: "EMSI",
    role: "Stage PFA — Développeur Full-Stack (O-Banking)",
    period: "07/2023 — 09/2023",
    mode: "Casablanca",
    points: [
      "Développement d'une application web de banque en ligne (O-Banking).",
      "Mise en place de tableaux de bord analytiques interactifs offrant une visualisation claire des flux financiers et des données transactionnelles.",
    ],
    stack: ["ReactJS", "JavaScript", "Python (Django)", "PostgreSQL"],
  },
];

export const featuredProject = {
  title: "Plateforme bancaire en ligne",
  subtitle: "Microservices & dashboard BI — Projet d'ingénierie majeur",
  metrics: [
    { value: "40 000+", label: "opérations enregistrées" },
    { value: "2 700+", label: "virements sécurisés" },
    { value: "16", label: "indicateurs interactifs" },
    { value: "54x", label: "rendu accéléré" },
  ],
  points: [
    "Développement Full-Stack d'un système transactionnel bancaire gérant plus de 40 000 opérations enregistrées.",
    "Flux de virement sécurisé et résilient via Kafka et PostgreSQL : +2 700 transferts, taux de succès supérieur à 96%.",
    "Tableaux de bord analytiques avec 16 indicateurs interactifs, accélérant le rendu global de 54x.",
  ],
  stack: ["Java", "Spring Boot", "React.js", "PostgreSQL", "Kafka", "Keycloak", "Docker", "JUnit / TDD"],
};

export const education = {
  degree: "Diplôme d'Ingénieur en Informatique et Réseaux — option MIAGE",
  school: "École Marocaine des Sciences de l'Ingénieur (EMSI)",
  period: "2020 — 2025",
  location: "Casablanca",
};

export const languages = [
  { name: "Arabe", level: "Courant" },
  { name: "Français", level: "Courant" },
  { name: "Anglais", level: "Technique & professionnel" },
];

export const interests = ["Échecs — Elo 2300, tournois FIDE", "Football"];

export const qualities = ["Communication", "Esprit d'équipe", "Apprentissage continu"];
