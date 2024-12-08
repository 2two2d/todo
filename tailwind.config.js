/** @type {import('tailwindcss').Config} */

const backgroundColors = {
  primary: '#F8F8F9'
}

const textColors = {
  primary: '#111439'
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      colors: {
        bg: backgroundColors
      }
    },
  },
  plugins: [],
}

