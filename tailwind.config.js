const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        grey: {
          dark: "#232529",
        },
      },
      fontFamily: {
        streamster: ["Streamster", "sans-serif"],
        VCR: ['"VCR OSD Mono"', "monospace"],
        truetype: ["Truetype", "monospace"],
        monoton: ["Monoton", "cursive"],
      },
      animation: {},
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
