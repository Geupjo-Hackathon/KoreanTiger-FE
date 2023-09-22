const variables = require('./tailwind-theme/variables');
const breakpoint = require('./tailwind-theme/breakpoint');
const colors = require('./tailwind-theme/colors');
const fontFamily = require('./tailwind-theme/font-family');
const typography = require('./tailwind-theme/typography');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    variables: variables,
    colors: colors,
    screens: breakpoint,
    extend: {
      fontFamily: fontFamily,
      typography: typography,
    },
  },
  plugins: [],
};
