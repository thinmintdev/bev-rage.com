'use client';

import { motion } from 'framer-motion';

interface AboutSectionProps {
  sectionNumber: string;
  sectionLabel: string;
  headline: string;
  bodyText: string[];
  ctaText: string;
  ctaLink: string;
  images: {
    small: string;
    large: string;
    medium: string;
  };
}

export default function AboutSection({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
  images,
}: AboutSectionProps) {
  const scrollToSection = (e: React.MouseEvent<HTMLButtonElement>, sectionIndex: number) => {
    e.preventDefault();
    const isMobile = window.innerWidth < 1024;
    const sections = document.querySelectorAll('.section');

    if (isMobile) {
      const targetSection = sections[sectionIndex];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      const bodyHeight = document.body.offsetHeight;
      const viewportHeight = window.innerHeight;
      const maxScroll = bodyHeight - viewportHeight;

      let targetScroll;
      if (sectionIndex === sections.length - 1) {
        targetScroll = maxScroll;
      } else {
        targetScroll = (sectionIndex / (sections.length - 1)) * maxScroll;
      }

      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="section flex flex-col md:flex-row items-center relative bg-beige w-full md:w-[120vw] h-auto md:h-screen !pt-[60px] !pb-[60px] !px-6 md:my-0 md:!pt-16 md:!pb-16 md:!px-20 lg:!pt-20 lg:!pb-20 lg:!px-16">
      {/* Text Column: 50% on tablet, 35% on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[35%] flex items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textContainerVariants}
      >
        <div className="max-w-[600px] flex flex-col items-center lg:items-start">
          {/* Section Label */}
          <motion.p
            className="font-arvo text-sm md:text-base lg:text-lg font-normal text-brown-light lowercase tracking-wide text-center lg:text-left"
            style={{ marginBottom: '2.5rem' }}
            variants={textItemVariants}
          >
            {sectionNumber} / {sectionLabel}
          </motion.p>

          {/* Section Heading */}
          <motion.h2
            className="section-heading font-serif text-3xl md:text-4xl lg:text-[3.375rem] font-normal leading-tight !text-brown-dark text-center lg:text-left"
            style={{ marginBottom: '3.125rem' }}
            variants={textItemVariants}
          >
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.h2>

          {/* Body Content */}
          <motion.div
            className="flex flex-col gap-0 !mb-10"
            variants={textItemVariants}
          >
            {bodyText.map((line, i) => (
              <p
                key={i}
                className="font-sans text-sm md:text-base lg:text-lg leading-relaxed text-dark m-0 text-center lg:text-left"
              >
                {line}
              </p>
            ))}
          </motion.div>

          {/* CTA Link */}
          <motion.div variants={textItemVariants}>
            <button
              onClick={(e) => scrollToSection(e, 2)}
              className="font-sans text-base text-brown-light opacity-60 inline-block transition-all duration-300 ease-in-out hover:opacity-100 hover:text-burgundy underline underline-offset-4 bg-transparent border-none cursor-pointer"
            >
              {ctaText} →
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Image Column: 50% on tablet, 65% on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[65%] flex items-start justify-center px-0 md:px-10 lg:px-16 xl:px-20 !mt-16 md:!mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageContainerVariants}
      >
        {/* Two Portrait Images - Side by Side, Staggered Vertically */}
        <div className="flex flex-row gap-5 md:gap-6 lg:gap-8 w-full h-auto relative items-start justify-center">
          {/* First Image - Portrait, offset up */}
          <motion.div
            className="w-1/2 lg:w-[45%] h-auto overflow-hidden aspect-[3/4] lg:-translate-y-12"
            variants={imageVariants}
          >
            <img
              src={images.large}
              alt={`${sectionLabel} primary`}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Second Image - Portrait, offset down */}
          <motion.div
            className="w-1/2 lg:w-[45%] h-auto overflow-hidden aspect-[3/4] lg:translate-y-12"
            variants={imageVariants}
          >
            <img
              src={images.small}
              alt={`${sectionLabel} secondary`}
              loading="eager"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
