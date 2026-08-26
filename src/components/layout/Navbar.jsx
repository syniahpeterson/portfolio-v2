function Navbar() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-6 py-5">
        <a href="/" className="font-semibold text-[var(--color-text)]">
          Syniah Peterson
        </a>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            <li>
              <a href="/" className="text-[var(--color-text-secondary)]">
                Work
              </a>
            </li>

            <li>
              <a href="/" className="text-[var(--color-text-secondary)]">
                About
              </a>
            </li>

            <li>
              <a href="/" className="text-[var(--color-text-secondary)]">
                Resume
              </a>
            </li>

            <li>
              <a href="/" className="text-[var(--color-text-secondary)]">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;