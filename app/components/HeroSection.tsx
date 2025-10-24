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
    <section className="section hero-section flex flex-col md:flex-row items-center relative bg-beige w-full md:w-[120vw] h-auto md:h-screen !pt-[100px] !pb-[60px] !px-6 md:my-0 md:!pt-16 md:!pb-16 md:!px-20 lg:!pt-20 lg:!pb-20 lg:!px-16">
      {/* Text Column: 50% on tablet, 35% on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[35%] flex items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="max-w-[600px] flex flex-col items-center">
          {/* "br" Logo Text - Pacifico font, dark brown - Hidden on mobile */}
          <motion.div
            className="hidden md:block text-[6rem] md:text-[6rem] lg:text-[12rem] xl:text-[16rem] font-normal leading-none text-center"
            style={{ fontFamily: 'Pacifico, cursive', color: '#4A3728', marginBottom: '2rem' }}
            variants={itemVariants}
          >
            br
          </motion.div>

          {/* Title - Dark brown */}
          <motion.h1
            className="hero-title font-serif text-[2rem] sm:text-[2.25rem] md:text-[2rem] lg:text-[3.5rem] xl:text-[4.5rem] font-normal leading-[1.1] text-brown-dark text-center mt-8 md:mt-0 !mb-8"
            variants={itemVariants}
          >
            {title}
          </motion.h1>

          {/* Subtitle - Responsive scaling */}
          <motion.p
            className="font-sans text-sm sm:text-base md:text-sm lg:text-xl leading-relaxed text-brown-light text-center max-w-[27.25rem] !mb-10"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Group */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-6 !mb-10"
            variants={itemVariants}
          >
            {buttonText && buttonLink && (
              <a
                href={buttonLink}
                className="font-sans text-base md:text-lg !px-4 !py-1 md:!px-5 md:!py-2 bg-transparent text-brown-light border border-brown-light rounded-full no-underline transition-all duration-300 ease-in-out inline-block cursor-pointer hover:bg-brown-light hover:text-beige hover:scale-105"
                style={{ padding: '0.75rem 2rem' }}
              >
                {buttonText}
              </a>
            )}
            <a
              href={ctaLink}
              className="font-sans text-base text-brown-light no-underline opacity-80 inline-block transition-all duration-300 ease-in-out hover:opacity-100 hover:text-burgundy underline underline-offset-4"
              onClick={handleAutoScroll}
            >
              {ctaText} →
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Column: 50% on tablet, 65% on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[65%] flex items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageVariants}
      >
        <div className="w-full lg:w-full h-auto max-h-[70vh] lg:h-[80vh] overflow-hidden aspect-[3/4]">
          <img
            src={imageSrc}
            alt={title}
            loading="eager"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </motion.div>
    </section>
  );
}
