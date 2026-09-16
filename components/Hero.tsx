"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { ArrowDown, CodeXml, Link, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const mediaQuery = window.matchMedia(reducedMotionQuery);
  mediaQuery.addEventListener("change", onChange);
  return () => mediaQuery.removeEventListener("change", onChange);
}

function getReducedMotionSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

export default function Hero() {
  // Use `false` during SSR and the initial client render. The browser
  // preference is applied immediately after hydration, avoiding mismatched
  // Framer Motion inline styles for visitors who prefer reduced motion.
  const reduce = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  // One orchestrated page-load sequence. Nothing else on the page animates
  // on its own — everything below only moves in response to a click.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.05 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  } as const;

  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="text-sm text-muted">
          {profile.name} — {profile.role}, {profile.location}
        </motion.p>

        <motion.h1
          variants={item}
          className="font-display mt-6 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-6xl"
        >
          {profile.headline}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-[62ch] text-base leading-relaxed text-muted sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            <ArrowDown size={16} />
            See the work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
          >
            <Mail size={16} />
            Get in touch
          </a>

          <div className="ml-auto flex items-center gap-4 text-muted">
            <a href={profile.github} aria-label="GitHub" className="transition-colors hover:text-text">
              <CodeXml size={20} />
            </a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="transition-colors hover:text-text">
              <Link size={20} />
            </a>
          </div>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-16 grid gap-8 border-t border-line pt-8 sm:grid-cols-3"
        >
          {profile.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="font-display text-3xl font-semibold text-accent">
                {fact.value}
              </dt>
              <dd className="mt-1 max-w-[28ch] text-sm text-muted">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </section>
  );
}
