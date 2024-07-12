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
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [],
  darkMode: 'selector'
}
