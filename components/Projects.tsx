"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CodeXml, ExternalLink, Minus, Plus } from "lucide-react";
import { projects } from "@/data/portfolio";

export default function Projects() {
  // The strongest project is open when the page loads.
  const [open, setOpen] = useState<string | null>(projects[0]?.slug ?? null);
  const reduce = useReducedMotion();

  return (
    <section id="work" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Selected work
      </h2>
      <p className="mt-3 max-w-[60ch] text-muted">
        Four projects, newest first. Open one to see what it actually took.
      </p>

      <ul className="mt-12 border-t border-line">
        {projects.map((project) => {
          const isOpen = open === project.slug;
          return (
            <li key={project.slug} className="border-b border-line">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : project.slug)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${project.slug}`}
                  className="group grid w-full grid-cols-[1fr_auto] items-start gap-6 py-7 text-left"
                >
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="font-display text-xl font-semibold tracking-tight transition-colors group-hover:text-accent sm:text-2xl">
                        {project.title}
                      </span>
                      <span className="text-sm text-muted">
                        {project.kind}, {project.year}
                      </span>
                    </span>
                    <span className="mt-2 block max-w-[64ch] text-sm leading-relaxed text-muted">
                      {project.summary}
                    </span>
                  </span>

                  <span
                    aria-hidden
                    className="mt-1 shrink-0 rounded-full border border-line p-2 text-muted transition-colors group-hover:border-accent group-hover:text-accent"
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${project.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: reduce ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-10 pb-10 md:grid-cols-[1fr_1.4fr]">
                      <div>
                        <p className="max-w-[46ch] text-sm leading-relaxed">
                          {project.problem}
                        </p>

                        <ul className="mt-6 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6 flex flex-wrap gap-4 text-sm">
                          {project.github && (
                            <a
                              href={project.github}
                              className="inline-flex items-center gap-2 text-accent hover:underline"
                            >
                              <CodeXml size={16} />
                              Source
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              className="inline-flex items-center gap-2 text-accent hover:underline"
                            >
                              <ExternalLink size={16} />
                              Live site
                            </a>
                          )}
                        </div>
                      </div>

                      <ul className="space-y-4">
                        {project.highlights.map((point) => (
                          <li
                            key={point}
                            className="max-w-[68ch] border-l-2 border-accent-soft pl-4 text-sm leading-relaxed text-muted"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
