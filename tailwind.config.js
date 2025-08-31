/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sf': ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'tg-bg-color': 'var(--tg-bg-color)',
        'tg-text-color': 'var(--tg-text-color)',
        'tg-hint-color': 'var(--tg-hint-color)',
        'tg-link-color': 'var(--tg-link-color)',
        'tg-button-color': 'var(--tg-button-color)',
        'tg-button-text-color': 'var(--tg-button-text-color)',
        'tg-secondary-bg-color': 'var(--tg-secondary-bg-color)',
        'tg-accent-text-color': 'var(--tg-accent-text-color)',
        'tg-destructive-text-color': 'var(--tg-destructive-text-color)',
        'tg-header-bg-color': 'var(--tg-header-bg-color)',
        'tg-section-bg-color': 'var(--tg-section-bg-color)',
        'tg-section-header-text-color': 'var(--tg-section-header-text-color)',
        'tg-section-separator-color': 'var(--tg-section-separator-color)',
        'tg-subtitle-text-color': 'var(--tg-subtitle-text-color)',
        'tg-bottom-bar-bg-color': 'var(--tg-bottom-bar-bg-color)',
      }
    },
  },
  plugins: [],
}