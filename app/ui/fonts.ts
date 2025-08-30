import { Inter, Roboto_Mono, Playfair_Display, Montserrat } from 'next/font/google'

// Primary sans-serif font for body text
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Monospace font for code or technical content
export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})

// Elegant serif font for headings and featured text
export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

// Modern sans-serif alternative for UI elements
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

// Font variables for consistent usage throughout the app
export const fontVariables = {
  // Font families
  sans: 'var(--font-inter)',
  serif: 'var(--font-playfair)',
  mono: 'var(--font-roboto-mono)',
  alt: 'var(--font-montserrat)',
  brand: '"Times New Roman", Times, serif', // Brand font for logo and special elements
  
  // Font sizes (in rem for accessibility)
  size: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    md: '1.125rem',   // 18px
    lg: '1.25rem',    // 20px
    xl: '1.5rem',     // 24px
    '2xl': '1.75rem', // 28px
    '3xl': '2rem',    // 32px
    '4xl': '2.5rem',  // 40px
    '5xl': '3rem',    // 48px
  },
  
  // Font weights
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Line heights
  lineHeight: {
    none: 1,
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  
  // Letter spacing
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
    brand: '0.75vw', // Special spacing for brand elements
  },
}