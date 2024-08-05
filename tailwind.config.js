/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#0A8020',
        while: '#ffffff',
        black: '#000000',
        red: '#cb1c3b',
        white: '#ffffff'
      },
      boxShadow: {
        category:
          'rgba(0, 0, 0, 0.22) 0px -1px 3px -1px, rgba(0, 0, 0, 0) 0px 4px 5px 0px, rgba(0, 0, 0, 0) 0px 0px 10px 0px',

        '3xl': '0 3px 8px 0 rgb(0, 0, 0, 0.3)'
      },
      height: {
        'fullscreen-minus-64': 'calc(100vh - 64px)'
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif']
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '940px',
      // => @media (min-width: 940px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          'scrollbar-width': 'thin'
        },
        '.scrollbar-none': {
          'scrollbar-width': 'none'
        }
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
  darkMode: 'selector'
}
