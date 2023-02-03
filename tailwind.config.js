/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      keyframes: {
        colorAnim: {
          '0%, 100%': {
            color: 'white'
          },
          '50%': {
            color: '#FBC638'
          },
        }
      }
    },
  },
  plugins: [],
}