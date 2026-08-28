import skills from "../data/skills";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border)]">
      <Container className="py-24 sm:py-28 lg:py-32">
        <SectionHeading
          number="04"
          eyebrow="Skills"
          title="Tools and technologies I use to build for the web."
          description="A practical frontend-focused toolkit spanning development, responsive design, accessibility, deployment, and supporting services."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <article
              key={group.category}
              className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7"
            >
              <h3 className="text-lg font-semibold tracking-tight text-[var(--color-text)]">
                {group.category}
              </h3>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background-alt)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="max-w-2xl text-sm leading-7 text-[var(--color-text-muted)]">
            My toolkit continues to grow as I work toward building
            production-ready, accessible, and maintainable web applications.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Skills;
