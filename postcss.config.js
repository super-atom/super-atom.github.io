const precss = require(`precss`)
const lost = require(`lost`)
const cssnano = require(`cssnano`)
const postcssUrl = require(`postcss-url`)
const postcssShort = require(`postcss-short`)
const postcssImport = require(`postcss-import`)
const postcssSimpleVars = require(`postcss-simple-vars`)
const postcssReporter = require(`postcss-reporter`)
const autoprefixer = require(`autoprefixer`)

module.exports = () => ({
  plugins: [
    precss(),
    lost(),
    cssnano(),
    postcssUrl(),
    postcssShort(),
    postcssImport(),
    postcssSimpleVars(),
    postcssReporter(),
    autoprefixer(),
  ],
})
