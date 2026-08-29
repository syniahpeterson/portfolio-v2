import Container from "../ui/Container";

function CaseStudyOverview({ project }) {
  return (
    <section className="border-y border-[var(--color-border)] bg-[var(--color-background-alt)]">
      <Container className="py-12 sm:py-14">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
              Role
            </p>

            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {project.role}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
              Type
            </p>

            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {project.type}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
              Timeline
            </p>

            <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
              {project.timeline || "—"}
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-purple)]">
              Technologies
            </p>

            <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
              {project.technologies.map((technology) => (
                <li
                  key={technology}
                  className="text-sm text-[var(--color-text-secondary)]"
                >
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CaseStudyOverview;
