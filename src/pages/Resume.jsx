import { ArrowDownToLine, ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

import resume from "../data/resume";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function Resume() {
  return (
    <main>
      {/* Header */}
      <section>
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-purple)]">
                Resume
              </p>

              <h1 className="mt-5 text-5xl font-bold tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
                Syniah Peterson
              </h1>

              <p className="mt-4 text-xl font-medium text-[var(--color-text-secondary)] sm:text-2xl">
                {resume.title}
              </p>
            </div>

            <a
              href="/Syniah-Peterson-Resume.pdf"
              download
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-purple)] hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              <ArrowDownToLine size={16} aria-hidden="true" />
              Download Resume
            </a>
          </div>
        </Container>
      </section>

      {/* Summary */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
                01 / Summary
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Professional Summary
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {resume.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Skills */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            number="02"
            eyebrow="Technical Skills"
            title="Tools and practices I use to build for the web."
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            <SkillGroup title="Frontend" items={resume.skills.frontend} />

            <SkillGroup title="Development" items={resume.skills.development} />

            <SkillGroup title="Tools & Services" items={resume.skills.tools} />

            <SkillGroup title="Quality & UX" items={resume.skills.quality} />
          </div>
        </Container>
      </section>

      {/* Experience */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            number="03"
            eyebrow="Experience"
            title="Professional experience."
          />

          <div className="mt-14 space-y-12">
            {resume.experience.map((experience) => (
              <article
                key={`${experience.company}-${experience.dates}`}
                className="border-l border-[var(--color-border)] pl-6 sm:pl-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--color-purple-soft)]">
                      {experience.company}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--color-text-muted)]">
                    {experience.dates}
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {experience.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[var(--color-text-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-purple)]"
                      />

                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <SectionHeading
            number="04"
            eyebrow="Selected Projects"
            title="Selected frontend and web projects."
            description="A selection of client websites and applications demonstrating frontend development, responsive design, APIs, content management, and production deployment."
          />

          <div className="mt-14 space-y-8">
            {resume.projects.map((project) => (
              <article
                key={project.name}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8"
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--color-text)]">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--color-purple-soft)]">
                      {project.type}
                    </p>
                  </div>

                  <p className="text-xs text-[var(--color-text-muted)]">
                    {project.technologies}
                  </p>
                </div>

                <ul className="mt-6 space-y-4">
                  {project.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-7 text-[var(--color-text-secondary)]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-purple)]"
                      />

                      {bullet}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Education + Certifications */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-purple)]/10 text-[var(--color-purple-soft)]"
              >
                <Check size={19} />
              </div>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                05 / Education
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                {resume.education.degree}
              </h2>

              <p className="mt-3 text-sm text-[var(--color-text-secondary)]">
                {resume.education.institution}
              </p>

              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                {resume.education.date}
              </p>

              <p className="mt-5 text-sm text-[var(--color-text-secondary)]">
                {resume.education.details}
              </p>
            </article>

            <article className="border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                06 / Certifications
              </p>

              <ul className="mt-6 space-y-4">
                {resume.certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                  >
                    <Check
                      size={17}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[var(--color-purple)]"
                    />

                    {certification}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
                Let's Connect
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Interested in working together?
              </h2>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-purple-button)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--color-purple-button-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              Get in Touch
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

function SkillGroup({ title, items }) {
  return (
    <article className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
      <h3 className="text-lg font-semibold text-[var(--color-text)]">
        {title}
      </h3>

      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)]"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-purple)]"
            />

            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default Resume;
