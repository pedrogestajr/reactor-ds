/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      
      'cyan': {
        200: '#a5f3fc',
        400: '#61dafb',
      },
      'neutral': {
        50: '#f5f5f5',
        300: '#d4d4d4',
        800: '#262626',
        900: '#171717',
      }
    },
    fontSize: { // TODO: if necessary, set line-height
      'sm': 14,
      'md': 16,
      'lg': 18,
      'xl': 20,
      '2xl': 22,
      '3xl': 24,
      '4xl': 28,
      '5xl': 32
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
