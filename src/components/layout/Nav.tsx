import { useState } from 'react';
import { navLinks } from '../../data/content';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import styles from './Nav.module.css';

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <a href="#top" className={styles.wordmark}>
        Juan Camilo<span className={styles.period}>.</span>
      </a>

      <nav className={styles.links} aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className={styles.right}>
        <ThemeToggle />
        <Button href="#contact" variant="ghost" className={styles.contactBtn}>
          Contact
        </Button>
        <button
          type="button"
          className={styles.hamburger}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {menuOpen && (
        <nav className={styles.drawer} aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" variant="primary" fullWidth onClick={() => setMenuOpen(false)}>
            Contact
          </Button>
        </nav>
      )}
    </header>
  );
}
