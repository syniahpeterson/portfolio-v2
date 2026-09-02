import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import Badge from "../ui/Badge";
import ProjectMeta from "./ProjectMeta";

function ProjectCard({ project, featured = false }) {
  const {
    slug,
    title,
    type,
    status,
    description,
    technologies,
    liveUrl,
    githubUrl,
    image,
    imageAlt,
    mobileImage,
  } = project;

  const statusLabels = {
    "completed-client": "Client Project",
    concept: "Concept Project",
    personal: "Personal Project",
    "in-progress": "In Progress",
  };

  return (
    <article
      className={`group relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface-hover)] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      {/* Project image */}
      <div
        className={`relative overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-background-alt)] ${
          featured ? "aspect-[16/8]" : "aspect-[16/10]"
        }`}
      >
        {image ? (
          <picture>
            {mobileImage && (
              <source media="(max-width: 767px)" srcSet={mobileImage} />
            )}

            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </picture>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
              Project Preview
            </span>
          </div>
        )}

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[var(--color-purple)]/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Badge>{statusLabels[status] ?? status}</Badge>

          <span className="text-xs text-[var(--color-text-muted)]">{type}</span>
        </div>

        <h3
          className={`mt-5 font-semibold tracking-tight text-[var(--color-text)] ${
            featured ? "text-3xl sm:text-4xl" : "text-2xl"
          }`}
        >
          {title}
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--color-text-secondary)] sm:text-base">
          {description}
        </p>

        <div className="mt-6">
          <ProjectMeta technologies={technologies} />
        </div>

        <div className="relative z-10 mt-7 flex flex-wrap items-center gap-5">
          <Link
            to={`/work/${slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
          >
            View Case Study
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              Live Site
            </a>
          )}

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Stretched link so the whole card navigates to the case study */}
      <Link
        to={`/work/${slug}`}
        tabIndex={-1}
        aria-hidden="true"
        className="absolute inset-0 z-0"
      />
    </article>
  );
}

export default ProjectCard;
