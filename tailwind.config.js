/** @type {import('tailwindcss').Config} */
module.exports = {
  base: '/fresh-pokedex/',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
