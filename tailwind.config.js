const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./views/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black'     : '#1d1d1d',
        'white'     : '#ffffff',
        'secondary' : {
            50:  '#f6f7f6',
            100: '#e3e6e1',
            200: '#c7ccc3',
            300: '#a2aa9e',
            400: '#7e8879',
            500: '#5b6557',
            600: '#4d574a',
            700: '#40473e',
            800: '#353b34',
            900: '#2f332e',
            950: '#191b18',
            light: '#5b6557',
            dark:  '#2f332e',
        },
        'primary': {
            50:  '#fcf5f4',
            100: '#fae8e6',
            200: '#f6d5d2',
            300: '#efb8b2',
            400: '#e48e85',
            500: '#d6685d',
            600: '#c24c40',
            700: '#a23d33',
            800: '#83342c',
            900: '#71312b',
            950: '#3c1713',
            light: '#83342c',
            dark:  '#c24c40',
        },
        'danger':  colors.red,
        'gray':    colors.neutral,
        'info':    colors.blue,
        'success': colors.green,
        'warning': colors.amber,
      },
      boxShadow: {
        'header-1': '0 0 0 0 rgba(0, 0, 0, 0), 0 0 0 0 rgba(0, 0, 0, 0)',
        'header-2': '0 0 0 150vw rgba(0, 0, 0, 0), 0 0 0 150vh rgba(0, 0, 0, 0)',
      },
      // animation: {
      //   'disapear': 'disapear 9s linear 5s',
      // },
      // keyframes: {
      //   disapear: {
      //     '0%': { opacity: 0.2 },
      //     '50%': { opacity: 1 },
      //     '99%': { opacity: 1 },
      //     '100%': { opacity: 0 },
      //   },
      // },
    },
  },
  plugins: [],
}

