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
        '2xl-screen': '15rem',
        'xl-screen': '8rem',
        'lg-screen': '6rem',
        'md-screen': '1.5rem',
        'sm-screen': '8rem'
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateX(40px)' },
          '50%': { transform: 'translateY(5px)' },
        }
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
