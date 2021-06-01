const { white } = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      white: white,
      green: {
        light: "var(--lightGreen)",
      },
      orange: {
        DEFAULT: "var(--orange)",
      },
      deepBlue: {
        DEFAULT: "var(--deepBlue)",
      },
      black: {
        DEFAULT: "var(--black)",
        dark: "var(--deep)",
      },
      neutral: {
        DEFAULT: "var(--neutral)",
      },
      neutral7: {
        DEFAULT: "var(--neutral-7)",
      },
      gray: {
        light: "var(--lightGray)",
        DEFAULT: "var(--gray)",
        dark: "var(--deepGray)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
