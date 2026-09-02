import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation";
import Button from "../ui/Button";
import Container from "../ui/Container";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuButtonRef = useRef(null);
  const wasMenuOpenRef = useRef(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (wasMenuOpenRef.current && !isMenuOpen) {
      menuButtonRef.current?.focus();
    }

    wasMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 border-b border-[var(--color-border)] transition-colors duration-200 ${
          isScrolled
            ? "bg-[rgba(10,10,11,0.88)] backdrop-blur-md"
            : "bg-[var(--color-background)]"
        }`}
      >
        <Container className="flex h-20 items-center justify-between">
          <NavLink
            to="/"
            className="text-base font-semibold tracking-tight text-[var(--color-text)] transition-colors hover:text-[var(--color-purple-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)]"
          >
            Syniah Peterson
          </NavLink>

          <div className="hidden items-center gap-8 lg:flex">
            <nav aria-label="Primary navigation">
              <ul className="flex items-center gap-8">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `relative py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-purple)] ${
                          isActive
                            ? "text-[var(--color-text)]"
                            : "text-[var(--color-text-secondary)] hover:text-[var(--color-purple-hover)]"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {item.label}

                          {isActive && (
                            <span
                              aria-hidden="true"
                              className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-[var(--color-purple)]"
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <Button to="/contact">Let's Talk</Button>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={`flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text)] transition-colors duration-200 hover:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-purple)] lg:hidden ${
              isMenuOpen ? "bg-[var(--color-surface)]" : ""
            }`}
          >
            <span className="sr-only">Open navigation menu</span>

            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>
        </Container>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}

export default Navbar;
