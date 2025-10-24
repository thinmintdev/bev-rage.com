'use client';

import { useState } from 'react';
import NavMenu from './NavMenu';

interface HeaderProps {
  sections?: Array<{ number: string; label: string; name: string }>;
}

export default function Header({ sections = [] }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToHome = () => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // Mobile/Tablet: Scroll to first section
      const sectionElements = document.querySelectorAll('.section');
      const firstSection = sectionElements[0];
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Desktop: Scroll to top (which shows first section in horizontal scroll)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToSection = (index: number) => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // Mobile/Tablet: Scroll to specific section
      const sectionElements = document.querySelectorAll('.section');
      const targetSection = sectionElements[index];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Desktop: Calculate horizontal scroll position
      const sections = document.querySelectorAll('.section');
      let scrollDistance = 0;

      for (let i = 0; i < index && i < sections.length; i++) {
        scrollDistance += sections[i].clientWidth;
      }

      window.scrollTo({ top: scrollDistance, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`fixed-header ${isMenuOpen ? 'menu-open' : ''}`}>
        <button onClick={scrollToHome} className="brand-text-link">
          <div className="brand-text">
            <span className="brand-text">Bev-Rage</span>
            <span className="brand-separator">&nbsp;|&nbsp;</span>
            <span className="brand-tagline">Specialty Drink Bars</span>
          </div>
        </button>
        <button onClick={scrollToHome} className="logo">
          <span className="logo-text">br</span>
        </button>

        {/* Navigation Links */}
        <nav className="header-nav">
          {sections.slice(1).map((section, index) => (
            <button
              key={section.number}
              onClick={() => scrollToSection(index + 1)}
              className="nav-link"
            >
              {section.label}
            </button>
          ))}
        </nav>

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
