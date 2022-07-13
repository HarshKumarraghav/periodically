/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        head: ['Abril Fatface', "cursive"],
        gara: ['Cormorant Garamond', "serif"],
        custom: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary": "#232931",
        "primary-light": "#393E46",
        "primary-color": "#703DFE",
        "primary-white": "#EEEEEE",
        "light-theme-gray": "#bfbfbf",
        "light-button-gray": "#bfbfbf",
        "light-font": "#474747"
      },
      borderRadius: {
        card: "10px"
      },
      boxShadow: {
        "light-card":
          "12px 12px 16px 0 rgba(255, 255, 255, 0.3), -8px -8px 12px 0 rgba(0, 0, 0, .25)",
        "light-button":
          "6px 6px 8px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)"
      },
      height: {
        card: "300px",
        button: "40px"
      },
      width: {
        card: "250px",
        button: "100px"
      }
    },
  },
  plugins: [],
};
