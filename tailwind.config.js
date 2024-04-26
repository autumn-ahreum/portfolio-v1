/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      fontFamily: {
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
        tektur: ['"Tektur"', ...defaultTheme.fontFamily.sans],


      },

      fontSize: {
        'xs' : '12.5px',
      },

      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }

        'md': '960px',
        // => @media (min-width: 960px) { ... }

        'lg': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        'p-color' : "#0b0b0b",
        's-color' : "#ffffff"
      },
    },
  },
  plugins: [
    require('tailwind-hamburgers')
  ],}

