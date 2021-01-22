import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import commonjs from '@rollup/plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import { mdsvex } from 'mdsvex'
import { terser } from 'rollup-plugin-terser'
import sveltePreprocess from 'svelte-preprocess'
import config from 'sapper/config/rollup'
import path from 'path'
import pkg from './package.json'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, _onwarn) =>
    (warning.code === 'CIRCULAR_DEPENDENCY' &&
        /[/\\]@sapper[/\\]/.test(warning.message)) ||
    _onwarn(warning)

const mdsvexOptions = {
    extension: '.svexy',
    layout: {
        index: path.join(__dirname, './src/routes/_index.svelte'),
        _: path.join(__dirname, './src/routes/_post.svelte'),
    },
    smartypants: true,
}

const sveltePreprocessOptions = [
    mdsvex(mdsvexOptions),
    sveltePreprocess({ postcss: true }),
]

export default {
    client: {
        input: config.client.input(),
        output: config.client.output(),
        preserveEntrySignatures: false,
        plugins: [
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            svelte({
                compilerOptions: {
                    dev,
                    hydratable: true,
                },
                extensions: ['.svelte', '.svexy'],
                emitCss: true,
                preprocess: sveltePreprocessOptions,
            }),
            resolve({
                browser: true,
                dedupe: ['svelte'],
            }),
            commonjs(),

            legacy &&
                babel({
                    extensions: ['.js', '.mjs', '.html', '.svelte'],
                    babelHelpers: 'runtime',
                    exclude: ['node_modules/@babel/**'],
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: '> 0.25%, not dead',
                            },
                        ],
                    ],
                    plugins: [
                        '@babel/plugin-syntax-dynamic-import',
                        [
                            '@babel/plugin-transform-runtime',
                            {
                                useESModules: true,
                            },
                        ],
                    ],
                }),

            !dev &&
                terser({
                    module: true,
                }),
        ],

        onwarn,
    },

    server: {
        input: config.server.input(),
        output: config.server.output(),
        plugins: [
            replace({
                'process.browser': false,
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            svelte({
                compilerOptions: {
                    dev,
                    generate: 'ssr',
                },
                extensions: ['.svelte', '.svexy'],
                preprocess: sveltePreprocessOptions,
            }),
            resolve({
                dedupe: ['svelte'],
            }),
            commonjs(),
        ],
        external: Object.keys(pkg.dependencies).concat(
            // eslint-disable-next-line global-require
            require('module').builtinModules ||
                Object.keys(process.binding('natives')),
        ),

        onwarn,
    },

    serviceworker: {
        input: config.serviceworker.input(),
        output: config.serviceworker.output(),
        plugins: [
            resolve(),
            replace({
                'process.browser': true,
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            commonjs(),
            !dev && terser(),
        ],

        onwarn,
    },
}
