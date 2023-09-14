/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/renderer/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#523e6d",
        secondary: "#ae307a",
        gray: "#b5b5b5",
        lightgray: "#ebebeb",
        black: "#0e0e0e",
        white: "#f3f3f3"
      }
    },
  },
  plugins: [],
}