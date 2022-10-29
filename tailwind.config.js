/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#2b468b",
        secondary: "#7499f1",
        darkblue: "#233863",
        darkgreen: "#599cad",
        lightgreen: "#86d1cd",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
    screens: {
      xl: { max: "1279px" },

      lg: { max: "1023px" },

      md: { max: "767px" },

      sm: { max: "639px" },
    },
  },
  plugins: [],
};
