function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-secondary)] ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
