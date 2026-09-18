"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14 } },
};

const entryVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function Education() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <section id="education" className="relative border-t border-[var(--line)]">
      {/* Bg tint */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)] opacity-60" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1fr_2fr]">
        {/* Heading */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-[var(--accent-2)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-2)]">
              Background
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Edu<span className="gradient-text">cation</span>
          </h2>

          <div className="mt-8 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-[var(--accent-2)]">
            <GraduationCap size={28} />
          </div>
        </div>

        {/* Timeline */}
        <motion.ol
          variants={mounted ? containerVariants : undefined}
          initial={mounted ? "hidden" : false}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-[5px] top-2 bottom-2 timeline-line" />

          <div className="space-y-8 pl-8">
            {education.map((entry) => (
              <motion.li
                key={entry.qualification}
                variants={mounted ? entryVariants : undefined}
                className="relative"
              >
                {/* Glowing dot */}
                <div className="timeline-dot absolute -left-[27px] top-2" />

                <div className="glass-card p-5">
                  <p className="text-xs font-semibold tracking-wide text-[var(--accent)] mb-1">
                    {entry.period}
                  </p>
                  <h3 className="font-display text-base font-bold text-[var(--text)]">
                    {entry.qualification}
                  </h3>
                  {entry.institution && (
                    <p className="mt-1 text-sm text-[var(--muted)]">
                      {entry.institution}
                    </p>
                  )}
                  {entry.detail && (
                    <p className="mt-2 max-w-[58ch] text-sm leading-relaxed text-[var(--muted)] opacity-90">
                      {entry.detail}
                    </p>
                  )}
                </div>
              </motion.li>
            ))}
          </div>
        </motion.ol>
      </div>
    </section>
  );
}