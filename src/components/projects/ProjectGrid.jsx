import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects, featuredFirst = false }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={featuredFirst && index === 0}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
