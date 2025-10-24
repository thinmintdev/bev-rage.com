'use client';

import { motion } from 'framer-motion';

interface SectionPatternBProps {
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

export default function SectionPatternB({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
  images,
}: SectionPatternBProps) {
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
    <section className="section flex flex-col md:flex-row items-center relative bg-beige w-[120vw] h-auto md:h-screen pt-[40px] pb-[40px] px-5 md:pt-16 md:pb-16 md:px-20 lg:pt-20 lg:pb-20 lg:px-16">
      {/* Text Column: 50% on tablet, 35% on desktop */}
      <motion.div
        className="w-full md:w-[1/2] lg:w-[80%] flex items-center justify-center px-5 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textContainerVariants}
      >
        <div className="max-w-[600px] flex flex-col items-center lg:items-start">
          {/* Section Label */}
          <motion.p
            className="font-sans text-sm md:text-base lg:text-lg font-semibold text-brown-light lowercase tracking-wide text-center lg:text-left"
            style={{ marginBottom: '2.5rem' }}
            variants={textItemVariants}
          >
            {sectionNumber} / {sectionLabel}
          </motion.p>

          {/* Section Heading */}
          <motion.h2
            className="font-serif text-3xl md:text-4xl lg:text-[3.375rem] font-normal leading-tight text-brown-dark text-center lg:text-left"
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
            className="flex flex-col gap-0"
            style={{ marginBottom: '3.125rem' }}
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
          <motion.a
            href={ctaLink}
            className="font-sans text-base md:text-lg lg:text-xl text-brown-light underline underline-offset-1 transition-colors duration-300 ease-in-out inline-block hover:text-burgundy"
            variants={textItemVariants}
          >
            {ctaText} →
          </motion.a>
        </div>
      </motion.div>

      {/* Image Column: 50% on tablet, 65% on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-[65%] flex flex-col justify-center px-5 md:px-10 lg:px-16 xl:px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageContainerVariants}
      >
        {/* Triple Image Grid - Mobile: stacked, Desktop: staggered */}
        <div className="flex flex-col gap-5 md:gap-7 lg:gap-[30px] h-auto lg:h-[80vh] relative justify-center items-center lg:mt-[150px]">
          {/* Small Landscape Image */}
          <motion.div
            className="w-full md:w-full lg:w-[65%] h-auto min-h-[200px] md:min-h-[300px] lg:min-h-0 lg:h-auto overflow-hidden aspect-[4/3] self-center lg:self-start"
            style={{ marginTop: 0 }}
            variants={imageVariants}
          >
            <img
              src={images.small}
              alt={`${sectionLabel} landscape`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Large Portrait Image */}
          <motion.div
            className="w-full md:w-full lg:w-[75%] h-auto min-h-[300px] md:min-h-[400px] lg:min-h-0 lg:h-auto overflow-hidden aspect-[3/4] self-end lg:-mt-[60px] lg:ml-[25%]"
            variants={imageVariants}
          >
            <img
              src={images.large}
              alt={`${sectionLabel} portrait`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Medium Square Image */}
          <motion.div
            className="w-full md:w-full lg:w-[70%] h-auto min-h-[250px] md:min-h-[350px] lg:min-h-0 lg:h-auto overflow-hidden aspect-square self-center lg:self-start lg:-mt-[70px]"
            variants={imageVariants}
          >
            <img
              src={images.medium}
              alt={`${sectionLabel} square`}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
