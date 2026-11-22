"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Campus Life", href: "/campus" },
  { label: "Gallery", href: "/gallery" },
  { label: "Notices", href: "/notices" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link className="nav-brand" href="/" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">CA</span>
          <span className="brand-copy">
            <strong>CENTRAL ACADEMY</strong>
            <small>Sarai Inayat, Prayagraj</small>
          </span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-content${menuOpen ? " is-open" : ""}`}>
          <div className="nav-links">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            className="nav-cta"
            href="/admissions"
            onClick={() => setMenuOpen(false)}
          >
            Admissions <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
