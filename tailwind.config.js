/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/js/index.js"],
  theme: {
    extend: {
      colors: {
        "desaturated-red": "hsl(0, 36%, 70%)",
        "soft-red": "hsl(0, 93%, 68%)",
        "dark-grayish-red": "hsl(0, 6%, 24%)",
        "gradient-white": "hsl(0, 0%, 100%)",
        "gradient-white-2": "hsl(0, 100%, 98%)",
        "gradient-red": "hsl(0, 80%, 86%)",
        "gradient-red-2": "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        "josefin": "'Josefin Sans', sans-serif",
      },
      backgroundImage: {
        "hero-bg": "url('./images/bg-pattern-desktop.svg')",
        "hero-img-desktop": "url('./images/hero-desktop.jpg')",
        "hero-img-mobile": "url('./images/hero-mobile.jpg')",
      },
      letterSpacing: {
        "large": "15px"
      }
    },
  },
  plugins: [],
}
