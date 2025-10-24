import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#4A3728',
        'brown-light': '#8B7355',
        'beige': '#ECE5D5',
        'beige-dark': '#D4C4A8',
        'burgundy': '#6B2C3E',
        'dark': '#2C2C2C',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-serif)', 'Georgia', 'serif'],
        'cursive': ['Pacifico', 'cursive'],
      },
      spacing: {
        'xl': '7.5rem',   // 120px
        'lg': '5rem',     // 80px
        'md': '3.75rem',  // 60px
        'sm': '2rem',     // 32px
      },
      fontSize: {
        'hero-logo': '16rem',
        'hero-title': '4.5rem',
        'section-heading': '3.375rem',
        'hero-subtitle': '1.5rem',
      },
    },
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
    },
  },
  plugins: [],
}
export default config
