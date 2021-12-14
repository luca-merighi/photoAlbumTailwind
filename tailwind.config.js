module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        bar: "2px",
        large: "35rem"
      },
      height: {
        divider: "2px"
      },
      color: {
        white: "f9f9f9"
      },
      screens: {
        'notebook': '1366px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
