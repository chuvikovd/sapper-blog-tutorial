const atImport = require('postcss-import')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    atImport,
    tailwindcss,
    autoprefixer,
  ],
}
