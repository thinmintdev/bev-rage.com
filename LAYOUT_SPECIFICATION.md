# Gran Ander Layout Specification
## 40/60 Two-Column Grid System with Flowing Transitions

---

## 🎯 Core Layout Principle

**Every section uses a 40/60 asymmetric two-column grid** that alternates content placement to create visual rhythm and flow.

### The Golden Rule
```
Section Pattern:
[40% Column] | [60% Column]

Alternation:
Section 1: [Images 40%] | [Text 60%]
Section 2: [Text 60%]   | [Images 40%]
Section 3: [Images 40%] | [Text 60%]
Section 4: [Text 60%]   | [Images 40%]
```

---

## 📐 Layout Patterns

### Pattern A: Left Images, Right Text

```
┌─────────────────────────────────────────────────────┐
│                    │                                 │
│   ┌──────────┐    │  01 te nos                      │
│   │  Photo   │    │                                 │
│   │  Large   │    │  Alta Badia, the                │
│   └──────────┘    │  Dolomites: a                   │
│                    │  flavourful family              │
│   ┌────┐ ┌────┐   │  history.                       │
│   │ S1 │ │ S2 │   │                                 │
│   └────┘ └────┘   │  We love flours, bees,          │
│                    │  and flowers in summer,         │
│   40% Images       │  and snow in winter...          │
│                    │                                 │
│                    │  Irsara Family →                │
│                    │                                 │
│                    │  60% Text Content               │
└─────────────────────────────────────────────────────┘
```

### Pattern B: Left Text, Right Images

```
┌─────────────────────────────────────────────────────┐
│                                │                     │
│  04 te ciamena                 │   ┌──────────┐     │
│                                │   │  Person  │     │
│  Dream sweet                   │   │  Making  │     │
│  dreams of larches,            │   │  Bed     │     │
│  Swiss pines, and the          │   └──────────┘     │
│  Sas dla Crusc.                │                     │
│                                │   ┌──────────┐     │
│  Here, you don't have to rush. │   │  Bedroom │     │
│  Here, you don't have          │   │  Interior│     │
│  to stress.                    │   │  Wood    │     │
│  This is a place for peace     │   └──────────┘     │
│  and quiet.                    │                     │
│                                │                     │
│  The rooms →                   │   40% Images        │
│                                │                     │
│  60% Text Content              │                     │
└─────────────────────────────────────────────────────┘
```

### Pattern C: Full-Width Text (Special Sections)

```
┌─────────────────────────────────────────────────────┐
│                                                      │
│  06 d'invern                                        │
│                                                      │
│  The winter season is          WE RECOMMEND YOU     │
│  a magical period at                                │
│  the hotel. Bëgnodüs!          001  A taste for    │
│                                     skiing          │
│                                     Maximilian      │
│  Winter in Alta Badia is all                        │
│  about amazing slopes,          002  A horse-drawn │
│  stunning views, and                sleigh ride    │
│  outstanding hospitality.           Lena           │
│                                                      │
│  Winter in Alta Badia →                             │
│                                                      │
│  40% Main Text              |   60% Recommendations │
└─────────────────────────────────────────────────────┘
```

### Pattern D: Footer/Contact (Color Block)

```
┌─────────────────────────────────────────────────────┐
│  [40% BURGUNDY]           │  [60% BEIGE]            │
│                           │                         │
│  Time to make your        │  ADDRESS                │
│  dreams come true.        │  Str. Runcac, 29        │
│                           │  39036 - Badia (BZ)     │
│  Book your stay →         │  Alta Badia - Dolomites │
│                           │                         │
│                           │  CONTACTS               │
│                           │  info@granander.it      │
│                           │  +39 0471 839718        │
│                           │                         │
│                           │  [Social Links]         │
│                           │  [Partner Logos]        │
│                           │                         │
│  Dark CTA Block           │  Light Info Block       │
└─────────────────────────────────────────────────────┘
```

---

## 🌊 Section Flow & Transitions

### How Sections Connect

