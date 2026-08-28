import { ArrowRight, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

import about from "../data/about";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function AboutPreview() {
  return (
    <section
      id="about"
      className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]"
    >
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading
              number="05"
              eyebrow="About"
              title="Frontend development with a focus on people, not just code."
            />

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              {about.introduction}
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              More About Me
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="space-y-4">
            {/* Education */}
            <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
              <div className="flex items-start gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-purple)]/10 text-[var(--color-purple-soft)]"
                >
                  <GraduationCap size={20} />
                </div>

                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
                    Education
                  </p>

                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-text)]">
                    {about.education.institution}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                    {about.education.degree}
                  </p>

                  <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                    {about.education.date}
                  </p>
                </div>
              </div>
            </article>

            {/* Certifications */}
            <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7">
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
                Certifications
              </p>

              <ul className="mt-5 space-y-3">
                {about.certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-purple)]"
                    />

                    {certification}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutPreview;
