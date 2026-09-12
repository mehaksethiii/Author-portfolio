/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFFF0',
        cream: '#FDFBF7',
        charcoal: '#1A1A1A',
        burgundy: '#800020',
        dustyRose: '#DCAE96',
        subtleGold: '#D4AF37',
        darkBrown: '#3E2723',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
