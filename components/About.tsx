import { about, languages } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 py-20 sm:py-28 md:grid-cols-[1fr_2fr]">
        <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          About
        </h2>

        <div>
          <div className="space-y-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="max-w-[68ch] leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-3 border-t border-line pt-6 text-sm">
            {languages.map((language) => (
              <div key={language.name} className="flex gap-2">
                <dt className="font-medium">{language.name}</dt>
                <dd className="text-muted">{language.level}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}