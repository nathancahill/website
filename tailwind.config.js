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
            spacing: {
                '3px': '3px',
            },
        },
    },
    variants: {
        margin: ['responsive', 'focus'],
        borderWidth: ['responsive', 'focus'],
    },
    plugins: [],
}
