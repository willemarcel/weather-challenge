const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: {
        DEFAULT: '#999999'
      },
      indigo: {
        30: '#A8AABD',
        70: '#51557A',
        80: '#3B3F69',
        DEFAULT: '#262A59'
      },
      yellow: {
        DEFAULT: '#FFC700'
      },
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
