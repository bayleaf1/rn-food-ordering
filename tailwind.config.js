module.exports = {
  theme: {
    colors: {
      white: '#fff',
      gray: {
        25: '#fcfcfc',
        50: '#f5f3f6',
        75: '#edebee',
        100: '#d8d8d8',
        200: '#b1b1b1',
        300: '#989898',
        400: '#898989',
        500: '#757575',
        600: '#616161',
      },
      purple: {
        100: '#f2efff',
        200: '#dcd9e8'
      },
      black: '#262626',
      primary: '#e60023',
      transparent: 'rgba(0,0,0,0)'
    },
    extend: {},
  },
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}', './src/app/[...unmatched].js'],
  plugins: [],
}
