/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    colors: {
      "main-color": "rgba(65, 164, 55)",
      "darker-color": "rgba(55, 144, 35)",
      "main-color-shadow": "rgba(65, 164, 55, 0.8)",
      "main-color-transparency": "rgba(65, 164, 55, 0.5)",
      "main-color-1": "gba(65, 164, 55, 0.15)",
      "main-color-3": "rgba(65, 164, 55, 0.3)",
    },
    fontFamily: {
      montserrat: ["Montserrat-Regular"],
    },
  },
  plugins: [],
};
