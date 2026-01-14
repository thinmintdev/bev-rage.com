# Project Index: BevRage

Generated: 2026-01-14

---

## 📁 Project Structure

```
bevrage/
├── app/
│   ├── components/          # React components (15 files)
│   ├── globals.css          # Global styles + Tailwind (~1000 lines)
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page composition
├── public/
│   ├── stock/               # 8 WebP images for content
│   └── favicon assets       # PWA-ready icons
├── DESIGN_PLAN.md           # Design specification
├── HORIZONTAL_SCROLL_IMPLEMENTATION.md
├── LAYOUT_SPECIFICATION.md
├── SETUP_INSTRUCTIONS.md
└── TAILWIND_USAGE.md
```

---

## 🚀 Entry Points

| Entry | Path | Purpose |
|-------|------|---------|
| Main Page | `app/page.tsx` | Composes all sections with horizontal scroll |
| Layout | `app/layout.tsx` | Root layout, fonts (Geist, Arvo, Pacifico) |
| Styles | `app/globals.css` | CSS variables, component styles, responsive |
| Config | `next.config.ts` | Next.js 16 configuration |

---

## 🏗️ Architecture Overview

### Horizontal Scroll System

**Core mechanism**: Vertical scroll drives horizontal movement on desktop (≥1024px)

```
HorizontalScroll.tsx (GSAP ScrollTrigger)
├── Calculates total section widths
├── Sets body height for scroll distance
├── Transforms main container on scroll
└── Falls back to vertical scroll on mobile (<1024px)
```

**Key files**:
- `HorizontalScroll.tsx:35-109` - GSAP ScrollTrigger setup
- `globals.css:57-91` - `.scroll-container`, `.horizontal-sections`

### Section Layout Pattern

All sections use **35/65 split** (text/image) on desktop:

```
┌─────────────────────────────────────────────────────┐
│  Text (35%)         │    Images (65%)               │
│  - Section label    │    - Staggered grid           │
│  - Headline         │    - 3 images with overlaps   │
│  - Body text        │    - Aspect ratios: 4:3, 3:4  │
│  - CTA link         │                               │
└─────────────────────────────────────────────────────┘
```

Section width: `120vw` on desktop for overlap effect

---

## 📦 Components

### Navigation

| Component | Lines | Purpose |
|-----------|-------|---------|
| `Header.tsx` | 99 | Fixed header, brand, nav links, hamburger |
| `NavMenu.tsx` | 120 | Full-screen mobile menu, section navigation |
| `ScrollIndicator.tsx` | 188 | Bottom-left progress, prev/next, auto-scroll |

### Sections

| Component | Lines | Purpose |
|-----------|-------|---------|
| `HeroSection.tsx` | 198 | Landing hero with logo "br", CTA |
| `SectionPatternB.tsx` | 184 | Text-left, images-right layout |
| `ServicesSection.tsx` | 116 | 3x2 image grid |
| `ContentHeroSection.tsx` | 166 | Full-bleed background image section |
| `ContactSectionB.tsx` | 321 | Contact form + info |

### Utilities

| Component | Purpose |
|-----------|---------|
| `ContactForm.tsx` | Form submission handling |
| `FAQAccordion.tsx` | Expandable Q&A |

---

## 🧭 Navigation Flow

### Desktop (≥1024px)
```
Header nav links → scrollToSection() → window.scrollTo({ top: calculated })
                                      ↓
                   GSAP converts vertical scroll → horizontal transform
```

### Mobile (<1024px)
```
NavMenu opens → handleSectionClick() → element.scrollIntoView()
               (direct vertical scroll, no horizontal transform)
```

### Section Navigation Logic

```typescript
// Calculate scroll position for section index
for (i = 0; i < targetIndex; i++) {
  targetX += sections[i].offsetWidth;
}
scrollY = (targetX / scrollDistance) * maxScroll;
window.scrollTo({ top: scrollY });
```

---

## 🎨 Design System

### Colors (CSS Variables)

```css
--color-beige: #ECE5D5       /* Background */
--color-brown-dark: #35220c  /* Headings */
--color-brown-light: #63482c /* Body, links */
--color-burgundy: #803D3B    /* Hover accents */
```

### Typography

| Use | Font | Sizes |
|-----|------|-------|
| Headings | Young Serif | 2.375rem - 4.5rem |
| Body | Syne (--font-sans) | 1rem - 1.25rem |
| Logo "br" | Pacifico | 4rem - 12rem |
| Navigation | Arvo | 14px |

### Breakpoints

| Width | Behavior |
|-------|----------|
| <768px | Mobile portrait, hamburger menu visible |
| 768-1023px | Tablet, vertical scroll |
| ≥1024px | Desktop, horizontal scroll active |

---

## 🔧 Configuration

| File | Purpose |
|------|---------|
| `package.json` | Dependencies: Next 16, React 19, GSAP, Framer Motion |
| `tailwind.config.ts` | Tailwind v4 with custom theme extension |
| `tsconfig.json` | TypeScript strict mode |
| `.mcp.json` | MCP server configuration |

---

## 📚 Documentation Files

| File | Content |
|------|---------|
| `DESIGN_PLAN.md` | Complete design specification |
| `HORIZONTAL_SCROLL_IMPLEMENTATION.md` | GSAP scroll technique details |
| `LAYOUT_SPECIFICATION.md` | Section layout patterns |
| `SETUP_INSTRUCTIONS.md` | Development setup guide |
| `TAILWIND_USAGE.md` | Tailwind class conventions |

---

## 🔗 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 16.0.10 | React framework |
| react | 19.2.0 | UI library |
| gsap | 3.13.0 | Scroll animations |
| framer-motion | 12.23.24 | Component animations |
| tailwindcss | 4.x | Utility CSS |

---

## 📝 Quick Start

```bash
# Install dependencies
npm install

# Start dev server (port 3003)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🎯 Section Order (Homepage)

| Index | Number | Label | Component |
|-------|--------|-------|-----------|
| 0 | 00 | Home | `HeroSection` |
| 1 | 01 | About | `SectionPatternB` |
| 2 | 02 | Drink Bars | `ServicesSection` |
| 3 | 03 | Events | `ContentHeroSection` |
| 4 | 04 | Contact Us | `ContactSectionB` |

---

## ⚡ Performance Notes

- Images: WebP format, lazy loading via `loading="eager"` for above-fold
- CSS: `contain: layout style paint` on sections
- Scroll: `will-change: transform` on horizontal container
- Fonts: Google Fonts with `display=swap`

---

*Index size: ~4KB | Last updated: 2026-01-14*
