/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.html', './src/**/*.svelte'],

    whitelistPatterns: [/svelte-/],

    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const plugins = [require('tailwindcss'), require('autoprefixer')]

if (process.env.NODE_ENV === 'production') {
    plugins.push(purgecss)
}

module.exports = {
    plugins,
}
