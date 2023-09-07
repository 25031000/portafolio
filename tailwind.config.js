/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "questrial": ['"Questrial"', 'cursive'],
        "nixie": ['"Nixie One"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
