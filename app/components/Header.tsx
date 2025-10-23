'use client';

import { useState } from 'react';
import Link from 'next/link';
import NavMenu from './NavMenu';

interface HeaderProps {
  sections?: Array<{ number: string; label: string; name: string }>;
}

export default function Header({ sections = [] }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className={`fixed-header ${isMenuOpen ? 'menu-open' : ''}`}>
        <Link href="/" className="brand-text-link">
          <div className="brand-text">
            <span className="brand-text">Bev-Rage</span>
            <span className="brand-separator"> | </span>
            <span className="brand-tagline">Specialty Drink Bars</span>
          </div>
        </Link>
        <Link href="/" className="logo">
          <span className="logo-text">br</span>
        </Link>
        <button
          className="btn-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg className="hamburger-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="6" x2="21" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </header>

      <NavMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        sections={sections}
      />
    </>
  );
}
