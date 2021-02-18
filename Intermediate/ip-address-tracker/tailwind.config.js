module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "very-dark-gray": "hsl(0, 0%, 17%)",
      "dark-gray": "hsl(0, 0%, 59%)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "very-dark-gray": "hsl(0, 0%, 17%)",
      "dark-gray": "hsl(0, 0%, 59%)",
    }),
    extend: {
      backgroundImage: (theme) => ({
        pattern: "url('/images/pattern-bg.png')",
      }),
    },
    fontSize: {
      headingMobile: "10px",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
