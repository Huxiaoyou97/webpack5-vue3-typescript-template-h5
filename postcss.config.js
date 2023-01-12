const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {
    plugins: {
        'postcss-pxtorem': {
            rootValue: 37.5,
            propList: ['*'],
        },
        autoprefixer,
        tailwindcss,
    },
};
