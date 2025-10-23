# Horizontal Scroll Implementation Guide
## GSAP ScrollTrigger Method (Gran Ander Style)

## Overview

The Gran Ander website uses **GSAP (GreenSock Animation Platform) with ScrollTrigger** to create a smooth horizontal scrolling experience that's triggered by vertical mouse wheel/trackpad scrolling.

### Key Mechanism
- ✅ Vertical scroll wheel → Horizontal page movement
- ✅ Ultra-smooth 60fps animations
- ✅ Buttery easing and momentum
- ✅ Natural scroll behavior (mousewheel, trackpad, keyboard)

---

## Technical Architecture

### The Core Concept

1. **Extend body height artificially** to create vertical scroll space
2. **Fix main container** position so it doesn't scroll naturally
3. **GSAP listens** to vertical scroll progress (0% to 100%)
4. **Translate horizontal** movement based on scroll progress
5. **Apply smooth easing** for professional feel

### Math Formula

```
Vertical Scroll Height = Horizontal Content Width + Extra Space
Body Height ≈ Main Width × 1.1 (in px)
```

Example from Gran Ander:
- Main width: 41,737px
- Body height: 45,596px
- Ratio: ~1.09

---

## Implementation Steps

### Step 1: Install GSAP

```bash
npm install gsap
```

### Step 2: HTML Structure

```html
<body>
  <!-- Fixed header -->
  <header class="fixed-header">
    <button>Request</button>
    <a href="/" class="logo">Logo</a>
    <button>Menu</button>
  </header>

  <!-- Horizontal scroll container -->
  <div class="scroll-container">
    <main class="horizontal-sections">
      <section class="section hero">
        <!-- Hero content -->
      </section>

      <section class="section content-panel">
        <!-- Section 1 -->
      </section>

      <section class="section content-panel">
        <!-- Section 2 -->
      </section>

      <!-- More sections... -->
    </main>
  </div>

  <!-- Fixed footer -->
  <footer class="scroll-indicator">
    <span class="section-num">01</span>
    <span class="section-label">About us</span>
  </footer>
</body>
```

### Step 3: CSS Setup

```css
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  overflow-x: hidden; /* Hide horizontal overflow */
  font-family: 'Syne', sans-serif;
}

body {
  /* Height will be set dynamically by JavaScript */
  /* to enable vertical scrolling */
}

/* Scroll container - fixed to viewport */
.scroll-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* Critical: hide overflow */
}

/* Main horizontal container */
.horizontal-sections {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: max-content; /* Auto width based on sections */
  will-change: transform; /* Optimize for animations */
}

/* Individual sections */
.section {
  flex-shrink: 0; /* Prevent shrinking */
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
}

/* Section widths */
.section.hero {
  width: 140vw; /* Wider than viewport */
}

.section.content-panel {
  width: 200vw; /* Each section takes 2x viewport */
}

/* Fixed elements */
.fixed-header,
.scroll-indicator {
  position: fixed;
  z-index: 1000;
}

.fixed-header {
  top: 0;
  left: 0;
  right: 0;
  padding: 20px 40px;
  background: rgba(236, 229, 213, 0.9);
  backdrop-filter: blur(10px);
}

.scroll-indicator {
  bottom: 20px;
  left: 20px;
}
```

### Step 4: JavaScript - GSAP Implementation

```javascript
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize horizontal scroll
function initHorizontalScroll() {
  const main = document.querySelector('.horizontal-sections');
  const sections = gsap.utils.toArray('.section');

  // Calculate total width of all sections
  let totalWidth = 0;
  sections.forEach(section => {
    totalWidth += section.offsetWidth;
  });

  // Set body height to enable vertical scrolling
  // The height determines how much you need to scroll
  // Longer height = slower horizontal movement
  const scrollDistance = totalWidth - window.innerWidth;
  document.body.style.height = `${scrollDistance + window.innerHeight}px`;

  // Create the horizontal scroll animation
  gsap.to(main, {
    x: -scrollDistance, // Move left by total scroll distance
    ease: 'none', // Linear movement (easing handled by scroll)
    scrollTrigger: {
      trigger: document.body,
      start: 'top top', // Start immediately
      end: 'bottom bottom', // End at document bottom
      scrub: 1, // Smooth scrubbing (higher = smoother but more lag)
      invalidateOnRefresh: true, // Recalculate on resize
    }
  });
}

// Initialize on page load
window.addEventListener('load', () => {
  initHorizontalScroll();

  // Recalculate on window resize
  window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
  });
});
```

### Step 5: Advanced Features

#### Smooth Scrolling Enhancement

```javascript
// Add smooth scrolling with Lenis (optional but recommended)
import Lenis from '@studio-freight/lenis';

function initSmoothScroll() {
  const lenis = new Lenis({
    duration: 1.2, // Scroll duration
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
    direction: 'vertical', // Vertical scroll
    smooth: true,
    smoothTouch: false, // Disable on touch devices
  });

  // Connect Lenis to GSAP
  lenis.on('scroll', ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
}

// Initialize
initSmoothScroll();
initHorizontalScroll();
```

