// MayanWolfe VOD on 11/20/2022 at 3:00 pm: Intro to TailwindCSS! #100Devs

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["**/*.{html, js}", "**/**/*.{html, js}"],
  theme: {
    screens: {
      'xs': '361px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        'primary-color': '#0fa'
      }
    },
  },
  plugins: [],
}
