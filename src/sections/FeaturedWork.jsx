import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import projects from "../data/projects";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectGrid from "../components/projects/ProjectGrid";

function FeaturedWork() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section
      id="featured-work"
      className="border-t border-[var(--color-border)]"
    >
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            number="02"
            eyebrow="Selected Work"
            title="A selection of websites and applications I've built."
            description="Real projects and practical frontend work demonstrating development, modernization, responsive design, and usability."
          />

          <Link
            to="/work"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
          >
            View All Work
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14">
          <ProjectGrid projects={featuredProjects} featuredFirst />
        </div>
      </Container>
    </section>
  );
}

export default FeaturedWork;
