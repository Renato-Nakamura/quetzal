/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  content: [],
  theme: {
    extend: {
      height: {
        '1/20': '5%',
        '19/20': '95%',
      }
    },
  },
  plugins: [],
}

