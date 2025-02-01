/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#171a1d",
        "secondary-bg": "#6B4C68",
        "primary-text": "#997095",
        "secondary-text": "#6B4C68"
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
          '0%, 100%': { transform: 'translateX(35px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        scroll: 'scroll 200s linear infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}
