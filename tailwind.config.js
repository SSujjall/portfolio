/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  future: { hoverOnlyWhenSupported: true },
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'serif'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}

