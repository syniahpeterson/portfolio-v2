import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../../data/projects";
import Container from "../ui/Container";

function NextProject({ project }) {
  const previousProject = project.previousProject
    ? projects.find((item) => item.id === project.previousProject)
    : null;

  const nextProject = project.nextProject
    ? projects.find((item) => item.id === project.nextProject)
    : null;

  if (!previousProject && !nextProject) {
    return null;
  }

  return (
    <section className="border-t border-[var(--color-border)]">
      <Container className="py-20 sm:py-24">
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
            More Work
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-text)]">
            Keep exploring
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {previousProject ? (
            <Link
              to={`/work/${previousProject.slug}`}
              className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] sm:p-7"
            >
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                <ArrowLeft
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-x-1"
                />
                Previous Project
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                {previousProject.title}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {previousProject.type}
              </p>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              to={`/work/${nextProject.slug}`}
              className="group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] sm:p-7 sm:text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
                Next Project
                <ArrowRight
                  size={14}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-tight text-[var(--color-text)]">
                {nextProject.title}
              </h3>

              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {nextProject.type}
              </p>
            </Link>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default NextProject;
