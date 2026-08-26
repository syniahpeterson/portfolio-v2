import { ArrowUp, GitBranch, Globe } from "lucide-react";
import { Link } from "react-router-dom";

import navigation from "../../data/navigation";
import site from "../../data/site";
import Container from "../ui/Container";

function Footer() {
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background-alt)]">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="text-lg font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              {site.name}
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-text-secondary)]">
              {site.title}
            </p>

            <p className="mt-4 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
              Building modern, responsive web experiences with a focus on
              usability, accessibility, and clean implementation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
              Navigation
            </p>

            <nav aria-label="Footer navigation" className="mt-5">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-[var(--color-purple)]">
              Connect
            </p>

            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-purple)]"
              >
                <GitBranch size={18} aria-hidden="true" />
              </a>

              <a
                href={site.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-purple)]"
              >
                <Globe size={18} aria-hidden="true" />
              </a>
            </div>

            <button
              type="button"
              onClick={handleBackToTop}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              Back to top
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <p>Built with React & Tailwind CSS.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
