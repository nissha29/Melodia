/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#215B4B",
        "secondary-bg": "#16271D",
        "primary-text": "#215B4B",
        "secondary-text": "#16271D"
      },
      fontFamily: {
        "playwrite": ["Playwrite US Modern", "Serif"],
      },
      spacing: {
        'default': '4rem',
      }
    },
  },
  plugins: [],
}