The key to the seamless horizontal flow is **visual continuity through overlapping images**:

```
Section N (Pattern A):          Section N+1 (Pattern B):
┌─────────────────────┐        ┌─────────────────────┐
│ [Images] │ [Text]   │        │ [Text]   │ [Images] │
│          │          │────────│          │          │
│  Photos  │  Story   │ FLOWS  │  Story   │  Photos  │
│  Stack   │  Content │   TO   │  Content │  Stack   │
│          │          │────────│          │          │
└─────────────────────┘        └─────────────────────┘
      ↑                              ↑
   Right-side                   Left-side images
   from previous                continue the
   section flows                visual narrative
```

### Transition Mechanics

1. **Image Bridge**: Last image of Section N visually connects to first image of Section N+1
2. **Color Harmony**: Background colors shift gradually (beige → white → beige)
3. **Typography Scale**: Headlines maintain consistent size across transitions
4. **Spacing Rhythm**: Consistent padding creates visual beat

---

## 📏 Precise Measurements

### Column Widths

```css
.section {
  display: flex;
  width: 200vw; /* Each section spans 2 viewports */
  height: 100vh;
}

/* Pattern A: Images Left */
.pattern-a .image-column {
  width: 40%; /* = 80vw */
  flex-shrink: 0;
}

.pattern-a .text-column {
  width: 60%; /* = 120vw */
  flex-shrink: 0;
}

/* Pattern B: Images Right */
.pattern-b .text-column {
  width: 60%; /* = 120vw */
  flex-shrink: 0;
}

.pattern-b .image-column {
  width: 40%; /* = 80vw */
  flex-shrink: 0;
}
```

### Inner Padding & Spacing

```css
/* Text Column Padding */
.text-column {
  padding: 80px 100px; /* Top/Bottom: 80px, Left/Right: 100px */
}

/* Content Wrapper (centering) */
.content-wrapper {
  max-width: 600px; /* Constrain text width for readability */
}

/* Image Column Padding */
.image-column {
  padding: 60px 80px;
  display: flex;
  flex-direction: column;
  gap: 30px; /* Space between stacked images */
}
```

### Typography Spacing

```css
/* Section Label */
.section-label {
  font-size: 18px;
  margin-bottom: 40px;
  letter-spacing: 0.5px;
}

/* Heading */
.section-heading {
  font-size: 60px;
  line-height: 1.2;
  margin-bottom: 50px;
}

/* Body Paragraphs */
.body-content p {
  font-size: 18px;
  line-height: 1.8;
  margin-bottom: 0; /* No gap between broken lines */
}

.body-content {
  margin-bottom: 50px;
}

/* CTA Link */
.cta-link {
  font-size: 18px;
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

---

## 🖼️ Image Grid Patterns

### Grid Type 1: Vertical Stack (Most Common)

```
┌─────────────────┐
│                 │
│  Large Photo    │
│  (Full Width)   │
│  Aspect: 4:3    │
│                 │
├─────────────────┤
│        │        │
│ Medium │ Medium │
│ Photo  │ Photo  │
│ 1:1    │ 1:1    │
│        │        │
└────────┴────────┘
```

```css
.image-grid-stack {
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
}

.grid-item-large {
  flex: 2;
  object-fit: cover;
  border-radius: 0;
}

.grid-row {
  display: flex;
  gap: 30px;
  flex: 1;
}

.grid-item-medium {
  flex: 1;
  object-fit: cover;
}
```

### Grid Type 2: Overlapping Layout

```
┌─────────────────┐
│     ┌───────┐   │
│ Lg  │ Small │   │
│ BG  │ Over  │   │
│ Img │ lay   │   │
│     └───────┘   │
│                 │
│  ┌──────────┐   │
│  │ Medium   │   │
│  └──────────┘   │
└─────────────────┘
```

```css
.image-grid-overlap {
  position: relative;
  height: 100%;
}

.background-large {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60%;
  object-fit: cover;
  z-index: 1;
}

