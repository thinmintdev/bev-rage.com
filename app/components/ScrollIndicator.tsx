'use client';

import { useState, useEffect, useRef } from 'react';

interface ScrollIndicatorProps {
  sections: Array<{ number: string; label: string; name: string }>;
}

export default function ScrollIndicator({ sections }: ScrollIndicatorProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const autoScrollIntervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      const sectionIndex = Math.floor(scrollPercentage * sections.length);
      setCurrentSection(Math.min(sectionIndex, sections.length - 1));
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  useEffect(() => {
    return () => {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
      }
    };
  }, []);

  const scrollToSection = (index: number) => {
    const isMobile = window.innerWidth < 1024;

    if (isMobile) {
      const sectionElements = document.querySelectorAll('.section');
      const targetSection = sectionElements[index];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      const bodyHeight = document.body.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = bodyHeight - viewportHeight;

      // Calculate target scroll position
      // For the last section, scroll to the very end
      let targetScroll;
      if (index === sections.length - 1) {
        targetScroll = maxScroll;
      } else {
        // Distribute sections evenly across the scrollable range
        targetScroll = (index / (sections.length - 1)) * maxScroll;
      }

      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const handlePrevSection = () => {
    if (currentSection > 0) {
      scrollToSection(currentSection - 1);
    }
  };

  const handleNextSection = () => {
    if (currentSection < sections.length - 1) {
      scrollToSection(currentSection + 1);
    }
  };

  const toggleAutoScroll = () => {
    if (isAutoScrolling) {
      if (autoScrollIntervalRef.current) {
        clearInterval(autoScrollIntervalRef.current);
        autoScrollIntervalRef.current = null;
      }
      setIsAutoScrolling(false);
    } else {
      setIsAutoScrolling(true);
      autoScrollIntervalRef.current = setInterval(() => {
        const nextSection = currentSection + 1;
        if (nextSection < sections.length) {
          scrollToSection(nextSection);
        } else {
          if (autoScrollIntervalRef.current) {
            clearInterval(autoScrollIntervalRef.current);
            autoScrollIntervalRef.current = null;
          }
          setIsAutoScrolling(false);
        }
      }, 3000);
    }
  };

  const current = sections[currentSection];
  const circumference = 2 * Math.PI * 18; // radius = 18
  const progressOffset = circumference - (scrollProgress * circumference);

  return (
    <footer className="scroll-indicator">
      {/* Navigation Controls */}
      <div className="scroll-nav-controls">
        {/* Previous Button */}
        <button
          className="scroll-nav-btn scroll-nav-prev"
          onClick={handlePrevSection}
          disabled={currentSection === 0}
          aria-label="Previous section"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <path d="M18 12 L14 16 L18 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Progress Circle with Play/Pause */}
        <button
          className="scroll-nav-btn scroll-nav-play"
          onClick={toggleAutoScroll}
          aria-label={isAutoScrolling ? "Pause auto-scroll" : "Start auto-scroll"}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" className="progress-circle">
            {/* Background circle */}
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            {/* Progress circle */}
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              transform="rotate(-90 20 20)"
              className="progress-ring"
            />
          </svg>
          <span className="section-num">{current?.number || '00'}</span>
          {/* Play/Pause Icon */}
          <svg width="12" height="12" viewBox="0 0 12 12" className="play-pause-icon">
            {isAutoScrolling ? (
              // Pause icon
              <>
                <rect x="3" y="2" width="2" height="8" fill="currentColor" />
                <rect x="7" y="2" width="2" height="8" fill="currentColor" />
              </>
            ) : (
              // Play icon
              <path d="M3 2 L3 10 L9 6 Z" fill="currentColor" />
            )}
          </svg>
        </button>

        {/* Next Button */}
        <button
          className="scroll-nav-btn scroll-nav-next"
          onClick={handleNextSection}
          disabled={currentSection === sections.length - 1}
          aria-label="Next section"
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="15" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
            <path d="M14 12 L18 16 L14 20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Section Label */}
      <span className="section-label">
        {current?.label || 'hero'} / {current?.name || 'Home'}
      </span>
    </footer>
  );
}
