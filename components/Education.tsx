import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-line bg-surface"
    >
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          Education
        </h2>

        <ol className="space-y-8">
          {education.map((entry) => (
            <li
              key={entry.qualification}
              className="border-l-2 border-accent-soft pl-5"
            >
              <p className="text-sm text-muted">{entry.period}</p>
              <h3 className="font-display mt-1 text-lg font-semibold">
                {entry.qualification}
              </h3>
              {entry.institution && (
                <p className="text-sm text-muted">{entry.institution}</p>
              )}
              {entry.detail && (
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted">
                  {entry.detail}
                </p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}