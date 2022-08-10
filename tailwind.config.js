/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helvetica: "Helvetica",
        helvetica_bold: "Helvetica Bold",
        richard: 'Richard'
      }
    },
  },
  plugins: [],
}