/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Primary: Electric Lime
        primary: {
          DEFAULT: '#DFFF00',
          dark: '#B8D200',
        },
        // Brand Surface: Deep Charcoal
        surface: {
          DEFAULT: '#131313',
          container: '#1A1A1A',
        },
      },
      fontFamily: {
        // Brand Font: Lexend
        lexend: ['Lexend', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}