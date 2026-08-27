import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          project={project}
          featured={index === 0}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
