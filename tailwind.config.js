module.exports = {
    theme: {
        screens: {
            xs: '450px',
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            height: {
                '96': '24rem',
            },
            fontSize: {
                '0': '0',
            },
            spacing: {
                '3px': '3px',
            },
            colors: {
                code: {
                    green: 'var(--color-code-green)',
                    yellow: 'var(--color-code-yellow)',
                    purple: 'var(--color-code-purple)',
                    red: 'var(--color-code-red)',
                    blue: 'var(--color-code-blue)',
                    white: 'var(--color-code-white)',
                },
            },
        },
    },
    variants: {
        margin: ['responsive', 'focus'],
        borderWidth: ['responsive', 'focus'],
    },
    plugins: [],
}
