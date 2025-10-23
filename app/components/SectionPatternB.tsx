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
    <section className="section content-section pattern-b">
      {/* 35% Text Column */}
      <motion.div
        className="text-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textContainerVariants}
      >
        <div className="content-wrapper">
          <motion.p className="section-label" variants={textItemVariants}>
            {sectionNumber} / {sectionLabel}
          </motion.p>

          <motion.h2 className="section-heading" variants={textItemVariants}>
            {headline.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </span>
            ))}
          </motion.h2>

          <motion.div className="body-content" variants={textItemVariants}>
            {bodyText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </motion.div>

          <motion.a href={ctaLink} className="cta-link" variants={textItemVariants}>
            {ctaText} →
          </motion.a>
        </div>
      </motion.div>

      {/* 65% Image Column with 3-Image Staggered Layout */}
      <motion.div
        className="image-column"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageContainerVariants}
      >
        <div className="image-grid-stepped-triple">
          <motion.div
            className="stepped-small landscape offset-left"
            variants={imageVariants}
          >
            <img src={images.small} alt={`${sectionLabel} landscape`} />
          </motion.div>
          <motion.div
            className="stepped-large portrait offset-right"
            variants={imageVariants}
          >
            <img src={images.large} alt={`${sectionLabel} portrait`} />
          </motion.div>
          <motion.div
            className="stepped-medium square offset-left"
            variants={imageVariants}
          >
            <img src={images.medium} alt={`${sectionLabel} square`} />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
