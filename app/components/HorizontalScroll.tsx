'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const main = mainRef.current;

    if (!container || !main) return;

    // Calculate total width
    const sections = main.querySelectorAll('.section');
    let totalWidth = 0;
    sections.forEach((section) => {
      totalWidth += (section as HTMLElement).offsetWidth;
    });

    const scrollDistance = totalWidth - window.innerWidth;

    // Set body height to enable vertical scrolling
    document.body.style.height = `${scrollDistance + window.innerHeight}px`;

    // Create horizontal scroll animation
    const animation = gsap.to(main, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.height = '';
    };
  }, [children]);

  return (
    <div ref={containerRef} className="scroll-container">
      <main ref={mainRef} className="horizontal-sections">
        {children}
      </main>
    </div>
  );
}
