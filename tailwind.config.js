/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        athelas:['Athelas', 'serif'],
        jakarta:['Plus Jakarta Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

