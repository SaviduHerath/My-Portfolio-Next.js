import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="toolkit" className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        Toolkit
      </h2>
      <p className="mt-3 max-w-[60ch] text-muted">
        Things I&rsquo;ve shipped something real with, not things I&rsquo;ve read about.
      </p>

      <dl className="mt-12 divide-y divide-line border-y border-line">
        {skills.map((group) => (
          <div
            key={group.group}
            className="grid gap-4 py-6 md:grid-cols-[180px_1fr] md:gap-8"
          >
            <dt className="font-display text-base font-semibold">{group.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}