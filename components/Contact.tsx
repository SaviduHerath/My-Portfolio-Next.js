"use client";

import { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import { CodeXml, Link, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { icon: Mail,    label: profile.email,   href: `mailto:${profile.email}`,                                                            color: "var(--accent)"   },
  { icon: Phone,   label: profile.phone,   href: `tel:${profile.phone.replace(/\s/g, "")}`,                                             color: "var(--accent-2)" },
  { icon: CodeXml, label: "GitHub",        href: profile.github,                                                                        color: "var(--accent-3)" },
  { icon: Link,    label: "LinkedIn",      href: profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`, color: "#fb7185"         },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="aurora-blob aurora-1 absolute opacity-20"
          style={{ left: "60%", top: "0%", width: "700px", height: "700px" }}
        />
        <div
          className="aurora-blob aurora-3 absolute opacity-15"
          style={{ left: "-10%", bottom: "0%", width: "500px", height: "500px" }}
        />
      </div>

      <motion.div
        variants={mounted ? stagger : undefined}
        initial={mounted ? "hidden" : false}
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-5xl px-6 py-20 sm:py-32"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
          <span className="h-px w-8 bg-[var(--accent)]" />
          <span className="text-xs font-semibold tracking-widest uppercase text-[var(--accent)]">
            Contact
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          variants={fadeUp}
          className="font-display max-w-[18ch] text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-5xl"
        >
          Looking for a{" "}
          <span className="shimmer-text">software engineering</span>{" "}
          intern?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-[58ch] leading-relaxed text-[var(--muted)]"
        >
          I&rsquo;m available for internships from {new Date().getFullYear()} onward, in Colombo or
          remote. Send me the problem you&rsquo;re working on and I&rsquo;ll tell you honestly
          whether I can help with it.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            id="contact-email-cta"
            className="btn-primary text-sm"
          >
            <Mail size={16} />
            Email me
          </a>
          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            id="contact-cv-download"
            className="btn-outline text-sm"
          >
            Download CV
          </a>
        </motion.div>

        {/* Contact link cards */}
        <motion.ul
          variants={mounted ? stagger : undefined}
          className="mt-14 grid gap-4 sm:grid-cols-2"
        >
          {links.map(({ icon: Icon, label, href, color }) => (
            <motion.li key={label} variants={mounted ? fadeUp : undefined}>
              <a
                href={href}
                target={href.startsWith("mailto") || href.startsWith("tel") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card group flex items-center gap-4 p-4 no-underline"
              >
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-shadow group-hover:shadow-[0_0_16px_currentColor]"
                  style={{
                    background: `${color}18`,
                    border: `1px solid ${color}30`,
                    color,
                  }}
                >
                  <Icon size={18} />
                </span>
                <span className="text-sm font-medium text-[var(--text)] group-hover:text-[var(--accent)] transition-colors truncate">
                  {label}
                </span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
