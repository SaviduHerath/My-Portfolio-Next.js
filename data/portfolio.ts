// All site content lives here. Edit this file when your CV changes —
// no component needs to be touched.

export const profile = {
  name: "Savidu Herath",
  role: "Full-stack developer",
  location: "Kaduwela, Sri Lanka",
  email: "saviduherath2003@gmail.com",
  phone: "+94 71 067 5594",
  github: "https://github.com/SaviduHerath",
  linkedin: "www.linkedin.com/in/savidu-herath-105442385",
  cv: "/Savidu_Herath_CVnnn.pdf",
  site: "https://saviduherath.dev",

  // Hero
  headline: "I build systems that keep working when the network doesn't.",
  intro:
    "Third-year Software Engineering undergraduate at SLIIT. I work across the stack — React and React Native on the front, Spring Boot, Node and Go behind it — and I like the problems that show up once a system has to run in more than one place at once.",

  // A few facts worth showing next to the intro
  facts: [
    { value: "5+", label: "production-grade projects shipped" },
    { value: "3+", label: "backend ecosystems: Go, Java, Node" },
    { value: "2023", label: "started at SLIIT" },
  ],
};

export const about = {
  paragraphs: [
    "I started out writing CRUD apps and got curious about what happens when the easy assumptions break — when the connection drops mid-write, when two services disagree about the truth, when a queue backs up. Most of what I've built since then has been an excuse to work on that.",
    "My most recent project runs a local SQLite database next to a central PostgreSQL one and reconciles them over RabbitMQ, so a shop floor can keep taking stock movements through an outage and catch up afterwards. Before that I worked on a mentorship platform with a full Cypress suite, and a culture-preservation app built for people who aren't comfortable reading a screen.",
    "I'm looking for a software engineering internship where I can work on real systems with people who will tell me when I'm wrong.",
  ],
};

export type SkillGroup = { group: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    group: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "Go", "Java"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native", "Angular", "Electron", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Spring Boot", "Spring Data JPA", "REST APIs", "JWT", "AMQP"],
  },
  {
    group: "Data",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    group: "Infrastructure",
    items: ["Docker", "Docker Compose", "Kubernetes", "AWS EC2", "AWS S3", "Vercel", "Render", "CI/CD"],
  },
  {
    group: "Practice",
    items: ["Cypress", "Git", "RabbitMQ", "Postman", "Agile / Scrum", "Microservices", "Event-driven design"],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  stack: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  year: string;
  kind: string;
};

