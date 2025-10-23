'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  imageSrc: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink, imageSrc, buttonText, buttonLink }: HeroSectionProps) {
  const handleAutoScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const sections = document.querySelectorAll('.section');
    const isMobile = window.innerWidth < 1024;
    let currentIndex = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    let isAutoScrolling = true;

    // Cancel autoscroll on user scroll
    const cancelAutoScroll = () => {
      isAutoScrolling = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      // Remove scroll listener
      window.removeEventListener('wheel', cancelAutoScroll);
      window.removeEventListener('touchmove', cancelAutoScroll);
      window.removeEventListener('keydown', cancelAutoScroll);
    };

    // Listen for user scroll events
    window.addEventListener('wheel', cancelAutoScroll, { passive: true });
    window.addEventListener('touchmove', cancelAutoScroll, { passive: true });
    window.addEventListener('keydown', cancelAutoScroll);

    const scrollToNextSection = () => {
      if (!isAutoScrolling || currentIndex >= sections.length) {
        cancelAutoScroll();
        return;
      }

      if (isMobile) {
        // Mobile: Direct scroll to section
        const targetSection = sections[currentIndex];
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        // Desktop: Calculate horizontal scroll position
        const bodyHeight = document.body.offsetHeight;
        const viewportHeight = window.innerHeight;
        const maxScroll = bodyHeight - viewportHeight;

        let targetScroll;
        if (currentIndex === sections.length - 1) {
          targetScroll = maxScroll;
        } else {
          targetScroll = (currentIndex / (sections.length - 1)) * maxScroll;
        }

        window.scrollTo({ top: targetScroll, behavior: 'smooth' });
      }

      currentIndex++;

      // Continue to next section after pause (3 seconds)
      if (currentIndex < sections.length && isAutoScrolling) {
        timeoutId = setTimeout(scrollToNextSection, 3000);
      } else {
        cancelAutoScroll();
      }
    };

    // Start scrolling from section 1 (skip hero/section 0)
    currentIndex = 1;
    scrollToNextSection();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section className="section hero-section">
      {/* 35% Text Column */}
      <motion.div
        className="hero-text-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="content-wrapper">
          <motion.div className="hero-logo-text" variants={itemVariants}>
            br
          </motion.div>
          <motion.h1 className="hero-title" variants={itemVariants}>
            {title}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.div className="hero-cta-group" variants={itemVariants}>
            {buttonText && buttonLink && (
              <a href={buttonLink} className="hero-button">
                {buttonText}
              </a>
            )}
            <a href={ctaLink} className="cta-link cta-link-small" onClick={handleAutoScroll}>
              {ctaText} →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* 65% Image Column */}
      <motion.div
        className="hero-image-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
      >
        <div className="hero-image portrait">
          <img src={imageSrc} alt={title} />
        </div>
      </motion.div>
    </section>
  );
}
