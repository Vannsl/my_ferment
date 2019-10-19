/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#00897b',
        secondary: '#2e7d32'
      }
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')]
}
