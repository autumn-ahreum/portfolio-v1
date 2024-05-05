/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      animation: {
        'fade-up': 'fade-up 0.7s',
      },
      keyframes: {
        'fade-up': {
          from: {
            opacity: 0.6,
            transform: 'translateY(20px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },

     
      fontFamily: {
        lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
        tektur: ['"Tektur"', ...defaultTheme.fontFamily.sans],
        'display': ['Oswald', ...defaultTheme.fontFamily.sans],
        'body': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        dmsdisplay: ['"DM Serif Display"', ...defaultTheme.fontFamily.serif],
        rowdies: ['"Rowdies"', ...defaultTheme.fontFamily.serif],
        vt323: ['"VT323"', 'monospace'],
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

        '3xl': '1200px',
        // => @media (min-width: 1200px) { ... }

        '4xl': '1920px',
        // => @media (min-width: 1920px) { ... }
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

