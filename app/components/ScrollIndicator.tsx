'use client';

import { useState, useEffect } from 'react';

interface ScrollIndicatorProps {
  sections: Array<{ number: string; label: string; name: string }>;
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const sectionIndex = Math.floor(scrollPercentage * sections.length);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  const current = sections[currentSection];

  return (
    <footer className="scroll-indicator">
      <button className="autoscroll-btn">
        <span className="section-num">{current?.number || '01'}</span>
      </button>
      <span className="section-label">
        {current?.label || 'hero'} / {current?.name || 'Home'}
      </span>
    </footer>
  );
}
