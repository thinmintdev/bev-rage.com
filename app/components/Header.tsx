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
        <div className="brand-text">Bev-Rage | Specialty Drink Bars</div>
        <Link href="/" className="logo">
          <span className="logo-text">br</span>
        </Link>
        <button
          className="btn-menu"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          MENU
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
