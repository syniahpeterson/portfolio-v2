function ProjectMeta({ technologies = [] }) {
  return (
    <ul
      className="flex flex-wrap gap-x-4 gap-y-2"
      aria-label="Technologies used"
    >
      {technologies.map((technology) => (
        <li
          key={technology}
          className="font-mono text-xs text-[var(--color-text-muted)]"
        >
          {technology}
        </li>
      ))}
    </ul>
  );
}

export default ProjectMeta;
