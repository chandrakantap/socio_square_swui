const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bgprimary: colors.gray[800],
        bgsecondary: colors.gray[700],
      },
    },
  },
  plugins: [],
};
