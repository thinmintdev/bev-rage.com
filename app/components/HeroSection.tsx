'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function HeroSection({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) {
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
          <motion.h1 className="hero-title" variants={itemVariants}>
            {title}
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            {subtitle}
          </motion.p>
          <motion.a href={ctaLink} className="cta-link" variants={itemVariants}>
            {ctaText} →
          </motion.a>
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
        <div className="image-placeholder hero-image portrait">
          <span className="placeholder-text">Hero Image<br/>(Portrait)</span>
        </div>
      </motion.div>
    </section>
  );
}
