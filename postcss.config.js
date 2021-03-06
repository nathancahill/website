/* eslint-disable global-require */
const purgecss = require('@fullhuman/postcss-purgecss')({
    content: ['./src/**/*.html', './src/**/*.svelte', './src/**/*.svexy'],

    whitelistPatterns: [/svelte-/],

    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
})

const plugins = [require('tailwindcss')]

if (process.env.NODE_ENV === 'production') {
    plugins.push(purgecss)
}

module.exports = {
    plugins,
}
