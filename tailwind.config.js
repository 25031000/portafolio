/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/*.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        "questrial": ['"Questrial"', 'sans-serif'],
      },
    },
    colors: {
      "primary": "hsl(302, 7%, 94%)",
      "alternative": "#F1EFF1",
      "tertiary": "rgb(9, 9, 11)",
      "gray": "rgba(175, 167, 167, 19%)",
      "transparent": "transparent",
      "subgray": "#9A9A9A",
      "secondary": "#9489F9"
    }
  },
  plugins: [],
}
