"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion, type Variants } from "framer-motion";
import { CodeXml, ExternalLink, ChevronDown } from "lucide-react";
import { projects } from "@/data/portfolio";

// Map project kinds to accent gradient colours
const kindColors: Record<string, string> = {
  "Distributed system":  "from-indigo-500 to-cyan-400",
  "Mobile + web platform": "from-violet-500 to-pink-400",
  "Full-stack web app":  "from-emerald-500 to-teal-400",
};

const stackBadgeClass = (tech: string): string => {
  const t = tech.toLowerCase();
  if (["go", "node.js", "express", "spring boot", "java"].some(k => t.includes(k))) return "badge badge-violet";
  if (["react", "next.js", "react native", "angular", "electron", "html", "css"].some(k => t.includes(k))) return "badge badge-indigo";
  if (["mongodb", "postgresql", "mysql", "sqlite", "redis"].some(k => t.includes(k))) return "badge badge-emerald";
  if (["docker", "kubernetes", "aws", "vercel", "render", "ci/cd"].some(k => t.includes(k))) return "badge badge-cyan";
  if (["cypress", "jwt", "rabbitmq", "amqp"].some(k => t.includes(k))) return "badge badge-amber";
  return "badge badge-indigo";
};

export default function Projects() {
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: "easeOut" },
    },
  };

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      {/* Section header */}
      <div className="flex items-center gap-3 mb-3">
        <span className="h-px w-8 bg-[var(--accent)]" />
        <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
          Portfolio
        </span>
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        Selected <span className="gradient-text">work</span>
      </h2>
      <p className="mt-3 max-w-[60ch] text-[var(--muted)]">
        Four projects, newest first. Open one to see what it actually took.
      </p>

      {/* Project list */}
      <motion.ul
        variants={mounted ? containerVariants : undefined}
        initial={mounted ? "hidden" : false}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 space-y-4"
      >
        {projects.map((project) => {
          const isOpen = open === project.slug;
          const gradClass = kindColors[project.kind] ?? "from-indigo-500 to-violet-500";

          return (
            <motion.li
              key={project.slug}
              variants={mounted ? cardVariants : undefined}
              className="glass-card overflow-hidden"
            >
              {/* Coloured top edge */}
              <div className={`h-0.5 w-full bg-gradient-to-r ${gradClass}`} />

              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : project.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${project.slug}`}
                  className="group grid w-full grid-cols-[1fr_auto] items-start gap-4 p-6 text-left"
                >
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-xl font-bold tracking-tight transition-colors group-hover:text-[var(--accent)] sm:text-2xl">
                        {project.title}
                      </span>
                      <span className="text-xs font-medium text-[var(--muted)] bg-[var(--accent-soft)] border border-[var(--glass-border)] rounded-full px-3 py-1">
                        {project.kind} · {project.year}
                      </span>
                    </span>
                    <span className="mt-2 block max-w-[64ch] text-sm leading-relaxed text-[var(--muted)]">
                      {project.summary}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className={`mt-1 shrink-0 rounded-full border border-[var(--glass-border)] p-2 text-[var(--muted)] transition-all group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] group-hover:shadow-[0_0_10px_var(--accent-glow)] ${
                      isOpen ? "rotate-180 text-[var(--accent)] border-[var(--accent)]" : ""
                    } transition-transform duration-300`}
                  >
                    <ChevronDown size={16} />
                  </span>
                </button>
              </h3>

              {/* Expanded panel */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${project.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.38, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-6 pb-6 grid gap-8 md:grid-cols-[1fr_1.4fr]"
                      style={{ background: "var(--grad-card)" }}
                    >
                      <div>
                        <p className="max-w-[46ch] text-sm leading-relaxed text-[var(--text)] opacity-80">
                          {project.problem}
                        </p>

                        {/* Tech stack pills */}
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li key={tech} className={stackBadgeClass(tech)}>
                              {tech}
                            </li>
                          ))}
                        </ul>

                        {/* Links */}
                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-80 transition-opacity font-medium"
                            >
                              <CodeXml size={15} />
                              Source
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-[var(--accent-3)] hover:opacity-80 transition-opacity font-medium"
                            >
                              <ExternalLink size={15} />
                              Live site
                            </a>
                          )}
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-3 mt-4 md:mt-0">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted)]"
                          >
                            <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
