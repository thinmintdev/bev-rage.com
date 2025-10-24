'use client';

import { useEffect } from 'react';

interface NavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  sections: Array<{ number: string; label: string; name: string }>;
}

export default function NavMenu({ isOpen, onClose, sections }: NavMenuProps) {
  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSectionClick = (sectionNumber: string) => {
    // Calculate the section index (00, 01, 02, 03)
    const sectionIndex = parseInt(sectionNumber, 10);

    // Check if mobile/tablet (< 1024px)
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      // Mobile/Tablet: Direct scroll to section element
      const sections = document.querySelectorAll('.section');
      const targetSection = sections[sectionIndex];

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    } else {
      // Desktop: Use horizontal scroll calculation
      const viewportWidth = window.innerWidth;
      const bodyHeight = document.body.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = bodyHeight - viewportHeight;

      // Get all sections to calculate their positions
      const sections = document.querySelectorAll('.section');
      let targetX = 0;

      for (let i = 0; i < sectionIndex && i < sections.length; i++) {
        targetX += (sections[i] as HTMLElement).offsetWidth;
      }

      // Calculate the scroll position based on the target X position
      const totalWidth = Array.from(sections).reduce(
        (total, section) => total + (section as HTMLElement).offsetWidth,
        0
      );
      const scrollDistance = totalWidth - viewportWidth;

      // Convert target X to scroll Y position
      const scrollY = (targetX / scrollDistance) * maxScroll;

      // Scroll to the target section (vertical scroll drives horizontal movement)
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth',
      });
    }

    // Close menu after navigation
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`nav-overlay ${isOpen ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <nav className={`nav-menu ${isOpen ? 'open' : ''}`} aria-label="Main navigation">
        <div className="nav-menu-content">
          <div className="nav-menu-grid">
            {sections.map((section, index) => (
              <div key={section.number}>
                <button
                  className="nav-menu-item"
                  onClick={() => handleSectionClick(section.number)}
                  aria-label={`Navigate to ${section.name}`}
                >
                  <p className="nav-menu-label">{section.name}</p>
                </button>
                {index < sections.length - 1 && <hr className="nav-menu-separator" />}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}
