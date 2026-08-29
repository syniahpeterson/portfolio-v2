import { Navigate, useParams } from "react-router-dom";

import projects from "../data/projects";

import CaseStudyHero from "../components/case-study/CaseStudyHero";
import CaseStudyOverview from "../components/case-study/CaseStudyOverview";
import CaseStudySection from "../components/case-study/CaseStudySection";
import BeforeAfter from "../components/case-study/BeforeAfter";

function CaseStudy() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project || !project.caseStudy) {
    return <Navigate to="/work" replace />;
  }

  const caseStudy = project.caseStudy;

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
    </main>
  );
}

export default CaseStudy;
