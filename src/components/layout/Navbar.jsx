import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation";

function Navbar() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="mx-auto flex max-w-[var(--container-width)] items-center justify-between px-6 py-5">
        <NavLink to="/" className="font-semibold text-[var(--color-text)]">
          Syniah Peterson
        </NavLink>

        <nav aria-label="Primary navigation">
          <ul className="flex items-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className="text-[var(--color-text-secondary)]"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
