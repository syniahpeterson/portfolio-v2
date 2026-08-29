import { Navigate, useParams } from "react-router-dom";

import projects from "../data/projects";

import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../components/case-study/CaseStudyOverview";
import CaseStudySection from "../components/case-study/CaseStudySection";
import BeforeAfter from "../components/case-study/BeforeAfter";
import NextProject from "../components/case-study/NextProject";
import Container from "../components/ui/Container";
import CaseStudyGallery from "../components/case-study/CaseStudyGallery";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/work" replace />;
  }

  if (project.caseStudy === true) {
    return (
      <main>
        <CaseStudyHero project={project} />

        <CaseStudySection eyebrow="01 / Overview" title="Project details">
          <p>{project.description}</p>
        </CaseStudySection>

        <section>
          <Container className="pb-20 sm:pb-24 lg:pb-28">
            <div className="grid gap-8 lg:grid-cols-2">
              {project.image && (
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="border-b border-[var(--color-border)] bg-[var(--color-background-alt)] p-4 text-center text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Desktop View
                  </div>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="block w-full"
                  />
                </div>
              )}

              {project.mobileImage && (
                <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="border-b border-[var(--color-border)] bg-[var(--color-background-alt)] p-4 text-center text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Mobile View
                  </div>
                  <img
                    src={project.mobileImage}
                    alt={project.mobileImageAlt}
                    className="mx-auto block max-w-[280px] w-full"
                  />
                </div>
              )}
            </div>
          </Container>
        </section>

        <NextProject project={project} />
      </main>
    );
  }

  const caseStudy = project.caseStudy;

  if (!caseStudy || typeof caseStudy !== "object") {
    return <Navigate to="/work" replace />;
  }

  return (
    <main>
      <CaseStudyHero project={project} />

      <CaseStudyOverview project={project} />

      <CaseStudySection eyebrow="01 / Challenge" title="The problem">
        <p>{caseStudy.challenge}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="02 / Approach" title="How I approached it">
        <p>{caseStudy.approach}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="03 / Solution" title="The result">
        <p>{caseStudy.solution}</p>
      </CaseStudySection>

      <CaseStudySection eyebrow="03 / Solution" title="The result">
        <p>{caseStudy.solution}</p>
      </CaseStudySection>

      <CaseStudyGallery gallery={caseStudy.gallery} />

      <BeforeAfter project={project} />

      <CaseStudySection
        eyebrow="04 / Responsibilities"
        title="What I worked on"
      >
        <ul className="space-y-3">
          {caseStudy.responsibilities.map((responsibility) => (
            <li key={responsibility} className="flex gap-3">
              <span
                aria-hidden="true"
                className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-purple)]"
              />

              {responsibility}
            </li>
          ))}
        </ul>
      </CaseStudySection>

      <CaseStudySection eyebrow="05 / Outcome" title="What changed">
        <p>{caseStudy.outcome}</p>
      </CaseStudySection>

      <NextProject project={project} />
    </main>
  );
}

export default CaseStudy;
