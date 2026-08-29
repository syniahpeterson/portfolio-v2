import Container from "../ui/Container";

function CaseStudySection({ eyebrow, title, children }) {
  return (
    <section>
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
              {eyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-text)] sm:text-3xl">
              {title}
            </h2>
          </div>

          <div className="max-w-3xl text-base leading-8 text-[var(--color-text-secondary)]">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CaseStudySection;
