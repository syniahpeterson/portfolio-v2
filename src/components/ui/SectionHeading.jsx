function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  className = "",
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {(number || eyebrow) && (
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
          {number && `${number} / `}
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--color-text)] sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
