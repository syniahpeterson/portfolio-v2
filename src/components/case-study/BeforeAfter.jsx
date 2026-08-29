import Container from "../ui/Container";

function BeforeAfter({ project }) {
  const { before, after } = project.caseStudy;

  if (!before || !after) {
    if (!project.image || !project.mobileImage) {
      return null;
    }

    return (
      <section className="border-y border-[var(--color-border)] bg-[var(--color-background-alt)]">
        <Container className="py-20 sm:py-24 lg:py-28">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
              Project preview
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
              Desktop and mobile views.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <ComparisonImage
              label="Desktop"
              image={project.image}
              alt={project.imageAlt}
            />

            <ComparisonImage
              label="Mobile"
              image={project.mobileImage}
              alt={project.mobileImageAlt}
              mobile
            />
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-background-alt)]">
      <Container className="py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
            Before & After
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)] sm:text-4xl">
            A clearer, more modern web experience.
          </h2>

          <p className="mt-5 text-base leading-8 text-[var(--color-text-secondary)]">
            Compare the original experience with the redesigned version across
            desktop and mobile.
          </p>
        </div>

        {/* Desktop comparison */}
        <div className="mt-14">
          <h3 className="text-sm font-medium text-[var(--color-text)]">
            Desktop
          </h3>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <ComparisonImage
              label="Before"
              image={before.desktop}
              alt={before.desktopAlt}
            />

            <ComparisonImage
              label="After"
              image={after.desktop}
              alt={after.desktopAlt}
            />
          </div>
        </div>

        {/* Mobile comparison */}
        <div className="mt-14">
          <h3 className="text-sm font-medium text-[var(--color-text)]">
            Mobile
          </h3>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:max-w-2xl">
            <ComparisonImage
              label="Before"
              image={before.mobile}
              alt={before.mobileAlt}
              mobile
            />

            <ComparisonImage
              label="After"
              image={after.mobile}
              alt={after.mobileAlt}
              mobile
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

function ComparisonImage({ label, image, alt, mobile = false }) {
  return (
    <figure>
      <figcaption className="mb-3 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        {label}
      </figcaption>

      <div
        className={`overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] ${
          mobile ? "mx-auto max-w-[280px]" : ""
        }`}
      >
        <img
          src={image}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
    </figure>
  );
}

export default BeforeAfter;
