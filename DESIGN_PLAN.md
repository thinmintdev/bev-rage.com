# Gran Ander Website Replication - Design Plan

## Executive Summary
This document provides a comprehensive analysis of the Gran Ander hotel website (https://granander.it/en) and outlines a detailed plan to replicate its unique horizontal side-scrolling design, visual style, and interactive features.

---

## 1. Core Design Concept

### 1.1 Horizontal Scroll Architecture
The website uses a **revolutionary horizontal scrolling mechanism** as its primary navigation pattern:

- **Main Container**: Flexbox layout with `display: flex; flex-direction: row`
- **Total Width**: ~41,737px (17x viewport width)
- **Section Count**: 7 full-width sections
- **Section Types**:
  - 1 Hero section (~3,482px wide)
  - 6 Content sections (~4,754px - 7,243px wide each)
- **Viewport Height**: Fixed at 100vh (1,333px in test)
- **Overflow**: Horizontal scroll enabled, vertical scroll minimal

### 1.2 Scroll Behavior
- Native browser horizontal scrolling (no custom JavaScript libraries detected)
- CSS transition: `transition: all` on main container
- Smooth scroll behavior can be enhanced via CSS `scroll-behavior: smooth`
- Each section takes up more than viewport width, creating immersive experience

---

## 2. Visual Design System

### 2.1 Color Palette

**Primary Colors:**
- **Warm Beige** (Background): `rgb(236, 229, 213)` or `#ECE5D5`
- **Dark Charcoal** (Text/Backgrounds): `rgb(34, 34, 34)` or `#222222`
- **Burgundy Red** (Accents): `rgb(128, 61, 59)` or `#803D3B`

**Secondary Colors:**
- **Burgundy Dark**: `rgb(111, 53, 51)` or `#6F3533`
- **Light Gray**: `rgb(89, 89, 89)` or `#595959`
- **White**: `rgb(255, 255, 255)` or `#FFFFFF`

**Overlay Colors:**
- Semi-transparent beige: `rgba(236, 229, 213, 0.9)`
- Semi-transparent dark: `rgba(34, 34, 34, 0.1)`
- Text overlay: `rgba(0, 0, 0, 0.65)`

### 2.2 Typography

**Font Families:**
1. **Young Serif** - Display/Headings
   - Serif typeface with elegant, classic feel
   - Fallback: "Arial Fallback [Young Serif]", sans-serif

2. **Syne** - Body text and UI elements
   - Modern sans-serif with geometric characteristics
   - Fallback: "Arial Fallback [Syne]", sans-serif

**Font Sizes:**
- **H1**: 71.66px (~72px) - Hero headlines
- **H2**: 59.72px (~60px) - Section headlines
- **H3**: 34.56px (~35px) - Sub-sections
- **H3 Small**: 18px - Navigation/labels
- **Body**: Standard sizes for readability

**Hierarchy:**
```
H1 (72px) → Primary message (Hero)
H2 (60px) → Section titles
H3 (35px) → Sub-headings
H3 (18px) → Labels/Categories
Body → Content paragraphs
```

---

## 3. Layout Structure

### 3.1 Main Container Architecture

```
<body>
  <header> (Fixed navigation bar)
  <main style="display: flex; flex-direction: row; width: 41737px;">
    <section class="hero"> (3482px wide)
    <section class="launch-panel"> (4754px wide)
    <section class="launch-panel"> (6789px wide)
    <section class="launch-panel"> (6406px wide)
    <section class="launch-panel"> (7243px wide)
    <section class="launch-panel"> (6791px wide)
    <section class="launch-panel"> (6272px wide)
  </main>
  <footer> (Fixed navigation indicators)
</body>
```

### 3.2 Section Internal Structure

Each "launch-panel" section follows this pattern:

```
<section class="launch-panel">
  <div class="background-image-container">
    <!-- Large hero/mood image -->
  </div>

  <div class="image-gallery-grid">
    <!-- 3-6 smaller detail images -->
  </div>

  <div class="text-content">
    <p class="section-number">01 / te nos</p>
    <h2>Section Headline</h2>
    <div class="body-text">
      <!-- Multi-paragraph content -->
    </div>
    <a href="#" class="cta-link">Learn More</a>
  </div>

  <div class="secondary-image-gallery">
    <!-- Additional 2-3 supporting images -->
  </div>
</section>
```

### 3.3 Image Grid Patterns

**Grid Layout Types:**
1. **3-column grid**: 3 equal images side by side
2. **Mixed grid**: 1 large + 2 medium images
3. **Hero + detail**: 1 full-height image + smaller detail shots

**Image Characteristics:**
- High-quality photography (hotel, food, nature, people)
- Natural lighting, warm tones
- Mix of lifestyle and detail shots
- Aspect ratios: primarily landscape and portrait
- Professional commercial photography style

---

## 4. Interactive Elements

### 4.1 Navigation System

**Fixed Header Bar** (Top):
- "REQUEST" button (left)
- Logo (center) - Links to homepage
- "MENU" button (right)
- Background: Semi-transparent overlay
- Position: Fixed, always visible

**Section Progress Indicator** (Bottom):
- Shows current section number (e.g., "01")
- Displays section name (e.g., "te nos / About us")
- "Play autoscroll" button for automated tour
- Position: Fixed bottom

### 4.2 Navigation Labels

Ladin language section names:
1. `te nos` - About us
2. `te ciasadafüch` - Homemade/Kitchen
3. `te cianoa` - Wine cellar
4. `te ciamena` - Rooms
5. `te spa` - Spa/Wellness
6. `d'invern` - Winter
7. `d'isté` - Summer
8. `consëis` - Tips/Advice

### 4.3 Buttons & CTAs

**Button Styles:**
- Primary: Dark background, light text
- Secondary: Outlined style
- Hover states: Smooth transitions
- Font: Syne, medium weight

**CTA Pattern:**
- Text link with underline
- Arrow icon →
- Hover: Color shift to burgundy

---

## 5. Content Sections Breakdown

### Section 1: Hero
- **Width**: ~3,482px
- **Content**:
  - Large heading: "Ladin hospitality since 1968."
  - Tagline paragraph
  - CTA: "Gran Ander, Grand hospitality"
  - Hero image: Family with vintage Vespa/Fiat 500
- **Layout**: Split 50/50 text-left, image-right

### Section 2: About (te nos)
- **Width**: ~4,754px
- **Theme**: Family history, sustainability, local products
- **Images**: Beekeeping, gardening, mill, family
- **Label**: "01 / te nos"
- **Headline**: "Alta Badia, the Dolomites: a flavourful family history."

### Section 3: Cuisine (te ciasadafüch)
- **Width**: ~6,789px
- **Theme**: Homemade food, traditional cooking
- **Images**: Kitchen scenes, plated dishes, cooking process
- **Label**: "02 / te ciasadafüch"
- **Headline**: "Homemade. Made with love."

### Section 4: Wine Cellar (te cianoa)
- **Width**: ~6,406px
- **Theme**: Wine collection, cellar atmosphere
- **Images**: Wine bottles, cellar interiors, tasting
- **Label**: "03 / te cianoa"
- **Headline**: "If vineyards could thrive in the Alps, we'd also make wine."

### Section 5: Rooms (te ciamena)
- **Width**: ~7,243px
- **Theme**: Accommodations, Alpine design, comfort
- **Images**: Bedroom interiors, balcony views, wood paneling
- **Label**: "04 / te ciamena"
- **Headline**: "Dream sweet dreams of larches, Swiss pines, and the Sas dla Crusc."

### Section 6: Spa (te spa)
- **Width**: ~6,791px
- **Theme**: Wellness, relaxation, mountain views
- **Images**: Pool deck, sauna, spa interiors, mountain vistas
- **Label**: "05 / te spa"
- **Headline**: "The Dolomites, a restorative and blissful place."

### Section 7: Winter (d'invern)
- **Width**: ~6,272px
- **Theme**: Winter activities, skiing, snow
- **Images**: Ski slopes, snowy landscapes, Dolomites peaks
- **Label**: "06 / d'invern"
- **Headline**: "The winter season is a magical period at the hotel. Bëgnodüs!"

---

## 6. Technical Implementation Requirements

### 6.1 HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gran Ander Style Website</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Fixed Header -->
  <header class="fixed-header">
    <button class="btn-request">Request</button>
    <a href="/" class="logo">
      <img src="logo.svg" alt="Logo">
    </a>
    <button class="btn-menu">Menu</button>
  </header>

  <!-- Horizontal Scroll Container -->
  <main class="horizontal-scroll-container">
    <section class="hero-section">
      <!-- Hero content -->
    </section>

    <section class="content-section" data-section="01" data-name="te nos">
      <!-- Section content -->
    </section>

    <!-- More sections... -->
  </main>

  <!-- Fixed Footer Navigation -->
  <footer class="scroll-indicator">
    <button class="autoscroll-btn">
      <span class="section-num">01</span>
    </button>
    <span class="section-label">te nos / About us</span>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### 6.2 CSS Architecture

```css
/* Reset and Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Syne', sans-serif;
  color: #222222;
  overflow-x: auto;
  overflow-y: hidden;
  height: 100vh;
}

/* Horizontal Scroll Container */
.horizontal-scroll-container {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: max-content; /* Auto-calculate based on sections */
}

/* Section Base Styles */
.hero-section,
.content-section {
  flex-shrink: 0; /* Prevent sections from shrinking */
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero-section {
  width: 140vw; /* ~3482px / 2452px = 1.42 */
}

.content-section {
  width: 200vw; /* Average section width ratio */
  /* Individual widths can vary: 190vw to 295vw */
}

/* Image Containers */
.background-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  object-fit: cover;
}

.image-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
}

/* Typography */
h1 {
  font-family: 'Young Serif', serif;
  font-size: 72px;
  line-height: 1.2;
  color: #222222;
}

h2 {
  font-family: 'Young Serif', serif;
  font-size: 60px;
  line-height: 1.3;
  color: #222222;
}

.section-number {
  font-size: 18px;
  font-weight: 600;
  text-transform: lowercase;
  color: #595959;
}

/* Fixed Header */
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background: rgba(236, 229, 213, 0.9);
  backdrop-filter: blur(10px);
}

/* Fixed Footer */
.scroll-indicator {
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 1000;
  display: flex;
  align-items: center;
  gap: 15px;
}

/* Color Scheme */
:root {
  --color-beige: #ECE5D5;
  --color-dark: #222222;
  --color-burgundy: #803D3B;
  --color-burgundy-dark: #6F3533;
  --color-gray: #595959;
  --color-white: #FFFFFF;
}
```

### 6.3 JavaScript Functionality

```javascript
// Scroll Progress Tracking
let currentSection = 0;
const sections = document.querySelectorAll('.content-section');
const sectionIndicator = document.querySelector('.section-num');
const sectionLabel = document.querySelector('.section-label');

// Update section indicator on scroll
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollX;

  sections.forEach((section, index) => {
    const sectionStart = section.offsetLeft;
    const sectionEnd = sectionStart + section.offsetWidth;

    if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
      currentSection = index;
      updateIndicator(index);
    }
  });
});

function updateIndicator(index) {
  const section = sections[index];
  const sectionNum = section.dataset.section;
  const sectionName = section.dataset.name;

  sectionIndicator.textContent = sectionNum;
  sectionLabel.textContent = `${sectionName} / ${getSectionTitle(sectionName)}`;
}

// Autoscroll Feature
const autoscrollBtn = document.querySelector('.autoscroll-btn');
let isAutoscrolling = false;

autoscrollBtn.addEventListener('click', () => {
  isAutoscrolling = !isAutoscrolling;

  if (isAutoscrolling) {
    startAutoscroll();
  } else {
    stopAutoscroll();
  }
});

function startAutoscroll() {
  const scrollSpeed = 2; // pixels per frame

  function scroll() {
    if (!isAutoscrolling) return;

    window.scrollBy(scrollSpeed, 0);

    // Stop at end
    if (window.scrollX >= document.body.scrollWidth - window.innerWidth) {
      stopAutoscroll();
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

function stopAutoscroll() {
  isAutoscrolling = false;
}

// Smooth scroll to sections (optional)
function scrollToSection(index) {
  const section = sections[index];
  section.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}
```

---

## 7. Responsive Design Considerations

### 7.1 Desktop (Primary)
- Optimized for wide screens (1920px+)
- Full horizontal scroll experience
- All sections visible via scroll

### 7.2 Tablet (1024px - 1366px)
- Maintain horizontal scroll
- Adjust section widths proportionally
- Reduce font sizes slightly
- Simplify image galleries

### 7.3 Mobile (< 768px)
**Important: Redesign Required**
- Convert to vertical scrolling
- Stack sections vertically
- Full-width sections
- Simplified image grids (1-2 columns)
- Hamburger menu
- Touch-friendly interactions

```css
@media (max-width: 768px) {
  .horizontal-scroll-container {
    flex-direction: column;
    width: 100vw;
    height: auto;
  }

  .hero-section,
  .content-section {
    width: 100vw;
    height: auto;
    min-height: 100vh;
  }

  body {
    overflow-x: hidden;
    overflow-y: auto;
  }
}
```

---

## 8. Performance Optimization

### 8.1 Image Optimization
- **Format**: WebP with JPEG fallback
- **Lazy Loading**: Load images as sections come into viewport
- **Responsive Images**: Use `srcset` for different screen sizes
- **Compression**: Optimize to 70-80% quality
- **CDN**: Serve images from CDN for faster loading

```html
<img
  src="image-800.webp"
  srcset="image-400.webp 400w,
          image-800.webp 800w,
          image-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 50vw"
  loading="lazy"
  alt="Description"
>
```

### 8.2 CSS Optimization
- Minimize CSS files
- Use CSS Grid/Flexbox efficiently
- Avoid expensive properties (box-shadow, filter) on scroll
- Use `will-change` for animated elements

### 8.3 JavaScript Optimization
- Debounce scroll events
- Use Intersection Observer for section detection
- Lazy load sections outside viewport
- Minimize DOM manipulations

```javascript
// Debounced scroll handler
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(updateScrollPosition, 100);
});

// Intersection Observer for lazy loading
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadSectionContent(entry.target);
    }
  });
}, { rootMargin: '50px' });

sections.forEach(section => observer.observe(section));
```

---

## 9. Animation & Transitions

### 9.1 Scroll Animations
```css
/* Parallax background images */
.background-image {
  transition: transform 0.1s ease-out;
}

/* Fade-in text as section enters viewport */
.text-content {
  opacity: 0;
  transform: translateX(-30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.text-content.visible {
  opacity: 1;
  transform: translateX(0);
}

/* Scale images on hover */
.image-gallery img {
  transition: transform 0.3s ease;
}

.image-gallery img:hover {
  transform: scale(1.05);
}
```

### 9.2 Button Interactions
```css
.btn-request,
.btn-menu {
  transition: background-color 0.3s ease, color 0.3s ease;
}

.btn-request:hover {
  background-color: var(--color-burgundy);
  color: var(--color-white);
}

/* CTA links */
.cta-link {
  position: relative;
  color: var(--color-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.3s ease;
}

.cta-link:hover {
  color: var(--color-burgundy);
}
```

---

## 10. Accessibility Considerations

### 10.1 Keyboard Navigation
- Enable keyboard scroll with arrow keys
- Tab navigation for interactive elements
- Focus indicators on all interactive elements
- Skip to content link

```javascript
// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    window.scrollBy(200, 0);
  } else if (e.key === 'ArrowLeft') {
    window.scrollBy(-200, 0);
  }
});
```

### 10.2 ARIA Labels
```html
<nav aria-label="Main navigation">
  <button aria-label="Request information">Request</button>
  <button aria-label="Open menu">Menu</button>
</nav>

<section aria-labelledby="section-1-heading" data-section="01">
  <h2 id="section-1-heading">Alta Badia, the Dolomites</h2>
</section>
```

### 10.3 Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  html {
    scroll-behavior: auto;
  }
}
```

---

## 11. Browser Compatibility

### 11.1 Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### 11.2 Fallbacks
- Flexbox support required
- CSS Grid for image galleries
- Intersection Observer polyfill for older browsers
- WebP with JPEG fallback

### 11.3 Progressive Enhancement
```css
/* Fallback for browsers without CSS Grid */
@supports not (display: grid) {
  .image-gallery {
    display: flex;
    flex-wrap: wrap;
  }
}

