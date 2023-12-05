/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      boxShadow: {
        '3xl': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
      }
    },
  },
  plugins: [],
}

