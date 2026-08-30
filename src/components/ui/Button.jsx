import { Link } from "react-router-dom";

const variants = {
  primary:
    "bg-[var(--color-purple-button)] text-white hover:bg-[var(--color-purple-button-hover)]",

  secondary:
    "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-border-hover)] hover:bg-[var(--color-surface)]",

  ghost:
    "text-[var(--color-text-secondary)] hover:text-[var(--color-purple-hover)]",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-[var(--radius-sm)] px-5 py-3 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-purple)]";

function Button({
  children,
  variant = "primary",
  href,
  to,
  type = "button",
  className = "",
  ...props
}) {
  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={styles} {...props}>
      {children}
    </button>
  );
}

export default Button;
