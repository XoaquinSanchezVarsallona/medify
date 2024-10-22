/** @type {import('tailwindcss').Config} */
const Colors = require("../app/src/common-constraints/Colors")
const Text = require("../app/src/common-constraints/Text")

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      ...Colors,
      ...Text
    },
  },
  plugins: [],
}

