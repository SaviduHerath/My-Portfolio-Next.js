"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { about, languages } from "@/data/portfolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <section id="about" className="relative border-t border-[var(--line)]">
      {/* Subtle bg tint */}
      <div className="absolute inset-0 bg-[var(--bg-secondary)] opacity-60" />

      <motion.div
        variants={mounted ? stagger : undefined}
        initial={mounted ? "hidden" : false}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1fr_2fr]"
      >
        {/* Heading column */}
        <motion.div variants={mounted ? fadeUp : undefined}>
          <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-6 bg-[var(--accent-2)]" />
            <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent-2)]">
              About me
            </span>
          </div>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            The <span className="gradient-text">story</span> so far
          </h2>

          {/* Decorative element */}
          <div className="mt-8 w-16 h-16 rounded-2xl glass-card flex items-center justify-center text-3xl select-none">
            👨‍💻
          </div>
        </motion.div>

        {/* Content column */}
        <div>
          <motion.div variants={mounted ? stagger : undefined} className="space-y-5">
            {about.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph}
                variants={mounted ? fadeUp : undefined}
                className="max-w-[68ch] leading-relaxed text-[var(--text)] opacity-85"
              >
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          {/* Languages */}
          <motion.div
            variants={mounted ? fadeUp : undefined}
            className="mt-8 glass-card p-5"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-4">
              Languages
            </p>
            <div className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center gap-2 rounded-full bg-[var(--accent-soft)] border border-[var(--glass-border)] px-4 py-2"
                >
                  <span className="text-sm font-semibold text-[var(--text)]">
                    {language.name}
                  </span>
                  <span className="text-xs text-[var(--muted)]">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}