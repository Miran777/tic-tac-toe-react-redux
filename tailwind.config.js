/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "600px",
        md: "980px"
      }
    },
  },
  plugins: [],
}