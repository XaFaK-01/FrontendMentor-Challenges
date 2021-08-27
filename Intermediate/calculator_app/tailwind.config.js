module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      // ** theme 1 **
      // * backgrounds *
      "theme-1-backgrounds-main-background": "hsl(222, 26%, 31%)",
      "theme-1-backgrounds-toggle-background": "hsl(223, 31%, 20%)",
      "theme-1-backgrounds-screen-background": "hsl(224, 36%, 15%)",
      // * keys *
      // first key
      "theme-1-keys-1-key-background": "hsl(225, 21%, 49%)",
      "theme-1-keys-1-key-shadow": "hsl(224, 28%, 35%)",
      // second key
      "theme-1-keys-2-key-background": "hsl(6, 63%, 50%)",
      "theme-1-keys-2-key-shadow": "hsl(6, 70%, 34%)",
      // third key
      "theme-1-keys-3-key-background": "hsl(30, 25%, 89%)",
      "theme-1-keys-3-key-shadow": "hsl(28, 16%, 65%)",

      // ** theme 2 **
      // * backgrounds *
      "theme-2-backgrounds-main-background": "hsl(0, 0%, 90%)",
      "theme-2-backgrounds-toggle-background": "hsl(0, 5%, 81%)",
      "theme-2-backgrounds-screen-background": "hsl(0, 0%, 93%)",
      // * keys *
      // first key
      "theme-2-keys-1-key-background": "hsl(185, 42%, 37%)",
      "theme-2-keys-1-key-shadow": "hsl(185, 58%, 25%)",
      // second key
      "theme-2-keys-2-key-background": "hsl(25, 98%, 40%)",
      "theme-2-keys-2-key-shadow": "hsl(25, 99%, 27%)",
      // third key
      "theme-2-keys-3-key-background": "hsl(45, 7%, 89%)",
      "theme-2-keys-3-key-shadow": "hsl(35, 11%, 61%)",

      // ** theme 3 **
      // * backgrounds *
      "theme-3-backgrounds-main-background": "hsl(268, 75%, 9%)",
      "theme-3-backgrounds-toggle-background": "hsl(268, 71%, 12%)",
      "theme-3-backgrounds-screen-background": "hsl(268, 71%, 12%)",
      // * keys *
      // first key
      "theme-3-keys-1-key-background": "hsl(281, 89%, 26%)",
      "theme-3-keys-1-key-shadow": "hsl(285, 91%, 52%)",
      // second key
      "theme-3-keys-2-key-background": "hsl(176, 100%, 44%)",
      "theme-3-keys-2-key-shadow": "hsl(177, 92%, 70%)",
      // third key
      "theme-3-keys-3-key-background": " hsl(268, 47%, 21%)",
      "theme-3-keys-3-key-shadow": "hsl(290, 70%, 36%)",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      // ** theme 1 **
      // * text colors *
      "theme-1-text-1-color": "hsl(221, 14%, 31%)",
      "theme-1-text-2-color": "hsl(45, 7%, 89%)",
      // "theme-1-text-2-color": "hsl(0, 0, 100%)",

      // ** theme 2 **
      // * text colors *
      "theme-2-text-1-color": " hsl(60, 10%, 19%)",
      "theme-2-text-2-color": "hsl(0, 0, 100%)",

      // ** theme 3 **
      // * text colors *
      "theme-3-text-1-color": " hsl(52, 100%, 62%)",
      "theme-3-text-2-color": "hsl(198, 20%, 13%)",
      "theme-3-text-3-color": "hsl(0, 0, 100%)",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