#### Section Progress Indicator

```javascript
function initScrollIndicator() {
  const sections = gsap.utils.toArray('.section');
  const sectionNumEl = document.querySelector('.section-num');
  const sectionLabelEl = document.querySelector('.section-label');

  sections.forEach((section, index) => {
    ScrollTrigger.create({
      trigger: section,
      start: 'left 50%',
      end: 'right 50%',
      horizontal: true,
      onEnter: () => updateIndicator(index),
      onEnterBack: () => updateIndicator(index),
    });
  });

  function updateIndicator(index) {
    const num = String(index + 1).padStart(2, '0');
    sectionNumEl.textContent = num;

    const labels = ['Hero', 'About', 'Cuisine', 'Wine', 'Rooms', 'Spa', 'Winter'];
    sectionLabelEl.textContent = labels[index] || '';
  }
}
```

#### Parallax Background Images

```javascript
function initParallax() {
  const images = gsap.utils.toArray('.background-image');

  images.forEach(image => {
    gsap.to(image, {
      x: 200, // Move right by 200px
      ease: 'none',
      scrollTrigger: {
        trigger: image.closest('.section'),
        start: 'left right',
        end: 'right left',
        scrub: true,
        horizontal: true,
      }
    });
  });
}
```

#### Fade-in Animations

```javascript
function initFadeInAnimations() {
  const textElements = gsap.utils.toArray('.text-content');

  textElements.forEach(text => {
    gsap.from(text, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: text,
        start: 'left 80%',
        end: 'left 20%',
        toggleActions: 'play none none reverse',
        horizontal: true,
      }
    });
  });
}
```

---

## Complete Implementation Example

### Next.js 16 App Router Structure

```
app/
├── layout.js
├── page.js
├── components/
│   ├── HorizontalScroll.js
│   ├── Header.js
│   ├── Section.js
│   └── ScrollIndicator.js
├── styles/
│   └── globals.css
└── lib/
    └── gsap.js
```

### app/page.js

```jsx
import HorizontalScroll from '@/components/HorizontalScroll';
import Header from '@/components/Header';
import Section from '@/components/Section';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function Home() {
  const sections = [
    {
      id: 'hero',
      type: 'hero',
      title: 'Ladin hospitality since 1968.',
      subtitle: 'True hospitality is a gesture of love and thrives when people benefit from it.',
      image: '/images/hero.jpg',
      width: '140vw'
    },
    {
      id: 'about',
      number: '01',
      label: 'te nos',
      title: 'Alta Badia, the Dolomites: a flavourful family history.',
      content: 'We love flours, bees, and flowers in summer, and snow in winter...',
      images: ['/images/about-1.jpg', '/images/about-2.jpg', '/images/about-3.jpg'],
      width: '200vw'
    },
    // More sections...
  ];

  return (
    <>
      <Header />

      <HorizontalScroll>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </HorizontalScroll>

      <ScrollIndicator sections={sections} />
    </>
  );
}
```

### components/HorizontalScroll.js

```jsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScroll({ children }) {
  const containerRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const main = mainRef.current;

    if (!container || !main) return;

    // Calculate total width
    const sections = main.querySelectorAll('.section');
    let totalWidth = 0;
    sections.forEach(section => {
      totalWidth += section.offsetWidth;
    });

    const scrollDistance = totalWidth - window.innerWidth;

    // Set body height
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
      }
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
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
```

### components/Section.js

```jsx
export default function Section({
  id,
  type = 'content-panel',
  number,
  label,
  title,
  subtitle,
  content,
  image,
  images,
  width = '200vw'
}) {
  return (
    <section
      className={`section ${type}`}
      style={{ width }}
      data-section={number}
      data-label={label}
    >
      {/* Background image */}
      {image && (
        <div className="background-image-container">
          <img
            src={image}
            alt={title}
            className="background-image"
          />
        </div>
      )}

      {/* Text content */}
      <div className="text-content">
        {number && (
          <p className="section-number">
            {number} / {label}
          </p>
        )}

        <h1 className={type === 'hero' ? 'hero-title' : 'section-title'}>
          {title}
        </h1>

        {subtitle && <p className="subtitle">{subtitle}</p>}
        {content && <p className="body-text">{content}</p>}
      </div>

      {/* Image gallery */}
      {images && images.length > 0 && (
        <div className="image-gallery">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${title} - ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </section>
  );
}
```

---

## Performance Optimization

### 1. GSAP Configuration

```javascript
// Optimize GSAP performance
gsap.config({
  force3D: true, // Enable GPU acceleration
  nullTargetWarn: false,
});

// Use will-change CSS property
.horizontal-sections {
  will-change: transform;
}
```

### 2. Lazy Loading Images

