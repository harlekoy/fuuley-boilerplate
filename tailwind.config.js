module.exports = {
  important: true,
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },

      fontSize: {
        'xxs': '.375rem',
      },
    },

    fontFamily: {
      'main': ['Rubik', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
  ]
}
