/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Roboto: 'Roboto'
      },
      backgroundImage: {
        'hero-background': "url('/images/bookstore.jpg')",
      },
      // textShadow: {
      //   sm: '0 1px 2px var(--tw-shadow-color)',
      //   DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      //   lg: '0 8px 16px var(--tw-shadow-color)',
      // },
    },
  },
  plugins: [
    // plugin(function ({ matchUtilities, theme }) {
    //   matchUtilities(
    //     {
    //       'text-shadow': (value) => ({
    //         textShadow: value,
    //       }),
    //     },
    //     { values: theme('textShadow') }
    //   )
    // }),
  ],
}

