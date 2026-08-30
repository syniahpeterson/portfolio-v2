import { ArrowDown } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import site from "../data/site";
import Button from "../components/ui/Button";
import Container from "../components/ui/Container";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="relative flex min-h-[calc(100vh-5rem)] items-center py-20 sm:py-24 lg:py-28">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* Content */}
          <div className="max-w-4xl">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-purple)] sm:text-sm">
              Web Developer & Web Specialist
            </p>

            <h1 className="text-[clamp(3.25rem,8vw,7rem)] font-bold leading-[0.92] tracking-[-0.04em] text-[var(--color-text)]">
              Web Developer
              <span className="block text-[var(--color-purple)]">&</span>
              <span className="block">Web Specialist</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--color-text-secondary)] sm:text-lg sm:leading-8">
              {site.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button to="/work">View My Work</Button>

              <Button variant="secondary" to="/resume">
                View Resume
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-5">
              <a
                href={site.socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
              >
                <FaGithub size={16} aria-hidden="true" />
                GitHub
              </a>

              <span
                aria-hidden="true"
                className="h-1 w-1 rounded-full bg-[var(--color-text-muted)]"
              />

              <a
                href={site.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
              >
                <FaLinkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Visual */}
          <div
            aria-hidden="true"
            className="relative hidden min-h-[420px] lg:block"
          >
            <div className="absolute inset-8 rounded-[2rem] border border-[var(--color-border)]" />

            <div className="absolute right-8 top-16 h-64 w-64 rounded-full bg-[var(--color-purple)]/10 blur-3xl" />

            <div className="absolute bottom-10 left-8 h-48 w-48 rounded-full bg-[var(--color-purple-deep)]/10 blur-3xl" />

            <div className="absolute inset-20 rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)]/40 backdrop-blur-sm">
              <div className="absolute left-6 right-6 top-6 flex items-center gap-2 border-b border-[var(--color-border)] pb-4">
                <span className="h-2 w-2 rounded-full bg-[var(--color-text-muted)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--color-text-muted)]" />
                <span className="h-2 w-2 rounded-full bg-[var(--color-purple)]" />
              </div>

              <div className="absolute inset-x-8 bottom-10 top-24">
                <div className="h-2 w-2/3 rounded-full bg-[var(--color-text-muted)]/20" />
                <div className="mt-4 h-2 w-1/2 rounded-full bg-[var(--color-purple)]/40" />
                <div className="mt-8 h-2 w-3/4 rounded-full bg-[var(--color-text-muted)]/20" />
                <div className="mt-4 h-2 w-2/5 rounded-full bg-[var(--color-text-muted)]/20" />

                <div className="mt-12 grid grid-cols-3 gap-3">
                  <div className="h-20 rounded-lg border border-[var(--color-border)]" />
                  <div className="h-20 rounded-lg border border-[var(--color-border)]" />
                  <div className="h-20 rounded-lg border border-[var(--color-purple)]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#what-i-do"
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.16em] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] lg:inline-flex"
        >
          Scroll
          <ArrowDown size={14} aria-hidden="true" />
        </a>
      </Container>
    </section>
  );
}

export default Hero;
