import { CodeXml, Link, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

const links = [
  { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: CodeXml, label: "GitHub", href: profile.github },
  { icon: Link, label: "LinkedIn", href: profile.linkedin },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-20 sm:py-32">
      <h2 className="font-display max-w-[20ch] text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">
        Looking for a software engineering intern?
      </h2>
      <p className="mt-6 max-w-[58ch] leading-relaxed text-muted">
        I&rsquo;m available for internships from {new Date().getFullYear()} onward, in
        Colombo or remote. Send me the problem you&rsquo;re working on and I&rsquo;ll
        tell you honestly whether I can help with it.
      </p>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90"
        >
          Email me
        </a>
        <a
          href={profile.cv}
          download
          className="rounded-md border border-line px-5 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Download CV
        </a>
      </div>

      <ul className="mt-14 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {links.map(({ icon: Icon, label, href }) => (
          <li key={label}>
            <a
              href={href}
              className="inline-flex items-center gap-3 text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon size={16} />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
