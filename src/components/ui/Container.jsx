function Container({ children, className = "" }) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container-width)] px-6 sm:px-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
