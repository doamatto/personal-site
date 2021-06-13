const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./public/**/*.html'],
    options: {
      keyframes: true,
      variables: true
    }
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightPurple: 'var(--light-purple)',
        darkPurple: 'var(--dark-purple)',
        lightAlt: 'var(--light-alt)',
        darkAlt: 'var(--dark-alt)'
      },
      fontFamily: {
        sans: ['Inter var experimental', 'Inter var', 'Inter', ...fontFamily.sans]
      }
    }
  }
}