.overlay-small {
  position: absolute;
  top: 20%;
  right: 10%;
  width: 40%;
  height: 30%;
  object-fit: cover;
  z-index: 2;
  box-shadow: 0 10px 40px rgba(0,0,0,0.2);
}

.bottom-medium {
  position: absolute;
  bottom: 0;
  left: 5%;
  width: 60%;
  height: 35%;
  object-fit: cover;
  z-index: 1;
}
```

---

## 🎨 Text Styling Patterns

### Headline Line Breaking

**Key Rule**: Break headlines at natural word boundaries to create visual drama

```html
<!-- ❌ Wrong: Single line -->
<h2>Dream sweet dreams of larches, Swiss pines, and the Sas dla Crusc.</h2>

<!-- ✅ Correct: Stacked lines -->
<h2>
  Dream sweet<br/>
  dreams of larches,<br/>
  Swiss pines, and the<br/>
  Sas dla Crusc.
</h2>
```

**CSS for Stacked Headlines:**
```css
.section-heading {
  font-family: 'Young Serif', serif;
  font-size: 60px;
  line-height: 1.2; /* Tight line spacing */
  font-weight: 400;
  color: #222222;
  max-width: 600px; /* Force wrapping */
}

.section-heading br {
  display: block;
  content: '';
  margin-bottom: 0; /* No extra spacing */
}
```

### Body Text Line Breaking

**Key Rule**: Break paragraphs into short visual lines for readability

```html
<!-- Original single paragraph -->
<p>We love flours, bees, and flowers in summer, and snow in winter. We have a small mill, a vegetable garden, beehives.</p>

<!-- Broken into visual lines -->
<div class="body-content">
  <p>We love flours, bees, and flowers in summer,</p>
  <p>and snow in winter. We have a small mill, a</p>
  <p>vegetable garden, beehives. We knead bread,</p>
  <p>smoke and dry meat, and grow vegetables. All</p>
  <p>that while embodying the concept of</p>
  <p>sustainability, and never forgetting to smile.</p>
</div>
```

**CSS for Body Lines:**
```css
.body-content {
  display: flex;
  flex-direction: column;
  gap: 0; /* No gap between lines */
}

