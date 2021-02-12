module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "dark-mode-elements": "hsl(209, 23%, 22%)",
      "dark-mode-background": "hsl(207, 26%, 17%)",
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-mode-input": "hsl(0, 0%, 52%)",
      "light-mode-background": "hsl(0, 0%, 98%)",
      "dark-mode-text-and-light-mode-elements": "hsl(0, 0%, 100%)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "dark-mode-elements": "hsl(209, 23%, 22%)",
      "dark-mode-background": "hsl(207, 26%, 17%)",
      "light-mode-text": "hsl(200, 15%, 8%)",
      "light-mode-input": "hsl(0, 0%, 52%)",
      "light-mode-background": "hsl(0, 0%, 98%)",
      "dark-mode-text-and-light-mode-elements": "hsl(0, 0%, 100%)",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
