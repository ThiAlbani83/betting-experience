/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        background: "rgba(230, 230, 230, 1)",
        "background-dark": "rgba(19, 19, 19, 1)",
        "primary-medium": "rgba(84, 106, 232, 1)",
        "primary-dark": "rgba(31, 1, 185, 1)",
        "primary-light": "rgba(85, 177, 231, 1)",
      },
    },
  },
  plugins: [],
};
