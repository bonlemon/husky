module.exports = { 
    env:{
        es6: true,
        browser: true,
    }, 
    extends: ['airbnb'], 
    plugins: [
        'babel',
        'import',
        'react',
        'prettier',
    ], 
    parser: 'babel-eslint', 
    parserOptions: {}, 
    rules: {},
 };