```javascript
// Intersection Observer for lazy loading
function initLazyLoading() {
  const images = document.querySelectorAll('img[loading="lazy"]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '200px', // Load 200px before entering viewport
  });

  images.forEach(img => imageObserver.observe(img));
}
```

### 3. Reduce ScrollTrigger Instances

```javascript
// Instead of creating 69+ ScrollTriggers, batch similar animations
function batchScrollTriggers() {
  // Group animations by type
  gsap.utils.toArray('.fade-in').forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      x: -30,
      scrollTrigger: {
        trigger: el,
        start: 'left 80%',
        end: 'left 20%',
        horizontal: true,
        toggleActions: 'play none none reverse',
      }
    });
  });
}
```

---

## Responsive Behavior

### Mobile: Switch to Vertical Scroll

```javascript
function initResponsiveScroll() {
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // Kill horizontal scroll
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    // Reset body height
    document.body.style.height = 'auto';

    // Convert to vertical layout
    const main = document.querySelector('.horizontal-sections');
    main.style.flexDirection = 'column';
    main.style.width = '100vw';

    // Reset section widths
    document.querySelectorAll('.section').forEach(section => {
      section.style.width = '100vw';
      section.style.height = 'auto';
      section.style.minHeight = '100vh';
    });
  } else {
    initHorizontalScroll();
  }
}

// Listen for resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    initResponsiveScroll();
  }, 250);
});
```

---

## Troubleshooting

### Issue 1: Janky Scrolling

**Solution**: Increase `scrub` value

```javascript
scrollTrigger: {
  scrub: 1.5, // Higher = smoother but more lag
}
```

### Issue 2: Sections Not Aligned

**Solution**: Ensure body height is calculated correctly

```javascript
// Add extra padding to body height
document.body.style.height = `${scrollDistance + window.innerHeight * 1.1}px`;
```

### Issue 3: Transform Not Smooth

**Solution**: Use `will-change` and GPU acceleration

```css
.horizontal-sections {
  will-change: transform;
  transform: translateZ(0); /* Force GPU */
}
```

### Issue 4: ScrollTrigger Not Working

**Solution**: Ensure plugin is registered

```javascript
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
```

---

## Additional Enhancements

### 1. Keyboard Navigation

```javascript
document.addEventListener('keydown', (e) => {
  const scrollAmount = window.innerWidth * 0.8;

  if (e.key === 'ArrowRight') {
    window.scrollBy({ top: scrollAmount, behavior: 'smooth' });
  } else if (e.key === 'ArrowLeft') {
    window.scrollBy({ top: -scrollAmount, behavior: 'smooth' });
  }
});
```

### 2. Autoscroll Feature

```javascript
let autoScrollInterval;

function startAutoscroll() {
  const scrollSpeed = 2; // px per frame

  autoScrollInterval = setInterval(() => {
    window.scrollBy(0, scrollSpeed);

    // Stop at end
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      stopAutoscroll();
    }
  }, 16); // ~60fps
}

function stopAutoscroll() {
  clearInterval(autoScrollInterval);
}
```

### 3. Section Snapping

```javascript
// Snap to nearest section on scroll end
let scrollEndTimer;

window.addEventListener('scroll', () => {
  clearTimeout(scrollEndTimer);

  scrollEndTimer = setTimeout(() => {
    const main = document.querySelector('.horizontal-sections');
    const sections = Array.from(document.querySelectorAll('.section'));

    // Find nearest section
    const currentScroll = -gsap.getProperty(main, 'x');
    let nearestSection = sections[0];
    let minDistance = Infinity;

    sections.forEach(section => {
      const distance = Math.abs(section.offsetLeft - currentScroll);
      if (distance < minDistance) {
        minDistance = distance;
        nearestSection = section;
      }
    });

    // Snap to section
    const targetScroll = nearestSection.offsetLeft;
    const currentBodyScroll = window.scrollY;
    const targetBodyScroll = (targetScroll / (main.scrollWidth - window.innerWidth)) *
                            (document.body.scrollHeight - window.innerHeight);

    window.scrollTo({
      top: targetBodyScroll,
      behavior: 'smooth'
    });
  }, 150);
});
```

---

## Recommended Packages

```json
{
  "dependencies": {
    "gsap": "^3.13.0",
    "@studio-freight/lenis": "^1.0.42",
    "next": "^16.0.0",
    "react": "^19.0.0"
  }
}
```

---

## Summary

The **GSAP ScrollTrigger method** is the industry-standard approach for creating smooth horizontal scroll experiences:

✅ **Advantages**:
- Ultra-smooth 60fps animations
- Professional easing and momentum
- Works with mousewheel, trackpad, keyboard
- Highly customizable
- Great performance
- Extensive documentation

❌ **Disadvantages**:
- Requires JavaScript library (~50KB)
- More complex setup than CSS-only
- Need to handle responsive behavior carefully

This is the exact method used by Gran Ander and many premium websites for creating immersive horizontal scrolling experiences.
