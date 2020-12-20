module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
        ],
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
        extend: {
            backgroundColor: ['active'],
            tableLayout: ['hover'],
        },
    },
    plugins: [],
}
