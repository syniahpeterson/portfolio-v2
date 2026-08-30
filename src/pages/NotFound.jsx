import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Container from "../components/ui/Container";

function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-5rem)] items-center">
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p
            aria-hidden="true"
            className="font-mono text-8xl font-bold tracking-[-0.06em] text-[var(--color-purple)] sm:text-9xl"
          >
            404
          </p>

          <p className="mt-8 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
            Page Not Found
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-[-0.03em] text-[var(--color-text)] sm:text-5xl">
            Looks like this page doesn't exist.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg">
            The link may be incorrect, or the page may have moved somewhere
            else. Let's get you back to somewhere useful.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-purple-button)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--color-purple-button-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Back Home
            </Link>

            <Link
              to="/work"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-purple)] hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
            >
              View My Work
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}

export default NotFound;
