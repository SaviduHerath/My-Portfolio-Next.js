"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { nav, profile } from "@/data/portfolio";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-[var(--glass-border)] shadow-[0_4px_32px_rgba(99,102,241,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#top" className="font-display text-lg font-bold tracking-tight group flex items-center">
          <span className="shimmer-text">{profile.name.split(" ")[0]}</span>
          <span className="text-[var(--accent-3)] transition-opacity group-hover:opacity-80">.dev</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden sm:flex items-center gap-1">
          <ul className="flex gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative px-4 py-2 text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] rounded-lg hover:bg-[var(--accent-soft)] group"
                >
                  {item.label}
                  <span className="absolute inset-x-2 bottom-0.5 h-px bg-[var(--grad-primary)] opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 btn-outline text-xs px-4 py-2"
          >
            CV
          </a>

          {mounted && (
            <button
              type="button"
              aria-label="Switch colour theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="ml-1 rounded-lg p-2 text-[var(--muted)] transition-all hover:text-[var(--accent)] hover:bg-[var(--accent-soft)] flex items-center justify-center"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </nav>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          {mounted && (
            <button
              type="button"
              aria-label="Switch colour theme"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="rounded-lg p-2 text-[var(--muted)] hover:text-[var(--accent)] flex items-center justify-center"
            >
              {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-[var(--muted)] hover:text-[var(--accent)] flex items-center justify-center"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden sm:hidden glass border-t border-[var(--glass-border)]"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2.5 text-sm font-medium text-[var(--muted)] rounded-lg hover:text-[var(--text)] hover:bg-[var(--accent-soft)] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-[var(--line)]">
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2.5 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity"
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
