module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
  ],

  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "cyan-button-color": "hsl(180, 66%, 49%)",
      "cyan-button-hover-color": "#9be3e2",
      "dark-violet-color": "hsl(257, 27%, 26%)",
      "red-warning-color": "hsl(0, 87%, 67%)",
      "gray-color": "hsl(0, 0%, 75%)",
      "grayish-violet-color": "hsl(257, 7%, 63%)",
      "very-dark-blue-color": "hsl(255, 11%, 22%)",
      "very-dark-violet-color": "hsl(260, 8%, 14%)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      "cyan-button-color": "hsl(180, 66%, 49%)",
      "cyan-button-hover-color": "#9be3e2",
      "dark-violet-color": "hsl(257, 27%, 26%)",
      "red-warning-color": "hsl(0, 87%, 67%)",
      "gray-color": "hsl(0, 0%, 75%)",
      "grayish-violet-color": "hsl(257, 7%, 63%)",
      "very-dark-blue-color": "hsl(255, 11%, 22%)",
      "very-dark-violet-color": "hsl(260, 8%, 14%)",
    }),
    extend: {
      backgroundImage: (theme) => ({
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
        "shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
