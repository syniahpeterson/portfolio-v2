import services from "../data/services";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

function WhatIDo() {
  return (
    <section
      id="what-i-do"
      className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]"
    >
      <Container className="py-24 sm:py-28 lg:py-32">
        <SectionHeading
          number="01"
          eyebrow="What I Do"
          title="Build, modernize, and improve web experiences."
          description="I combine frontend development with practical attention to usability, accessibility, responsiveness, and maintainability."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)]"
            >
              <span className="font-mono text-xs text-[var(--color-purple)]">
                {service.number}
              </span>

              <h3 className="mt-12 text-2xl font-semibold tracking-tight text-[var(--color-text)]">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-[var(--color-text-secondary)]">
                {service.description}
              </p>

              <div
                aria-hidden="true"
                className="mt-8 h-px w-10 bg-[var(--color-purple)] transition-all duration-200 group-hover:w-16"
              />
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhatIDo;
