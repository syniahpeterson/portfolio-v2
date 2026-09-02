import { useEffect, useEffectEvent, useRef } from "react";
import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation";
import Button from "../ui/Button";

function MobileMenu({ isOpen, onClose }) {
  const closeButtonRef = useRef(null);
  const menuRef = useRef(null);
  const closeMenu = useEffectEvent(onClose);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      className="fixed inset-0 z-50 bg-[var(--color-background)] lg:hidden"
    >
      <div className="flex min-h-full flex-col">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-6 py-5">
          <span className="font-semibold text-[var(--color-text)]">
            Syniah Peterson
          </span>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-sm)] text-2xl text-[var(--color-text)] transition-colors hover:bg-[var(--color-surface)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--color-purple)]"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col px-6 py-10"
        >
          <ul className="space-y-2">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block rounded-[var(--radius-sm)] px-4 py-4 text-2xl font-medium transition-colors ${
                      isActive
                        ? "bg-[var(--color-surface)] text-[var(--color-purple-hover)]"
                        : "text-[var(--color-text-secondary)] hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <Button to="/contact" className="w-full" onClick={onClose}>
              Let's Talk
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileMenu;
