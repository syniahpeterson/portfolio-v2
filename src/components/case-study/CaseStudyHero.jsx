import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Badge from "../ui/Badge";

function CaseStudyHero({ project }) {
  return (
    <section>
      <Container className="py-20 sm:py-24 lg:py-28">
        <Link
          to="/work"
          className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to Work
        </Link>

        <div className="mt-12 max-w-4xl">
          <Badge>{project.type}</Badge>

          <h1 className="mt-6 text-5xl font-bold tracking-[-0.035em] text-[var(--color-text)] sm:text-6xl lg:text-7xl">
            {project.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] sm:text-xl">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-[var(--color-text-muted)]">
            <span>{project.role}</span>

            {project.timeline && (
              <>
                <span aria-hidden="true">•</span>
                <span>{project.timeline}</span>
              </>
            )}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              Visit Live Site
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          )}
        </div>

        {project.image && (
          <div className="mt-14 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
            <picture>
              {project.mobileImage && (
                <source
                  media="(max-width: 767px)"
                  srcSet={project.mobileImage}
                />
              )}

              <img
                src={project.image}
                alt={project.imageAlt}
                className="block w-full"
              />
            </picture>
          </div>
        )}
      </Container>
    </section>
  );
}

export default CaseStudyHero;
