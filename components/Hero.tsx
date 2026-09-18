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
  const reduce = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    () => false,
  );

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.65, ease: "easeOut" },
    },
  } as const;

  return (
    <section
      id="top"
      className="relative mx-auto max-w-5xl px-6 pb-28 pt-24 sm:pb-36 sm:pt-32 overflow-visible"
    >
      {/* Aurora background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="aurora-blob aurora-1 absolute"
          style={{ left: "10%", top: "15%" }}
        />
        <div
          className="aurora-blob aurora-2 absolute"
          style={{ right: "5%", top: "5%" }}
        />
        <div
          className="aurora-blob aurora-3 absolute"
          style={{ left: "55%", top: "50%" }}
        />
        {/* Dot grid */}
        <div className="dot-grid absolute inset-0" />
      </div>

      {/* Hero radial glow overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--grad-hero)" }}
      />

      <motion.div variants={container} initial="hidden" animate="show">
        {/* Eyebrow */}
        <motion.div variants={item} className="flex items-center gap-3 mb-8">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="text-sm font-semibold tracking-widest uppercase text-[var(--accent)]">
            {profile.role}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="font-display max-w-3xl text-4xl font-bold leading-[1.06] tracking-[-0.03em] sm:text-6xl lg:text-7xl"
        >
          <span className="text-[var(--text)]">I build systems that{" "}</span>
          <span className="shimmer-text">keep working</span>
          <span className="text-[var(--text)]">{" "}when the network doesn&apos;t.</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          variants={item}
          className="mt-8 max-w-[62ch] text-base leading-relaxed text-[var(--muted)] sm:text-lg"
        >
          {profile.intro}
        </motion.p>

        {/* Location pill */}
        <motion.div variants={item} className="mt-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] border border-[var(--glass-border)] px-4 py-1.5 text-xs font-medium text-[var(--muted)]">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            {profile.location} · Available for internships
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#work" className="btn-primary">
            <ArrowDown size={16} />
            See the work
          </a>
          <a href={`mailto:${profile.email}`} className="btn-outline">
            <Mail size={16} />
            Get in touch
          </a>

          <div className="ml-auto flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] hover:shadow-[0_0_14px_var(--accent-glow)]"
            >
              <CodeXml size={20} /> 
            </a>
            <a
              href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent-2)] hover:bg-[rgba(139,92,246,0.1)] hover:shadow-[0_0_14px_rgba(139,92,246,0.4)]"
            >
              <Link size={20} /> 
            </a>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={item}
          className="mt-16 grid gap-4 sm:grid-cols-3"
        >
          {profile.facts.map((fact, i) => (
            <div
              key={fact.label}
              className="glass-card p-6 relative overflow-hidden"
            >
              {/* Subtle gradient tint per card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-[0.06]"
                style={{
                  background: i === 0
                    ? "radial-gradient(circle at top left, #6366f1, transparent 70%)"
                    : i === 1
                    ? "radial-gradient(circle at top left, #8b5cf6, transparent 70%)"
                    : "radial-gradient(circle at top left, #06b6d4, transparent 70%)",
                }}
              />
              <dt className="font-display text-4xl font-bold gradient-text">
                {fact.value}
              </dt>
              <dd className="mt-2 text-sm text-[var(--muted)] leading-snug max-w-[20ch]">
                {fact.label}
              </dd>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
