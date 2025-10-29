/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          DEFAULT: '#dc2626',
        },
        secondary: {
          DEFAULT: '#e2e8f0',
          foreground: '#1e293b',
        },
        background: '#ece4d7',
        foreground: '#0f172a',
        ring: '#dc2626',
        lightOrange: {
          50: '#fefcf9',
          100: '#fdf8f0',
          200: '#faf0e1',
          300: '#f6e5c7',
          400: '#f0d4a8',
          500: '#ece4d7',
          600: '#e0d0b8',
          700: '#d4bc99',
          800: '#c8a87a',
          900: '#bc945b',
          DEFAULT: '#ece4d7',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        'elegant': ['Playfair Display', 'serif'],
        'modern': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-elegant': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} 