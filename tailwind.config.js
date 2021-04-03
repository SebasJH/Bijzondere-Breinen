module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        ownred: '#931b1d',
        owngreen: '#008000',
        ownorange: '#e27126',
        ownblue: '#011993'
      },

      gridRow: {
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12'
      },

      gridTemplateColumns: {
        'footer': '64px 1fr 64px'
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
