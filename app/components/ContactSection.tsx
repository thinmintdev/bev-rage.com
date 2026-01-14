'use client';

import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

interface ContactSectionProps {
  sectionNumber: string;
  sectionLabel: string;
  headline: string;
  bodyText: string[];
  email: string;
  phone: string;
}

export default function ContactSection({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  email,
  phone,
}: ContactSectionProps) {
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
    <section className="section flex flex-col md:flex-row items-center relative bg-beige w-full md:w-screen h-auto md:h-screen !pt-[60px] !pb-[60px] !px-6 md:my-0 md:!pt-16 md:!pb-16 md:!px-20 lg:!pt-20 lg:!pb-20 lg:!px-16">
      {/* Text Column: 50% on all viewports - Order 1 on mobile, Order 1 on desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-1/2 flex items-center justify-center px-0 md:px-10 lg:px-16 xl:px-20 mb-10 md:mb-0 order-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={textContainerVariants}
      >
        <div className="md:max-w-[400px] lg:max-w-[600px] flex flex-col items-center lg:items-start">
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

          {/* Contact Information - Hidden on mobile, shown on desktop */}
          <motion.div
            className="hidden md:flex flex-col gap-4"
            style={{ marginBottom: '3.125rem' }}
            variants={textItemVariants}
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-arvo text-xs md:text-sm lg:text-base font-normal text-brown-light uppercase tracking-wider text-center lg:text-left">
                Contact info
              </h3>
              <a
                href={`mailto:${email}`}
                className="font-sans text-sm md:text-base lg:text-lg text-brown-dark hover:text-burgundy transition-colors duration-300 text-center lg:text-left"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="font-sans text-sm md:text-base lg:text-lg text-brown-dark hover:text-burgundy transition-colors duration-300 text-center lg:text-left"
              >
                {phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a> */}
              <a
                href={`mailto:${email}`}
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href={`tel:${phone}`}
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Phone"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Column: 50% on all viewports - Order 2 on mobile and desktop */}
      <motion.div
        className="w-full md:w-1/2 lg:w-1/2 flex flex-col px-0 md:px-10 lg:px-16 xl:px-20 order-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={imageContainerVariants}
      >
        {/* Form Container - Same structure as triple image grid */}
        <div className="flex flex-col gap-5 md:gap-3 lg:gap-[30px] h-auto relative justify-center">
          <motion.div
            className="w-full h-auto lg:self-start"
            variants={imageVariants}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information - Mobile only, shown below form */}
          <motion.div
            className="flex md:hidden flex-col gap-4 mt-10"
            variants={textItemVariants}
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-arvo text-xs md:text-sm lg:text-base font-normal text-brown-light uppercase tracking-wider text-center lg:text-left">
                Contact info
              </h3>
              <a
                href={`mailto:${email}`}
                className="font-sans text-sm md:text-base lg:text-lg text-brown-dark hover:text-burgundy transition-colors duration-300 text-center lg:text-left"
              >
                {email}
              </a>
              <a
                href={`tel:${phone}`}
                className="font-sans text-sm md:text-base lg:text-lg text-brown-dark hover:text-burgundy transition-colors duration-300 text-center lg:text-left"
              >
                {phone}
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start mt-4">
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a> */}
              <a
                href={`mailto:${email}`}
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Email"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a
                href={`tel:${phone}`}
                className="text-brown-dark hover:text-burgundy transition-colors duration-300"
                aria-label="Phone"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
