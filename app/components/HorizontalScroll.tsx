'use client';

import { useEffect, useRef, ReactNode, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode;
}

export default function HorizontalScroll({ children }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if viewport is mobile/tablet (< 1024px)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const main = mainRef.current;

    if (!container || !main) return;

    // Skip horizontal scroll setup on mobile/tablet
    if (isMobile) {
      // Reset any transformations
      gsap.set(main, { x: 0 });
      document.body.style.height = '';
      return;
    }

    // Wait for images to load before calculating scroll distance
    const images = main.querySelectorAll('img');
    const imagePromises = Array.from(images).map((img) => {
      if (img.complete) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        img.addEventListener('load', () => resolve(null));
        img.addEventListener('error', () => resolve(null));
      });
    });

    // Initialize scroll after images load
    Promise.all(imagePromises).then(() => {
      // Desktop: Calculate total width for horizontal scroll
      const sections = main.querySelectorAll('.section');
      let totalWidth = 0;
      sections.forEach((section) => {
        totalWidth += (section as HTMLElement).offsetWidth;
      });

      const scrollDistance = totalWidth - window.innerWidth;

      // Set body height to enable vertical scrolling that drives horizontal movement
      document.body.style.height = `${scrollDistance + window.innerHeight}px`;

      // Create horizontal scroll animation with performance optimizations
      const animation = gsap.to(main, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          onRefresh: () => {
            // Recalculate on refresh
            let newTotalWidth = 0;
            sections.forEach((section) => {
              newTotalWidth += (section as HTMLElement).offsetWidth;
            });
            const newScrollDistance = newTotalWidth - window.innerWidth;
            document.body.style.height = `${newScrollDistance + window.innerHeight}px`;
          },
        },
      });

      // Refresh ScrollTrigger after a short delay to ensure everything is settled
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      document.body.style.height = '';
    };
  }, [children, isMobile]);

  return (
    <div ref={containerRef} className="scroll-container">
      <main ref={mainRef} className="horizontal-sections">
        {children}
      </main>
    </div>
  );
}