.body-content p {
  font-family: 'Syne', sans-serif;
  font-size: 18px;
  line-height: 1.8;
  color: #222222;
  max-width: 500px; /* ~50 characters per line */
  margin: 0;
}
```

---

## 🎪 Section Component Templates

### Template 1: Pattern A (Images Left, Text Right)

```jsx
export function SectionPatternA({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
  images
}) {
  return (
    <section className="content-section pattern-a" style={{ width: '200vw' }}>
      {/* 40% Image Column */}
      <div className="image-column">
        <div className="image-grid-stack">
          <img
            src={images.large}
            alt=""
            className="grid-item-large"
            loading="lazy"
          />
          <div className="grid-row">
            <img
              src={images.medium1}
              alt=""
              className="grid-item-medium"
              loading="lazy"
            />
            <img
              src={images.medium2}
              alt=""
              className="grid-item-medium"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* 60% Text Column */}
      <div className="text-column">
        <div className="content-wrapper">
          <p className="section-label">
            {sectionNumber} / {sectionLabel}
          </p>

          <h2 className="section-heading">
            {headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <div className="body-content">
            {bodyText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <a href={ctaLink} className="cta-link">
            {ctaText} →
          </a>
        </div>
      </div>
    </section>
  );
}
```

### Template 2: Pattern B (Text Left, Images Right)

```jsx
export function SectionPatternB({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
  images
}) {
  return (
    <section className="content-section pattern-b" style={{ width: '200vw' }}>
      {/* 60% Text Column */}
      <div className="text-column">
        <div className="content-wrapper">
          <p className="section-label">
            {sectionNumber} / {sectionLabel}
          </p>

          <h2 className="section-heading">
            {headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <div className="body-content">
            {bodyText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <a href={ctaLink} className="cta-link">
            {ctaText} →
          </a>
        </div>
      </div>

      {/* 40% Image Column */}
      <div className="image-column">
        <div className="image-grid-stack">
          <img
            src={images.large}
            alt=""
            className="grid-item-large"
            loading="lazy"
          />
          <img
            src={images.medium}
            alt=""
            className="grid-item-medium"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
```

### Template 3: Pattern C (Recommendations List)

```jsx
export function SectionRecommendations({
  sectionNumber,
  sectionLabel,
  headline,
  bodyText,
  ctaText,
  ctaLink,
  recommendations
}) {
  return (
    <section className="content-section pattern-c" style={{ width: '200vw' }}>
      {/* 40% Main Text */}
      <div className="text-column">
        <div className="content-wrapper">
          <p className="section-label">
            {sectionNumber} / {sectionLabel}
          </p>

          <h2 className="section-heading">
            {headline.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < headline.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </h2>

          <div className="body-content">
            {bodyText.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          <a href={ctaLink} className="cta-link">
            {ctaText} →
          </a>
        </div>
      </div>

      {/* 60% Recommendations */}
      <div className="recommendations-column">
        <h3 className="recommendations-heading">WE RECOMMEND YOU</h3>

        <div className="recommendations-list">
          {recommendations.map((rec, i) => (
            <div key={i} className="recommendation-item">
              <span className="rec-number">
                {String(i + 1).padStart(3, '0')}
              </span>
              <div className="rec-content">
                <h4 className="rec-title">{rec.title}</h4>
                <p className="rec-author">{rec.suggestedBy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

## 🎯 Complete CSS Framework

```css
/* ==========================================================================
   40/60 Layout System
   ========================================================================== */

:root {
  --color-beige: #ECE5D5;
  --color-dark: #222222;
  --color-burgundy: #803D3B;
  --color-gray: #595959;
  --color-white: #FFFFFF;

  --font-serif: 'Young Serif', serif;
  --font-sans: 'Syne', sans-serif;

  --column-40: 40%;
  --column-60: 60%;

  --spacing-xl: 100px;
  --spacing-lg: 80px;
  --spacing-md: 50px;
  --spacing-sm: 30px;
}

/* Section Base */
.content-section {
  display: flex;
  width: 200vw;
  height: 100vh;
  flex-shrink: 0;
  background: var(--color-beige);
}

/* Column Bases */
.image-column,
.text-column,
.recommendations-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

/* Pattern A: Images Left, Text Right */
.pattern-a .image-column {
  width: var(--column-40);
  padding: 60px 80px;
}

.pattern-a .text-column {
  width: var(--column-60);
  padding: var(--spacing-lg) var(--spacing-xl);
}

/* Pattern B: Text Left, Images Right */
.pattern-b .text-column {
  width: var(--column-60);
  padding: var(--spacing-lg) var(--spacing-xl);
}

.pattern-b .image-column {
  width: var(--column-40);
  padding: 60px 80px;
}

/* Pattern C: Text Left, List Right */
.pattern-c .text-column {
  width: var(--column-40);
  padding: var(--spacing-lg) var(--spacing-xl);
}

.pattern-c .recommendations-column {
  width: var(--column-60);
  padding: var(--spacing-lg) var(--spacing-xl);
}

/* Content Wrapper */
.content-wrapper {
  max-width: 600px;
}

/* Typography */
.section-label {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-gray);
  text-transform: lowercase;
  letter-spacing: 0.5px;
  margin-bottom: 40px;
}

.section-heading {
  font-family: var(--font-serif);
  font-size: 60px;
  font-weight: 400;
  line-height: 1.2;
  color: var(--color-dark);
  margin-bottom: var(--spacing-md);
}

.body-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: var(--spacing-md);
}

.body-content p {
  font-family: var(--font-sans);
  font-size: 18px;
  line-height: 1.8;
  color: var(--color-dark);
  margin: 0;
  max-width: 500px;
}

.cta-link {
  font-family: var(--font-sans);
  font-size: 18px;
  color: var(--color-dark);
  text-decoration: underline;
  text-underline-offset: 4px;
  transition: color 0.3s ease;
}

.cta-link:hover {
  color: var(--color-burgundy);
}

/* Image Grids */
.image-grid-stack {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  height: 100%;
}

.grid-item-large {
  flex: 2;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

.grid-row {
  display: flex;
  gap: var(--spacing-sm);
  flex: 1;
}

.grid-item-medium {
  flex: 1;
  width: 100%;
  object-fit: cover;
  border-radius: 0;
}

/* Recommendations */
.recommendations-heading {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-gray);
  margin-bottom: 40px;
}

.recommendations-list {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.recommendation-item {
  display: flex;
  gap: 30px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.1);
}

.rec-number {
  font-family: var(--font-sans);
  font-size: 18px;
  font-weight: 600;
  color: var(--color-gray);
}

.rec-content {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.rec-title {
  font-family: var(--font-serif);
  font-size: 32px;
  font-weight: 400;
  line-height: 1.3;
  color: var(--color-dark);
  margin: 0;
}

.rec-author {
  font-family: var(--font-sans);
  font-size: 18px;
  color: var(--color-gray);
  margin: 0;
}

/* Footer Pattern */
.footer-section {
  display: flex;
  width: 200vw;
  height: 100vh;
  flex-shrink: 0;
}

.footer-cta {
  width: var(--column-40);
  background: var(--color-burgundy);
  color: var(--color-white);
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.footer-cta h2 {
  font-family: var(--font-serif);
  font-size: 48px;
  line-height: 1.3;
  margin-bottom: 60px;
}

.footer-cta .cta-link {
  color: var(--color-white);
}

.footer-info {
  width: var(--column-60);
  background: var(--color-beige);
  padding: var(--spacing-lg) var(--spacing-xl);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.contact-section {
  margin-bottom: 60px;
}

.contact-section h3 {
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--color-gray);
  margin-bottom: 20px;
}

.contact-section p,
.contact-section a {
  font-family: var(--font-serif);
  font-size: 24px;
  color: var(--color-dark);
  margin: 5px 0;
  text-decoration: none;
}

.partner-logos {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
  align-items: center;
}

.partner-logos img {
  height: 40px;
  width: auto;
  object-fit: contain;
}
```

---

## 📱 Responsive Breakpoints

### Mobile (<768px): Vertical Stack

```css
@media (max-width: 768px) {
  .content-section {
    flex-direction: column;
    width: 100vw;
    height: auto;
    min-height: 100vh;
  }

  .pattern-a .image-column,
  .pattern-a .text-column,
  .pattern-b .text-column,
  .pattern-b .image-column,
  .pattern-c .text-column,
  .pattern-c .recommendations-column {
    width: 100%;
    padding: 40px 20px;
  }

  .section-heading {
    font-size: 36px;
  }

  .body-content p {
    font-size: 16px;
  }

  .image-grid-stack {
    height: auto;
    min-height: 60vh;
  }
}
```

---

## ✅ Implementation Checklist

- [ ] Set up 40/60 grid system with flexbox
- [ ] Create alternating pattern components (A, B, C)
- [ ] Implement image grid layouts (stack, overlap)
- [ ] Style typography with line breaking
- [ ] Add section transitions and flow
- [ ] Build recommendation list pattern
- [ ] Create footer color block pattern
- [ ] Implement responsive breakpoints
- [ ] Test horizontal scroll integration with GSAP
- [ ] Optimize image loading and performance

---

## 🎓 Key Takeaways

1. **40/60 is the golden ratio** - Not 50/50, creates visual interest
2. **Alternation creates rhythm** - Pattern A → B → A → B
3. **Images bridge sections** - Visual continuity through flow
4. **Line breaks are intentional** - Headlines and body text carefully broken
5. **Asymmetry creates elegance** - Uneven columns feel more refined
6. **White space is content** - Generous padding creates breathing room
7. **Typography tells the story** - Serif headlines, sans-serif body
8. **Color blocks punctuate** - Burgundy footer anchors the experience

This layout system creates a sophisticated, memorable horizontal scrolling experience that guides users through a curated narrative journey.