export const projects: Project[] = [
  {
    slug: "offline-sync",
    title: "Offline-First Inventory & Live Sync",
    kind: "Distributed system",
    year: "2026",
    summary:
      "A desktop inventory tool that keeps accepting writes through a network outage and reconciles with the cloud when the link comes back.",
    problem:
      "Retail and warehouse staff lose the ability to record stock movements the moment connectivity drops. This system removes that dependency entirely — the local node is the source of truth until it can safely hand over.",
    stack: ["Go", "React", "Electron", "SQLite", "PostgreSQL", "RabbitMQ", "Redis", "Docker"],
    highlights: [
      "Dual-database architecture: local SQLite for zero-latency writes during outages, central PostgreSQL for consolidated reporting.",
      "Event-driven sync engine in Go over RabbitMQ (AMQP) with transactional queuing, bi-directional push/pull pipelines and automatic retries for eventual consistency.",
      "Redis cache in front of the dashboard analytics, invalidated on sync events so reports never serve stale counts.",
      "Services and data stores containerised with Docker Compose over a custom bridge network.",
      "Electron + React desktop client with live sync telemetry and a clear Live Sync / Sync Pending state.",
    ],
    github: "https://github.com/SaviduHerath/Inventory-management-system-with-Golang.git",
  },
  {
    slug: "legacy-lens",
    title: "Legacy Lens",
    kind: "Mobile + web platform",
    year: "2026",
    summary:
      "A language and culture preservation platform that pairs elders with young creators, built for people who can't rely on reading a screen.",
    problem:
      "Oral traditions disappear when the people who hold them can't use the tools that would record them. The interface is voice-guided and low-literacy friendly so the contributors don't have to be the technical ones.",
    stack: ["React Native", "Angular", "Spring Boot", "PostgreSQL"],
    highlights: [
      "Built the Learning Engine in React Native: quiz-based lessons, vocabulary flashcards with elder-recorded audio, streaks and completion certificates.",
      "Spring Boot service and controller layers over PostgreSQL entities for course tracks, lessons and learner progress, with clean separation between API, business logic and data access.",
      "Reusable React Native component set with a consistent cultural theme and a navigation flow designed for first-time smartphone users.",
      "Delivered across 5 sprints with a 4-person Scrum team using rotating Product Owner and Scrum Master roles.",
    ],
    github: "https://github.com/SaviduHerath/LegacyLens.git",
  },
  {
    slug: "empowerher",
    title: "EmpowerHer",
    kind: "Full-stack web app",
    year: "2025",
    summary:
      "A mentorship and community platform that matches mentors with mentees and handles scheduling, forums and notifications.",
    problem:
      "Informal mentorship falls apart on logistics. The platform makes the matching explicit and the scheduling boring.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Cypress", "Vercel", "Render"],
    highlights: [
      "Node/Express REST API covering user management, forum posts, session handling and notification triggers, backed by MongoDB.",
      "JWT authentication with role-based access control across mentee, mentor and admin roles.",
      "Cypress end-to-end suites over registration, login, mentor matching and session booking to catch regressions in the core flows.",
      "Frontend on Vercel, API on Render, with environment-based configuration for development, staging and production parity.",
    ],
    github: "https://github.com/SaviduHerath/Y3S1-group-project.git",
    demo: "",
  },
  {
    slug: "pharmacy",
    title: "Pharmacy Management System",
    kind: "Full-stack web app",
    year: "2026",
    summary:
      "Inventory, supplier and staff management for a pharmacy, with separate operating surfaces for admins, pharmacists and customers.",
    problem:
      "Expiry tracking and stock levels are the two things a pharmacy cannot get wrong, and they're usually handled in a spreadsheet.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Spring Security", "JWT"],
    highlights: [
      "Modular Spring Boot services for medicine inventory, supplier management and user administration.",
      "Spring Security + JWT enforcing ADMIN / PHARMACIST / CUSTOMER roles across protected endpoints.",
      "REST APIs with server-side pagination, search, filtering, stock-level monitoring and expiry tracking via Spring Data JPA.",
      "React frontend with protected routing and role-specific dashboards, plus an admin module for staff creation and role management with authorisation safeguards.",
    ],
    github: "https://github.com/SaviduHerath/Smart-Pharmacy-Inventory-Management-System.git",
  },
];

export type Education = {
  qualification: string;
  institution: string;
  period: string;
  detail?: string;
};

export const education: Education[] = [
  {
    qualification: "BSc (Hons) Software Engineering",
    institution: "SLIIT, Malabe",
    period: "2023 — present",
    detail:
      "Third year, GPA 3.04. Coursework in data structures and algorithms, software architecture, web technologies, database management and cloud computing.",
  },
  {
    qualification: "Diploma in English — Professional Communication",
    institution: "",
    period: "2023",
    detail: "Written and verbal communication for technical environments.",
  },
  {
    qualification: "GCE Advanced Level — Physical Science",
    institution: "Kekirawa Central College",
    period: "2022",
  },
  {
    qualification: "GCE Ordinary Level",
    institution: "Kekirawa Central College",
    period: "2019",
  },
];

export const languages = [
  { name: "English", level: "Professional proficiency" },
  { name: "Sinhala", level: "Native" },
];

export const nav = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#toolkit", label: "Toolkit" },
  { href: "#contact", label: "Contact" },
];