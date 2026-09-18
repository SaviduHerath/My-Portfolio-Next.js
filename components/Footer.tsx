import { CodeXml, Link, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)]">
      {/* Gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent opacity-60" />

      <div className="mx-auto max-w-5xl px-6 py-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        {/* Brand */}
        <p className="font-display text-sm font-semibold">
          <span className="shimmer-text">{profile.name}</span>
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent)] hover:bg-[var(--accent-soft)]"
          >
            <CodeXml size={18} />
          </a>
          <a
            href={profile.linkedin.startsWith('http') ? profile.linkedin : `https://${profile.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent-2)] hover:bg-[rgba(139,92,246,0.1)]"
          >
            <Link size={18} />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent-3)] hover:bg-[rgba(6,182,212,0.1)]"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Credits */}
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} · Built with Next.js
        </p>
      </div>
    </footer>
  );
}