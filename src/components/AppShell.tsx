import * as Separator from "@radix-ui/react-separator";
import { useState } from "react";
import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../lib/utils";

type AppShellProps = {
  children: ReactNode;
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/docs", label: "Docs" },
  { to: "/support", label: "Support" },
];

export function AppShell({ children }: AppShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">

      <header className="site-header">
        <Link to="/" className="brand-mark" aria-label="Agently home">
          <span className="corner-logo__glyph">A</span>
          <span className="brand-mark__wordmark">gently</span>
        </Link>

        <button
          className="hamburger-btn"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={cn("hamburger-icon", menuOpen && "hamburger-icon--open")} />
        </button>

        <nav className={cn("site-nav", menuOpen && "site-nav--open")} aria-label="Primary">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn("site-nav__link", isActive && "site-nav__link--active")
              }
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
                <div className="site-footer__content">
          <p>
            Built by{" "}
            <a
              className="site-footer__link"
              href="https://www.linkedin.com/in/dawita/"
              target="_blank"
              rel="noreferrer"
            >
              Dawit Askabe
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a className="site-footer__chip" href="mailto:daskabe@gmail.com">
            Open for Work
          </a>
          </p>

          
        </div>
      </header>

      <Separator.Root
        className="site-separator"
        decorative
        orientation="horizontal"
      />

      <main>{children}</main>

      <footer className="site-footer">
        <div className="site-footer__content">
          <p>
            Built by{" "}
            <a
              className="site-footer__link"
              href="https://www.linkedin.com/in/dawita/"
              target="_blank"
              rel="noreferrer"
            >
              Dawit Askabe
            </a>
            &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <a className="site-footer__chip" href="mailto:daskabe@gmail.com">
            Open for Work
          </a>
          </p>

          
        </div>
      </footer>
    </div>
  );
}
