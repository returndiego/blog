const colors = require('tailwindcss/colors')

module.exports = {
  // purge: [],
  purge: [
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      gray: colors.warmGray,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
