"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { skills } from "@/data/portfolio";
import {
  SiJavascript, SiTypescript, SiGo, SiReact, SiNextdotjs,
  SiAngular, SiElectron, SiTailwindcss, SiHtml5, SiCss,
  SiNodedotjs, SiExpress, SiSpringboot, SiSpring, SiJsonwebtokens,
  SiMongodb, SiPostgresql, SiMysql, SiSqlite, SiRedis,
  SiDocker, SiKubernetes, SiVercel, SiRender,
  SiCypress, SiGit, SiRabbitmq, SiPostman
} from "react-icons/si";
import { FaJava, FaCodeBranch, FaNetworkWired, FaProjectDiagram, FaAws } from "react-icons/fa";
import { TbApi, TbMessageCircle } from "react-icons/tb";
import { DiScrum } from "react-icons/di";
import type { IconType } from "react-icons";

/* ── icon map ─────────────────────────────────────────── */
const skillIcons: Record<string, IconType> = {
  "JavaScript (ES6+)": SiJavascript,
  "TypeScript": SiTypescript,
  "Go": SiGo,
  "Java": FaJava,
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  "Angular": SiAngular,
  "Electron": SiElectron,
  "Tailwind CSS": SiTailwindcss,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Node.js": SiNodedotjs,
  "Express": SiExpress,
  "Spring Boot": SiSpringboot,
  "Spring Data JPA": SiSpring,
  "REST APIs": TbApi,
  "JWT": SiJsonwebtokens,
  "AMQP": TbMessageCircle,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "SQLite": SiSqlite,
  "Redis": SiRedis,
  "Docker": SiDocker,
  "Docker Compose": SiDocker,
  "Kubernetes": SiKubernetes,
  "AWS EC2": FaAws,
  "AWS S3": FaAws,
  "Vercel": SiVercel,
  "Render": SiRender,
  "CI/CD": FaCodeBranch,
  "Cypress": SiCypress,
  "Git": SiGit,
  "RabbitMQ": SiRabbitmq,
  "Postman": SiPostman,
  "Agile / Scrum": DiScrum,
  "Microservices": FaNetworkWired,
  "Event-driven design": FaProjectDiagram,
};

/* ── per-group theming ──────────────────────────────────── */
type GroupTheme = {
  label: string;
  accent: string;
  accentRgb: string;
  gradient: string;
};

const groupThemes: Record<string, GroupTheme> = {
  Languages: {
    label: "Languages",
    accent: "var(--accent)",
    accentRgb: "99,102,241",
    gradient: "linear-gradient(135deg, #6366f1, #818cf8)",
  },
  Frontend: {
    label: "Frontend",
    accent: "var(--accent-2)",
    accentRgb: "139,92,246",
    gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)",
  },
  Backend: {
    label: "Backend",
    accent: "var(--accent-3)",
    accentRgb: "6,182,212",
    gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)",
  },
  Data: {
    label: "Data & Storage",
    accent: "#34d399",
    accentRgb: "16,185,129",
    gradient: "linear-gradient(135deg, #10b981, #34d399)",
  },
  Infrastructure: {
    label: "Infrastructure",
    accent: "#fbbf24",
    accentRgb: "245,158,11",
    gradient: "linear-gradient(135deg, #f59e0b, #fbbf24)",
  },
  Practice: {
    label: "Practice & Tools",
    accent: "#fb7185",
    accentRgb: "244,63,94",
    gradient: "linear-gradient(135deg, #f43f5e, #fb7185)",
  },
};

/* ── animation variants ─────────────────────────────────── */
const sectionVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const groupVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

/* ── component ──────────────────────────────────────────── */
export default function Skills() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="toolkit" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
      {/* Decorative background glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3"
        style={{
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <span className="h-px w-8 bg-[var(--accent-3)]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-3)]">
            Toolkit
          </span>
          <span className="h-px w-8 bg-[var(--accent-3)]" />
        </div>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
          Technologies I <span className="gradient-text">work with</span>
        </h2>
        <p className="mt-4 mx-auto max-w-[54ch] text-[var(--muted)] text-base sm:text-lg leading-relaxed">
          Things I&rsquo;ve shipped something real with &mdash; not things I&rsquo;ve read about.
        </p>
      </div>

      {/* Skills groups */}
      <motion.div
        variants={mounted ? sectionVariants : undefined}
        initial={mounted ? "hidden" : false}
        whileInView="show"
        viewport={{ once: true, amount: 0.05 }}
        className="relative z-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {skills.map((group) => {
          const theme = groupThemes[group.group] ?? groupThemes.Languages;

          return (
            <motion.div
              key={group.group}
              variants={mounted ? groupVariants : undefined}
              className="group relative rounded-2xl overflow-hidden"
              style={{
                background: "var(--glass-bg)",
                backdropFilter: "var(--glass-blur)",
                WebkitBackdropFilter: "var(--glass-blur)",
                border: "1px solid var(--glass-border)",
              }}
            >
              {/* Gradient top bar */}
              <div
                className="h-1 w-full"
                style={{ background: theme.gradient }}
              />

              {/* Hover glow overlay */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, rgba(${theme.accentRgb}, 0.12) 0%, transparent 70%)`,
                }}
              />

              <div className="relative p-6">
                {/* Group heading */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: `rgba(${theme.accentRgb}, 0.12)`,
                      border: `1px solid rgba(${theme.accentRgb}, 0.25)`,
                    }}
                  >
                    <span
                      className="font-display text-sm font-extrabold"
                      style={{ color: theme.accent }}
                    >
                      {group.items.length}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="font-display text-base font-bold"
                      style={{ color: theme.accent }}
                    >
                      {theme.label}
                    </h3>
                    <p className="text-xs text-[var(--muted)]">
                      {group.items.length} {group.items.length === 1 ? "technology" : "technologies"}
                    </p>
                  </div>
                </div>

                {/* Skill tiles */}
                <motion.div
                  variants={mounted ? { show: { transition: { staggerChildren: 0.04 } } } : undefined}
                  className="grid grid-cols-2 gap-2"
                >
                  {group.items.map((item) => {
                    const Icon = skillIcons[item];
                    return (
                      <motion.div
                        key={item}
                        variants={mounted ? itemVariants : undefined}
                        className="skill-tile flex items-center gap-2.5 rounded-xl px-3 py-2.5 cursor-default transition-all duration-300"
                        style={{
                          background: `rgba(${theme.accentRgb}, 0.05)`,
                          border: `1px solid rgba(${theme.accentRgb}, 0.1)`,
                        }}
                        onMouseEnter={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = `rgba(${theme.accentRgb}, 0.15)`;
                          el.style.borderColor = `rgba(${theme.accentRgb}, 0.35)`;
                          el.style.boxShadow = `0 0 20px rgba(${theme.accentRgb}, 0.15)`;
                          el.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = `rgba(${theme.accentRgb}, 0.05)`;
                          el.style.borderColor = `rgba(${theme.accentRgb}, 0.1)`;
                          el.style.boxShadow = "none";
                          el.style.transform = "translateY(0)";
                        }}
                      >
                        {Icon && (
                          <Icon
                            className="w-4 h-4 shrink-0"
                            style={{ color: theme.accent }}
                          />
                        )}
                        <span className="text-xs font-medium text-[var(--text)] leading-tight truncate">
                          {item}
                        </span>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}