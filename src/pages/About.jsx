import { ArrowRight, Check, GraduationCap } from "lucide-react";

import about from "../data/about";

import Button from "../components/ui/Button";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function About() {
  return (
    <main>
      {/* Hero */}
      <section>
        <Container className="py-24 sm:py-28 lg:py-32">
          <div className="max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-purple)]">
              About
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Frontend Developer &amp; Web Specialist
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
              {about.introduction}
            </p>
          </div>
        </Container>
      </section>

      {/* My Story */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
                01 / My Story
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Learning by building.
              </h2>
            </div>

            <div className="max-w-3xl space-y-6">
              <p className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                {about.story}
              </p>

              <p className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                {about.storyContinued}
              </p>

              <p className="text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
                Today, my focus is continuing to grow as a frontend developer
                while bringing that broader web perspective to every project I
                work on.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* What I Do */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <SectionHeading
            number="02"
            eyebrow="What I Do"
            title="Frontend development backed by a broader web perspective."
            description="I approach web projects from both the development and user-experience sides, with a focus on creating websites and applications that are clear, responsive, accessible, and purposeful."
          />

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {about.services.map((service, index) => (
              <article
                key={service.title}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7"
              >
                <span className="font-mono text-xs text-[var(--color-purple)]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <SectionHeading
            number="03"
            eyebrow="Approach"
            title="How I think about building."
            description="Good frontend development is more than making an interface look right. It is about creating experiences that are clear, usable, accessible, and maintainable."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {about.approach.map((item, index) => (
              <article
                key={item.title}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-7"
              >
                <span className="font-mono text-xs text-[var(--color-purple)]">
                  0{index + 1}
                </span>

                <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Education + Certifications */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="grid gap-5 lg:grid-cols-2">
            {/* Education */}
            <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <div
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-sm)] bg-[var(--color-purple)]/10 text-[var(--color-purple-soft)]"
              >
                <GraduationCap size={20} />
              </div>

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                04 / Education
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                {about.education.institution}
              </h2>

              <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                {about.education.degree}
              </p>

              <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                {about.education.date}
              </p>
            </article>

            {/* Certifications */}
            <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 sm:p-8">
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-[var(--color-purple)]">
                05 / Certifications
              </p>

              <ul className="mt-6 space-y-4">
                {about.certifications.map((certification) => (
                  <li
                    key={certification}
                    className="flex items-start gap-3 text-sm leading-6 text-[var(--color-text-secondary)]"
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

      {/* Current Focus */}
      <section className="border-t border-[var(--color-border)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <SectionHeading
            number="06"
            eyebrow="Current Focus"
            title="Growing as a frontend developer."
            description="I'm focused on strengthening the skills that help me build production-ready applications and contribute effectively to a development team while continuing to develop a broader understanding of the web."
          />

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.focus.map((item) => (
              <li
                key={item}
                className="border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 text-sm text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
                Let's Connect
              </p>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
                Have a project or opportunity in mind?
              </h2>

              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-text-secondary)]">
                I'm open to opportunities where I can contribute, continue
                growing, and build meaningful web experiences.
              </p>
            </div>

            <Button to="/contact" className="shrink-0">
              Get in Touch
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default About;
