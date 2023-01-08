/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ["Abril Fatface", "cursive"],
        gara: ["Cormorant Garamond", "serif"],
        custom: ["Montserrat", "sans-serif"],
      },
      colors: {
        primary: "#222831",
        "primary-light": "#393E46",
        "primary-color": "#D82148",
        "primary-white": "#EEEEEE",
        "light-theme-gray": "#bfbfbf",
        "light-button-gray": "#bfbfbf",
        "light-font": "#474747",
        glass: "#ffffff26",
      },
      borderRadius: {
        card: "10px",
      },
      boxShadow: {
        "light-card":
          "-12px -12px 12px 0 rgba(58, 58, 58, 0.3),12px 12px 12px 0 rgba(0,0,0,.2)",
        "light-button":
          "6px 6px 8px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)",
        glass: "0 0 1rem 0 rgba(0, 0, 0, .2)",
      },
      height: {
        card: "300px",
        button: "40px",
      },
      width: {
        card: "250px",
        button: "100px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
