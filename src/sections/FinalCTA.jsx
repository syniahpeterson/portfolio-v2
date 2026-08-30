import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";

import site from "../data/site";
import Container from "../components/ui/Container";

function FinalCTA() {
  return (
    <section id="contact" className="border-t border-[var(--color-border)]">
      <Container className="py-24 sm:py-28 lg:py-32">
        <div className="relative overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
          {/* Decorative elements */}
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[var(--color-purple)]/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-[var(--color-purple-deep)]/10 blur-3xl"
          />

          <div className="relative max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-purple)]">
              06 / Let's Work Together
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight text-[var(--color-text)] sm:text-5xl md:text-6xl">
              Have a project in mind?
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-text-secondary)] sm:text-lg">
              Whether you're looking to build something new, modernize an
              existing website, or improve a current web experience, I'd love to
              hear what you're working on.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] bg-[var(--color-purple-button)] px-5 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-[var(--color-purple-button-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
              >
                Start a Conversation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>

              {site.email && (
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center justify-center gap-2 rounded-[var(--radius-sm)] border border-[var(--color-border)] px-5 py-3 text-sm font-medium text-[var(--color-text-secondary)] transition-colors duration-200 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
                >
                  <Mail size={16} aria-hidden="true" />
                  Email Me
                </a>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
