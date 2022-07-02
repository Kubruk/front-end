/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        alabaster: {
          400: '#f7f7f7',
          500: '#dedede'
        },
        'selective-yellow': '#f8b500',
        'bright-gray': '#393e46',
        sunglow: '#ffc62c',
        'buddha-gold': '#c59000',
        trout: '#505762'
      },
      fontFamily: {
        bebas: 'Bebas Neue'
      }
    }
  },
  plugins: []
};
