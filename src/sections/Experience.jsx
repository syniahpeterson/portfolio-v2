import experience from "../data/experience";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]"
    >
      <Container className="py-24 sm:py-28 lg:py-32">
        <SectionHeading
          number="03"
          eyebrow="Experience"
          title="Building experience through real projects and professional work."
          description="A combination of freelance web development and professional experience has strengthened my ability to solve problems, communicate clearly, and deliver reliable work."
        />

        <div className="mt-14">
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {experience.map((item) => (
              <article
                key={item.id}
                className="grid gap-5 py-8 md:grid-cols-[180px_1fr] md:gap-10"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {item.startDate}
                  </p>

                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                    {item.endDate}
                  </p>
                </div>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text)]">
                        {item.role}
                      </h3>

                      <p className="mt-1 text-sm text-[var(--color-purple-soft)]">
                        {item.company}
                      </p>
                    </div>

                    <span className="text-xs text-[var(--color-text-muted)]">
                      {item.type}
                    </span>
                  </div>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-[var(--color-text-secondary)]">
                    {item.description}
                  </p>

                  {item.technologies.length > 0 && (
                    <ul
                      className="mt-5 flex flex-wrap gap-x-4 gap-y-2"
                      aria-label={`Technologies used at ${item.company}`}
                    >
                      {item.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="font-mono text-xs text-[var(--color-text-muted)]"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Experience;
