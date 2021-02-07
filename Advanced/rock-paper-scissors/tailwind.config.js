module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      22: "22px",
      24: "24px",
      26: "26px",
      30: "30px",
    },
    extend: {
      spacing: {
        72: "18rem",
        84: "21rem",
        88: "22rem",
        92: "23rem",
        96: "24rem",
      },
      cursor: ["hover"],
      backgroundImage: (theme) => ({
        triangle: "url('/images/bg-triangle.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
