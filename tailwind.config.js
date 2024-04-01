/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        indigo: {
          50: '#f6f1fd', //pricing bg
          100: '#f9fafb', //background
          200: '#c7a0f9', // purple light
          300: '#7f56d9', // purple
          400: '#1b152b', // dark
          500: '#7a7d9c', // grey
          600: '#976ecc', // gradiant
        },
      },
    },
    plugins: [],
  },
};

