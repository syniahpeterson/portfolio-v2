import { useMemo, useState } from "react";

import projects from "../data/projects";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectGrid from "../components/projects/ProjectGrid";

const filters = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "business",
    label: "Client Work",
  },
  {
    id: "application",
    label: "Applications",
  },
  {
    id: "concept",
    label: "Concepts",
  },
];

function Work() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") {
      return projects;
    }

    if (activeFilter === "concept") {
      return projects.filter((project) => project.status === "concept");
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <main>
      {/* Page Header */}
      <section>
        <Container className="py-24 sm:py-28 lg:py-32">
          <SectionHeading
            number="01"
            eyebrow="Work"
            title="Projects built for real people, real problems, and practical experiences."
            description="Explore client websites, web applications, and concepts I've designed and developed using modern frontend technologies."
            as="h1"
          />
        </Container>
      </section>

      {/* Filters */}
      <section className="border-y border-[var(--color-border)]">
        <Container className="py-5">
          <div
            role="group"
            aria-label="Filter projects"
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => setActiveFilter(filter.id)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-purple)] ${
                    isActive
                      ? "border-[var(--color-purple-button)] bg-[var(--color-purple-button)] text-white"
                      : "border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-hover)] hover:text-[var(--color-purple-hover)]"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section>
        <Container className="py-20 sm:py-24 lg:py-28">
          <div
            aria-live="polite"
            className="mb-8 text-sm text-[var(--color-text-muted)]"
          >
            Showing {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
          </div>

          {filteredProjects.length > 0 ? (
            <ProjectGrid projects={filteredProjects} />
          ) : (
            <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-10 text-center">
              <p className="text-[var(--color-text-secondary)]">
                No projects found in this category.
              </p>
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}

export default Work;
