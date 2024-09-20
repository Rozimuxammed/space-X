/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'roboto': '"Roboto", sans-serif'
    },
    colors: {
      'grey': '#808080',
      'black': '#000000',
      'white': '#FFFFFF',
    },
    screens: {
      'sm': '320px',

      'md': '559px',

      'lg': '768px',

      'xl': '1023px',
    },
  },
  plugins: [],
}