/* Fallback for backdrop-filter */
@supports not (backdrop-filter: blur(10px)) {
  .fixed-header {
    background: rgba(236, 229, 213, 0.95);
  }
}
```

---

## 12. Content Strategy

### 12.1 Section Content Template
Each section should follow this narrative structure:

1. **Visual Introduction** (Background Image)
   - Large, high-impact image
   - Sets emotional tone
   - Relates to section theme

2. **Section Label** (Number + Name)
   - Clear numbering (01-07)
   - Native language term
   - English translation

3. **Compelling Headline**
   - Evocative, emotional language
   - 1-2 sentences maximum
   - Captures essence of section

4. **Body Content**
   - 2-4 short paragraphs
   - Conversational tone
   - Storytelling approach
   - Personal, authentic voice

5. **Supporting Visuals** (Image Gallery)
   - 3-6 supporting images
   - Mix of wide shots and details
   - High visual variety
   - Professional quality

6. **Call-to-Action**
   - Simple text link
   - Invites deeper exploration
   - Conversational language

### 12.2 Writing Tone
- **Personal**: Use "we," "our," "you"
- **Warm**: Friendly, welcoming language
- **Authentic**: Genuine stories, real details
- **Poetic**: Evocative descriptions, sensory language
- **Local**: Reference to place, culture, tradition

---

## 13. Development Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Set up Next.js 16 project structure
- [ ] Install fonts (Young Serif, Syne)
- [ ] Create base CSS variables and reset
- [ ] Build horizontal scroll container
- [ ] Implement fixed header and footer

### Phase 2: Hero & First Section (Week 2)
- [ ] Build hero section layout
- [ ] Create content section template
- [ ] Implement image grids
- [ ] Add typography styles
- [ ] Test horizontal scrolling

### Phase 3: All Sections (Week 3)
- [ ] Build remaining 6 sections
- [ ] Populate with content and images
- [ ] Implement scroll progress indicator
- [ ] Add section transition effects

### Phase 4: Interactivity (Week 4)
- [ ] Add scroll tracking JavaScript
- [ ] Implement autoscroll feature
- [ ] Add keyboard navigation
- [ ] Implement lazy loading
- [ ] Add hover effects

### Phase 5: Responsive (Week 5)
- [ ] Create tablet breakpoints
- [ ] Build mobile vertical layout
- [ ] Test across devices
- [ ] Optimize touch interactions

### Phase 6: Polish & Optimization (Week 6)
- [ ] Image optimization (WebP)
- [ ] Performance testing
- [ ] Accessibility audit
- [ ] Browser compatibility testing
- [ ] SEO optimization

---

## 14. Key Differentiators

What makes this design unique:

1. **Horizontal-First Navigation**: Complete paradigm shift from traditional vertical scrolling
2. **Cinematic Experience**: Wide-format storytelling like a film
3. **Immersive Sections**: Each section is a complete "room" to explore
4. **Natural Pacing**: Physical scroll distance creates intentional pacing
5. **Visual Storytelling**: Images and text create cohesive narratives
6. **Cultural Authenticity**: Ladin language integration, local character
7. **Refined Simplicity**: Minimal UI, maximum content impact

---

## 15. Success Metrics

### User Experience
- Average time on site: Target 3+ minutes
- Scroll depth: Users should reach at least section 4
- Bounce rate: < 30%
- Mobile conversion: Optimize for touch

### Performance
- Page load time: < 3 seconds
- Time to interactive: < 5 seconds
- Lighthouse score: > 90
- Core Web Vitals: All "Good"

### Engagement
- Click-through rate on CTAs: > 5%
- Section completion rate: > 60%
- Return visitor rate: > 20%

---

## 16. Resources Required

### Design Assets
- **Fonts**:
  - Young Serif (Google Fonts or Adobe Fonts)
  - Syne (Google Fonts)

- **Images**:
  - 30-40 high-quality photos
  - Mix of hero shots and detail images
  - Professional photography recommended
  - Minimum 1920px wide for backgrounds

- **Icons/Graphics**:
  - Logo/brand mark
  - Arrow icons for CTAs
  - Play/pause icon for autoscroll

### Development Tools
- **Framework**: Next.js 16 with App Router
- **Styling**: CSS Modules or Tailwind CSS
- **Animations**: Framer Motion (optional)
- **Images**: next/image for optimization
- **Testing**: Playwright for E2E testing

### Team
- 1 Frontend Developer (Full-time, 6 weeks)
- 1 Designer (Part-time, 2 weeks for assets)
- 1 Content Writer (Part-time, 1 week)
- 1 Photographer (Contract, asset sourcing)

---

## Conclusion

The Gran Ander website represents a bold, innovative approach to web design through its horizontal scrolling mechanism. By treating each section as a cinematic frame and using generous whitespace, high-quality imagery, and refined typography, the site creates an immersive, memorable experience.

This design plan provides a complete roadmap to replicate and adapt this unique approach, with careful attention to technical implementation, performance, accessibility, and responsive design. The key to success will be maintaining the balance between visual impact and technical performance while ensuring the experience translates effectively across different devices.

The horizontal scroll pattern works exceptionally well for storytelling-focused websites, portfolios, and premium brand experiences where creating a memorable, distinctive user experience is paramount.
