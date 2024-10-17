/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#19121F",
        "primary-dark2": "#372743",
        "primary-pink": "#DD0CFF",
        "primary-indigo": "#27123C",
        "primary-indigo-light": "#372743",
      },
      fontFamily: {
        "CabinCondensed": ["Cabin Condensed", "Sarif"],
        "Poppins": ["Poppins", "Sarif"]
      },

    },
  },
  plugins: [],
}
