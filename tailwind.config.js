/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/react-tailwindcss-datepicker/dist/index.esm.js',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter var, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
