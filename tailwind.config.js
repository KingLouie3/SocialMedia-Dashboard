module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          'BG':'hsl(0, 0%, 100%)',
           'test2': 'hsl(237, 63%, 64%)',
           'card': 'hsl(227, 47%, 96%)'
        }
      }
    },
  },
  fontFamily: {

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
