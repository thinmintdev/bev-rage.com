# Tailwind CSS Usage Guide

## Project Setup
This project uses a **hybrid approach**:
- **Existing components**: Keep using globals.css classes
- **New components**: Use Tailwind inline utilities

## Custom Design Tokens

### Colors
```tsx
className="text-brown-dark"     // #4A3728
className="text-brown-light"    // #8B7355
className="bg-beige"            // #ECE5D5
className="bg-beige-dark"       // #D4C4A8
className="text-burgundy"       // #6B2C3E
className="text-dark"           // #2C2C2C
```

### Typography
```tsx
className="font-sans"           // Syne
className="font-serif"          // Young Serif
className="font-cursive"        // Pacifico

className="text-hero-logo"      // 16rem
className="text-hero-title"     // 4.5rem (72px)
className="text-section-heading" // 3.375rem (54px)
className="text-hero-subtitle"  // 1.5rem (24px)
```

### Spacing
```tsx
className="p-sm"    // 2rem (32px)
className="p-md"    // 3.75rem (60px)
className="p-lg"    // 5rem (80px)
className="p-xl"    // 7.5rem (120px)
```

## Responsive Design Patterns

### Mobile-First Approach
Always start with mobile, then add breakpoints:

```tsx
// Base = mobile (< 768px)
// sm: = tablet (≥ 768px)
// md: = desktop (≥ 1024px)
// lg: = large desktop (≥ 1280px)
```

### Full-Width Images on Mobile
```tsx
<img
  src="/image.jpg"
  className="w-full md:w-auto md:max-w-2xl lg:max-w-4xl"
  alt="Responsive image"
/>
```

### Centered Text/Headings
```tsx
<h1 className="text-center md:text-left text-4xl md:text-5xl lg:text-6xl">
  Responsive Heading
</h1>
```

### Consistent Padding Pattern
```tsx
<section className="p-6 sm:p-10 md:p-16 lg:p-20">
  {/* Content */}
</section>
```

### Layout: Column to Row
```tsx
<div className="flex flex-col md:flex-row gap-6 md:gap-10">
  <div className="w-full md:w-1/2">Column 1</div>
  <div className="w-full md:w-1/2">Column 2</div>
</div>
```

## Example: New Component

```tsx
'use client';

export default function NewFeature() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 md:p-16 lg:p-20 bg-beige">
      {/* Logo */}
      <div className="font-cursive text-hero-logo text-brown-dark mb-10">
        br
      </div>

      {/* Title */}
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-hero-title text-brown-dark text-center mb-6">
        New Feature Title
      </h1>

      {/* Subtitle */}
      <p className="font-sans text-base sm:text-lg md:text-xl lg:text-hero-subtitle text-brown-light text-center max-w-2xl mb-10">
        A responsive subtitle that scales beautifully across all devices with consistent spacing.
      </p>

      {/* CTA Group */}
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        <button className="px-6 py-3 bg-transparent border border-brown-light text-brown-light rounded-full hover:bg-brown-light hover:text-beige transition-all duration-300 text-lg">
          Get Started
        </button>
        <a href="#learn" className="text-brown-light hover:text-burgundy underline underline-offset-4 text-base opacity-80 hover:opacity-100">
          Learn more →
        </a>
      </div>

      {/* Image */}
      <img
        src="/stock/opt/282179354-min.jpeg"
        alt="Feature image"
        className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mt-10 rounded-lg shadow-lg object-cover"
      />
    </section>
  );
}
```

## Best Practices

### ✅ DO
- Use Tailwind for new components
- Keep mobile-first mindset (base → sm → md → lg)
- Use rem-based utilities (text-lg, p-6, etc.)
- Use custom color names from config
- Combine utilities for responsive behavior

### ❌ DON'T
- Refactor existing components to Tailwind (keep as-is)
- Mix inline styles with Tailwind classes
- Use arbitrary values unless necessary
- Forget responsive prefixes for multi-device support

## Common Patterns

### Card Component
```tsx
<div className="bg-white rounded-lg shadow-md p-6 md:p-8 hover:shadow-xl transition-shadow">
  <h3 className="text-xl md:text-2xl font-serif text-brown-dark mb-4">Title</h3>
  <p className="text-base md:text-lg text-dark leading-relaxed">Content</p>
</div>
```

### Grid Layout
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Centered Container
```tsx
<div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16">
  {/* Content automatically centered with responsive padding */}
</div>
```

## Questions?
Refer to the [Tailwind CSS documentation](https://tailwindcss.com/docs) for additional utilities and patterns.
